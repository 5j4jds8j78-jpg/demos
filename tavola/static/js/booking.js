/* Booking flow: date → time → guests → table on the floor plan → contacts. */
(function () {
  "use strict";
  var root = document.getElementById("booking");
  if (!root) return;

  var STEPS = ["date", "time", "guests", "table", "contacts"];
  var state = { date: "", time: "", guests: 0, table: "", step: "date", tables: [], recommended: null, minutes: 0, ends: "" };
  var cache = {};
  var MAX_PARTY = parseInt(root.getAttribute("data-max-party"), 10) || 8;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function plural(n, one, few, many) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }
  function guestsLabel(n) { return n + " " + plural(n, "гість", "гості", "гостей"); }
  function durationLabel(min) {
    var h = Math.floor(min / 60), m = min % 60;
    return (h ? h + " год" : "") + (m ? " " + m + " хв" : "");
  }
  function h(tag, attrs, text) {
    var node = document.createElement(tag);
    for (var k in attrs) if (Object.prototype.hasOwnProperty.call(attrs, k)) node.setAttribute(k, attrs[k]);
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function api(path, params) {
    var qs = new URLSearchParams(params).toString();
    var key = path + "?" + qs;
    if (cache[key]) return Promise.resolve(cache[key]);
    return fetch(key, { headers: { Accept: "application/json" }, credentials: "same-origin" })
      .then(function (r) {
        return r.json().then(function (data) {
          if (!r.ok) throw new Error(data.error || "Помилка сервера");
          cache[key] = data;
          return data;
        });
      });
  }

  /* ---------------- navigation ---------------- */
  function reachable(step) {
    var need = { date: true, time: !!state.date, guests: !!state.time, table: !!state.guests, contacts: !!state.table };
    return need[step];
  }

  function go(step, opts) {
    opts = opts || {};
    state.step = step;
    $$(".step", root).forEach(function (s) { s.hidden = s.getAttribute("data-step") !== step; });
    var idx = STEPS.indexOf(step);
    $$(".stepper__item").forEach(function (li, i) {
      var key = li.getAttribute("data-step-link");
      li.classList.toggle("is-current", i === idx);
      li.classList.toggle("is-done", i < idx);
      var btn = $("button", li);
      btn.disabled = !(reachable(key) && i !== idx);
      if (i === idx) btn.setAttribute("aria-current", "step"); else btn.removeAttribute("aria-current");
    });
    if (step === "time") loadSlots();
    if (step === "guests") loadParty();
    if (step === "table") loadFloor();
    if (step === "contacts") fillHidden();
    syncUrl(opts.push && !opts.fromPop);
    if (!opts.silent) {
      var title = $('.step[data-step="' + step + '"] .step__title', root);
      if (title) {
        title.setAttribute("tabindex", "-1");
        title.focus({ preventScroll: true });
        var top = $(".book-band").getBoundingClientRect().bottom + window.scrollY - 8;
        if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
  }

  /* Each step is a history entry, so the browser / phone "Back" gesture goes to the previous step. */
  function syncUrl(push) {
    var p = new URLSearchParams();
    if (state.date) p.set("date", state.date);
    if (state.time) p.set("time", state.time);
    if (state.guests) p.set("guests", state.guests);
    var url = location.pathname + (p.toString() ? "?" + p.toString() : "");
    var entry = { step: state.step, date: state.date, time: state.time, guests: state.guests, table: state.table };
    if (push && (!history.state || history.state.step !== state.step)) history.pushState(entry, "", url);
    else history.replaceState(entry, "", url);
  }
  window.addEventListener("popstate", function (e) {
    var st = e.state;
    if (!st || !st.step) return;
    if (st.date && st.date !== state.date) pickDate(st.date, true);
    if (st.time && st.time !== state.time) pickTime(st.time, true);
    if (st.guests && st.guests !== state.guests) pickGuests(st.guests, true);
    if (st.step === "date" || !reachable(st.step)) { go("date", { fromPop: true, silent: true }); return; }
    go(st.step, { fromPop: true });
  });

  function summary() {
    var dayBtn = $('.day[data-date="' + state.date + '"]', root);
    set("date", dayBtn ? dayBtn.getAttribute("data-label") : "");
    set("time", state.time ? state.time + (state.ends ? "–" + state.ends : "") : "");
    set("guests", state.guests ? guestsLabel(state.guests) : "");
    var label = "";
    if (state.table === "auto") label = "підберемо найкращий";
    else if (state.table) {
      var t = state.tables.filter(function (x) { return String(x.id) === String(state.table); })[0];
      label = t ? "№ " + t.label + ", " + t.zone_label.toLowerCase() : "";
    }
    set("table", label);
    function set(key, val) {
      var row = $('[data-sum="' + key + '"]', root);
      $("dd", row).textContent = val || "—";
      row.classList.toggle("is-set", !!val);
    }
  }

  /* ---------------- step 1: date ---------------- */
  $$(".day", root).forEach(function (btn) {
    btn.addEventListener("click", function () { pickDate(btn.getAttribute("data-date")); });
  });
  function pickDate(date, silent) {
    if (state.date !== date) { state.time = ""; state.guests = 0; state.table = ""; state.ends = ""; }
    state.date = date;
    $$(".day", root).forEach(function (b) {
      var on = b.getAttribute("data-date") === date;
      b.classList.toggle("is-selected", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
      if (on && !silent) b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    });
    summary();
    if (!silent) go("time", { push: true });
  }

  /* ---------------- step 2: time ---------------- */
  function loadSlots() {
    var box = $("[data-slots]", root);
    var dayBtn = $('.day[data-date="' + state.date + '"]', root);
    $("[data-time-sub]", root).textContent = dayBtn ? dayBtn.getAttribute("data-label") : "";
    box.innerHTML = "";
    box.appendChild(h("p", { "class": "loading" }, "Перевіряємо вільний час…"));
    return api("/api/slots", { date: state.date }).then(function (data) {
      box.innerHTML = "";
      var groups = [["Обід", function (t) { return t < "16:00"; }], ["Вечеря", function (t) { return t >= "16:00"; }]];
      var any = false;
      groups.forEach(function (g) {
        var slots = data.slots.filter(function (s) { return g[1](s.time); });
        if (!slots.length) return;
        var wrap = h("div", { "class": "slots__group" });
        wrap.appendChild(h("h3", { "class": "slots__title" }, g[0]));
        var grid = h("div", { "class": "slots__grid" });
        slots.forEach(function (s) {
          var b = h("button", { type: "button", "class": "slot", "data-time": s.time });
          b.appendChild(h("span", { "class": "slot__t" }, s.time));
          if (!s.available) {
            b.disabled = true;
            b.classList.add("slot--full");
            b.setAttribute("aria-label", s.time + " — усе зайнято");
          } else {
            any = true;
            if (s.load >= 0.6) {
              b.appendChild(h("span", { "class": "slot__hint" }, "мало місць"));
              b.classList.add("slot--busy");
            }
            if (s.max_party < MAX_PARTY) b.title = "Максимум " + guestsLabel(s.max_party);
          }
          if (s.time === state.time) b.classList.add("is-selected");
          b.setAttribute("aria-pressed", s.time === state.time ? "true" : "false");
          b.addEventListener("click", function () { pickTime(s.time); });
          grid.appendChild(b);
        });
        wrap.appendChild(grid);
        box.appendChild(wrap);
      });
      if (!any) {
        box.appendChild(h("p", { "class": "empty" }, "На цей день усі столи вже заброньовані. Оберіть іншу дату — або зателефонуйте, ми спробуємо щось придумати."));
      }
    }).catch(function (e) { box.innerHTML = ""; box.appendChild(h("p", { "class": "empty empty--error" }, e.message)); });
  }
  function pickTime(time, silent) {
    if (state.time !== time) { state.guests = state.guests || 0; state.table = ""; }
    state.time = time;
    summary();
    if (!silent) go("guests", { push: true });
  }

  /* ---------------- step 3: guests ---------------- */
  function loadParty() {
    var box = $("[data-party]", root);
    box.innerHTML = "";
    return api("/api/party", { date: state.date, time: state.time }).then(function (data) {
      box.innerHTML = "";
      data.options.forEach(function (o) {
        var b = h("button", { type: "button", "class": "party__btn", "data-guests": o.guests });
        b.appendChild(h("span", { "class": "party__n" }, String(o.guests)));
        b.appendChild(h("span", { "class": "party__l" }, plural(o.guests, "гість", "гості", "гостей")));
        b.appendChild(h("span", { "class": "party__d" }, o.available ? durationLabel(o.minutes) : "немає столу"));
        if (!o.available) { b.disabled = true; b.classList.add("party__btn--off"); }
        if (o.guests === state.guests) b.classList.add("is-selected");
        b.setAttribute("aria-pressed", o.guests === state.guests ? "true" : "false");
        b.addEventListener("click", function () { pickGuests(o.guests); });
        box.appendChild(b);
      });
    }).catch(function (e) { box.appendChild(h("p", { "class": "empty empty--error" }, e.message)); });
  }
  function pickGuests(n, silent) {
    if (state.guests !== n) state.table = "";
    state.guests = n;
    summary();
    if (!silent) go("table", { push: true });
  }

  /* ---------------- step 4: table ---------------- */
  var svg = $("#book-plan");
  function loadFloor() {
    var loading = $("[data-plan-loading]", root);
    loading.hidden = false;
    return api("/api/floor", { date: state.date, time: state.time, guests: state.guests }).then(function (data) {
      loading.hidden = true;
      state.tables = data.tables;
      state.recommended = data.recommended;
      state.minutes = data.minutes;
      state.ends = data.ends;
      var stillFree = state.table && state.table !== "auto" && data.tables.some(function (t) {
        return String(t.id) === String(state.table) && t.state === "free";
      });
      if (!stillFree && state.table !== "auto") state.table = "";
      window.TavolaPlan.render(svg, data.tables, {
        interactive: true, recommended: data.recommended,
        selected: state.table && state.table !== "auto" ? state.table : (state.table === "auto" ? data.recommended : null),
        onSelect: function (id) { pickTable(id); }
      });
      var free = data.tables.filter(function (t) { return t.state === "free"; });
      // on narrow screens the plan scrolls horizontally: bring the suggested table into view
      var wrap = $("[data-plan-wrap]", root);
      var focusId = state.table && state.table !== "auto" ? state.table : data.recommended;
      var focusT = data.tables.filter(function (t) { return String(t.id) === String(focusId); })[0];
      if (focusT && wrap.scrollWidth > wrap.clientWidth) {
        wrap.scrollLeft = Math.max(0, focusT.x / 1000 * wrap.scrollWidth - wrap.clientWidth / 2);
      }
      $("[data-table-sub]", root).textContent = free.length
        ? "Вільно " + free.length + " " + plural(free.length, "стіл", "столи", "столів") + " на " + state.time + "–" + data.ends +
          ". Натисніть на стіл на схемі."
        : "На цей час немає вільних столів для " + guestsLabel(state.guests) + ".";
      $("[data-auto]", root).disabled = !data.recommended;
      renderList(free);
      info();
      summary();
    }).catch(function (e) {
      loading.hidden = true;
      // e.g. a stale or hand-edited link: fall back to choosing the time again
      state.time = ""; state.guests = 0; state.table = "";
      summary();
      go("time", { silent: true });
      $("[data-time-sub]", root).textContent = e.message + " Оберіть інший час.";
    });
  }
  function renderList(free) {
    var list = $("[data-table-list]", root);
    list.innerHTML = "";
    free.forEach(function (t) {
      var b = h("button", { type: "button", "class": "tl-item", "data-id": t.id });
      b.appendChild(h("strong", {}, "Стіл " + t.label));
      b.appendChild(h("span", {}, t.seats + " " + window.TavolaPlan.seatWord(t.seats) + ", " + t.zone_label.toLowerCase()));
      if (t.id === state.recommended) b.appendChild(h("em", {}, "радимо"));
      b.addEventListener("click", function () { window.TavolaPlan.mark(svg, t.id); pickTable(t.id); });
      list.appendChild(b);
    });
  }
  function pickTable(id) {
    state.table = String(id);
    info();
    summary();
  }
  $("[data-auto]", root).addEventListener("click", function () {
    if (!state.recommended) return;
    state.table = "auto";
    window.TavolaPlan.mark(svg, state.recommended);
    info();
    summary();
  });
  function info() {
    var box = $("[data-table-info]", root);
    var next = $("[data-next-contacts]", root);
    box.innerHTML = "";
    next.disabled = !state.table;
    if (!state.table) return;
    var id = state.table === "auto" ? state.recommended : state.table;
    var t = state.tables.filter(function (x) { return String(x.id) === String(id); })[0];
    if (!t) return;
    var head = h("p", { "class": "table-info__head" });
    head.appendChild(h("strong", {}, state.table === "auto" ? "Підібрали стіл № " + t.label : "Стіл № " + t.label));
    box.appendChild(head);
    box.appendChild(h("p", { "class": "table-info__meta" }, t.seats + " " + window.TavolaPlan.seatWord(t.seats) + ", " +
      t.zone_label.toLowerCase() + (t.note ? ". " + t.note : "")));
    var note = state.table === "auto"
      ? "Цей стіл найкраще підходить вашій компанії. Якщо його встигнуть забронювати раніше, ми підберемо інший такий самий."
      : "Тримаємо стіл для вас " + state.time + "–" + state.ends + ".";
    box.appendChild(h("p", { "class": "table-info__note" }, note));
  }
  $("[data-next-contacts]", root).addEventListener("click", function () { if (state.table) go("contacts", { push: true }); });

  /* ---------------- step 5: contacts ---------------- */
  function fillHidden() {
    $('[data-f="date"]', root).value = state.date;
    $('[data-f="time"]', root).value = state.time;
    $('[data-f="guests"]', root).value = state.guests;
    $('[data-f="table"]', root).value = state.table || "auto";
  }
  var form = $("[data-contacts-form]", root);
  form.addEventListener("submit", function (e) {
    fillHidden();
    var name = form.elements.name, phone = form.elements.phone, email = form.elements.email, consent = form.elements.consent;
    var nameOk = /^\p{L}[\p{L}\p{M}'ʼ’ .\-]{1,59}$/u.test(name.value.trim().replace(/\s+/g, " "));
    var digits = phone.value.replace(/\D/g, "");
    var checks = [
      [name, "err-name", nameOk ? "" : (name.value.trim() ? "Імʼя: лише літери, пробіл, апостроф чи дефіс, 2–60 символів." : "Вкажіть імʼя.")],
      [phone, "err-phone", digits.length >= 10 && digits.length <= 15 ? "" : "Номер у форматі +380 67 123 45 67."],
      [email, "err-email", !email.value.trim() || /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.value.trim()) ? "" : "Перевірте email або залиште поле порожнім."],
      [consent, "err-consent", consent.checked ? "" : "Потрібна згода, щоб ми могли повідомити вас про бронювання."]
    ];
    var bad = [];
    checks.forEach(function (c) {
      var el = document.getElementById(c[1]);
      el.textContent = c[2];
      if (c[2]) { c[0].setAttribute("aria-invalid", "true"); bad.push(c[0]); } else c[0].removeAttribute("aria-invalid");
    });
    if (bad.length) {
      e.preventDefault();
      bad[0].focus();
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Бронюємо…";
  });

  /* ---------------- shared ---------------- */
  $$("[data-back]", root).forEach(function (b) {
    b.addEventListener("click", function () {
      go(STEPS[Math.max(0, STEPS.indexOf(state.step) - 1)], { push: true });
    });
  });
  $$(".stepper__btn").forEach(function (b) {
    b.addEventListener("click", function () { go(b.parentNode.getAttribute("data-step-link"), { push: true }); });
  });
  $$("[data-alt-time]", root).forEach(function (b) {
    b.addEventListener("click", function () {
      cache = {};
      pickTime(b.getAttribute("data-alt-time"), true);
      go("guests", { push: true });
    });
  });

  /* ---------------- restore state (URL / server re-render) ---------------- */
  var pre = {};
  try { pre = JSON.parse(root.getAttribute("data-prefill") || "{}"); } catch (e) { pre = {}; }
  var target = "date";
  if (pre.date && $('.day[data-date="' + pre.date + '"]', root)) {
    pickDate(pre.date, true);
    target = "time";
    if (/^\d\d:\d\d$/.test(pre.time || "")) {
      pickTime(pre.time, true);
      target = "guests";
      var g = parseInt(pre.guests, 10);
      if (g >= 1 && g <= MAX_PARTY) {
        pickGuests(g, true);
        target = "table";
        if (pre.table && pre.step !== "table") { state.table = String(pre.table); target = pre.step === "contacts" ? "contacts" : "table"; }
      }
    }
    if (pre.step === "time") target = "time";
  }
  // landing "find a table" sends date + guests: go to the time step but remember the party size
  if (target === "time" && pre.guests) state.pendingGuests = parseInt(pre.guests, 10);
  var origPickTime = pickTime;
  pickTime = function (time, silent) {
    origPickTime(time, true);
    if (state.pendingGuests && !silent) {
      var n = state.pendingGuests;
      state.pendingGuests = 0;
      api("/api/party", { date: state.date, time: state.time }).then(function (d) {
        var ok = d.options.some(function (o) { return o.guests === n && o.available; });
        if (ok) { pickGuests(n, true); go("table", { push: true }); } else go("guests", { push: true });
      });
      return;
    }
    if (!silent) go("guests", { push: true });
  };
  go(target, { silent: true });
  if (target === "contacts") loadFloor();
  summary();
  var errs = document.getElementById("book-errors");
  if (errs) errs.focus();
})();
