/* Admin floor plan editor: drag tables, edit properties, save the whole plan as JSON. */
(function () {
  "use strict";
  var root = document.querySelector("[data-floor]");
  if (!root) return;
  var svg = document.getElementById("editor-plan");
  var tables = JSON.parse(document.getElementById("floor-data").textContent);
  var ZONES = { hall: "Основна зала", window: "Біля вікна", terrace: "Тераса", bar: "Барна стійка" };
  var current = null, dirty = false, tmpId = 0;
  var form = root.querySelector("[data-panel]");
  var status = root.querySelector("[data-status]");
  var saveBtn = document.querySelector("[data-save]");

  function byKey(key) { return tables.filter(function (t) { return t._key === key; })[0]; }
  tables.forEach(function (t) { t._key = "t" + t.id; t.active = !!t.active; });

  function draw() {
    var view = tables.map(function (t) {
      return { id: t._key, label: t.label, seats: Number(t.seats) || 1, min_seats: t.min_seats, shape: t.shape, x: t.x, y: t.y,
        rotation: t.rotation, zone_label: ZONES[t.zone], state: t.active ? "free" : "inactive" };
    });
    window.TavolaPlan.render(svg, view, { editor: true });
    if (current) {
      var n = svg.querySelector('.t[data-id="' + current + '"]');
      if (n) n.classList.add("t--editing");
    }
    summary();
  }
  function summary() {
    var act = tables.filter(function (t) { return t.active; });
    var seats = act.reduce(function (s, t) { return s + Number(t.seats || 0); }, 0);
    root.querySelector("[data-summary]").textContent = "У залі " + act.length + " столів на " + seats + " місць" +
      (tables.length > act.length ? ", ще " + (tables.length - act.length) + " приховано." : ".");
  }
  function markDirty() {
    dirty = true;
    saveBtn.disabled = false;
    status.textContent = "Є незбережені зміни";
    status.className = "floor__status is-dirty";
  }
  function select(key) {
    current = key;
    var t = byKey(key);
    root.querySelector("[data-panel-empty]").hidden = !!t;
    form.hidden = !t;
    root.querySelector("[data-panel-title]").textContent = t ? "Стіл № " + t.label : "Оберіть стіл";
    if (t) {
      form.elements.label.value = t.label;
      form.elements.zone.value = t.zone;
      form.elements.seats.value = t.seats;
      form.elements.min_seats.value = t.min_seats;
      form.elements.note.value = t.note || "";
      form.elements.active.checked = !!t.active;
      Array.prototype.forEach.call(form.elements.shape, function (r) { r.checked = r.value === t.shape; });
    }
    draw();
  }

  form.addEventListener("input", function (e) {
    var t = byKey(current);
    if (!t) return;
    var f = e.target;
    if (f.name === "active") t.active = f.checked;
    else if (f.name === "seats" || f.name === "min_seats") t[f.name] = parseInt(f.value, 10) || 1;
    else t[f.name] = f.value;
    if (t.min_seats > t.seats) { t.min_seats = t.seats; form.elements.min_seats.value = t.seats; }
    root.querySelector("[data-panel-title]").textContent = "Стіл № " + t.label;
    markDirty();
    draw();
  });
  form.addEventListener("change", function (e) { if (e.target.name === "shape" || e.target.name === "active") form.dispatchEvent(new Event("input")); });
  form.addEventListener("submit", function (e) { e.preventDefault(); });
  root.querySelector("[data-rotate]").addEventListener("click", function () {
    var t = byKey(current);
    if (!t) return;
    t.rotation = t.rotation === 90 ? 0 : 90;
    markDirty();
    draw();
  });
  document.querySelector("[data-add]").addEventListener("click", function () {
    var n = 1;
    var labels = tables.map(function (t) { return t.label; });
    while (labels.indexOf(String(n)) !== -1) n++;
    var t = { id: null, _key: "new" + (++tmpId), label: String(n), seats: 4, min_seats: 2, shape: "round", zone: "hall",
      x: 560, y: 400, rotation: 0, note: "", active: true };
    tables.push(t);
    markDirty();
    select(t._key);
  });

  /* drag & drop with pointer events (mouse + touch) */
  var drag = null;
  function toSvg(evt) {
    var pt = svg.createSVGPoint();
    pt.x = evt.clientX; pt.y = evt.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }
  svg.addEventListener("pointerdown", function (e) {
    var node = e.target.closest(".t");
    if (!node) return;
    var t = byKey(node.getAttribute("data-id"));
    if (current !== t._key) select(t._key);
    node = svg.querySelector('.t[data-id="' + t._key + '"]');
    var p = toSvg(e);
    drag = { t: t, dx: p.x - t.x, dy: p.y - t.y, node: node, moved: false };
    node.classList.add("is-dragging");
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener("pointermove", function (e) {
    if (!drag) return;
    var p = toSvg(e);
    var x = Math.round(Math.min(970, Math.max(30, p.x - drag.dx)) / 5) * 5;
    var y = Math.round(Math.min(610, Math.max(30, p.y - drag.dy)) / 5) * 5;
    if (x !== drag.t.x || y !== drag.t.y) {
      drag.t.x = x; drag.t.y = y; drag.moved = true;
      drag.node.setAttribute("transform", "translate(" + x + " " + y + ")");
    }
  });
  function endDrag() {
    if (!drag) return;
    if (drag.moved) markDirty();
    drag.node.classList.remove("is-dragging");
    drag = null;
    draw();
  }
  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);
  svg.addEventListener("keydown", function (e) {
    var node = e.target.closest && e.target.closest(".t");
    if (!node) return;
    var t = byKey(node.getAttribute("data-id"));
    var step = { ArrowLeft: [-5, 0], ArrowRight: [5, 0], ArrowUp: [0, -5], ArrowDown: [0, 5] }[e.key];
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(t._key); focusTable(t._key); return; }
    if (!step) return;
    e.preventDefault();
    t.x = Math.min(970, Math.max(30, t.x + step[0]));
    t.y = Math.min(610, Math.max(30, t.y + step[1]));
    current = t._key;
    markDirty();
    select(t._key);
    focusTable(t._key);
  });
  function focusTable(key) { var n = svg.querySelector('.t[data-id="' + key + '"]'); if (n) n.focus(); }

  saveBtn.addEventListener("click", function () {
    saveBtn.disabled = true;
    status.textContent = "Зберігаємо…";
    status.className = "floor__status";
    var payload = tables.map(function (t) {
      return { id: t.id, label: t.label, seats: t.seats, min_seats: t.min_seats, shape: t.shape, zone: t.zone,
        x: t.x, y: t.y, rotation: t.rotation, note: t.note || "", active: t.active };
    });
    fetch(root.getAttribute("data-save-url"), {
      method: "POST", credentials: "same-origin",
      headers: { "Content-Type": "application/json", "X-CSRF-Token": root.getAttribute("data-csrf") },
      body: JSON.stringify({ tables: payload })
    }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.d.error || "Не вдалося зберегти");
        var keep = current ? byKey(current) : null;
        tables = res.d.tables.map(function (t) { t._key = "t" + t.id; t.active = !!t.active; return t; });
        current = keep ? (tables.filter(function (t) { return t.label === keep.label; })[0] || {})._key || null : null;
        dirty = false;
        status.textContent = "Схему збережено";
        status.className = "floor__status is-ok";
        select(current);
      })
      .catch(function (err) {
        saveBtn.disabled = false;
        status.textContent = err.message;
        status.className = "floor__status is-error";
      });
  });
  window.addEventListener("beforeunload", function (e) { if (dirty) { e.preventDefault(); e.returnValue = ""; } });
  draw();
})();
