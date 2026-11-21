// Auto-submit status change; the OK button stays as a no-JS fallback.
document.querySelectorAll('.status-form').forEach((f) => {
  f.querySelector('.nojs').hidden = true;
  f.querySelector('.autosubmit').addEventListener('change', () => f.submit());
});
