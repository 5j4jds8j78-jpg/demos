/* Slot demo: dates are always "from today", free times are computed in the browser, booking shows the success screen. */
(function () {
  const HOURS = ["09:00", "20:00"], STEP = 15;
  const pad = n => String(n).padStart(2, "0");
  const iso = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const DAYS = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const toMin = s => +s.slice(0, 2) * 60 + +s.slice(3, 5);
  function rnd(seed) { let x = 0; for (const ch of seed) x = (x * 31 + ch.charCodeAt(0)) >>> 0; return () => ((x = (x * 1103515245 + 12345) >>> 0) / 4294967296); }

  window.demoFetch = (u, init) => {
    if (!/\/api\/slots\/?$/.test(u.pathname)) return null;
    const day = u.searchParams.get("date"), svc = document.querySelector(`input[name=service][value="${u.searchParams.get("service")}"]`);
    const len = +(svc && svc.dataset.minutes) || 30, r = rnd(day);
    const busy = []; let t = toMin(HOURS[0]) + 30;
    while (t < toMin(HOURS[1])) { const l = [30, 45, 60][Math.floor(r() * 3)]; if (r() < .45) busy.push([t, t + l]); t += l + 15 * Math.floor(r() * 4); }
    const now = new Date(), today = iso(now) === day, nowMin = now.getHours() * 60 + now.getMinutes() + 30, out = [];
    for (let s = toMin(HOURS[0]); s + len <= toMin(HOURS[1]); s += STEP) {
      if (today && s <= nowMin) continue;
      if (busy.some(([a, b]) => s < b && s + len > a)) continue;
      out.push(pad(Math.floor(s / 60)) + ":" + pad(s % 60));
    }
    return Promise.resolve(new Response(JSON.stringify({ slots: out }), { headers: { "Content-Type": "application/json" } }));
  };

  // rebuild the 14 day buttons from today
  document.addEventListener("DOMContentLoaded", () => {
    const labels = document.querySelectorAll(".days label.day");
    if (!labels.length) return;
    const now = new Date(), first = new Date(now);
    if (now.getHours() * 60 + now.getMinutes() >= toMin(HOURS[1])) first.setDate(first.getDate() + 1);
    labels.forEach((l, i) => {
      const d = new Date(first); d.setDate(first.getDate() + i);
      const inp = l.querySelector("input"); inp.value = iso(d); inp.checked = i === 0;
      l.querySelector("small").textContent = DAYS[d.getDay()]; l.querySelector("b").textContent = d.getDate();
    });
  }, true);

  window.demoHandleSubmit = (f, e) => {
    if (f.id !== "booking") return false;
    e.preventDefault(); e.stopImmediatePropagation();
    const fd = new FormData(f), svc = f.querySelector("input[name=service]:checked");
    const svcName = svc ? (svc.closest("label").querySelector("b,strong,.name") || svc.closest("label")).textContent.trim().split("\n")[0] : "";
    try { sessionStorage.setItem("slotDemo", JSON.stringify({ name: fd.get("name"), phone: fd.get("phone"), date: fd.get("date"), time: fd.get("time"), service: svcName })); } catch (_) {}
    location.href = f.closest("body").querySelector("a.logo").getAttribute("href") + "success/";
    return true;
  };

  // success page: fill in from what was just "booked"
  document.addEventListener("DOMContentLoaded", () => {
    if (!/\/success\/?$/.test(location.pathname)) return;
    let b = null; try { b = JSON.parse(sessionStorage.getItem("slotDemo")); } catch (_) {}
    if (!b) return;
    const [y, m, d] = b.date.split("-");
    const lead = document.querySelector(".lead");
    if (lead) lead.innerHTML = `${b.name.replace(/</g, "")}, чекаємо вас <b>${d}.${m}.${y} о ${b.time}</b>.`;
    const ps = document.querySelectorAll(".card p");
    if (ps[1]) ps[1].textContent = "Послуга: " + b.service + " · Запис (демо)";
    if (ps[2]) ps[2].textContent = "Ми зателефонуємо на " + b.phone + ", щоб підтвердити.";
  });
})();
