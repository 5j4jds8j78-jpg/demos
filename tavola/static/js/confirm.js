/* Ask before destructive form submits: <form data-confirm="Question?"> */
(function () {
  "use strict";
  document.addEventListener("submit", function (e) {
    var msg = e.target.getAttribute && e.target.getAttribute("data-confirm");
    if (msg && !window.confirm(msg)) e.preventDefault();
  }, true);
})();
