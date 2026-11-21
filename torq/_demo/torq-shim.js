(function () {
  window.demoHandleSubmit = (f, e) => {
    const home = document.querySelector('link[rel=stylesheet]');
    if (!f.closest('#request, .request, [data-request]') && !/\/demos\/torq\/$/.test(location.pathname)) return false;
    if (f.querySelector('input[type=password]')) return false;
    e.preventDefault(); e.stopImmediatePropagation();
    location.href = location.pathname.replace(/\/$/, '') + '/request/done/';
    return true;
  };
})();
