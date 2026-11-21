// Жарівня storefront: progressive enhancement only, every form works without JS.
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var fmt = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₴"; };

  // announcement bar rotation
  var items = $$(".js-rotate li"), cur = 0;
  if (items.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
      items[cur].classList.remove("is-on");
      cur = (cur + 1) % items.length;
      items[cur].classList.add("is-on");
    }, 4500);
  }

  // toast
  var toast = $(".toast"), tTimer;
  function showToast(html) {
    if (!toast) return;
    toast.innerHTML = html; toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add("is-on"); });
    clearTimeout(tTimer);
    tTimer = setTimeout(function () { toast.classList.remove("is-on"); }, 3200);
  }
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  var iconUrl = ($("link[rel=stylesheet]") || {}).href ? "/static/img/icons.svg" : "";
  var checkIcon = '<svg class="ico" aria-hidden="true"><use href="' + iconUrl + '#check"></use></svg>';

  function updateCount(n) {
    $$(".js-count").forEach(function (el) {
      el.textContent = n; el.classList.toggle("is-empty", !n);
      el.classList.add("bump"); setTimeout(function () { el.classList.remove("bump"); }, 300);
    });
    $$(".js-count-text").forEach(function (el) { el.textContent = n; });
  }

  // add to cart without page reload (cards + product page)
  $$("form.js-add, form.js-buy").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!window.fetch) return;
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]") || document.querySelector("button[form='" + form.id + "']");
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { "X-Requested-With": "fetch" }, credentials: "same-origin" })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (!d.ok) { showToast(esc(d.error || "Не вдалося додати")); return; }
          updateCount(d.count);
          showToast(checkIcon + "<span>«" + esc(d.name) + "» у кошику</span><a href=\"/demos/zharivnia/cart/\">Перейти</a>");
          if (form.classList.contains("js-add") && btn) {
            btn.classList.add("is-added");
            var label = btn.querySelector("span"); var old = label && label.textContent;
            if (label) label.textContent = "Додано";
            setTimeout(function () { btn.classList.remove("is-added"); if (label) label.textContent = old; }, 1800);
          }
        })
        .catch(function () { form.submit(); });
    });
  });

  // product page: variant -> price, gallery, stepper
  var buy = $(".js-buy");
  if (buy) {
    var radios = $$("input[name=variant][data-price]", buy);
    var sync = function () {
      var r = radios.filter(function (x) { return x.checked; })[0]; if (!r) return;
      var qty = parseInt(($("input[name=qty]", buy) || {}).value, 10) || 1;
      $$(".js-price").forEach(function (el) { el.textContent = fmt(r.dataset.price * qty); });
      var old = $(".js-old");
      if (old) { if (r.dataset.old) { old.textContent = fmt(r.dataset.old * qty); old.hidden = false; } else old.hidden = true; }
      var lbl = $(".mbar-price small"); if (lbl) lbl.textContent = r.parentNode.querySelector("b").textContent + (qty > 1 ? " × " + qty : "");
    };
    radios.forEach(function (r) { r.addEventListener("change", sync); });
    $$(".js-stepper").forEach(function (st) {
      var input = $("input", st);
      $$("button", st).forEach(function (b) {
        b.addEventListener("click", function () {
          var v = Math.min(20, Math.max(1, (parseInt(input.value, 10) || 1) + parseInt(b.dataset.step, 10)));
          input.value = v; sync();
        });
      });
      input.addEventListener("input", sync);
    });
  }
  var main = $(".js-gallery-main");
  $$(".thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      main.src = t.dataset.src;
      $$(".thumb").forEach(function (x) { x.classList.remove("is-on"); x.setAttribute("aria-pressed", "false"); });
      t.classList.add("is-on"); t.setAttribute("aria-pressed", "true");
    });
  });

  // demo-only forms (newsletter, subscription, notify me)
  $$(".js-demo-form").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var p = document.createElement("p"); p.className = "form-done"; p.innerHTML = checkIcon + esc(f.dataset.done);
      f.replaceWith(p);
    });
  });
  $$(".js-notify").forEach(function (b) {
    b.addEventListener("click", function () { b.disabled = true; b.textContent = b.dataset.done; });
  });

  // catalog: auto-apply sort
  var sort = $(".js-sort select");
  if (sort) sort.addEventListener("change", function () { sort.form.submit(); });

  // checkout: Nova Poshta city -> branches, phone mask
  var np = $(".js-np");
  if (np) {
    var data = JSON.parse(np.dataset.branches), city = $(".js-city", np), branch = $(".js-branch", np);
    var fill = function () {
      var keep = branch.value; branch.innerHTML = "";
      var list = data[city.value] || [];
      var o = document.createElement("option"); o.value = ""; o.textContent = list.length ? "Оберіть відділення" : "Спершу оберіть місто";
      branch.appendChild(o);
      list.forEach(function (b) { var x = document.createElement("option"); x.textContent = b; if (b === keep) x.selected = true; branch.appendChild(x); });
      branch.disabled = !list.length;
    };
    city.addEventListener("change", fill); fill();
  }
  var phone = $(".js-phone");
  if (phone) {
    phone.addEventListener("focus", function () { if (!phone.value) phone.value = "+380 "; });
    phone.addEventListener("input", function () {
      var d = phone.value.replace(/\D/g, "");
      if (d.indexOf("380") !== 0) d = "380" + d.replace(/^0/, "");
      d = d.slice(0, 12);
      var p = [d.slice(0, 3), d.slice(3, 5), d.slice(5, 8), d.slice(8, 10), d.slice(10, 12)].filter(Boolean);
      phone.value = "+" + p.join(" ");
    });
  }
})();
