/* Admin helpers: chart tooltips, auto-submit, dropdown menus, print. */
(function () {
  "use strict";
  var tip = document.getElementById("tip");

  // tooltips for SVG charts / timeline bars (data-tip); native <title> stays as fallback
  function show(target, x, y) {
    tip.textContent = target.getAttribute("data-tip");
    tip.hidden = false;
    var r = tip.getBoundingClientRect();
    var left = Math.min(window.innerWidth - r.width - 8, Math.max(8, x - r.width / 2));
    var top = y - r.height - 14;
    if (top < 8) top = y + 18;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }
  document.addEventListener("pointermove", function (e) {
    var t = e.target.closest && e.target.closest("[data-tip]");
    if (!t) { tip.hidden = true; return; }
    show(t, e.clientX, e.clientY);
  });
  document.addEventListener("focusin", function (e) {
    var t = e.target.closest && e.target.closest("[data-tip]");
    if (!t) return;
    var r = t.getBoundingClientRect();
    show(t, r.left + r.width / 2, r.top);
  });
  document.addEventListener("focusout", function () { tip.hidden = true; });
  document.querySelectorAll("svg title").forEach(function (t) {
    // avoid double tooltips where the custom one is available
    if (t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-tip")) t.parentNode.setAttribute("aria-label", t.textContent);
  });
  document.querySelectorAll("[data-tip] > title").forEach(function (t) { t.remove(); });
  document.querySelectorAll(".gantt a[data-tip]").forEach(function (a) { a.setAttribute("tabindex", "0"); });

  document.querySelectorAll("[data-autosubmit]").forEach(function (el) {
    el.addEventListener("change", function () { if (el.value) el.form.submit(); });
  });

  // only one dropdown open; close on outside click / Escape
  document.addEventListener("click", function (e) {
    document.querySelectorAll("details.more[open]").forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute("open"); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll("details.more[open]").forEach(function (d) { d.removeAttribute("open"); d.querySelector("summary").focus(); });
  });

  document.querySelectorAll("[data-open]").forEach(function (a) {
    a.addEventListener("click", function () {
      var d = document.getElementById(a.getAttribute("data-open"));
      if (d) { d.open = true; var f = d.querySelector("input:not([type=hidden])"); if (f) setTimeout(function () { f.focus(); }, 50); }
    });
  });
  if (location.hash === "#phone-booking") { var pb = document.getElementById("phone-booking"); if (pb) pb.open = true; }

  document.querySelectorAll("[data-picker]").forEach(function (b) {
    b.addEventListener("click", function () {
      var input = document.getElementById(b.getAttribute("data-picker"));
      if (input.showPicker) { try { input.showPicker(); return; } catch (e) { /* fall through */ } }
      input.style.pointerEvents = "auto"; input.focus(); input.click();
    });
  });

  // on narrow screens the timeline scrolls horizontally: start at the "now" line, not at opening time
  var gw = document.querySelector(".gantt-wrap");
  var nowLine = gw && gw.querySelector(".g-nowline");
  if (nowLine && gw.scrollWidth > gw.clientWidth) {
    var svgEl = gw.querySelector("svg");
    var ratio = Number(nowLine.getAttribute("x1")) / svgEl.viewBox.baseVal.width;
    gw.scrollLeft = Math.max(0, ratio * svgEl.getBoundingClientRect().width - gw.clientWidth / 3);
  }

  var pr = document.querySelector("[data-print]");
  if (pr) pr.addEventListener("click", function () { window.print(); });
})();
