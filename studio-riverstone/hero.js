// hero.js — starts the 3D lash strip when it makes sense; otherwise the poster stays.
const canvas = document.querySelector('[data-gl]');
const hero = document.querySelector('.hero');
const volBtns = [...document.querySelectorAll('[data-vol]')];
const pauseBtn = document.querySelector('[data-gl-pause]');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = (navigator.deviceMemory && navigator.deviceMemory < 4) || navigator.connection?.saveData;
let api = null, manual = false;

function markVol(v) {
  const level = Math.round(v);
  volBtns.forEach(b => b.setAttribute('aria-checked', String(+b.dataset.vol === level)));
}
volBtns.forEach(b => b.addEventListener('click', () => {
  manual = true; markVol(+b.dataset.vol); api?.setVolume(+b.dataset.vol);
}));
// arrow keys inside the radiogroup
volBtns.forEach((b, i) => b.addEventListener('keydown', e => {
  const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
  if (!d) return; e.preventDefault(); const n = volBtns[(i + d + volBtns.length) % volBtns.length]; n.focus(); n.click();
}));

function webglOK() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}

async function boot() {
  if (!canvas || reduced || lowPower || !webglOK()) return;
  try {
    const { start } = await import('./hero3d.js');
    api = start(canvas, { volume: 2 });
    hero.classList.add('has-gl');
    pauseBtn.hidden = false;
  } catch (e) { hero.classList.remove('has-gl'); return; }

  // scroll: the fan opens 2D → 5D while the hero scrolls away
  const onScroll = () => {
    if (manual) return;
    const h = hero.offsetHeight || 1;
    const p = Math.min(1, Math.max(0, scrollY / (h * 0.7)));
    const v = 2 + p * 3; api.setVolume(v); markVol(v);
  };
  addEventListener('scroll', onScroll, { passive: true });
  // pointer: a gentle tilt, fine pointers only
  if (matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      api.pointer((e.clientX - r.left) / r.width * 2 - 1, (e.clientY - r.top) / r.height * 2 - 1);
    });
    hero.addEventListener('pointerleave', () => api.pointer(0, 0));
  }
  pauseBtn.addEventListener('click', () => {
    const p = pauseBtn.getAttribute('aria-pressed') !== 'true';
    pauseBtn.setAttribute('aria-pressed', String(p)); api.pause(p);
    pauseBtn.querySelector('.sr').textContent = p ? 'Продовжити анімацію' : 'Зупинити анімацію';
  });
}
boot();
