/* Tavola floor plan renderer — draws tables (with chairs) into an SVG hall.
   Used by the booking flow, the landing page preview and the admin editor. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  function el(name, attrs, parent) {
    var node = document.createElementNS(NS, name);
    for (var k in attrs) if (Object.prototype.hasOwnProperty.call(attrs, k)) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function seatWord(n) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return "місце";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "місця";
    return "місць";
  }

  /* Geometry in local coordinates (table centre = 0,0, before rotation). */
  function geometry(t) {
    var seats = t.seats, chairs = [], body, sofa = null, w, h, i;
    if (t.shape === "round") {
      var r = 20 + seats * 3.5;
      body = { kind: "circle", r: r };
      for (i = 0; i < seats; i++) {
        var a = (Math.PI * 2 * i) / seats - Math.PI / 2;
        chairs.push({ x: Math.cos(a) * (r + 12), y: Math.sin(a) * (r + 12), rot: (a * 180) / Math.PI + 90 });
      }
      return { body: body, chairs: chairs, hw: r + 20, hh: r + 20 };
    }
    if (t.shape === "square") {
      var s = seats <= 2 ? 50 : 62;
      body = { kind: "rect", w: s, h: s };
      var sides = seats <= 2 ? [[-1, 0], [1, 0]] : [[0, -1], [1, 0], [0, 1], [-1, 0]];
      sides.slice(0, Math.max(seats, 2)).forEach(function (d) {
        chairs.push({ x: d[0] * (s / 2 + 12), y: d[1] * (s / 2 + 12), rot: d[0] !== 0 ? 90 : 0 });
      });
      return { body: body, chairs: chairs, hw: s / 2 + 22, hh: s / 2 + 22 };
    }
    var perSide = Math.ceil(seats / 2);
    w = 30 + perSide * 36;
    h = 58;
    body = { kind: "rect", w: w, h: h };
    if (t.shape === "booth") {
      h = 56; body.h = h;
      sofa = { w: w + 24, h: h / 2 + 16 };
      for (i = 0; i < perSide; i++) chairs.push({ x: -w / 2 + 33 + i * 36, y: h / 2 + 12, rot: 0 });
      return { body: body, chairs: chairs, sofa: sofa, hw: w / 2 + 14, hh: h / 2 + 26 };
    }
    for (i = 0; i < perSide; i++) {
      var cx = -w / 2 + 15 + 18 + i * 36;
      chairs.push({ x: cx, y: -(h / 2 + 12), rot: 0 });
      if (chairs.length < seats) chairs.push({ x: cx, y: h / 2 + 12, rot: 0 });
    }
    return { body: body, chairs: chairs, hw: w / 2 + 6, hh: h / 2 + 22 };
  }

  function stateLabel(t) {
    switch (t.state) {
      case "busy": return "зайнятий на цей час";
      case "small": return "замалий для вашої компанії";
      case "large": return "для компаній від " + t.min_seats + " гостей";
      case "inactive": return "прихований";
      default: return "вільний";
    }
  }

  function drawTable(layer, t, opts) {
    var g = geometry(t);
    var rot = Number(t.rotation) || 0;
    var group = el("g", { "class": "t t--" + (t.state || "free"), "data-id": t.id,
      transform: "translate(" + t.x + " " + t.y + ")" }, layer);
    var shape = el("g", { transform: "rotate(" + rot + ")" }, group);
    if (g.sofa) {
      el("path", { "class": "t-sofa", d: "M" + (-g.sofa.w / 2) + " 6 V" + (-g.sofa.h + 10) + " Q" + (-g.sofa.w / 2) + " " + (-g.sofa.h) +
        " " + (-g.sofa.w / 2 + 10) + " " + (-g.sofa.h) + " H" + (g.sofa.w / 2 - 10) + " Q" + (g.sofa.w / 2) + " " + (-g.sofa.h) +
        " " + (g.sofa.w / 2) + " " + (-g.sofa.h + 10) + " V6 H" + (g.sofa.w / 2 - 14) + " V" + (-g.sofa.h + 14) + " H" + (-g.sofa.w / 2 + 14) +
        " V6 Z" }, shape);
    }
    g.chairs.forEach(function (c) {
      el("rect", { "class": "t-chair", x: -9, y: -6, width: 18, height: 12, rx: 4,
        transform: "translate(" + c.x.toFixed(1) + " " + c.y.toFixed(1) + ") rotate(" + c.rot.toFixed(1) + ")" }, shape);
    });
    var pad = 7;
    if (g.body.kind === "circle") {
      el("circle", { "class": "t-ring", r: g.body.r + pad }, shape);
      el("circle", { "class": "t-body", r: g.body.r }, shape);
    } else {
      el("rect", { "class": "t-ring", x: -g.body.w / 2 - pad, y: -g.body.h / 2 - pad, width: g.body.w + pad * 2,
        height: g.body.h + pad * 2, rx: 14 }, shape);
      el("rect", { "class": "t-body", x: -g.body.w / 2, y: -g.body.h / 2, width: g.body.w, height: g.body.h, rx: 9 }, shape);
    }
    var label = el("text", { "class": "t-label", y: -1 }, group);
    label.textContent = t.label;
    var seats = el("text", { "class": "t-seats", y: 14 }, group);
    seats.textContent = t.seats + " " + seatWord(t.seats);

    var title = "Стіл " + t.label + ", " + t.seats + " " + seatWord(t.seats) + (t.zone_label ? ", " + t.zone_label.toLowerCase() : "") +
      " — " + stateLabel(t);
    group.setAttribute("aria-label", title);
    if (opts.interactive && t.state === "free") {
      group.setAttribute("role", "button");
      group.setAttribute("tabindex", "0");
      group.setAttribute("aria-pressed", "false");
    } else if (opts.editor) {
      group.setAttribute("role", "button");
      group.setAttribute("tabindex", "0");
    } else {
      group.setAttribute("role", "img");
    }
    var tt = el("title", {}, group);
    tt.textContent = title;
    return group;
  }

  /* render(svg, tables, {interactive, editor, selected, recommended, onSelect}) */
  function render(svg, tables, opts) {
    opts = opts || {};
    var layer = svg.querySelector(".plan-tables");
    while (layer.firstChild) layer.removeChild(layer.firstChild);
    var nodes = {};
    tables.forEach(function (t) { nodes[t.id] = drawTable(layer, t, opts); });
    if (opts.recommended && nodes[opts.recommended]) {
      var rec = nodes[opts.recommended];
      rec.classList.add("t--recommended");
      var top = -geometry(tables.filter(function (t) { return String(t.id) === String(opts.recommended); })[0]).hh - 10;
      el("rect", { "class": "t-badge-bg", x: -30, y: top - 11, width: 60, height: 16, rx: 8 }, rec);
      el("text", { "class": "t-badge", y: top + 1 }, rec).textContent = "радимо";
    }
    if (opts.selected && nodes[opts.selected]) mark(svg, opts.selected);

    if (opts.interactive && !svg.dataset.bound) {
      svg.dataset.bound = "1";
      var choose = function (target) {
        var node = target.closest && target.closest(".t--free");
        if (!node || !svg.contains(node)) return;
        mark(svg, node.getAttribute("data-id"));
        if (svg._onSelect) svg._onSelect(Number(node.getAttribute("data-id")));
      };
      svg.addEventListener("click", function (e) { choose(e.target); });
      svg.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(e.target); }
      });
    }
    svg._onSelect = opts.onSelect || null;
    return nodes;
  }

  function mark(svg, id) {
    svg.querySelectorAll(".t--selected").forEach(function (n) {
      n.classList.remove("t--selected");
      if (n.hasAttribute("aria-pressed")) n.setAttribute("aria-pressed", "false");
    });
    var node = svg.querySelector('.t[data-id="' + id + '"]');
    if (node) {
      node.classList.add("t--selected");
      if (node.hasAttribute("aria-pressed")) node.setAttribute("aria-pressed", "true");
    }
  }

  window.TavolaPlan = { render: render, mark: mark, geometry: geometry, seatWord: seatWord };
})();
