(function () {
  const BASE = "/demos/zharivnia";
  let n = 0; try { n = +sessionStorage.getItem("shopDemoCount") || 0; } catch (_) {}
  document.addEventListener("DOMContentLoaded", () => { const c = document.querySelector(".js-count"); if (!sessionStorage.getItem("shopDemoCount") && c) n = +c.textContent || 0; });
  window.demoFetch = (u, init) => {
    if (!/\/cart\/add\/?$/.test(u.pathname)) return null;
    n += 1; try { sessionStorage.setItem("shopDemoCount", n); } catch (_) {}
    const f = document.activeElement && document.activeElement.form;
    const card = f && f.closest("article,.card,.product,li");
    const t = (card && card.querySelector("h2,h3,.title,.name")) || document.querySelector("h1");
    return Promise.resolve(new Response(JSON.stringify({ ok: true, count: n, name: t ? t.textContent.trim() : "Товар" }), { headers: { "Content-Type": "application/json" } }));
  };
  window.demoHandleSubmit = (f, e) => {
    if (!f.classList.contains("js-checkout")) return false;
    e.preventDefault(); e.stopImmediatePropagation();
    location.href = window.__SHOP_SAMPLE + "?demo=1";
    return true;
  };
  document.addEventListener("DOMContentLoaded", () => {
    if (/[?&]demo=1/.test(location.search) && window.demoToast) demoToast("Демо: замовлення не створюється — це приклад");
  });
})();
