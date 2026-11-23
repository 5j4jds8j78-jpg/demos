/* Студія на Дніпровській — demo behaviour: open-now, menu, booking wizard, certificate preview. Nothing is sent anywhere. */
(() => {
  'use strict';
  const TZ = 'Europe/Kyiv';
  const OPEN = 9, CLOSE = 19;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---- Kyiv clock ---- */
  function kyivNow() {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
    const g = t => +parts.find(p => p.type === t).value;
    return { y: g('year'), m: g('month'), d: g('day'), h: g('hour'), min: g('minute') };
  }

  /* ---- open / closed ---- */
  function renderStatus() {
    const n = kyivNow();
    const mins = n.h * 60 + n.min;
    const open = mins >= OPEN * 60 && mins < CLOSE * 60;
    let text;
    if (open) {
      const left = CLOSE * 60 - mins;
      text = left <= 60 ? `Зараз відчинено · зачиняємося о 19:00` : `Зараз відчинено · до 19:00`;
    } else {
      text = mins < OPEN * 60 ? 'Зараз зачинено · відчинимося о 09:00' : 'Зараз зачинено · завтра з 09:00';
    }
    $$('[data-status]').forEach(el => {
      el.classList.toggle('is-open', open);
      el.classList.toggle('is-closed', !open);
      $('[data-status-text]', el).textContent = text;
    });
  }
  renderStatus();
  setInterval(renderStatus, 60 * 1000);

  /* ---- nav ---- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const toggle = $('.nav__toggle'), menu = $('#menu');
  const setMenu = open => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); toggle.focus(); } });
  matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  /* ---- booking wizard ---- */
  const wiz = $('[data-wizard]');
  const form = $('[data-form]');
  const state = { service: '', style: '', master: '', date: '', time: '', name: '', phone: '' };
  let step = 1;
  const MONTHS = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
  const WD = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const SLOTS = ['09:00', '10:00', '11:30', '13:00', '14:30', '16:00', '17:00'];

  function showStep(n, focus = true) {
    step = n;
    $$('[data-step]', form).forEach(s => { s.hidden = +s.dataset.step !== n; });
    $$('[data-step-ind]', wiz).forEach(li => {
      const k = +li.dataset.stepInd;
      li.classList.toggle('is-done', k < n);
      if (k === Math.min(n, 4) && n < 5) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
    });
    if (n === 3) renderDays();
    if (n === 4) renderSummary($('[data-summary]'));
    if (focus) {
      const t = $(`[data-step="${n}"] .step__title`, form);
      t && t.focus({ preventScroll: true });
      const top = wiz.getBoundingClientRect().top;
      if (top < 60 || top > innerHeight * .6) wiz.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }
  const setErr = (k, msg) => { const e = $(`[data-err="${k}"]`, form); if (e) e.textContent = msg || ''; };

  function validate(n) {
    if (n === 1) { state.service = (form.service.value || ''); if (!state.service) { setErr('service', 'Оберіть послугу.'); return false; } setErr('service'); }
    if (n === 2) { state.master = (form.master.value || ''); if (!state.master) { setErr('master', 'Оберіть майстра або «Будь-хто».'); return false; } setErr('master'); }
    if (n === 3) { if (!state.date || !state.time) { setErr('slot', 'Оберіть день і час.'); return false; } setErr('slot'); }
    return true;
  }
  $$('[data-next]', form).forEach(b => b.addEventListener('click', () => { if (validate(step)) showStep(step + 1); }));
  $$('[data-prev]', form).forEach(b => b.addEventListener('click', () => showStep(step - 1)));
  form.addEventListener('change', e => {
    if (e.target.name === 'service') { state.service = e.target.value; setErr('service'); syncSubstyle(); }
    if (e.target.name === 'style') { state.style = e.target.value; }
    if (e.target.name === 'master') { state.master = e.target.value; setErr('master'); state.time = ''; }
  });

  const substyle = $('[data-substyle]', form);
  function syncSubstyle() {
    const on = state.service === 'Нарощування вій';
    substyle.hidden = !on;
    if (!on) { state.style = ''; $$('input[name="style"]', form).forEach(i => i.checked = false); }
  }
  function setStyle(v) {
    state.service = 'Нарощування вій';
    const r = $$('input[name="service"]', form).find(i => i.value === state.service); if (r) r.checked = true;
    syncSubstyle();
    state.style = v; const c = $$('input[name="style"]', form).find(i => i.value === v); if (c) c.checked = true;
  }

  /* days & times: availability is a stable pseudo-random pattern, marked as demo in the UI */
  function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  function dayList() {
    const n = kyivNow();
    const base = Date.UTC(n.y, n.m - 1, n.d);
    const out = [];
    for (let i = 0; i < 10; i++) {
      const dt = new Date(base + i * 864e5);
      out.push({ key: dt.toISOString().slice(0, 10), wd: WD[dt.getUTCDay()], d: dt.getUTCDate(), m: dt.getUTCMonth(), i });
    }
    return out;
  }
  function freeTimes(dayKey, idx) {
    const n = kyivNow();
    const nowMins = n.h * 60 + n.min;
    return SLOTS.map(t => {
      const [h, m] = t.split(':').map(Number);
      const past = idx === 0 && h * 60 + m < nowMins + 60;
      const busy = hash(dayKey + t + state.master) % 10 < 4;
      return { t, ok: !past && !busy };
    });
  }
  function dayLabel(d) { return `${d.d} ${MONTHS[d.m]}`; }
  function renderDays() {
    const box = $('[data-days]', form);
    const days = dayList();
    if (!state.date || !days.some(d => d.key === state.date)) {
      const first = days.find(d => freeTimes(d.key, d.i).some(x => x.ok)) || days[0];
      state.date = first.key;
    }
    box.innerHTML = '';
    days.forEach(d => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'day'; b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', String(d.key === state.date));
      b.setAttribute('aria-label', `${d.i === 0 ? 'Сьогодні, ' : d.i === 1 ? 'Завтра, ' : ''}${dayLabel(d)}`);
      b.innerHTML = `<small>${d.i === 0 ? 'сьог.' : d.wd}</small><b>${d.d}</b>`;
      b.tabIndex = d.key === state.date ? 0 : -1;
      b.addEventListener('click', () => { state.date = d.key; state.time = ''; renderDays(); $('.day[aria-checked="true"]', box).focus(); });
      box.appendChild(b);
    });
    radioKeys(box, '.day');
    renderTimes();
  }
  function renderTimes() {
    const box = $('[data-times]', form);
    const d = dayList().find(x => x.key === state.date);
    const times = freeTimes(d.key, d.i);
    box.innerHTML = '';
    if (!times.some(x => x.ok)) { box.innerHTML = '<p class="times__empty">На цей день вільних вікон немає — оберіть інший.</p>'; return; }
    const sel = state.time && times.find(x => x.t === state.time && x.ok) ? state.time : '';
    state.time = sel;
    let focusable = false;
    times.forEach(x => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'time'; b.setAttribute('role', 'radio');
      b.textContent = x.t; b.disabled = !x.ok;
      b.setAttribute('aria-checked', String(x.t === sel));
      b.setAttribute('aria-label', x.ok ? x.t : `${x.t}, зайнято`);
      const isTab = x.ok && (sel ? x.t === sel : !focusable);
      if (isTab) focusable = true;
      b.tabIndex = isTab ? 0 : -1;
      b.addEventListener('click', () => { state.time = x.t; setErr('slot'); renderTimes(); $('.time[aria-checked="true"]', box).focus(); });
      box.appendChild(b);
    });
    radioKeys(box, '.time:not(:disabled)');
  }
  function radioKeys(box, sel) {
    box.onkeydown = e => {
      if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
      const items = $$(sel, box); const i = items.indexOf(document.activeElement); if (i < 0) return;
      e.preventDefault();
      const next = items[(i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length];
      next.click();
    };
  }

  /* UA phone */
  const MOBILE = ['39', '50', '63', '66', '67', '68', '73', '75', '77', '91', '92', '93', '94', '95', '96', '97', '98', '99'];
  function normPhone(v) {
    let d = (v || '').replace(/\D/g, '');
    if (d.startsWith('380')) d = d.slice(3);
    else if (d.startsWith('80') && d.length === 11) d = d.slice(2);
    else if (d.startsWith('0')) d = d.slice(1);
    if (d.length !== 9) return null;
    const op = d.slice(0, 2);
    if (!MOBILE.includes(op) && op !== '44') return null;
    return `+380 ${op} ${d.slice(2, 5)} ${d.slice(5, 7)} ${d.slice(7)}`;
  }

  function summaryHTML() {
    const d = dayList().find(x => x.key === state.date);
    const rows = [['Послуга', state.service + (state.style ? ` · ${state.style}` : '')], ['Майстер', state.master === 'Будь-хто' ? 'перший вільний' : state.master], ['Коли', d ? `${dayLabel(d)}, ${state.time}` : '']];
    if (state.name) rows.push(['Імʼя', state.name]);
    if (state.phone) rows.push(['Телефон', state.phone]);
    return '<dl>' + rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('') + '</dl>';
  }
  function renderSummary(el) { el.innerHTML = summaryHTML(); }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const fName = $('#f-name'), fPhone = $('#f-phone');
  function checkName() { const v = fName.value.trim(); const ok = v.length >= 2; fName.setAttribute('aria-invalid', String(!ok)); setErr('name', ok ? '' : 'Вкажіть імʼя — хоча б дві літери.'); return ok && v; }
  function checkPhone() { const p = normPhone(fPhone.value); fPhone.setAttribute('aria-invalid', String(!p)); setErr('phone', p ? '' : 'Схоже, номер неповний. Формат: +380 93 123 45 67 або 093 123 45 67.'); return p; }
  fName.addEventListener('blur', () => fName.value && checkName());
  fPhone.addEventListener('blur', () => { if (!fPhone.value) return; const p = checkPhone(); if (p) fPhone.value = p; });
  fPhone.addEventListener('input', () => { if (fPhone.getAttribute('aria-invalid') === 'true' && normPhone(fPhone.value)) { fPhone.setAttribute('aria-invalid', 'false'); setErr('phone'); } });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (step !== 4) { if (validate(step)) showStep(step + 1); return; }
    const n = checkName(), p = checkPhone();
    if (!n) { fName.focus(); return; }
    if (!p) { fPhone.focus(); return; }
    state.name = n; state.phone = p; fPhone.value = p;
    $('[data-done-name]', form).textContent = n;
    $('[data-done-code]', form).textContent = 'SR-DEMO-' + String(Math.floor(1000 + Math.random() * 9000));
    renderSummary($('[data-done-summary]', form));
    saveDemoRequest();
    showStep(5);
  });
  // the demo keeps its own requests in this browser only, so /admin/ can show them arriving
  function saveDemoRequest() {
    try {
      const list = JSON.parse(localStorage.getItem('sr-demo-requests') || '[]');
      list.unshift({ id: $('[data-done-code]', form).textContent, service: state.service, style: state.style, master: state.master,
        date: state.date, time: state.time, name: state.name, phone: state.phone, at: Date.now(), status: 'Нова', source: 'сайт' });
      localStorage.setItem('sr-demo-requests', JSON.stringify(list.slice(0, 20)));
    } catch (e) { /* private mode: nothing kept */ }
  }
  $('[data-restart]', form).addEventListener('click', () => {
    form.reset(); Object.keys(state).forEach(k => state[k] = ''); syncSubstyle();
    [fName, fPhone].forEach(i => i.removeAttribute('aria-invalid'));
    showStep(1);
  });

  /* entry points: preselect from the menu and the master cards */
  const goBook = () => { const t = $('#zapys'); t.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  $$('[data-pick-service]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.pickService;
    const r = $$('input[name="service"]', form).find(i => i.value === v); if (r) r.checked = true;
    state.service = v; setErr('service');
    showStep(state.master ? 3 : 2, false); goBook();
    setTimeout(() => $(`[data-step="${step}"] .step__title`, form).focus({ preventScroll: true }), 450);
  }));
  $$('[data-pick-master]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.pickMaster;
    const r = $$('input[name="master"]', form).find(i => i.value === v); if (r) r.checked = true;
    state.master = v;
    showStep(state.service ? 3 : 1, false); goBook();
    setTimeout(() => $(`[data-step="${step}"] .step__title`, form).focus({ preventScroll: true }), 450);
  }));

  const RM = matchMedia('(prefers-reduced-motion: reduce)');
  const E = window.InkEye;

  /* ---- drawn eye helpers: tween between parameter sets ---- */
  function eyeView(canvas, start) {
    let cur = Object.assign({}, start), from = cur, to = cur, t0 = 0, dur = 0, raf = 0;
    const paint = () => { const ctx = E.fit(canvas); E.draw(ctx, cur); };
    const step = now => {
      const k = dur ? E.clamp((now - t0) / dur) : 1, e = E.ease(k);
      cur = {}; for (const key in to) cur[key] = typeof to[key] === 'number' && typeof from[key] === 'number' ? E.lerp(from[key], to[key], e) : to[key];
      paint(); raf = k < 1 ? requestAnimationFrame(step) : 0;
    };
    new ResizeObserver(paint).observe(canvas);
    return {
      set(p, ms = 650) { cancelAnimationFrame(raf); from = Object.assign({}, E.BASE, cur); to = Object.assign({}, E.BASE, p); t0 = performance.now(); dur = RM.matches ? 0 : ms; raf = requestAnimationFrame(step); },
      get: () => cur,
    };
  }
  const LOOKS = {
    natural: { profile: 'natural', len: 66, count: 32, vol: 1, lift: 1, curl: .6 },
    fox: { profile: 'fox', len: 80, count: 32, vol: 1, lift: .9, curl: .9 },
    doll: { profile: 'doll', len: 80, count: 32, vol: 1, lift: 1.5, curl: .5 },
    volume: { profile: 'natural', len: 72, count: 34, vol: 3, lift: 1.1, curl: .7 },
  };
  const NAMES = { natural: 'Натуральний', fox: 'Лисячий', doll: 'Ляльковий', volume: 'Обʼєм 2D–3D' };

  /* ---- style picker ---- */
  if (E) {
    const pc = $('[data-picker-eye]');
    const pv = eyeView(pc, Object.assign({ open: 1, wave: false }, LOOKS.natural));
    let chosen = 'natural';
    const btns = $$('[data-style]');
    btns.forEach((b, i) => {
      b.tabIndex = i === 0 ? 0 : -1;
      b.addEventListener('click', () => {
        chosen = b.dataset.style;
        btns.forEach(x => { x.setAttribute('aria-checked', String(x === b)); x.tabIndex = x === b ? 0 : -1; });
        pv.set(Object.assign({ open: 1, wave: false }, LOOKS[chosen]));
      });
      b.addEventListener('keydown', e => {
        const d = ['ArrowRight', 'ArrowDown'].includes(e.key) ? 1 : ['ArrowLeft', 'ArrowUp'].includes(e.key) ? -1 : 0;
        if (!d) return; e.preventDefault(); const n = btns[(i + d + btns.length) % btns.length]; n.focus(); n.click();
      });
    });
    $('[data-style-book]').addEventListener('click', () => {
      setStyle(NAMES[chosen]); showStep(state.master ? 3 : 2, false); goBook();
      setTimeout(() => $(`[data-step="${step}"] .step__title`, form).focus({ preventScroll: true }), 450);
    });

    /* ---- before / after ---- */
    const BEFORE = { open: 1, wave: false, brows: true, profile: 'bare', len: 44, count: 26, vol: 1, lift: -.6, curl: .05 };
    const AFTER = {
      lam: { open: 1, wave: false, profile: 'natural', len: 56, count: 26, vol: 1, lift: 1.9, curl: 1.1 },
      ext: { open: 1, wave: false, profile: 'natural', len: 74, count: 36, vol: 2, lift: 1.2, curl: .8 },
    };
    const bb = eyeView($('[data-ba-before]'), BEFORE);
    const ba = eyeView($('[data-ba-after]'), AFTER.lam);
    const clip = $('[data-ba-clip]'), handle = $('[data-ba-handle]'), range = $('[data-ba-range]');
    const setSplit = v => { clip.style.clipPath = `inset(0 0 0 ${v}%)`; handle.style.left = v + '%'; };
    range.addEventListener('input', () => setSplit(range.value)); setSplit(50);
    const frame = $('.ba__frame');
    let drag = false;
    const fromPointer = e => { const r = frame.getBoundingClientRect(); const v = Math.round(E.clamp((e.clientX - r.left) / r.width) * 100); range.value = v; setSplit(v); };
    frame.addEventListener('pointerdown', e => { if (e.target === range) return; drag = true; frame.setPointerCapture(e.pointerId); fromPointer(e); });
    frame.addEventListener('pointermove', e => drag && fromPointer(e));
    frame.addEventListener('pointerup', () => drag = false);
    const tabs = $$('[data-ba]');
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => {
        tabs.forEach(x => { x.setAttribute('aria-selected', String(x === t)); x.tabIndex = x === t ? 0 : -1; });
        $('#ba-panel').setAttribute('aria-labelledby', t.id);
        ba.set(AFTER[t.dataset.ba]);
        $('[data-ba-after]').setAttribute('aria-label', t.dataset.ba === 'lam' ? 'Після ламінування: свої вії, підняті й підкручені' : 'Після нарощування: довші й густіші вії');
      });
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return;
        e.preventDefault(); const n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); n.click();
      });
    });

    /* ---- story: pinned steps change the drawn eye ---- */
    const STORY = [
      Object.assign({ open: 1, wave: true, phase: 0 }, { profile: 'bare', len: 46, count: 26, vol: 1, lift: 0, curl: .2 }),
      { open: 0, wave: true, phase: 1.2, profile: 'bare', len: 46, count: 26, vol: 1, lift: 0, curl: .2 },
      { open: 0, wave: true, phase: 2.4, profile: 'natural', len: 70, count: 34, vol: 2, lift: 1, curl: .7 },
      { open: 1, wave: true, phase: 3.6, profile: 'natural', len: 72, count: 34, vol: 2, lift: 1.2, curl: .8 },
    ];
    const story = $('#yak');
    const sv = eyeView($('[data-story-eye]'), STORY[0]);
    const items = $$('[data-story]');
    let cur = -1;
    const pick = k => {
      if (k === cur) return; cur = k;
      items.forEach((li, i) => li.classList.toggle('is-on', i === k));
      sv.set(STORY[k], 900);
    };
    const onStory = () => {
      const r = story.getBoundingClientRect();
      const total = story.offsetHeight - innerHeight;
      if (total <= 40) { // not pinned (phone or reduced motion): the step nearest the middle of the screen
        let best = 0, dist = 1e9; items.forEach((li, i) => { const b = li.getBoundingClientRect(); const d = Math.abs(b.top + b.height / 2 - innerHeight * .55); if (d < dist) { dist = d; best = i; } });
        pick(best); return;
      }
      const p = E.clamp(-r.top / total);
      pick(Math.min(3, Math.floor(p * 4)));
    };
    addEventListener('scroll', onStory, { passive: true }); addEventListener('resize', onStory); onStory();
    items.forEach((li, i) => li.addEventListener('click', () => pick(i)));
  }

  /* ---- headings: words rise once as a section arrives (not under reduced motion) ---- */
  if (!RM.matches && 'IntersectionObserver' in window) {
    const hs = $$('main section:not(.hero) h2:not(.eyebrow)');
    hs.forEach(h => {
      if (h.querySelector('*')) return;
      h.innerHTML = h.textContent.trim().split(/\s+/).map((w, i) => `<span class="rw"><span style="transition-delay:${i * 45}ms">${w}</span></span>`).join(' ');
      h.classList.add('rv');
    });
    let pending = hs.slice();
    const check = () => {
      pending = pending.filter(h => { const r = h.getBoundingClientRect(); if (r.top < innerHeight * .9 && r.bottom > 0) { h.classList.add('is-in'); return false; } return true; });
      if (!pending.length) removeEventListener('scroll', check);
    };
    addEventListener('scroll', check, { passive: true }); setTimeout(check, 60);
    setTimeout(() => hs.forEach(h => h.classList.add('is-in')), 8000);   // never leave a heading hidden
  }

  /* ---- magnetic buttons + a soft light that follows the cursor (fine pointers, motion allowed) ---- */
  if (!RM.matches && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.magnet').forEach(m => {
      m.addEventListener('pointermove', e => { const r = m.getBoundingClientRect(); m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .28}px)`; });
      m.addEventListener('pointerleave', () => { m.style.transform = ''; });
    });
    const glow = $('.glow'); let gx = innerWidth / 2, gy = innerHeight / 2, x = gx, y = gy, on = false;
    addEventListener('pointermove', e => { gx = e.clientX; gy = e.clientY; if (!on) { on = true; glow.classList.add('is-on'); tick(); } }, { passive: true });
    document.addEventListener('pointerleave', () => { glow.classList.remove('is-on'); });
    function tick() { x += (gx - x) * .12; y += (gy - y) * .12; glow.style.transform = `translate(${x - 300}px, ${y - 300}px)`; if (Math.abs(gx - x) + Math.abs(gy - y) > .5) requestAnimationFrame(tick); else on = false; }
  }

  /* ---- mobile action bar: hidden while the hero's own buttons are on screen ---- */
  const mbar = $('.mbar'), heroBtns = $('.hero .btn-row');
  if (mbar && heroBtns && 'IntersectionObserver' in window) {
    mbar.classList.add('is-off');
    new IntersectionObserver(([e]) => mbar.classList.toggle('is-off', e.isIntersecting || e.boundingClientRect.top > 0)).observe(heroBtns);
  }

  /* ---- certificate preview ---- */
  const bind = (inSel, outSel) => {
    const i = $(inSel), o = $(outSel);
    i.addEventListener('input', () => { o.textContent = i.value.trim() || ' '; });
  };
  bind('[data-gift-to]', '[data-gift-to-out]');
  bind('[data-gift-from]', '[data-gift-from-out]');
})();
