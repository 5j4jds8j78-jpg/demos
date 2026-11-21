/* Static demo mode: POST forms and POST fetches do nothing on the server (there is none). */
(function () {
  const msg = document.documentElement.lang === "en" ? "Demo: changes are not saved" : "Демо-версія: зміни не зберігаються";
  function toast(text) {
    let t = document.getElementById("demo-toast");
    if (!t) {
      t = document.createElement("div"); t.id = "demo-toast";
      t.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#222;color:#fff;padding:10px 16px;border-radius:8px;font:14px/1.3 system-ui,sans-serif;z-index:99999;box-shadow:0 4px 16px rgba(0,0,0,.25);transition:opacity .3s";
      document.body.appendChild(t);
    }
    t.textContent = text || msg; t.style.opacity = "1";
    clearTimeout(t._h); t._h = setTimeout(() => t.style.opacity = "0", 2600);
  }
  window.demoToast = toast;
  document.addEventListener("submit", e => {
    const f = e.target;
    if ((f.getAttribute("method") || "get").toLowerCase() !== "post" || f.hasAttribute("data-demo-allow")) return;
    if (window.demoHandleSubmit && window.demoHandleSubmit(f, e)) return;
    e.preventDefault(); e.stopImmediatePropagation(); toast();
  }, true);
  const orig = window.fetch.bind(window);
  window.fetch = function (url, init = {}) {
    if (window.demoFetch) { const r = window.demoFetch(new URL(String(url), location.href), init); if (r) return r; }
    if ((init.method || "GET").toUpperCase() !== "GET") {
      toast();
      return Promise.resolve(new Response(JSON.stringify({ ok: true, demo: true }), { headers: { "Content-Type": "application/json" } }));
    }
    return orig(url, init);
  };
})();
