/* TORQ — progressive enhancement. Every action also works without JS (plain forms). */
(() => {
  "use strict";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const csrf = document.body.dataset.csrf;

  /* ---------- generic ---------- */
  document.addEventListener("click", (e) => {
    const close = e.target.closest(".js-close");
    if (close) close.closest(".flash")?.remove();
    const back = e.target.closest(".js-back");
    if (back) { e.preventDefault(); history.back(); }
    const pr = e.target.closest(".js-print");
    if (pr) { e.preventDefault(); window.print(); }
  });
  document.addEventListener("submit", (e) => {
    const msg = (e.submitter && e.submitter.dataset.confirm) || e.target.dataset.confirm;
    if (msg && !window.confirm(msg)) e.preventDefault();
  });
  // close open <details> menus when clicking elsewhere / Esc
  document.addEventListener("click", (e) => {
    $$("details.kmove[open]").forEach((d) => { if (!d.contains(e.target)) d.removeAttribute("open"); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") $$("details.kmove[open]").forEach((d) => d.removeAttribute("open"));
  });

  let toastTimer;
  function toast(text, bad = false) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = text;
    t.classList.toggle("bad", bad);
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
  }

  const fmt = new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 0 });
  const money = (kop) => (kop ? fmt.format(Math.round(kop / 100)).replace(/\s/g, " ") + " ₴" : "");

  /* ---------- kanban ---------- */
  const board = $("#board");
  if (board) {
    const transitions = JSON.parse(board.dataset.transitions || "{}");
    const labels = JSON.parse(board.dataset.labels || "{}");
    const endpoint = (id) => board.dataset.endpoint.replace(/\/0\/status$/, `/${id}/status`);
    let dragged = null;

    const refreshCol = (col) => {
      const cards = $$(".kcard", col);
      $(".js-n", col).textContent = cards.length;
      const sum = cards.reduce((a, c) => a + Number(c.dataset.total || 0), 0);
      $(".js-sum", col).textContent = money(sum);
      $(".js-empty", col).hidden = cards.length > 0;
      const tab = $(`.js-coltab[href="#${col.id}"] b`);
      if (tab) tab.textContent = cards.length;
    };

    async function move(card, target) {
      const from = card.dataset.status;
      if (from === target) return;
      if (!(transitions[from] || []).includes(target)) {
        toast("Такий перехід недоступний", true);
        return;
      }
      const fromCol = card.closest(".col");
      const toCol = $(`.col[data-status="${target}"]`, board);
      const body = $(".js-drop", toCol);
      body.insertBefore(card, body.firstChild);
      card.dataset.status = target;
      card.dataset.c = target;
      refreshCol(fromCol); refreshCol(toCol);
      try {
        const res = await fetch(endpoint(card.dataset.id), {
          method: "POST", credentials: "same-origin",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf, Accept: "application/json" },
          body: JSON.stringify({ status: target }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) throw new Error(data.error || "Не вдалося змінити статус");
        transitions[target] = transitions[target] || data.targets;
        rebuildMenu(card, data.targets || []);
        card.classList.remove("flash-in"); void card.offsetWidth; card.classList.add("flash-in");
        toast(`№${$(".no", card).textContent.replace("№", "")} → ${data.label}`);
      } catch (err) {
        // roll back
        $(".js-drop", fromCol).insertBefore(card, $(".js-drop", fromCol).firstChild);
        card.dataset.status = from; card.dataset.c = from;
        refreshCol(fromCol); refreshCol(toCol);
        toast(err.message, true);
      }
    }

    function rebuildMenu(card, targets) {
      const menu = $(".kmove .menu", card);
      const details = $(".kmove", card);
      if (!menu) return;
      details.removeAttribute("open");
      $$("form", menu).forEach((f) => f.remove());
      targets.forEach((t) => {
        const f = document.createElement("form");
        f.method = "post"; f.className = "js-move";
        f.action = endpoint(card.dataset.id);
        const b = document.createElement("button");
        b.type = "submit"; b.name = "status"; b.value = t; b.dataset.c = t;
        const label = labels[t] || t;
        b.innerHTML = "<i></i>"; b.append(label);
        f.append(b); menu.append(f);
      });
      details.hidden = targets.length === 0;
    }

    board.addEventListener("submit", (e) => {
      const form = e.target.closest(".js-move");
      if (!form) return;
      e.preventDefault();
      const btn = e.submitter || $("button", form);
      move(form.closest(".kcard"), btn.value);
    });

    board.addEventListener("dragstart", (e) => {
      const card = e.target.closest(".kcard");
      if (!card) return;
      dragged = card;
      card.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", card.dataset.id);
      const allowed = transitions[card.dataset.status] || [];
      $$(".col", board).forEach((c) => {
        if (c.dataset.status !== card.dataset.status && !allowed.includes(c.dataset.status)) c.classList.add("drop-no");
      });
    });
    board.addEventListener("dragend", () => {
      dragged?.classList.remove("dragging");
      dragged = null;
      $$(".col", board).forEach((c) => c.classList.remove("drop-ok", "drop-no"));
    });
    board.addEventListener("dragover", (e) => {
      const col = e.target.closest(".col");
      if (!dragged || !col) return;
      const ok = (transitions[dragged.dataset.status] || []).includes(col.dataset.status);
      if (ok) { e.preventDefault(); e.dataTransfer.dropEffect = "move"; }
      $$(".col", board).forEach((c) => c.classList.toggle("drop-ok", ok && c === col));
    });
    board.addEventListener("drop", (e) => {
      const col = e.target.closest(".col");
      if (!dragged || !col) return;
      e.preventDefault();
      move(dragged, col.dataset.status);
    });

    // mobile column tabs
    const tabs = $$(".js-coltab");
    tabs.forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const col = $(a.getAttribute("href"));
      board.scrollTo({ left: col.offsetLeft - board.offsetLeft - 16, behavior: "smooth" });
    }));
    if (tabs.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) tabs.forEach((t) => t.classList.toggle("on", t.getAttribute("href") === "#" + en.target.id));
        });
      }, { root: board, threshold: 0.6 });
      $$(".col", board).forEach((c) => io.observe(c));
    }
  }

  /* ---------- public form: working days + no past slots (server re-checks everything) ---------- */
  const visitDate = $(".req-form input[name=date]");
  const visitTime = $(".req-form select[name=time]");
  if (visitDate && visitTime) {
    const hint = document.createElement("small");
    hint.className = "date-hint";
    visitDate.closest(".field").append(hint);
    const pad = (n) => String(n).padStart(2, "0");
    const sync = () => {
      const v = visitDate.value;
      const d = v ? new Date(v + "T12:00") : null;
      const sunday = d && d.getDay() === 0;
      visitDate.setCustomValidity(sunday ? "У неділю ми не працюємо" : "");
      hint.textContent = sunday ? "У неділю ми не працюємо — оберіть інший день." : "";
      const now = new Date();
      const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
      const nowHm = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
      $$("option", visitTime).forEach((o) => {
        if (!o.value) return;
        o.disabled = v === today && o.value <= nowHm;
        if (o.disabled && o.selected) visitTime.value = "";
      });
    };
    visitDate.addEventListener("change", sync);
    visitDate.addEventListener("input", sync);
    sync();
  }

  /* ---------- public form: jump to the first invalid field ---------- */
  const firstErr = $(".req-form .has-err input, .req-form .has-err textarea, .req-form .has-err select");
  const errBox = $(".req-form .flash");
  if (firstErr || errBox) {
    (errBox || firstErr).scrollIntoView({ block: "center" });
    if (firstErr) firstErr.focus({ preventScroll: true });
  }

  /* ---------- order editor: service catalogue autofill ---------- */
  const svc = $("#svc-select");
  if (svc) {
    svc.addEventListener("change", () => {
      const opt = svc.selectedOptions[0];
      const name = $("#work-name"), hours = $("#work-hours");
      if (opt && opt.value) {
        name.placeholder = opt.dataset.name;
        hours.value = opt.dataset.hours;
      } else {
        name.placeholder = "Назва роботи";
      }
    });
  }
  const partSel = $("#part-select");
  if (partSel) {
    const hint = $("#part-hint");
    const upd = () => {
      const o = partSel.selectedOptions[0];
      hint.textContent = o && o.value ? `Залишок: ${o.dataset.stock} ${o.dataset.unit} · ціна ${o.dataset.price}` : "";
    };
    partSel.addEventListener("change", upd); upd();
  }

  /* ---------- charts: tabs + tooltips ---------- */
  $$("[data-tabs]").forEach((group) => {
    const btns = $$("[role=tab]", group);
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      $$(".chart-pane", group.closest(".card")).forEach((p) => { p.hidden = p.id !== b.getAttribute("aria-controls"); });
    }));
  });
  const tip = document.createElement("div");
  tip.className = "tip"; tip.setAttribute("role", "tooltip");
  document.body.append(tip);
  document.addEventListener("pointerover", (e) => {
    const t = e.target.closest("[data-tip]");
    if (!t) return;
    const [head, val, sub] = t.dataset.tip.split("|");
    tip.innerHTML = "";
    const s = document.createElement("small"); s.textContent = head;
    const b = document.createElement("b"); b.textContent = val;
    tip.append(s, b);
    if (sub) { const s2 = document.createElement("small"); s2.textContent = sub; tip.append(s2); }
    tip.classList.add("show");
  });
  document.addEventListener("pointermove", (e) => {
    if (!tip.classList.contains("show")) return;
    const w = tip.offsetWidth;
    let x = e.clientX + 14;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - 14;
    tip.style.left = x + "px";
    tip.style.top = (e.clientY - tip.offsetHeight - 12) + "px";
  });
  document.addEventListener("pointerout", (e) => {
    if (e.target.closest("[data-tip]")) tip.classList.remove("show");
  });
})();
