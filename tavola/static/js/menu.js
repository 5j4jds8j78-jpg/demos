/* QR menu: live search, allergen / diet filters, category scroll-spy. */
(function () {
  "use strict";
  var root = document.querySelector("[data-menu]");
  if (!root) return;
  var input = root.querySelector("[data-search]");
  var clear = root.querySelector("[data-clear]");
  var dishes = Array.prototype.slice.call(root.querySelectorAll("[data-dish]"));
  var sections = Array.prototype.slice.call(root.querySelectorAll("[data-section]"));
  var filters = Array.prototype.slice.call(root.querySelectorAll(".qm-filter"));
  var count = root.querySelector("[data-count]");
  var empty = root.querySelector("[data-empty]");
  var links = Array.prototype.slice.call(root.querySelectorAll("[data-cat-link]"));

  function plural(n) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return "страва";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "страви";
    return "страв";
  }

  function apply() {
    var q = input.value.trim().toLowerCase();
    var needTags = [], banned = [];
    filters.forEach(function (f) {
      if (f.getAttribute("aria-pressed") !== "true") return;
      if (f.dataset.filterTag) needTags.push(f.dataset.filterTag);
      if (f.dataset.filterFree) banned = banned.concat(f.dataset.filterFree.split(","));
    });
    var shown = 0;
    dishes.forEach(function (d) {
      var al = (d.dataset.allergens || "").split(",");
      var tags = (d.dataset.tags || "").split(",");
      var ok = (!q || d.dataset.text.indexOf(q) !== -1) &&
        needTags.every(function (t) { return tags.indexOf(t) !== -1; }) &&
        banned.every(function (a) { return al.indexOf(a) === -1; });
      d.hidden = !ok;
      if (ok) shown++;
    });
    sections.forEach(function (s) {
      var visible = s.querySelectorAll("[data-dish]:not([hidden])").length;
      s.hidden = visible === 0;
      var link = root.querySelector('[data-cat-link="' + s.id + '"]');
      if (link) link.classList.toggle("is-empty", visible === 0);
    });
    var active = q || needTags.length || banned.length;
    count.textContent = active ? "Знайдено " + shown + " " + plural(shown) : "";
    if (shown === 0) links.forEach(function (l) { l.classList.remove("is-active"); });
    if (!active) root.querySelector(".qm-cats").scrollLeft = 0;
    empty.hidden = shown !== 0;
    clear.hidden = !q;
  }

  input.addEventListener("input", apply);
  clear.addEventListener("click", function () { input.value = ""; apply(); input.focus(); });
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      f.setAttribute("aria-pressed", f.getAttribute("aria-pressed") === "true" ? "false" : "true");
      apply();
    });
  });
  root.querySelector("[data-reset]").addEventListener("click", function () {
    input.value = "";
    filters.forEach(function (f) { f.setAttribute("aria-pressed", "false"); });
    apply();
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) {
          var on = l.dataset.catLink === en.target.id;
          l.classList.toggle("is-active", on);
          if (on) l.scrollIntoView({ block: "nearest", inline: "center" });
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
