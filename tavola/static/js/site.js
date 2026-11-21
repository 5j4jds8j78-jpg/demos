/* Landing page: live hall preview in the hero. */
(function () {
  "use strict";
  var data = document.getElementById("hero-plan-data");
  var svg = document.getElementById("hero-plan");
  if (data && svg && window.TavolaPlan) {
    try { window.TavolaPlan.render(svg, JSON.parse(data.textContent), { interactive: false }); } catch (e) { /* no-op */ }
  }
})();
