/* Tavola demo: availability answers come from snapshots in _demo/api, mapped to the same weekday; dates are always from today. */
(function () {
  const me = document.currentScript.src, API = me.slice(0, me.lastIndexOf("/")) + "/api/";
  const WD = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"], WDF = ["понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота", "неділя"];
  const MG = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
  const MN = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
  const MS = ["січ.", "лют.", "бер.", "квіт.", "трав.", "черв.", "лип.", "серп.", "вер.", "жовт.", "лист.", "груд."];
  const pad = n => String(n).padStart(2, "0");
  const iso = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const wd = d => (d.getDay() + 6) % 7;
  let idxP = null; const days = {};
  const index = () => idxP || (idxP = fetch(API + "index.json").then(r => r.json()));
  const DAY_MS = 864e5;
  function mapDate(dstr, idx) {               // runtime date -> captured date with same weekday, nearest offset
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const k = Math.round((parse(dstr) - today) / DAY_MS), built = parse(idx.built), w = wd(parse(dstr));
    let best = null, bd = 1e9;
    for (const c in idx.days) { if (idx.days[c] !== w) continue; const off = Math.round((parse(c) - built) / DAY_MS); if (Math.abs(off - k) < bd) { bd = Math.abs(off - k); best = c; } }
    return best;
  }
  const json = (o, st) => new Response(JSON.stringify(o), { status: st || 200, headers: { "Content-Type": "application/json" } });
  window.demoFetch = (u) => {
    const m = u.pathname.match(/\/api\/(slots|party|floor)\/?$/);
    if (!m || u.pathname.includes("/admin/")) return null;
    const d = u.searchParams.get("date"), t = u.searchParams.get("time"), g = u.searchParams.get("guests");
    return index().then(idx => {
      const c = mapDate(d, idx);
      if (!c) return json({ error: "На цю дату бронювання недоступне." }, 400);
      return (days[c] || (days[c] = fetch(API + c + ".json").then(r => r.json()))).then(day => {
        const now = new Date(), isToday = d === iso(now), lim = now.getHours() * 60 + now.getMinutes() + 60;
        const past = tm => isToday && (+tm.slice(0, 2) * 60 + +tm.slice(3)) < lim;
        if (m[1] === "slots") return json({ date: d, slots: day.slots.slots.map(s => past(s.time) ? Object.assign({}, s, { available: false }) : s) });
        if (m[1] === "party") return day.party[t] ? json(day.party[t]) : json({ error: "Цей час недоступний." }, 400);
        const f = day.floor[t] && day.floor[t][g];
        return f ? json(f) : json({ error: "Цей час недоступний для такої компанії." }, 400);
      });
    });
  };

  // runs before the page scripts: rebuild date pickers from today, then apply ?date=&guests= prefill
  window.demoPre = function () {
    const raw = window.__TAV_IDX;            // weekdays that are open, embedded at build
    const open = raw ? new Set(raw) : null;
    const now = new Date(); now.setHours(0, 0, 0, 0);
    const btns = Array.from(document.querySelectorAll(".days .day[data-date]"));
    const sel = document.querySelector("select[name=date]");
    const n = Math.max(btns.length, sel ? sel.options.length : 0);
    const list = []; for (let i = 0; list.length < n && i < 60; i++) { const d = new Date(now.getTime() + i * DAY_MS); if (!open || open.has(wd(d))) list.push(d); }
    const hint = d => +d === +now ? "сьогодні" : (+d === now.getTime() + DAY_MS ? "завтра" : "");
    if (btns.length) {
      const box = btns[0].parentNode;
      box.querySelectorAll(".days__month").forEach(x => x.remove());
      btns.forEach((b, i) => {
        const d = list[i]; if (!d) { b.remove(); return; }
        const lab = d.getDate() + " " + MG[d.getMonth()] + ", " + WDF[wd(d)];
        b.dataset.date = iso(d); b.dataset.label = lab; b.setAttribute("aria-label", lab);
        b.classList.toggle("day--weekend", wd(d) >= 5);
        b.querySelector(".day__wd").textContent = WD[wd(d)]; b.querySelector(".day__n").textContent = d.getDate();
        let h = b.querySelector(".day__hint"); const ht = hint(d);
        if (ht) { if (!h) { h = document.createElement("span"); h.className = "day__hint"; b.appendChild(h); } h.textContent = ht; } else if (h) h.remove();
        if (i === 0 || d.getDate() === 1) { const s = document.createElement("span"); s.className = "days__month"; s.setAttribute("aria-hidden", "true"); s.textContent = MN[d.getMonth()]; box.insertBefore(s, b); }
      });
    }
    if (sel) Array.from(sel.options).forEach((o, i) => {
      const d = list[i]; if (!d) { o.remove(); return; }
      const h = hint(d); o.value = iso(d);
      o.textContent = (h ? h[0].toUpperCase() + h.slice(1) : WD[wd(d)]) + ", " + d.getDate() + " " + MS[d.getMonth()];
    });
    const root = document.getElementById("booking");
    if (root && location.search) {
      const p = new URLSearchParams(location.search);
      root.setAttribute("data-prefill", JSON.stringify({ date: p.get("date") || "", time: p.get("time") || "", guests: p.get("guests") || "" }));
    }
  };

  window.demoHandleSubmit = (f, e) => {
    if (!f.hasAttribute("data-contacts-form")) return false;
    e.preventDefault(); e.stopImmediatePropagation();
    if (window.__TAV_SAMPLE) location.href = window.__TAV_SAMPLE + "?demo=1";
    return true;
  };
  document.addEventListener("DOMContentLoaded", () => {
    if (/[?&]demo=1/.test(location.search) && window.demoToast) demoToast("Демо: бронь не створюється — це приклад підтвердження");
  });
})();
