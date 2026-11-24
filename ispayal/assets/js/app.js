// iSPAYAL — site logic (no framework). Data + requests: assets/js/store.js (localStorage, shared with /admin/).
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const S = window.ISP;
const fmt = S.fmt;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const qs = new URLSearchParams(location.search);
const plural = (n, a, b, c) => { const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? a : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? b : c; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const icon = (id, cls = 'ic') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const SWATCH = { black: '#2a2a2d', white: '#eceae4', natural: '#bdb6aa', blue: '#33435c', desert: '#cbb092', pink: '#efcfcb', green: '#9fb7a3', purple: '#6b5a73', yellow: '#efe2a2', red: '#b31620', gray: '#5a5a5e', orange: '#dc7a3c', silver: '#dcdde0', burgundy: '#6a1f2b', glacier: '#bcd3e6', ultramarine: '#5b6fd6', sierra: '#a7bdd6' };
const brand = t => String(t || '').replace(/iSpayal/g, 'iSPAYAL'); // UI spelling; the caption generator keeps the post text
const cap = t => t ? t[0].toUpperCase() + t.slice(1) : t; // sentence case for list items
const simL = v => v === 'Фіз' ? 'Фіз.\u00a0SIM' : v; // «Фіз» in the posts = a physical SIM slot
const battCol = p => p >= 90 ? '#1f9d55' : p >= 85 ? '#d99a00' : '#e0121a';
const PHONE = '+380989885588', DIRECT = 'https://ig.me/m/ispayal.ua';
const PRICE_STEPS = () => { const mx = Math.max(...S.listings().filter(l => l.cat === 'iphone').map(l => +l.price || 0)), all = [15000, 20000, 30000, 40000, 60000, 80000, 100000, 150000, 200000], i = all.findIndex(v => v >= mx); return i < 0 ? all : all.slice(0, i + 1); }; // top step always covers the dearest iPhone

let toastT;
function toast(msg) { const t = $('[data-toast]'); t.textContent = msg; t.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('is-on'), 2800); }
function rangeFill(el) { const p = (el.value - el.min) / (el.max - el.min) * 100; el.style.setProperty('--p', p + '%'); }
// Ukrainian numbers: +380 XX XXX XX XX, 380…, 80…, 0XX XXX XX XX or 9 digits without the 0; returns '+380 XX XXX XX XX' or null
const phoneNorm = v => { if (/[^\d\s()+\-.]/.test(v)) return null; let d = v.replace(/\D/g, ''); if (d.length === 12 && d.startsWith('380')) d = d.slice(3); else if (d.length === 11 && d.startsWith('80')) d = d.slice(2); else if (d.length === 10 && d.startsWith('0')) d = d.slice(1); else if (!(d.length === 9 && d[0] !== '0')) return null; return `+380 ${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 7)} ${d.slice(7)}`; };
const phoneOk = v => !!phoneNorm(v);
const PHONE_ERR = 'Перевірте номер: +380 XX XXX XX XX або 0XX XXX XX XX.';
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
// after a successful send: the submit stays disabled until the visitor changes something, so a second tap never sends a duplicate
function lockUntilEdit(form) {
  const b = form.querySelector('[type=submit]'); if (!b) return; b.disabled = true;
  const on = () => { b.disabled = false; form.removeEventListener('input', on); form.removeEventListener('change', on); };
  form.addEventListener('input', on); form.addEventListener('change', on);
}
function trapTab(box, e) { // keep Tab inside an open modal / sheet
  if (e.key !== 'Tab') return;
  const f = [...box.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null || el === document.activeElement);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && (document.activeElement === first || !box.contains(document.activeElement))) { last.focus(); e.preventDefault(); }
  else if (!e.shiftKey && (document.activeElement === last || !box.contains(document.activeElement))) { first.focus(); e.preventDefault(); }
}

/* ---------------- nav ---------------- */
{
  const nav = $('[data-nav]');
  const onS = () => nav.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onS, { passive: true }); onS();
  const btn = $('[data-menu-btn]'), menu = $('[data-menu]');
  btn.addEventListener('click', () => { const o = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', o); menu.hidden = !o; nav.classList.toggle('is-solid', o || scrollY > 40); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); menu.hidden = true; } });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { btn.setAttribute('aria-expanded', 'false'); menu.hidden = true; nav.classList.toggle('is-solid', scrollY > 40); btn.focus(); } });
}

/* ---------------- open / closed, Europe/Kyiv ---------------- */
const HOURS = { 0: [11, 16], 1: [9, 19], 2: [9, 19], 3: [9, 19], 4: [9, 19], 5: [9, 19], 6: [9, 15] };
function kyivNow() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kyiv', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).map(x => [x.type, x.value]));
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
  return { wd, h: +p.hour, m: +p.minute, ymd: `${p.year}-${p.month}-${p.day}` };
}
function openState() {
  const n = kyivNow(), [o, c] = HOURS[n.wd], t = n.h + n.m / 60;
  // when = when we can answer a request: «сьогодні до 19:00» / «сьогодні з 9:00» / «завтра з 11:00» (every day has hours, so the next opening is today or tomorrow)
  if (t >= o && t < c) { const left = c - t; return { open: true, text: left <= 1 ? `Відчинено, зачиняємось о ${c}:00` : `Відчинено до ${c}:00`, when: `сьогодні до ${c}:00` }; }
  if (t < o) return { open: false, text: `Зачинено · відчинимо сьогодні о ${o}:00`, when: `сьогодні з ${o}:00` };
  const nd = (n.wd + 1) % 7; return { open: false, text: `Зачинено · відчинимо завтра о ${HOURS[nd][0]}:00`, when: `завтра з ${HOURS[nd][0]}:00` };
}
function paintOpen() {
  const s = openState(), wd = kyivNow().wd;
  $$('[data-open-status],[data-open-big]').forEach(el => el.classList.toggle('is-open', s.open));
  $('[data-open-text]').textContent = s.text; $('[data-open-big-text]').textContent = s.text;
  $$('[data-hours] [data-d]').forEach(d => d.classList.toggle('is-today', d.dataset.d.split(',').includes(String(wd))));
}
paintOpen(); setInterval(paintOpen, 60000);

/* ---------------- listings ---------------- */
let LIST = S.listings();
const famOrder = m => { const n = /Air/.test(m) ? 17.5 : parseInt(m.replace(/\D+/g, ' ').trim()) || 0; const tier = /Pro Max/.test(m) ? 3 : /Pro/.test(m) ? 2 : /Plus/.test(m) ? 1 : /mini/.test(m) ? -1 : /\de\b/.test(m) ? -0.5 : 0; return n * 10 + tier; };
const MODELS = () => [...new Set(LIST.filter(l => l.cat === 'iphone').map(l => l.model))].sort((a, b) => famOrder(a) - famOrder(b));
const MEMS = () => [...new Set(LIST.filter(l => l.mem != null).map(l => +l.mem))].sort((a, b) => a - b);
const memL = m => S.memL(m);
const isNew = l => !!l.isNew;
const byId = id => LIST.find(l => l.id === id);
const gen = m => /iPhone Air/.test(m) ? 'Air' : (m.match(/iPhone (\d+)/) || [])[1] || '';
const variant = m => /Pro Max/.test(m) ? 'Pro Max' : /Pro/.test(m) ? 'Pro' : /Plus/.test(m) ? 'Plus' : /mini/.test(m) ? 'mini' : /\de\b/.test(m) ? 'e' : 'Базова';
const GENS = () => [...new Set(LIST.filter(l => l.cat === 'iphone').map(l => gen(l.model)))].sort((a, b) => (a === 'Air' ? 17.5 : +a) - (b === 'Air' ? 17.5 : +b));
const VARS = () => ['Базова', 'mini', 'e', 'Plus', 'Pro', 'Pro Max'];
const condGroup = l => /замовл/i.test(l.label) ? 'Під замовлення' : l.isNew ? 'Новий' : /майже|як нов/i.test(l.label) ? 'Майже новий' : 'б/у';

/* programmatic jump without the global scroll-behavior:smooth (and without relying on behavior:'instant', unknown to older WebKit) */
function noSmooth(fn) { const st = document.documentElement.style, prev = st.scrollBehavior; st.scrollBehavior = 'auto'; try { fn(); } finally { st.scrollBehavior = prev; } }

/* ---------------- 3D stage ---------------- */
const stage = $('[data-stage]'), wrap = $('[data-stagewrap]');
const chapters = { hero: $('.hero'), explode: $('[data-chapter="explode"]'), services: $('[data-chapter="services"]'), book: $('[data-chapter="book"]') };
let gl = null;
function hasWebGL() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } }
const lowPower = (navigator.connection && navigator.connection.saveData) || (navigator.deviceMemory && navigator.deviceMemory < 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 3);
const wantGL = !qs.has('poster') && (qs.has('capture') || qs.has('gl') || (!reduced && !lowPower)) && hasWebGL();

function stageProgress() {
  const y = scrollY, top = wrap.offsetTop, vh = stage.offsetHeight; // pinned scene height (stable px), not innerHeight, which moves with the toolbar
  const k = [[top, 0], [chapters.explode.offsetTop + top, 0.4], [chapters.services.offsetTop + top, 0.66], [chapters.book.offsetTop + top, 0.9], [top + wrap.offsetHeight - vh, 1]];
  if (y <= k[0][0]) return 0;
  for (let i = 1; i < k.length; i++) if (y <= k[i][0]) { const [a, pa] = k[i - 1], [b, pb] = k[i]; return pa + (pb - pa) * ((y - a) / Math.max(1, b - a)); }
  return 1;
}
function onStageScroll() {
  const p = stageProgress();
  stage.classList.toggle('is-b', p > 0.3 && p < 0.86);
  if (gl) gl.setProgress(p);
  const inSvc = p > 0.5 && p < 0.84;
  if (gl) gl.setHighlight(inSvc ? currentSvc : (labelHl || null));
}
addEventListener('scroll', onStageScroll, { passive: true });
addEventListener('resize', onStageScroll);

let labelHl = null;
async function bootGL() {
  if (!wantGL) return;
  try {
    await document.fonts.load('900 40px "ISP Display"'); await document.fonts.load('500 20px "ISP Mono"'); await document.fonts.load('600 20px "ISP Display"');
    const mod = await import('./hero3d.js?v=20261124v51');
    const labels = Object.fromEntries($$('[data-part]', stage).map(b => [b.dataset.part, b]));
    gl = mod.start($('[data-gl]'), {
      anchor: $('[data-anchor]'), labels, font: '"ISP Display"', mono: '"ISP Mono"', capture: qs.has('capture'), still: qs.has('capture'),
      onPick: name => pickPart(name, true),
      lowPower: !!lowPower || (navigator.hardwareConcurrency || 8) <= 4, debug: qs.has('fps'),
      onLost: () => stage.classList.remove('has-gl'), onRestored: () => stage.classList.add('has-gl'), // lost WebGL context → poster, never a blank stage
    });
    window.__isp3d = { mod, gl };
    stage.classList.add('has-gl');
    $$('[data-part]', stage).forEach(b => { b.tabIndex = 0; b.addEventListener('click', () => pickPart(b.dataset.part, true)); });
    onStageScroll();
    if (qs.has('capture')) window.__cap = (p, hl) => { gl.renderAt(p, hl); return $('[data-gl]').toDataURL('image/webp', 0.9); };
  } catch (e) { console.info('3D off, poster mode', e && e.message); }
}
if (!wantGL) { const h = $('[data-gl-hint]'); if (h) h.textContent = 'Оберіть послугу нижче — розповімо, що саме робимо.'; }

/* services */
const SVC = {
  battery: { t: 'Заміна АКБ', s: 'Заміна АКБ', pts: ['Телефон не доживає до вечора або вимикається на холоді', 'У налаштуваннях низький «Максимальний заряд» чи напис «Сервіс»', 'Після заміни показуємо новий % у налаштуваннях при вас'] },
  screen: { t: 'Переклеювання скла', s: 'Переклеювання скла', pts: ['Скло тріснуло, а зображення і сенсор працюють', 'Міняємо лише скло — оригінальний дисплей залишається', 'Наші роботи — у хайлайті «Переклей скла» в Instagram'] },
  back: { t: 'Заднє скло', s: 'Заднє скло', pts: ['Тріщина на задній панелі, скло кришиться по краях', 'Замінюємо скло, поки тріщина не пішла далі', 'Ставимо нову проклейку корпусу'] },
  board: { t: 'Контролер заряджання', s: 'Контролер заряджання', pts: ['Не заряджається, заряджається через раз або не бачить кабель', 'Гріється під час зарядки', 'Діагностуємо плату і міняємо мікросхему контролера'] },
  frame: { t: 'Полірування корпусу', s: 'Полірування корпусу', pts: ['Подряпини та потертості на рамці', 'Повертаємо товарний вигляд — для себе чи перед продажем', 'Робимо, поки чекаєте, якщо майстер вільний'] },
};
let currentSvc = 'battery';
function renderSvc(k) {
  currentSvc = k; const s = SVC[k];
  $$('[data-svc]').forEach(b => { const on = b.dataset.svc === k; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; }); // roving tabindex: Tab enters the selected tab, arrows move
  $('[data-svc-panel]').innerHTML = `<h3>${s.t}</h3><ul>${s.pts.map(p => `<li>${p}</li>`).join('')}</ul>
    <p class="svc__price">${icon('wrench')}Ціну скаже майстер після діагностики</p>
    <a class="btn btn--red btn--sm" href="#zapys" data-svc-book="${s.s}">Записатися: ${s.t[0].toLowerCase() + s.t.slice(1)}${icon('arrow')}</a>`;
  onStageScroll();
}
function pickPart(name, scroll) {
  renderSvc(name);
  if (scroll) chapters.services.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}
$('[data-svc-list]').addEventListener('click', e => { const b = e.target.closest('[data-svc]'); if (b) renderSvc(b.dataset.svc); });
$('[data-svc-list]').addEventListener('keydown', e => {
  const tabs = $$('[data-svc]'), i = tabs.findIndex(t => t.dataset.svc === currentSvc);
  const j = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? (i + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1;
  if (j >= 0) { const n = tabs[j]; renderSvc(n.dataset.svc); n.focus({ preventScroll: true }); e.preventDefault(); }
});
$('[data-svc-panel]').addEventListener('click', e => { // «Записатися: …» → the booking form with this service, then the first field gets focus (after the scroll, so it never jumps)
  const a = e.target.closest('[data-svc-book]'); if (!a) return;
  e.preventDefault(); $('[data-repair-service]').value = a.dataset.svcBook;
  const fld = $('[data-repair-form] [name=model]'), go = () => { removeEventListener('scrollend', go); clearTimeout(t); if (document.activeElement !== fld) fld.focus({ preventScroll: true }); };
  let t = 0;
  if (reduced) { noSmooth(() => $('#zapys').scrollIntoView({ block: 'start' })); go(); return; }
  addEventListener('scrollend', go); t = setTimeout(go, 1200); // scrollend is missing in older WebKit
  $('#zapys').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
renderSvc('battery');

/* repair booking: days + slots from real hours; booked slots come from saved requests */
{
  const form = $('[data-repair-form]'), daysEl = $('[data-days]'), timesEl = $('[data-times]');
  const wdS = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const now = kyivNow();
  const base = new Date(now.ymd + 'T12:00:00');
  const days = Array.from({ length: 7 }, (_, i) => { const d = new Date(base); d.setDate(d.getDate() + i); return { d, wd: d.getDay(), key: d.toISOString().slice(0, 10), i }; });
  daysEl.innerHTML = days.map((x, i) => `<label class="chip"><input type="radio" name="day" value="${x.key}" ${i === 0 ? 'checked' : ''}><span>${i === 0 ? 'Сьогодні' : i === 1 ? 'Завтра' : wdS[x.wd]} <small>${x.d.getDate()}.${String(x.d.getMonth() + 1).padStart(2, '0')}</small></span></label>`).join('');
  function paintTimes() {
    const key = form.day.value, x = days.find(d => d.key === key), [o, c] = HOURS[x.wd];
    const taken = new Set(S.requests().filter(r => r.type === 'repair' && r.day === key).map(r => r.time));
    let html = '', first = true;
    if (x.i === 0 && now.h + 1 >= c) { // nothing left today: say so and move to tomorrow
      const t0 = form.querySelector('[name=day]'); t0.disabled = true; t0.closest('.chip').title = 'На сьогодні вільних годин немає';
      if (t0.checked) { form.querySelectorAll('[name=day]')[1].checked = true; return paintTimes(); }
    }
    for (let h = o; h < c; h++) {
      const t = `${h}:00`, past = x.i === 0 && (h < now.h + 1), dis = past || taken.has(t);
      html += `<label class="chip"><input type="radio" name="time" value="${t}" ${dis ? 'disabled' : ''} ${!dis && first ? 'checked' : ''}><span>${t}</span></label>`;
      if (!dis) first = false;
    }
    if (first && x.i === 0 && !paintTimes.once) { paintTimes.once = 1; form.querySelectorAll('[name=day]')[1].checked = true; return paintTimes(); }
    timesEl.innerHTML = first ? '<p class="mono">На цей день вільних годин немає — оберіть інший.</p>' : html;
  }
  daysEl.addEventListener('change', paintTimes); paintTimes();
  form.addEventListener('submit', e => {
    e.preventDefault();
    const err = $('[data-err]', form), ok = $('[data-ok]', form); err.hidden = true;
    const fail = m => { err.textContent = m; err.hidden = false; ok.hidden = true; };
    const bad = [];
    if (!form.model.value.trim()) bad.push(form.model);
    if (!form.name.value.trim()) bad.push(form.name);
    if (!phoneOk(form.phone.value)) bad.push(form.phone);
    $$('input', form).forEach(i => i.removeAttribute('aria-invalid')); bad.forEach(i => i.setAttribute('aria-invalid', 'true'));
    if (!form.time || !form.querySelector('[name=time]:checked')) { fail('Оберіть вільну годину.'); return; }
    if (bad.length) { fail(bad[0] === form.phone ? PHONE_ERR : 'Заповніть позначені поля.'); bad[0].focus(); return; }
    const r = S.addRequest({ type: 'repair', model: form.model.value.trim(), service: form.service.value, day: form.day.value, time: form.querySelector('[name=time]:checked').value, name: form.name.value.trim(), phone: phoneNorm(form.phone.value), status: 'Записано' });
    ok.innerHTML = `${icon('check')}<span>Записали: ${esc(r.service)}, ${r.day.split('-').reverse().slice(0, 2).join('.')} о ${r.time}. Дякуємо! Майстер зателефонує на ${esc(r.phone)} протягом робочого дня (${openState().when}), щоб підтвердити час.</span>`;
    ok.hidden = false; paintTimes(); lockUntilEdit(form);
  });
}

/* ---------------- film slot + synced overlays ----------------
   Files in assets/film/, switched on by "ready": true in assets/film/film.json.
   Cue times (s) live in data-cue="start,end" in the markup; the film is 6 s at 30 fps. */
const FILM_ANCHORS = { // normalised position of the part in the video frame: [time s, x, y] keyframes (the battery slides into the frame during its cue)
  landscape: { battery: [[1.2, 0.45, 0.62], [1.7, 0.47, 0.6], [1.95, 0.525, 0.6]], board: [[2.2, 0.53, 0.25]] }, // measured on film v4 16:9
  portrait: { battery: [[1.2, 0.39, 0.59], [1.7, 0.47, 0.58], [1.95, 0.555, 0.58]], board: [[2.2, 0.555, 0.34]] }, // measured on film v4 9:16
};
const lerpKey = (keys, t) => { if (t <= keys[0][0]) return keys[0].slice(1); for (let i = 1; i < keys.length; i++) if (t <= keys[i][0]) { const [ta, xa, ya] = keys[i - 1], [tb, xb, yb] = keys[i], k = (t - ta) / (tb - ta); return [xa + (xb - xa) * k, ya + (yb - ya) * k]; } return keys[keys.length - 1].slice(1); };
{
  const sec = $('[data-film]'), v = $('[data-film-video]'), tog = $('[data-film-toggle]');
  const cues = $$('[data-cue]', sec).map(el => { const [a, b] = el.dataset.cue.split(',').map(Number); return { el, a, b, anchor: el.dataset.anchor }; });
  const svg = $('[data-leaders]', sec), path = $('[data-leader-path]', svg), dotA = $('[data-leader-a]', svg), dotB = $('[data-leader-b]', svg);
  const portrait = matchMedia('(max-aspect-ratio: 1/1)').matches;
  let cands = [], tried = 0, ready = false, started = false, inView = false, loopOn = false, lastAnchor = null;
  const tryNext = () => {
    while (tried < cands.length) { const f = cands[tried++]; const type = f.split('?')[0].endsWith('webm') ? 'video/webm' : 'video/mp4'; if (v.canPlayType(type)) { v.src = 'assets/film/' + f; v.load(); return; } }
  };
  function anchorXY(name) {
    const r = sec.getBoundingClientRect(), vw = v.videoWidth || 16, vh = v.videoHeight || 9;
    const set = vw >= vh ? FILM_ANCHORS.landscape : FILM_ANCHORS.portrait, [nx, ny] = lerpKey(set[name], v.currentTime);
    const sc = Math.max(r.width / vw, r.height / vh), ox = (r.width - vw * sc) / 2, oy = (r.height - vh * sc) / 2;
    return [ox + nx * vw * sc, oy + ny * vh * sc];
  }
  function drawLeader(cue) {
    if (!cue) { svg.classList.remove('is-on'); lastAnchor = null; return; }
    const r = sec.getBoundingClientRect(), lr = $('.ln', cue.el).getBoundingClientRect();
    const [ax, ay] = anchorXY(cue.anchor);
    const mobile = r.width < 861;
    let lx, ly, d;
    if (mobile) { lx = lr.left - r.left + 6; ly = lr.top - r.top - 30; const ey = Math.max(ay + 24, ly - 40); d = `M${lx} ${ly} V${ey} L${ax} ${ay}`; }
    else { lx = lr.right - r.left + 18; ly = lr.top - r.top + lr.height / 2; const ex = Math.min(ax - 36, Math.max(lx + 40, ax - 120)); d = `M${lx} ${ly} H${ex} L${ax} ${ay}`; }
    svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`);
    if (lastAnchor !== cue) { svg.classList.remove('is-on'); path.setAttribute('d', d); const len = path.getTotalLength(); svg.style.setProperty('--len', len.toFixed(0)); void path.getBoundingClientRect(); requestAnimationFrame(() => svg.classList.add('is-on')); lastAnchor = cue; }
    else path.setAttribute('d', d);
    dotA.setAttribute('cx', ax); dotA.setAttribute('cy', ay); dotB.setAttribute('cx', lx); dotB.setAttribute('cy', ly);
  }
  function sync() {
    const t = v.currentTime; let lab = null;
    cues.forEach(c => { const on = t >= c.a && t < c.b; c.el.classList.toggle('is-on', on); if (on && c.anchor) lab = c; });
    drawLeader(lab);
  }
  function tick() {
    if (!loopOn) return;
    sync();
    if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(tick); else requestAnimationFrame(tick);
  }
  const startLoop = () => { if (loopOn) return; loopOn = true; tick(); };
  const stopLoop = () => { loopOn = false; };
  const goStatic = on => { sec.classList.toggle('is-static', on); if (on) { cues.forEach(c => c.el.classList.remove('is-on')); drawLeader(null); } };
  v.addEventListener('error', tryNext);
  v.addEventListener('loadeddata', () => { ready = true; sec.classList.add('has-video'); tog.hidden = false; if (inView && !reduced) v.play().catch(() => { }); });
  v.addEventListener('playing', () => { goStatic(false); startLoop(); });
  v.addEventListener('pause', () => { stopLoop(); });
  v.addEventListener('seeked', () => { if (!sec.classList.contains('is-static')) sync(); });
  addEventListener('resize', () => { if (lastAnchor) { const c = lastAnchor; lastAnchor = null; drawLeader(c); } });
  async function start() {
    try {
      const m = await (await fetch('assets/film/film.json', { cache: 'no-cache' })).json();
      if (!m.ready) return;
      cands = portrait ? [...(m.portrait || []), ...(m.landscape || [])] : (m.landscape || []);
      const pst = portrait && m.posterPortrait ? m.posterPortrait : m.poster; if (pst) { v.poster = 'assets/film/' + pst; v.preload = 'auto'; }
      if (pst) { const st = $('.film__still', sec); st.src = 'assets/film/' + pst; st.style.objectPosition = 'center'; }
      tryNext();
    } catch { }
  }
  new IntersectionObserver(([en]) => {
    inView = en.isIntersecting;
    if (inView && !started) { started = true; start(); }
    if (ready) { if (inView && !reduced && tog.getAttribute('aria-pressed') !== 'true') v.play().catch(() => { }); else v.pause(); }
  }, { rootMargin: '200px 0px', threshold: 0 }).observe(sec);
  if (reduced) { tog.setAttribute('aria-pressed', 'true'); tog.textContent = 'Відтворити'; }
  tog.addEventListener('click', () => {
    const p = tog.getAttribute('aria-pressed') !== 'true'; tog.setAttribute('aria-pressed', p); tog.textContent = p ? 'Відтворити' : 'Пауза';
    if (p) { v.pause(); goStatic(true); } else { v.play().catch(() => { }); } // paused = the end card with «Дивитись у каталозі» stays visible
  });
  // fill the unit line from the real listing
  window.__fillFilmUnit = () => {
    const l = byId('Df4qevaMr-N'); if (!l) return;
    $('[data-unit-spec]', sec).textContent = `${l.model} ${memL(l.mem)} · стан ${String(l.score).replace('.', ',')} | 10 · АКБ ${l.batt}% · ${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}`;
  };
}

/* ---------------- catalog ---------------- */
const F = { models: new Set(), colors: new Set(), cats: new Set(), gens: new Set(), vars: new Set(), mems: new Set(), conds: new Set(), sims: new Set(), score: 8, batt: 80, pmin: 5000, pmax: 95000, sealed: false, fav: false, sort: 'feed' };
const SCORE_MIN = 8, BATT_MIN = 80, P_MIN = 5000, P_MAX = Math.max(20000, Math.ceil(Math.max(...S.listings().map(l => +l.price || 0)) / 5000) * 5000); // slider top = real max, rounded up; at the top = no upper limit
F.pmax = P_MAX; F.quick = new Set();
/* quick pills above the results (AND-combined, counted live within the other filters) */
const QUICK = [
  ['newbatt', 'Нова батарея', l => !l.isNew && (l.batt === 100 || !!l.battNew || /новий акумулятор/i.test(l.service || ''))],
  ['sealed', 'Герметичні', l => !!l.sealed],
  ['u20', 'До 20 000 ₴', l => l.price <= 20000],
  ['likenew', 'Майже нові 9,8+', l => !l.isNew && l.score != null && l.score >= 9.8],
  ['new', 'Нові', l => condGroup(l) === 'Новий'],
];
const MAX_N = 14; // «ціна в місяць» на картках: Укрсиб, до 14 платежів
const perMonth = l => Math.ceil(l.price / MAX_N);
const grade = l => l.isNew || l.score == null ? null : l.score >= 9.8 ? ['Ідеальний', 4] : l.score >= 9.4 ? ['Відмінний', 3] : l.score >= 9 ? ['Хороший', 2] : ['Нормальний', 1];
const gradeHTML = l => { const g = grade(l); if (!g || condGroup(l) === 'Майже новий') return ''; return `<span class="card__grade" title="Стан ${String(l.score).replace('.', ',')} з 10"><svg viewBox="0 0 14 12" aria-hidden="true">${[0, 1, 2, 3].map(i => `<rect x="${i * 3.6}" y="${9 - i * 3}" width="2.6" height="${3 + i * 3}" rx="1" ${i < g[1] ? '' : 'opacity=".25"'}/>`).join('')}</svg>${g[0]}</span>`; };
let FAV = new Set(JSON.parse(localStorage.getItem('ispayal.fav') || '[]'));
let CMP = [];
const saveFav = () => { localStorage.setItem('ispayal.fav', JSON.stringify([...FAV])); $('[data-fav-count]').textContent = FAV.size; };
const CATS = { iphone: 'iPhone', watch: 'Apple Watch', airpods: 'AirPods', mac: 'MacBook' };
const unitWord = n => plural(n, 'позиція', 'позиції', 'позицій');
const igUrl = l => l.code ? `https://www.instagram.com/p/${l.code}/` : '';

function chipGroup(el, values, set, label = v => v) {
  el.innerHTML = values.map(v => `<button type="button" class="chipb" aria-pressed="${set.has(v)}" data-v="${esc(v)}">${esc(label(v))}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('.chipb'); if (!b) return; const raw = b.dataset.v; const v = values.find(x => String(x) === raw); set.has(v) ? set.delete(v) : set.add(v); b.setAttribute('aria-pressed', set.has(v)); renderGrid(); };
}
function buildFilters() {
  const cnt = c => LIST.filter(l => l.cat === c).length;
  chipGroup($('[data-fl-cat]'), Object.keys(CATS).filter(cnt), F.cats, c => `${CATS[c]} · ${cnt(c)}`);
  chipGroup($('[data-fl-model]'), GENS(), F.gens, g => 'iPhone ' + g);
  chipGroup($('[data-fl-var]'), VARS().filter(v => LIST.some(l => l.cat === 'iphone' && variant(l.model) === v)), F.vars, v => v);
  chipGroup($('[data-fl-mem]'), MEMS(), F.mems, memL);
  chipGroup($('[data-fl-cond]'), ['Новий', 'Майже новий', 'б/у', 'Під замовлення'].filter(c => LIST.some(l => condGroup(l) === c)), F.conds, c => c === 'б/у' ? 'Вживаний' : c);
  chipGroup($('[data-fl-sim]'), ['Фіз', 'eSIM'].filter(s => LIST.some(l => l.sim === s)), F.sims, v => v === 'Фіз' ? 'Фізична SIM' : 'eSIM');
  const sc = $('[data-fl-score]'), bt = $('[data-fl-batt]'), a = $('[data-fl-pmin]'), b = $('[data-fl-pmax]');
  sc.min = SCORE_MIN; a.min = b.min = P_MIN; a.max = b.max = P_MAX;
  sc.value = F.score; bt.value = F.batt; a.value = F.pmin; b.value = F.pmax;
  const paint = () => {
    F.score = +sc.value; F.batt = +bt.value;
    let lo = +a.value, hi = +b.value; if (lo > hi - 1000) { if (document.activeElement === a) a.value = lo = hi - 1000; else b.value = hi = lo + 1000; }
    F.pmin = lo; F.pmax = hi;
    $('[data-o-score]').textContent = F.score <= SCORE_MIN ? 'будь-якої' : F.score.toFixed(1).replace('.', ','); $('[data-o-batt]').textContent = F.batt <= BATT_MIN ? 'будь-якого %' : F.batt + '%';
    const w = $('[data-o-word]'); if (w) w.textContent = F.score <= SCORE_MIN ? '' : F.score >= 9.8 ? '· Ідеальний' : F.score >= 9.4 ? '· Відмінний' : F.score >= 9 ? '· Хороший' : '· Нормальний';
    const bf = $('[data-batt-fill]'); if (bf) { bf.style.transform = `scaleX(${F.batt <= BATT_MIN ? 0.25 : (F.batt - 60) / 40})`; bf.parentElement.classList.toggle('is-full', F.batt >= 95); }
    $$('[data-hist] i').forEach(i => i.classList.toggle('is-in', +i.dataset.hi >= lo && +i.dataset.lo <= hi));
    $('[data-o-price]').textContent = `${fmt(lo)} – ${fmt(hi)} ₴`;
    const dual = $('[data-dual]'); dual.style.setProperty('--a', ((lo - P_MIN) / (P_MAX - P_MIN) * 100) + '%'); dual.style.setProperty('--b', ((hi - P_MIN) / (P_MAX - P_MIN) * 100) + '%');
    rangeFill(sc); rangeFill(bt);
  };
  { // price histogram of real prices behind the slider
    const bins = 28, step = (P_MAX - P_MIN) / bins, cnt = Array(bins).fill(0);
    LIST.forEach(l => { const k = Math.min(bins - 1, Math.max(0, Math.floor((l.price - P_MIN) / step))); cnt[k]++; });
    const mx = Math.max(...cnt, 1);
    $('[data-hist]').innerHTML = cnt.map((c, k) => `<i data-lo="${P_MIN + k * step}" data-hi="${P_MIN + (k + 1) * step}" style="height:${c ? 12 + c / mx * 88 : 4}%"></i>`).join('');
  }
  // dragging a slider used to re-render the grid on every pixel: the list height changed mid-drag and the page jumped.
  // Now: labels update instantly, the grid re-renders at most every 180 ms, and the catalog keeps its height until the thumb is released.
  const main = $('.cat__main'); let rt = 0, rel = 0;
  const lockH = () => { if (main && !main.style.minHeight) main.style.minHeight = main.offsetHeight + 'px'; clearTimeout(rel); };
  const freeH = () => { clearTimeout(rel); rel = setTimeout(holdCatalog, 900); };
  [sc, bt, a, b].forEach(i => {
    i.oninput = () => { paint(); lockH(); clearTimeout(rt); rt = setTimeout(renderGrid, 180); };
    i.onchange = () => { paint(); clearTimeout(rt); renderGrid(); freeH(); };
  });
  $('[data-fl-sealed]').checked = F.sealed; $('[data-fl-sealed]').onchange = e => { F.sealed = e.target.checked; renderGrid(); };
  paint();
}
/* catalog price: typed «від / до» next to the two thumbs (any amount, step 100) */
function syncPT() { const lo = $('[data-fl-plo]'), hi = $('[data-fl-phi]'); if (!lo || document.activeElement === lo || document.activeElement === hi) return; lo.value = fmt(+$('[data-fl-pmin]').value) + ' ₴'; hi.value = fmt(+$('[data-fl-pmax]').value) + ' ₴'; }
{
  const lo = $('[data-fl-plo]'), hi = $('[data-fl-phi]'), a = $('[data-fl-pmin]'), b = $('[data-fl-pmax]');
  if (lo) {
    const put = () => { const g = x => parseInt(x.value.replace(/\D/g, ''), 10); let x = g(lo), y = g(hi); if (isNaN(x)) x = P_MIN; if (isNaN(y)) y = P_MAX; x = Math.max(P_MIN, Math.min(P_MAX, Math.round(x / 100) * 100)); y = Math.max(P_MIN, Math.min(P_MAX, Math.round(y / 100) * 100)); if (x > y) [x, y] = [y, x];
      a.value = x; b.value = y; b.focus({ preventScroll: true }); a.dispatchEvent(new Event('input')); document.activeElement.blur(); syncPT(); };
    [lo, hi].forEach(i => { i.addEventListener('change', put); i.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); put(); } }); i.addEventListener('focus', () => i.select()); });
    [a, b].forEach(i => i.addEventListener('input', syncPT));
  }
}
function passScore(l) { return F.score <= SCORE_MIN || l.isNew || (l.score != null && l.score >= F.score - 1e-9); }
function passBatt(l) { return F.batt <= BATT_MIN || l.isNew || (l.batt != null && l.batt >= F.batt); }
function filtered() {
  const a = LIST.filter(l =>
    (!F.cats.size || F.cats.has(l.cat)) && (!F.models.size || F.models.has(l.model)) && (!F.colors.size || F.colors.has(l.color)) &&
    (!F.gens.size || (l.cat === 'iphone' && F.gens.has(gen(l.model)))) && (!F.vars.size || (l.cat === 'iphone' && F.vars.has(variant(l.model)))) &&
    (!F.mems.size || F.mems.has(l.mem)) && (!F.conds.size || F.conds.has(condGroup(l))) && (!F.sims.size || F.sims.has(l.sim)) &&
    passScore(l) && passBatt(l) && l.price >= F.pmin && (F.pmax >= P_MAX || l.price <= F.pmax) && (!F.sealed || l.sealed) && (!F.fav || FAV.has(l.id)) &&
    (!F.quick.size || [...F.quick].every(k => QUICK.find(q => q[0] === k)[2](l))) && (!F.q || qTest(F.q, l)));
  const nz = v => v == null ? -1 : v;
  const s = { feed: (x, y) => x.order - y.order, cheap: (x, y) => x.price - y.price, exp: (x, y) => y.price - x.price, batt: (x, y) => nz(y.batt) - nz(x.batt) || nz(x.cycles) - nz(y.cycles), score: (x, y) => nz(y.score) - nz(x.score) }[F.sort];
  const sr = l => statusOf(l) === 'sold' ? 1 : 0;
  return a.sort((x, y) => sr(x) - sr(y) || s(x, y));
}
function ringSVG(pct, size = 64, stroke = 6, col = '#ff2a2f') {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return `<svg viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#e4e2dc" stroke-width="${stroke}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${(c * pct / 100).toFixed(1)} ${c.toFixed(1)}"/></svg>`;
}
function battText(l) {
  if (l.cycles != null) return `${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}${/замін/i.test(l.battRaw) ? ' · замінений' : ''}`;
  if (l.battNew) return /замін/i.test(l.battRaw) ? 'замінений' : 'новий акумулятор';
  return ''; // cycles not stated in the post: say nothing rather than show an empty value
}
/* drawn devices for non-phones (generic, original) */
const thumbSVG = l => deviceSVG(l).replace(/<text[\s\S]*?<\/text>/g, ''); // thumbnails: no drawn wordmark, so it never leaks into an option's / button's text
function deviceSVG(l, big) {
  const c = SWATCH[l.tint] || '#bbb', id = 'g' + l.id.replace(/\W/g, '') + (big ? 'b' : '');
  const defs = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient></defs>`;
  if (l.cat === 'watch') return `<svg class="dev" viewBox="0 0 200 250" aria-hidden="true">${defs}
    <path d="M70 8h60l6 52H64z" fill="${c}"/><path d="M64 190h72l-6 52H70z" fill="${c}"/><path d="M70 8h60l6 52H64zM64 190h72l-6 52H70z" fill="url(#${id})"/>
    <rect x="44" y="52" width="112" height="146" rx="34" fill="#cfcfd2"/><rect x="44" y="52" width="112" height="146" rx="34" fill="${l.tint === 'black' ? '#2b2b2e' : '#d9d9dc'}"/><rect x="44" y="52" width="112" height="146" rx="34" fill="url(#${id})"/>
    <rect x="53" y="61" width="94" height="128" rx="26" fill="#060606"/>
    <rect x="156" y="92" width="9" height="26" rx="4" fill="#9a9a9e"/><circle cx="161" cy="105" r="3" fill="#ff2a2f"/><rect x="157" y="132" width="6" height="30" rx="3" fill="#8a8a8e"/>
    <circle cx="100" cy="114" r="28" fill="none" stroke="#2a2a2a" stroke-width="7"/><circle cx="100" cy="114" r="28" fill="none" stroke="#ff2a2f" stroke-width="7" stroke-linecap="round" stroke-dasharray="130 176" transform="rotate(-90 100 114)"/>
    <text x="100" y="168" fill="#fff" font-family="ISP Mono,monospace" font-size="12" text-anchor="middle">iSPAYAL</text></svg>`;
  if (l.cat === 'airpods') return `<svg class="dev" viewBox="0 0 220 220" aria-hidden="true">${defs}
    <rect x="40" y="70" width="140" height="118" rx="44" fill="#f4f4f2"/><rect x="40" y="70" width="140" height="118" rx="44" fill="url(#${id})"/><path d="M40 112h140" stroke="#cfcfcb" stroke-width="2"/>
    <circle cx="110" cy="140" r="4" fill="#ff2a2f"/>
    <g transform="translate(62 18) rotate(-14)"><ellipse cx="18" cy="22" rx="17" ry="20" fill="#fbfbfa"/><rect x="10" y="30" width="15" height="48" rx="7.5" fill="#fbfbfa"/><ellipse cx="18" cy="22" rx="17" ry="20" fill="url(#${id})"/><circle cx="12" cy="18" r="4" fill="#2a2a2a"/></g>
    <g transform="translate(124 12) rotate(14)"><ellipse cx="18" cy="22" rx="17" ry="20" fill="#fbfbfa"/><rect x="11" y="30" width="15" height="48" rx="7.5" fill="#fbfbfa"/><ellipse cx="18" cy="22" rx="17" ry="20" fill="url(#${id})"/><circle cx="24" cy="18" r="4" fill="#2a2a2a"/></g></svg>`;
  return `<svg class="dev" viewBox="0 0 260 200" aria-hidden="true">${defs}
    <rect x="44" y="22" width="172" height="118" rx="9" fill="${c}"/><rect x="44" y="22" width="172" height="118" rx="9" fill="url(#${id})"/>
    <rect x="51" y="29" width="158" height="104" rx="4" fill="#070707"/>
    <text x="68" y="64" font-family="ISP Display,sans-serif" font-weight="900" font-size="17" fill="#fff"><tspan fill="#ff2a2f">i</tspan>SPAYAL</text>
    <rect x="68" y="76" width="70" height="5" rx="2.5" fill="#ff2a2f"/><rect x="68" y="88" width="104" height="4" rx="2" fill="#333"/><rect x="68" y="98" width="88" height="4" rx="2" fill="#333"/>
    <path d="M26 142h208l-10 16H36z" fill="${c}"/><path d="M26 142h208l-10 16H36z" fill="url(#${id})"/><rect x="112" y="142" width="36" height="5" rx="2.5" fill="#000" opacity=".18"/></svg>`;
}
/* real photos of the unit (listing.photos, see build-ispayal/photos_import.py); without them — the 3D render, never an empty box */
const BROKEN = new Set(); // photo URLs that failed to load: the render takes their place for the rest of the visit
const PH = l => S.photos(l).filter(u => !BROKEN.has(u));
const phAlt = (l, i) => `${S.title(l)}${l.color ? ' ' + l.color : ''} — фото цього екземпляра${i ? ', ' + (i + 1) : ''}`;
function photoImg(l, cls, { i = 0, eager = false, sizes = '(max-width:560px) 112px, (max-width:1100px) 46vw, 320px', alt } = {}) {
  const u = PH(l)[i], sm = S.photoSmall(u);
  return `<img class="${cls}" src="${esc(sm)}"${sm !== u ? ` srcset="${esc(sm)} 800w, ${esc(u)} 1600w" sizes="${sizes}"` : ''} alt="${esc(alt ?? phAlt(l, i))}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" data-ph="${esc(u)}">`;
}
function renderVis(l, big) {
  return l.cat === 'iphone' ? `<img src="assets/img/phones/${l.tint}.webp" alt="" width="560" height="700" loading="lazy">` : deviceSVG(l, big);
}
function visual(l, big, eager) { return PH(l).length ? photoImg(l, 'vis__photo', { eager }) : renderVis(l, big); }
const thumbVis = l => PH(l).length ? photoImg(l, 'th__photo', { sizes: '120px', alt: '' }) : l.cat === 'iphone' ? `<img src="assets/img/phones/${l.tint}.webp" alt="" width="560" height="700" loading="lazy">` : thumbSVG(l);
// a photo that does not load (moved, renamed, offline): swap in the render / drop the slide, so no box is left empty
document.addEventListener('error', e => {
  const im = e.target; if (!(im instanceof HTMLImageElement) || !im.dataset.ph) return;
  BROKEN.add(im.dataset.ph);
  const card = im.closest('.card'), slide = im.closest('[data-pg]');
  if (slide) { const d = $('[data-pass]'); if (d.open && passId) gallerySync(true); return; }
  const l = card ? byId(card.dataset.id) : null;
  if (card && l) { const vis = im.closest('.card__vis'); if (PH(l).length) im.outerHTML = photoImg(l, 'vis__photo', { eager: true }); else { vis.classList.remove('card__vis--photo'); $('.card__phn', vis)?.remove(); im.outerHTML = renderVis(l); } return; }
  const box = im.parentElement; if (box) { const id = box.closest('[data-open],[data-other],[data-cs-id]'); const ll = id && byId(id.dataset.open || id.dataset.other || id.dataset.csId); im.outerHTML = ll ? thumbVis(ll) : ''; }
}, true);
const STATUS = { available: 'Є в наявності', reserved: 'Заброньовано', sold: 'Продано' };
const statusOf = l => STATUS[l.status] ? l.status : 'available';
function statusHTML(l) { const st = statusOf(l); return `<span class="stat stat--${st}">${STATUS[st]}${st === 'available' ? ` <small>${l.added ? 'додано ' + esc(l.added) : 'на 24.11'}</small>` : ''}</span>`; }
const whatWord = l => l.cat === 'iphone' ? 'цей iPhone' : l.cat === 'watch' ? 'цей Apple Watch' : l.cat === 'airpods' ? 'ці AirPods' : 'цей MacBook';
function directBtn(l, attr, cls = 'btn btn--red') { return `<a class="${cls} btn--direct" href="${DIRECT}" target="_blank" rel="noopener" ${attr}="${l.id}" aria-label="Написати в Direct про ${whatWord(l)}: ${esc(S.title(l))}${l.color ? ' ' + esc(l.color) : ''}">${icon('direct')}<span>Написати в Direct</span></a>`; }
function tagHTML(l) {
  const g = condGroup(l), cls = g === 'Новий' ? 'card__tag--new' : g === 'Під замовлення' ? 'card__tag--order' : '';
  return `<span class="card__tag ${cls}">${esc(S.cond(l))}</span>`;
}
function svcList(l) { return l.service ? l.service.split(/\s*\+\s*/).filter(Boolean).map(x => x.replace(/^(п)ереклей скла/i, '$1ереклеювання скла')) : []; } // site wording; the caption generator keeps the post text
function cardHTML(l, eager) {
  const flags = [];
  if (l.sealed) flags.push(`<span class="flag flag--ok">${icon('drop')}Герметичний, без слідів ремонту</span>`);
  svcList(l).forEach(s => flags.push(`<span class="flag flag--svc">${icon('wrench')}${esc(s)}</span>`));
  if (l.note) flags.push(`<span class="flag flag--note">${esc(l.note)}</span>`);
  if (l.bonus) flags.push(`<span class="flag">${icon('gift')}${esc(l.bonus.replace(/\s*\*$/, ''))}</span>`);
  const hi = l.score >= 9.5;
  let pp = '';
  if (l.score != null || l.batt != null) {
    pp = `<div class="pp">
      ${l.score != null ? `<div><p class="pp__k">Стан</p><p class="pp__score"><b>${String(l.score).replace('.', ',')}</b><span>| 10</span></p><div class="bar ${hi ? 'is-hi' : ''}"><i style="width:${l.score * 10}%"></i></div></div>` : `<div><p class="pp__k">Стан</p><p class="pp__score"><span>не вказано</span></p></div>`}
      ${l.batt != null ? `<div class="ring" role="img" aria-label="АКБ ${l.batt}%">${ringSVG(l.batt, 64, 6, battCol(l.batt))}<b>${l.batt}%</b></div>` : ''}
      ${l.batt != null && battText(l) ? `<p class="pp__cyc"><span>АКБ</span><b>${battText(l)}</b></p>` : ''}</div>`;
  } else if (l.isNew) {
    pp = `<div class="pp pp--new"><p class="pp__k">${l.label && /замовл/i.test(l.label) ? 'Під замовлення' : 'Новий'}</p><p class="pp__newt">${esc(brand(S.warranty(l)) || 'Новий пристрій')}</p></div>`;
  }
  const ig = igUrl(l);
  return `<li class="card card--${statusOf(l)}" data-id="${l.id}">
    <button class="card__vis card__vis--${l.cat}${PH(l).length ? ' card__vis--photo' : ''}" type="button" data-open="${l.id}" aria-label="Паспорт: ${esc(S.title(l))} ${esc(l.color)}${PH(l).length ? ', ' + PH(l).length + ' фото' : ''}">${visual(l, false, eager)}${tagHTML(l)}${gradeHTML(l)}${PH(l).length > 1 ? `<span class="card__phn" aria-hidden="true">${icon('cam')}${PH(l).length}</span>` : ''}</button>${dotsHTML(l)}
    <div class="card__icons">
      <button class="iconbtn" type="button" data-fav="${l.id}" aria-pressed="${FAV.has(l.id)}" aria-label="В обране">${icon('heart')}</button>
      <button class="iconbtn" type="button" data-cmp="${l.id}" aria-pressed="${CMP.includes(l.id)}" aria-label="Додати до порівняння">${icon('compare')}</button>
    </div>
    <div class="card__body">
      ${statusHTML(l)}${l.special ? `<span class="spec" title="Діє при визначених умовах оплати">${icon('gift')}Спеціальна пропозиція</span>` : ''}${BEST.has(l.id) ? `<span class="bestv" title="Найменше ₴ за 1% АКБ серед таких самих моделей у видачі">${icon('battery')}Найкраща ціна за АКБ</span>` : ''}
      <p class="card__mini mono">${l.score != null ? 'стан ' + String(l.score).replace('.', ',') : esc(S.cond(l))}${l.batt != null ? ' · АКБ ' + l.batt + '%' : ''}${l.cycles != null ? ' · ' + l.cycles + ' ' + plural(l.cycles, 'цикл', 'цикли', 'циклів') : ''}</p>
      <h3 class="card__t">${esc(S.title(l)).replace(/ (\d+ [ГТ]Б)$/, ' · $1')}</h3>
      <p class="card__sub">${l.color ? `<span class="swatch" style="background:${SWATCH[l.tint] || '#999'}"></span>${esc(l.color)}` : ''}${l.sim ? ` · ${simL(l.sim)}` : ''}</p>
      ${pp}
      <div class="flags">${flags.join('')}</div>
      <div class="card__foot"><div><p class="price price--full">${fmt(l.price)}<small>₴</small></p><p class="price price--mo">від ${fmt(perMonth(l))}<small>₴/міс</small></p><p class="price__alt price__alt--mo">або від ${fmt(perMonth(l))} ₴/міс</p><p class="price__alt price__alt--full">повна ціна ${fmt(l.price)} ₴</p>${S.warranty(l) ? `<p class="card__warr">${esc(brand(S.warranty(l)))}</p>` : ''}</div></div>
      <div class="card__cta">${directBtn(l, 'data-direct')}</div>
      <div class="card__acts">
        <button class="btn btn--line" type="button" data-book="${l.id}" ${statusOf(l) === 'sold' ? 'disabled' : ''}>${statusOf(l) === 'sold' ? 'Продано' : statusOf(l) === 'reserved' ? 'Стати в чергу' : 'Забронювати'}</button>
        <a class="sq" href="tel:${PHONE}" aria-label="Подзвонити в магазин">${icon('phone')}</a>
      </div>
      <div class="card__links"><button class="card__open" type="button" data-open="${l.id}">Паспорт ${icon('arrow')}</button>${ig ? `<a class="card__ig" href="${ig}" target="_blank" rel="noopener">Пост в Instagram ↗</a>` : ''}</div>
    </div></li>`;
}
let BEST = new Set(), lastCount = null;
function computeBest(a) { // lowest ₴ per 1% of battery among the same model (needs 2+ units with a stated АКБ)
  const by = {}; a.filter(l => l.batt != null && !l.isNew && statusOf(l) !== 'sold').forEach(l => (by[l.model] = by[l.model] || []).push(l));
  const best = new Set();
  Object.values(by).forEach(g => { if (g.length < 2) return; g.sort((x, y) => x.price / x.batt - y.price / y.batt); best.add(g[0].id); });
  return best;
}
function tickCount(el, to) {
  const from = lastCount == null ? to : lastCount; lastCount = to;
  if (reduced || from === to) { tickCount.tok = (tickCount.tok || 0) + 1; el.textContent = to; return; }
  const t0 = performance.now(), d = 380, tok = (tickCount.tok = (tickCount.tok || 0) + 1);
  el.textContent = to; // final value immediately for assistive tech / throttled frames; the tick is decoration
  const f = now => { if (tok !== tickCount.tok) return; const k = Math.min(1, (now - t0) / d), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(from + (to - from) * e); if (k < 1) requestAnimationFrame(f); else el.textContent = to; };
  requestAnimationFrame(f);
}
const PAGE = 12, PAGED = matchMedia('(max-width:560px)'); let shown = PAGE, keepPage = false;
// Keep the catalog at least as tall as the part of it that is on screen: when a filter shrinks the list,
// the sections below (Trade-in, «Чому беруть») must not slide up under the visitor — that looked like the page jumping.
function holdCatalog() {
  const m = $('.cat__main'); if (!m) return;
  const r = m.getBoundingClientRect();
  if (r.top < innerHeight && r.bottom > 0) { const need = Math.ceil(innerHeight - r.top); m.style.minHeight = need > 0 ? need + 'px' : ''; }
  else m.style.minHeight = '';
}
/* nothing matches: a designed state with a way out (reset), a way forward (notify) and a human (Direct) — never a blank grid */
function emptyHTML() {
  const favOnly = F.fav && !FAV.size;
  if (favOnly) return `<li class="empty empty--fav"><span class="empty__ic" aria-hidden="true">${icon('heart')}</span><p class="empty__h">В обраному поки нічого</p><p class="empty__p">Натисніть ${icon('heart', 'ic ic--in')} на картці — телефон збережеться тут, навіть якщо закриєте сайт.</p><div class="empty__acts"><button type="button" class="btn btn--red" data-empty-reset>Показати всі позиції</button></div></li>`;
  return `<li class="empty"><span class="empty__ic" aria-hidden="true">${icon('filter')}</span><p class="empty__h">Під ці умови зараз нічого немає</p><p class="empty__p">Скиньте фільтри — або залиште контакт, і ми напишемо першими, щойно такий телефон зʼявиться, ще до посту в Instagram.</p>
    <div class="empty__acts"><button type="button" class="btn btn--red" data-empty-reset>${icon('x')}Скинути фільтри</button><button type="button" class="btn btn--line" data-notify-go>${icon('bell')}Повідомити, коли зʼявиться</button></div>
    <a class="empty__dm" href="${DIRECT}" target="_blank" rel="noopener">${icon('direct')}Підберемо вручну в Direct</a></li>`;
}
function renderGrid() {
  holdCatalog();
  const all = filtered(), grid = $('[data-grid]');
  if (!keepPage) shown = PAGE; keepPage = false;
  const a = PAGED.matches ? all.slice(0, shown) : all;
  BEST = computeBest(all);
  // FLIP: remember where cards were
  const gr = grid.getBoundingClientRect(), flip = !reduced && gr.bottom > 0 && gr.top < innerHeight && a.length <= 60;
  const before = {}; if (flip) $$('.card', grid).forEach(c => { before[c.dataset.id] = c.getBoundingClientRect(); });
  grid.innerHTML = a.length ? a.map((l, i) => cardHTML(l, i < 4) + (i === 5 && a.length > 6 ? INFO_TILES[0] : i === 13 && a.length > 14 ? INFO_TILES[1] : '')).join('') : emptyHTML();
  if (flip) $$('.card', grid).forEach((c, i) => {
    const b = before[c.dataset.id], r = c.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    if (b) { const dx = b.left - r.left, dy = b.top - r.top; if (dx || dy) c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' }); }
    else c.animate([{ opacity: 0, transform: 'scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: Math.min(i, 8) * 30, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
  });
  { const mb = $('[data-more]'); if (mb) { const left = all.length - a.length; mb.hidden = left <= 0; mb.innerHTML = `Показати ще ${Math.min(PAGE, left)}<small><span class="more__sep"> · </span>показано ${a.length} з ${all.length}</small>`; } }
  tickCount($('[data-count]'), all.length); $('[data-count-word]').textContent = unitWord(all.length);
  $('[data-count-btn]').textContent = all.length ? `Показати ${all.length} ${all.every(l => l.cat === 'iphone') ? 'iPhone' : unitWord(all.length)}` : 'Нічого не знайдено — змініть фільтри';
  const act = F.models.size + F.colors.size + F.cats.size + F.gens.size + F.vars.size + F.mems.size + F.conds.size + F.sims.size + (F.score > SCORE_MIN) + (F.batt > BATT_MIN) + (F.pmin > P_MIN || F.pmax < P_MAX) + F.sealed + F.quick.size + !!F.q;
  $('[data-active-count]').textContent = act ? act : '';
  const want = F.gens.size === 1 ? `iPhone ${[...F.gens][0]}${F.vars.size === 1 && [...F.vars][0] !== 'Базова' ? ' ' + [...F.vars][0] : ''}${F.mems.size === 1 ? ' ' + [...F.mems][0] : ''}${F.batt > BATT_MIN ? `, АКБ від ${F.batt}%` : ''}` : '';
  if (want) $('[data-notify-want]').value = want;
  paintQuick(); paintChips(); hpSync(); syncPT(); const tb = $('[data-ct-n]'); if (tb) { tb.textContent = act || ''; tb.hidden = !act; }
}
$('[data-sort]').addEventListener('change', e => { F.sort = e.target.value; renderGrid(); });
$('[data-more]') && $('[data-more]').addEventListener('click', () => { const n0 = shown; shown += PAGE; keepPage = true; renderGrid(); const c = $$('[data-grid] .card')[n0]; if (c) $('.card__vis', c).focus({ preventScroll: true }); });
addEventListener('load', paintRecent);
function paintQuick() {
  const box = $('[data-qpills]'); if (!box) return;
  const keep = F.quick; F.quick = new Set(); const base = filtered(); F.quick = keep;
  box.innerHTML = QUICK.filter(([k, t, f]) => F.quick.has(k) || LIST.some(f)).map(([k, t, f]) => { const others = [...F.quick].filter(x => x !== k).map(x => QUICK.find(q => q[0] === x)[2]); const n = base.filter(l => f(l) && others.every(g => g(l))).length;
    return `<button type="button" class="qpill" data-q="${k}" aria-pressed="${F.quick.has(k)}" ${!n && !F.quick.has(k) ? 'disabled' : ''}>${t} <b>${n}</b></button>`; }).join('');
}
$('[data-qpills]') && $('[data-qpills]').addEventListener('click', e => { const b = e.target.closest('[data-q]'); if (!b) return; const k = b.dataset.q; F.quick.has(k) ? F.quick.delete(k) : F.quick.add(k); renderGrid(); const nb = $(`[data-q="${k}"]`); if (nb && document.activeElement === document.body) nb.focus({ preventScroll: true }); });
$('[data-pmode]') && $('[data-pmode]').addEventListener('click', e => { const b = e.target.closest('[data-pm]'); if (!b) return; const mo = b.dataset.pm === 'mo'; $$('[data-pm]').forEach(x => x.setAttribute('aria-pressed', x === b)); $('[data-grid]').classList.toggle('is-monthly', mo); try { localStorage.setItem('ispayal.pmode', mo ? 'mo' : 'full'); } catch { } });
if (localStorage.getItem('ispayal.pmode') === 'mo' && $('[data-pmode]')) { $('[data-grid]').classList.add('is-monthly'); $$('[data-pm]').forEach(x => x.setAttribute('aria-pressed', x.dataset.pm === 'mo')); }
$('[data-grid]').addEventListener('click', e => { if (!e.target.closest('[data-empty-reset]')) return; F.fav = false; $('[data-fav-toggle]').setAttribute('aria-pressed', 'false'); resetFilters(); const c = $('.cat__count'); c.tabIndex = -1; c.focus({ preventScroll: true }); });
$('[data-grid]').addEventListener('click', e => { if (!e.target.closest('[data-notify-go]')) return; const f = $('[data-notify-form]'); f.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => f.want.focus({ preventScroll: true }), reduced ? 0 : 450); });

/* ---- catalog search: UA/RU/EN tokens → predicates («15 про макс 256 синій до 30») ---- */
F.q = '';
const QSYN = { 'про': 'pro', 'прo': 'pro', 'макс': 'max', 'мах': 'max', 'міні': 'mini', 'мини': 'mini', 'плюс': 'plus', 'ейр': 'air', 'эйр': 'air', 'еір': 'air', 'аір': 'air',
  'айфон': 'iphone', 'айфони': 'iphone', 'айфоны': 'iphone', 'iphone': 'iphone', 'аірподс': 'airpods', 'аирподс': 'airpods', 'эирподс': 'airpods', 'ейрподс': 'airpods', 'навушники': 'airpods', 'наушники': 'airpods', 'airpods': 'airpods',
  'годинник': 'watch', 'часы': 'watch', 'вотч': 'watch', 'watch': 'watch', 'макбук': 'mac', 'macbook': 'mac', 'mac': 'mac', 'ноутбук': 'mac', 'новий': 'new', 'новый': 'new', 'нові': 'new', 'новые': 'new', 'new': 'new',
  'герметичний': 'sealed', 'герметичный': 'sealed', 'есім': 'esim', 'есим': 'esim', 'esim': 'esim' };
const QCOL = [[/^(син|blue|блакит|голуб|sierra|sky|glacier|ультрамар|ultramar)/, ['blue', 'glacier', 'sierra', 'ultramarine']], [/^(чорн|черн|black|midnight|графіт|графит|graphite)/, ['black', 'gray']], [/^(біл|бел|white|starlight)/, ['white']],
  [/^(срібл|сріб|сереб|silver)/, ['silver']], [/^(натур|natural|титан)/, ['natural']], [/^(пісоч|песоч|золот|desert|gold)/, ['desert']], [/^(фіолет|фиолет|purple)/, ['purple']], [/^(рожев|розов|pink)/, ['pink']],
  [/^(зелен|green)/, ['green']], [/^(жовт|желт|yellow)/, ['yellow']], [/^(червон|красн|red)/, ['red']], [/^(помаранч|оранж|orange)/, ['orange']], [/^(сір|сер(?!еб)|gray|grey)/, ['gray']], [/^(бордо|burgundy)/, ['burgundy']]];
const QSTOP = new Set(['на', 'і', 'й', 'та', 'и', 'з', 'с', 'в', 'у', 'гб', 'gb', 'грн', '₴', 'apple', 'епл', 'эпл']);
const qCache = new Map();
// «iphone15» → «iphone 15», «15pro» → «15 pro», «айфон13промакс» → «айфон 13 про макс»: glued tokens split before parsing
const qNorm = q => q.toLowerCase().replace(/ʼ|'|’/g, '').replace(/(iphone|айфон)(?=\d)/g, '$1 ').replace(/(\d{2})(?=(pro|max|plus|mini|про|макс|плюс|міні))/g, '$1 ').replace(/(pro|про)(?=(max|макс))/g, '$1 ');
// ranking: a unit whose whole model name is in the query («iphone 15» → iPhone 15) comes before the bigger siblings (15 Pro, 15 Pro Max)
const qRank = (q, l) => { const t = new Set(['iphone', ...qNorm(q).split(/[\s,;/]+/).map(w => QSYN[w] || w)]); return l.model.toLowerCase().split(/\s+/).every(w => t.has(w)) ? 1 : 0; };
function qParse(q) {
  if (qCache.has(q)) return qCache.get(q);
  const raw = qNorm(q).replace(/(\d)\s*(гб|gb)\b/g, '$1').replace(/(\d)\s*(тб|tb)\b/g, '$1tb').replace(/(\d)\s*(к|k|тис\.?|тыс\.?)(?=\s|$)/g, '$1000').split(/[\s,;/]+/).filter(Boolean);
  const P = []; let mode = '';
  const words = m => m.toLowerCase().split(/\s+/);
  for (let i = 0; i < raw.length; i++) {
    let t = raw[i]; if (QSTOP.has(t)) continue;
    if (/^(до|<|до:|max)$/.test(t) && mode !== 'x') { mode = 'max'; continue; } if (/^(від|от|>|from)$/.test(t)) { mode = 'min'; continue; }
    if (/^\d+tb$/.test(t)) { const m = +t.replace('tb', '') * 1024; P.push(l => l.mem === m); mode = ''; continue; }
    if (/^\d+$/.test(t)) {
      let n = +t;
      if (mode) { if (n < 1000) n *= 1000; const md = mode; P.push(md === 'max' ? (l => l.price <= n) : (l => l.price >= n)); mode = ''; continue; }
      if ([64, 128, 256, 512, 1024].includes(n)) { P.push(l => l.mem === n); continue; }
      if (n >= 11 && n <= 18) { P.push(l => l.cat === 'iphone' && gen(l.model) === String(n)); continue; }
      if (n >= 1000) { P.push(l => l.price <= n); continue; }
    }
    mode = '';
    const m16e = t.match(/^(1[1-8])e$/); if (m16e) { P.push(l => l.cat === 'iphone' && new RegExp('iPhone ' + m16e[1] + 'e\\b').test(l.model)); continue; }
    const s = QSYN[t] || (t.length >= 4 ? Object.entries(QSYN).find(([k]) => k.startsWith(t) || t.startsWith(k))?.[1] : null) || t;
    if (s === 'iphone' || s === 'airpods' || s === 'watch' || s === 'mac') { const c = s; P.push(l => l.cat === c); continue; }
    if (s === 'new') { P.push(l => condGroup(l) === 'Новий'); continue; }
    if (s === 'sealed') { P.push(l => !!l.sealed); continue; }
    if (s === 'esim') { P.push(l => l.sim === 'eSIM'); continue; }
    if (['pro', 'max', 'mini', 'plus', 'air', 'e', 'se'].includes(s)) { const w = s; P.push(l => words(l.model).includes(w) || (w === 'air' && /air/i.test(l.model))); continue; }
    const col = t.length >= 3 && QCOL.find(([re]) => re.test(t)); if (col) { const tints = col[1], tt = t; P.push(l => tints.includes(l.tint) || (l.color || '').toLowerCase().includes(tt)); continue; }
    const tt = t; P.push(l => `${l.title} ${l.model} ${l.color} ${l.label} ${S.cond(l)}`.toLowerCase().includes(tt));
  }
  qCache.set(q, P); return P;
}
const qTest = (q, l) => qParse(q).every(f => f(l));
const qFind = q => LIST.filter(l => qTest(q, l)).sort((x, y) => (statusOf(x) === 'sold') - (statusOf(y) === 'sold') || qRank(q, y) - qRank(q, x) || x.order - y.order);
{
  const inp = $('[data-csearch]'), list = $('[data-cs-list]');
  if (inp) {
    let act = -1, hits = [];
    const close = () => { list.hidden = true; inp.setAttribute('aria-expanded', 'false'); inp.removeAttribute('aria-activedescendant'); act = -1; };
    const paint = () => {
      const q = inp.value.trim(); if (!q) return close();
      hits = qFind(q); const top = hits.slice(0, 5);
      list.innerHTML = (top.length ? top.map((l, i) => `<li role="option" id="cs-o${i}" class="cs__o" data-cs-id="${l.id}" aria-selected="false"><span class="cs__img">${thumbVis(l)}</span><span class="cs__t"><b>${esc(S.title(l))}</b> ${esc(l.color || '')}<small class="mono">${l.score != null ? 'стан ' + String(l.score).replace('.', ',') : esc(S.cond(l))}${l.batt != null ? ' · АКБ ' + l.batt + '%' : ''}${statusOf(l) !== 'available' ? ' · ' + STATUS[statusOf(l)].toLowerCase() : ''}</small></span><span class="cs__p">${fmt(l.price)} ₴</span></li>`).join('')
        : `<li class="cs__none" role="presentation">Нічого не знайшли за «${esc(q)}». Спробуйте «15 pro», «синій», «до 30».</li>`)
        + (hits.length ? `<li role="option" id="cs-all" class="cs__all" data-cs-all aria-selected="false">Показати всі ${hits.length} ${unitWord(hits.length)}${icon('arrow')}</li>` : '');
      list.hidden = false; inp.setAttribute('aria-expanded', 'true'); act = -1; inp.removeAttribute('aria-activedescendant');
    };
    const apply = () => {
      const q = inp.value.trim(); close();
      Object.assign(F, { score: SCORE_MIN, batt: BATT_MIN, pmin: P_MIN, pmax: P_MAX, sealed: false, fav: false, q });
      ['models', 'colors', 'cats', 'gens', 'vars', 'mems', 'conds', 'sims', 'quick'].forEach(k => F[k].clear()); $('[data-fav-toggle]').setAttribute('aria-pressed', 'false');
      buildFilters(); renderGrid(); paintPick();
    };
    const opts = () => $$('[role=option]', list);
    const mark = () => opts().forEach((o, i) => { o.setAttribute('aria-selected', i === act); if (i === act) { inp.setAttribute('aria-activedescendant', o.id); const r = o.getBoundingClientRect(), lr = list.getBoundingClientRect(); if (r.bottom > lr.bottom) list.scrollTop += r.bottom - lr.bottom; if (r.top < lr.top) list.scrollTop -= lr.top - r.top; } });
    inp.addEventListener('input', paint);
    inp.addEventListener('click', () => { if (inp.value.trim() && list.hidden) paint(); });
    inp.addEventListener('keydown', e => {
      const os = opts();
      if (e.key === 'ArrowDown' && !list.hidden) { act = Math.min(os.length - 1, act + 1); mark(); e.preventDefault(); }
      else if (e.key === 'ArrowUp' && !list.hidden) { act = Math.max(-1, act - 1); mark(); e.preventDefault(); }
      else if (e.key === 'Enter') { e.preventDefault(); const o = os[act]; if (o && o.dataset.csId) { close(); openPass(o.dataset.csId); } else apply(); }
      else if (e.key === 'Escape') { if (!list.hidden) { close(); e.stopPropagation(); } else if (inp.value) { inp.value = ''; if (F.q) apply(); } }
    });
    list.addEventListener('mousedown', e => e.preventDefault()); // keep focus in the field
    list.addEventListener('click', e => { const o = e.target.closest('[role=option]'); if (!o) return; if (o.dataset.csId) { close(); openPass(o.dataset.csId); } else apply(); });
    inp.addEventListener('blur', () => setTimeout(close, 120));
    $('[data-cs-form]').addEventListener('submit', e => { e.preventDefault(); apply(); });
    const ns = $('[data-nav-search]'); if (ns) ns.addEventListener('click', () => { inp.focus({ preventScroll: true }); $('[data-cs-form]').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); });
  }
}
/* active filter chips («15 Pro ×», «АКБ 90%+ ×», «Скинути все») */
function paintChips() {
  const box = $('[data-achips]'); if (!box) return;
  const c = [];
  if (F.q) c.push([`«${F.q}»`, () => { F.q = ''; const i = $('[data-csearch]'); if (i) i.value = ''; }]);
  F.cats.forEach(v => c.push([CATS[v], () => F.cats.delete(v)])); F.models.forEach(v => c.push([v.replace('iPhone ', ''), () => { F.models.delete(v); F.colors.clear(); }]));
  F.colors.forEach(v => c.push([v, () => F.colors.delete(v)])); F.gens.forEach(v => c.push(['iPhone ' + v, () => F.gens.delete(v)])); F.vars.forEach(v => c.push([v, () => F.vars.delete(v)]));
  F.mems.forEach(v => c.push([memL(v), () => F.mems.delete(v)])); F.conds.forEach(v => c.push([v === 'б/у' ? 'Вживаний' : v, () => F.conds.delete(v)])); F.sims.forEach(v => c.push([v === 'Фіз' ? 'Фізична SIM' : 'eSIM', () => F.sims.delete(v)]));
  if (F.score > SCORE_MIN) c.push([`Стан від ${F.score.toFixed(1).replace('.', ',')}`, () => { F.score = SCORE_MIN; }]);
  if (F.batt > BATT_MIN) c.push([`АКБ ${F.batt}%+`, () => { F.batt = BATT_MIN; }]);
  if (F.pmin > P_MIN || F.pmax < P_MAX) c.push([F.pmin > P_MIN ? `${fmt(F.pmin)} – ${fmt(F.pmax)} ₴` : `до ${fmt(F.pmax)} ₴`, () => { F.pmin = P_MIN; F.pmax = P_MAX; }]);
  if (F.sealed) c.push(['Герметичні', () => { F.sealed = false; }]);
  F.quick.forEach(k => c.push([QUICK.find(q => q[0] === k)[1], () => F.quick.delete(k)]));
  if (F.fav) c.push(['Обране', () => { F.fav = false; $('[data-fav-toggle]').setAttribute('aria-pressed', 'false'); }]);
  paintChips.fns = c.map(x => x[1]);
  // the row is always there and one line tall (it scrolls sideways): a row that appeared / grew above the grid pushed the page down 50px on every filter change (iOS has no scroll anchoring)
  box.innerHTML = c.length ? c.map(([t], i) => `<button type="button" class="achip" data-achip="${i}" aria-label="Прибрати фільтр: ${esc(t)}">${esc(t)}${icon('x')}</button>`).join('') + (c.length > 1 ? `<button type="button" class="linkbtn achips__all" data-achip-all>Скинути все</button>` : '') : `<span class="achips__none">${icon('filter')}Фільтри не обрано — показуємо всі позиції</span>`;
  box.hidden = false;
}
$('[data-achips]') && $('[data-achips]').addEventListener('click', e => {
  const b = e.target.closest('[data-achip],[data-achip-all]'); if (!b) return;
  const i = b.dataset.achip;
  if (b.hasAttribute('data-achip-all')) { F.fav = false; $('[data-fav-toggle]').setAttribute('aria-pressed', 'false'); resetFilters(); }
  else { paintChips.fns[+i](); buildFilters(); renderGrid(); paintPick(); }
  const n = $('[data-achip]') || $('.cat__count'); if (!n.matches('button')) n.tabIndex = -1; n.focus({ preventScroll: true });
});
/* colour dots: the same model + memory in other real colours; tap swaps the card in place */
function dotsHTML(l) {
  const sib = LIST.filter(o => o.cat === l.cat && o.model === l.model && o.mem === l.mem && o.color && statusOf(o) !== 'sold');
  const by = new Map([[l.color, l]]); sib.forEach(o => { if (o.color === l.color) return; const c = by.get(o.color); if (!c || o.price < c.price) by.set(o.color, o); });
  if (by.size < 2) return '<div class="card__dots" aria-hidden="true"></div>';
  return `<div class="card__dots" role="group" aria-label="Інші кольори ${esc(S.title(l))}">${[...by.values()].sort((x, y) => x.color.localeCompare(y.color)).map(o => `<button type="button" class="cdot ${o.id === l.id ? 'is-on' : ''}" data-swap="${o.id}" aria-pressed="${o.id === l.id}" style="--c:${SWATCH[o.tint] || '#999'}" title="${esc(o.color)} — ${fmt(o.price)} ₴" aria-label="${esc(o.color)}, ${fmt(o.price)} ₴"></button>`).join('')}<span class="cdots__n mono">${by.size} ${plural(by.size, 'колір', 'кольори', 'кольорів')}</span></div>`;
}
$('[data-grid]').addEventListener('click', e => {
  const b = e.target.closest('[data-swap]'); if (!b || b.classList.contains('is-on')) return;
  const card = b.closest('.card'), sib = byId(b.dataset.swap); if (!card || !sib) return;
  const h = card.offsetHeight, t = document.createElement('ul'); t.innerHTML = cardHTML(sib);
  const nc = t.firstElementChild; nc.style.minHeight = h + 'px'; card.replaceWith(nc); // never shrinks → nothing below moves up
  const f = nc.querySelector(`[data-swap="${sib.id}"]`); if (f) f.focus({ preventScroll: true });
});
const INFO_TILES = [
  `<li class="itile itile--trade"><p class="itile__k">${icon('swap')}Trade-in</p><h3 class="itile__h">Старий iPhone — у залік нового</h3><p class="itile__p">Оцінимо при вас у магазині — суму назвемо після огляду, без «знижок» на місці.</p>
    <div class="itile__mid" aria-hidden="true"><svg class="itile__art" viewBox="0 0 220 120"><rect x="18" y="14" width="56" height="96" rx="12" class="a-dim"/><rect x="146" y="10" width="60" height="102" rx="13" class="a-hi"/><circle cx="176" cy="40" r="4" class="a-dot"/><path d="M88 62h44m-10-10 10 10-10 10" class="a-arrow"/></svg></div>
    <ol class="itile__steps"><li><b>1</b>Приносите свій iPhone</li><li><b>2</b>Огляд при вас</li><li><b>3</b>Сума — в залік нового</li></ol>
    <a class="btn btn--red btn--sm itile__go" href="#trade-in">Розповісти про свій iPhone${icon('arrow')}</a></li>`,
  `<li class="itile itile--repair"><p class="itile__k">${icon('wrench')}Сервіс</p><h3 class="itile__h">Ремонт і заміна АКБ — запис онлайн</h3><p class="itile__p">Оберіть день і час. Ціну майстер скаже після діагностики — без вашого «так» нічого не робимо.</p>
    <div class="itile__mid"><div class="itile__ring" aria-hidden="true"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" class="r-bg"/><circle cx="60" cy="60" r="50" class="r-fg" pathLength="100" stroke-dasharray="79 100"/></svg><span>79%</span></div><p class="itile__note">Ємність АКБ нижче 80% — iPhone сам радить заміну батареї</p></div>
    <ul class="itile__list"><li>${icon('battery')}Заміна акумулятора</li><li>${icon('sun')}Переклеювання скла</li><li>${icon('chip')}Діагностика й ремонт</li></ul>
    <p class="itile__hours">Пн–Пт 9–19 · Сб 9–15 · Нд 11–16</p>
    <a class="btn btn--red btn--sm itile__go" href="#zapys">Записатися на ремонт${icon('arrow')}</a></li>`,
];
/* phone toolbar (sticky inside the catalog): sort · filters · price mode */
{
  const tb = $('[data-ctool]');
  if (tb) {
    const ss = $('[data-sort]'), cs = $('[data-ct-sort]'); cs.innerHTML = ss.innerHTML;
    const SHORT = { feed: 'Стрічка', cheap: 'Дешевші', exp: 'Дорожчі', batt: 'АКБ', score: 'Стан' };
    const syncSort = () => { cs.value = ss.value; $('[data-ct-sortv]').textContent = SHORT[ss.value] || ''; cs.setAttribute('aria-label', 'Сортування: ' + ss.selectedOptions[0].textContent); };
    cs.addEventListener('change', () => { ss.value = cs.value; ss.dispatchEvent(new Event('change')); syncSort(); });
    ss.addEventListener('change', syncSort); syncSort();
    const fb = $('[data-ct-filters]'); fb.addEventListener('click', () => { $('[data-filters-open]').click(); fb.setAttribute('aria-expanded', 'true'); });
    new MutationObserver(() => fb.setAttribute('aria-expanded', $('[data-filters]').classList.contains('is-open'))).observe($('[data-filters]'), { attributes: true, attributeFilter: ['class'] });
    const pm = $('[data-ct-pm]'), syncPm = () => pm.setAttribute('aria-pressed', $('[data-grid]').classList.contains('is-monthly'));
    pm.addEventListener('click', () => { const mo = !$('[data-grid]').classList.contains('is-monthly'); $(`[data-pm="${mo ? 'mo' : 'full'}"]`).click(); syncPm(); });
    $('[data-pmode]').addEventListener('click', () => setTimeout(syncPm)); syncPm();
  }
}

/* model picker: tiles with real min price + count, a live 3D preview that recolours, colour swatches */
let pickViewer = null, pickViewerLoading = false;
const avail = l => statusOf(l) !== 'sold';
function modelStats(m) {
  const u = LIST.filter(l => l.model === m), a = u.filter(avail);
  const min = Math.min(...(a.length ? a : u).map(l => l.price));
  const cheapest = (a.length ? a : u).find(l => l.price === min);
  return { n: a.length, min, tint: cheapest.tint };
}
function shortModel(m) { return m.replace('iPhone ', ''); }
function buildTiles() {
  const box = $('[data-tiles]'); if (!box) return;
  const models = MODELS();
  box.innerHTML = models.map(m => { const st = modelStats(m); return `<button type="button" role="option" class="tile" aria-selected="${F.models.has(m)}" data-model="${esc(m)}">
    <span class="tile__img"><img src="assets/img/phones/${st.tint}.webp" alt="" width="560" height="700" loading="lazy"></span>
    <span class="tile__name"><small>iPhone</small>${esc(shortModel(m))}</span>
    <span class="tile__price">від ${fmt(st.min)} ₴</span>
    <span class="tile__n">${st.n ? `${st.n} в наявності` : 'під замовлення'}</span></button>`; }).join('');
}
function paintPick() {
  const box = $('[data-tiles]'), pick = $('[data-pick]'); if (!box) return;
  const m = [...F.models][0];
  $$('.tile', box).forEach(t => t.setAttribute('aria-selected', t.dataset.model === m));
  if (!m) { pick.hidden = true; return; }
  const units = LIST.filter(l => l.model === m), st = modelStats(m);
  const colors = [...new Map(units.map(l => [l.color, l])).values()];
  if (F.colors.size && !colors.some(c => F.colors.has(c.color))) F.colors.clear();
  const tint = F.colors.size ? units.find(l => F.colors.has(l.color)).tint : st.tint;
  pick.hidden = false;
  $('[data-pick-name]').textContent = m;
  $('[data-pick-meta]').textContent = `від ${fmt(st.min)} ₴ · ${st.n ? st.n + ' в наявності' : 'під замовлення'} · ${[...new Set(units.map(l => memL(l.mem)))].join(' / ')}`;
  $('[data-swatches]').innerHTML = colors.map(c => `<button type="button" class="sw" aria-pressed="${F.colors.has(c.color)}" data-color="${esc(c.color)}"><i style="background:${SWATCH[c.tint] || '#999'}"></i>${esc(c.color)} <small>${units.filter(l => l.color === c.color && avail(l)).length}</small></button>`).join('');
  const img = $('[data-pick-img]'); img.src = `assets/img/phones/${tint}.webp`;
  if (pickViewer) pickViewer.setTint(tint);
  else if (wantGL && !pickViewerLoading && !qs.has('capture')) {
    pickViewerLoading = true;
    import('./hero3d.js?v=20261124v51').then(mod => {
      const c = document.createElement('canvas'); c.setAttribute('role', 'img'); c.setAttribute('aria-label', 'Узагальнена 3D-модель обраного кольору; можна покрутити'); c.tabIndex = 0;
      $('[data-pick-vis]').appendChild(c);
      pickViewer = mod.startViewer(c, { tint, font: '"ISP Display"', mono: '"ISP Mono"', auto: !reduced });
      $('[data-pick-vis]').classList.add('has-gl');
    }).catch(() => { });
  }
}
{
  const box = $('[data-tiles]');
  if (box) {
    box.addEventListener('click', e => {
      const t = e.target.closest('.tile'); if (!t) return;
      const m = t.dataset.model, on = F.models.has(m);
      F.models.clear(); F.colors.clear(); if (!on) { F.models.add(m); ['cats', 'gens', 'vars', 'mems', 'conds', 'sims'].forEach(k => F[k].clear()); Object.assign(F, { score: SCORE_MIN, batt: BATT_MIN, pmin: P_MIN, pmax: P_MAX, sealed: false }); } // a tile shows all units of the model («N в наявності»), so earlier search limits are dropped
      buildFilters(); renderGrid(); paintPick();
      if (!on) { const bl = box.getBoundingClientRect().left, tl = t.getBoundingClientRect().left; box.scrollTo({ left: box.scrollLeft + tl - bl - (box.clientWidth - t.offsetWidth) / 2, behavior: reduced ? 'auto' : 'smooth' }); } // centre the tile in its row only — scrollIntoView would also scroll the page
    });
    $('[data-swatches]').addEventListener('click', e => {
      const b = e.target.closest('.sw'); if (!b) return;
      const c = b.dataset.color; const on = F.colors.has(c); F.colors.clear(); if (!on) F.colors.add(c);
      renderGrid(); paintPick();
    });
    const step = dir => box.scrollBy({ left: dir * box.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' });
    $('[data-tiles-prev]').addEventListener('click', () => step(-1)); $('[data-tiles-next]').addEventListener('click', () => step(1));
  }
}
function resetFilters() { Object.assign(F, { score: SCORE_MIN, batt: BATT_MIN, pmin: P_MIN, pmax: P_MAX, sealed: false, q: '' }); if ($('[data-csearch]')) $('[data-csearch]').value = ''; ['models', 'colors', 'cats', 'gens', 'vars', 'mems', 'conds', 'sims', 'quick'].forEach(k => F[k].clear()); buildFilters(); renderGrid(); paintPick(); }
$('[data-reset]').addEventListener('click', resetFilters);
$('[data-fav-toggle]').addEventListener('click', e => { F.fav = !F.fav; e.currentTarget.setAttribute('aria-pressed', F.fav); renderGrid(); });
{
  const fl = $('[data-filters]'), ob = $('[data-filters-open]');
  const sheet = () => getComputedStyle(ob).display !== 'none'; // filters are a bottom sheet only when the button is shown
  const close = () => { if (!fl.classList.contains('is-open')) return; fl.classList.remove('is-open'); ob.setAttribute('aria-expanded', 'false'); const ct = $('[data-ct-filters]'); (ct && ct.offsetParent ? ct : ob).focus({ preventScroll: true }); };
  ob.addEventListener('click', () => { const bd = $('[data-filters-body]', fl); if (bd) bd.scrollTop = 0; fl.scrollTop = 0; fl.classList.add('is-open'); ob.setAttribute('aria-expanded', 'true'); $('.filters__close', fl).focus({ preventScroll: true }); });
  $$('[data-filters-close]').forEach(b => b.addEventListener('click', close));
  const fitFl = () => { if (sheet() && fl.classList.contains('is-open')) { const vv = window.visualViewport ? visualViewport.height : innerHeight, nav = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 58; fl.style.height = Math.round(Math.max(320, vv - nav - 10)) + 'px'; } else fl.style.height = ''; };
  ob.addEventListener('click', () => requestAnimationFrame(fitFl)); new MutationObserver(fitFl).observe(fl, { attributes: true, attributeFilter: ['class'] });
  window.visualViewport && visualViewport.addEventListener('resize', fitFl); addEventListener('resize', fitFl);
  fl.addEventListener('keydown', e => { if (sheet() && fl.classList.contains('is-open')) trapTab(fl, e); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && sheet() && fl.classList.contains('is-open') && !document.querySelector('dialog[open]')) { close(); e.preventDefault(); } }); // Esc closes the sheet wherever focus is, like the menu and the other sheets
}
$('[data-grid]').addEventListener('click', e => {
  const t = e.target.closest('[data-open],[data-fav],[data-cmp],[data-book],[data-direct]'); if (!t) return;
  if (t.dataset.open) openPass(t.dataset.open);
  else if (t.dataset.book) openPass(t.dataset.book, true);
  else if (t.dataset.fav) { const id = t.dataset.fav; FAV.has(id) ? FAV.delete(id) : FAV.add(id); t.setAttribute('aria-pressed', FAV.has(id)); saveFav(); toast(FAV.has(id) ? 'Додано в обране' : 'Прибрано з обраного'); }
  else if (t.dataset.cmp) toggleCmp(t.dataset.cmp, t);
  else if (t.dataset.direct) directCopy(byId(t.dataset.direct));
});
function directCopy(l) {
  const link = (location.origin + location.pathname) + '#t/' + l.id;
  const msg = `Привіт! Цікавить ${S.title(l)}${l.color ? ' ' + l.color : ''} за ${fmt(l.price)} ₴. ${l.code ? 'Пост: ' + igUrl(l) + ' · ' : ''}Паспорт: ${link}. Ще в наявності?`;
  try { navigator.clipboard.writeText(msg).then(() => toast('Повідомлення скопійовано — вставте його в Direct'), () => toast('Відкриваємо Direct')); } catch { toast('Відкриваємо Direct'); }
}

/* compare */
function toggleCmp(id, btn) {
  if (CMP.includes(id)) CMP = CMP.filter(x => x !== id);
  else { if (CMP.length >= 3) { toast('Порівнюємо до 3 позицій'); return; } CMP.push(id); }
  if (btn) btn.setAttribute('aria-pressed', CMP.includes(id));
  paintTray();
}
function paintTray() {
  CMP = CMP.filter(byId);
  const tr = $('[data-tray]'); tr.hidden = !CMP.length;
  $('[data-tray-n]').textContent = CMP.length;
  $('[data-tray-items]').innerHTML = CMP.map(id => { const l = byId(id); return `<span>${esc(S.title(l).replace('iPhone ', ''))}${l.batt != null ? ' · ' + l.batt + '%' : ''}</span>`; }).join('');
}
$('[data-compare-clear]').addEventListener('click', () => { CMP = []; paintTray(); renderGrid(); });
$('[data-compare-open]').addEventListener('click', () => {
  const ls = CMP.map(byId), d = $('[data-cmpdlg]');
  const best = (k, dir) => { const v = ls.map(l => l[k]).filter(x => x != null); if (v.length < 2 || new Set(v).size < 2) return () => false; const b = dir > 0 ? Math.max(...v) : Math.min(...v); return l => l[k] === b; };
  const bP = best('price', -1), bS = best('score', 1), bB = best('batt', 1), bC = best('cycles', -1);
  const dash = v => v == null || v === '' ? '<span class="muted">не вказано</span>' : v;
  const row = (h, f, b) => `<tr><th scope="row">${h}</th>${ls.map(l => `<td class="${b && b(l) ? 'is-best' : ''}">${f(l)}</td>`).join('')}</tr>`;
  d.innerHTML = `<div class="cmp__in"><div class="cmp__head"><h2 class="h3">Порівняння</h2><button class="iconbtn" type="button" data-close aria-label="Закрити порівняння">${icon('x')}</button></div>${ls.length > 2 ? '<p class="cmp__hint mono">Гортайте таблицю вбік — тут 3 позиції →</p>' : ''}
  <div style="overflow-x:auto"><table><thead><tr><th></th>${ls.map(l => `<td><div class="cmp__vis">${visual(l)}</div><b>${esc(S.title(l))}</b></td>`).join('')}</tr></thead><tbody>
  ${row('Ціна', l => fmt(l.price) + ' ₴', bP)}${row('Стан', l => dash(l.score != null ? String(l.score).replace('.', ',') + ' | 10' : null), bS)}${row('АКБ', l => dash(l.batt != null ? l.batt + '%' : null), bB)}${ls.some(l => l.cycles != null) ? row('Цикли', l => dash(l.cycles), bC) : ''}
  ${row('Колір', l => dash(esc(l.color)))}${row('SIM', l => dash(l.sim ? simL(l.sim) : null))}${row('Тип', l => esc(S.cond(l)))}${row('Герметичний', l => l.sealed ? 'так, без слідів ремонту' : dash(null))}
  ${row('Обслуговування', l => dash(esc(svcList(l).join(' + '))))}${row('Примітка', l => dash(esc(l.note)))}${row('Комплект', l => dash(l.kit ? esc(cap(brand(l.kit.replace(/ispayal/i, 'iSpayal')))) : null))}${row('Бонус', l => dash(esc(l.bonus)))}${row('Гарантія', l => dash(esc(brand(S.warranty(l)))))}
  <tr><th></th>${ls.map(l => `<td><button class="btn btn--red btn--sm" type="button" data-open-from-cmp="${l.id}">Паспорт</button></td>`).join('')}</tr></tbody></table></div>
  <p class="mono muted" style="margin-top:12px">Червоним — найкраще значення серед обраних. «Не вказано» — у пості цього немає.</p></div>`;
  d.showModal();
  d.onclose = () => { const b = $('[data-compare-open]'); if (!$('[data-pass]').open && b && b.offsetParent) b.focus({ preventScroll: true }); }; // back to «Порівняти»
  d.onclick = e => { if (e.target === d || e.target.closest('[data-close]')) d.close(); const o = e.target.closest('[data-open-from-cmp]'); if (o) { d.close(); openPass(o.dataset.openFromCmp); } };
});

/* passport */
let viewer = null;
function gauge(score) {
  const a0 = Math.PI, r = 80, cx = 100, cy = 96, t = (score - 5) / 5;
  const pt = a => [cx + r * Math.cos(a), cy - r * Math.sin(a)];
  const [x0, y0] = pt(a0), [x1, y1] = pt(0), ang = a0 - Math.PI * Math.max(0, Math.min(1, t)), [xe, ye] = pt(ang);
  let ticks = ''; for (let i = 0; i <= 10; i++) { const a = a0 - Math.PI * i / 10, [ax, ay] = [cx + 92 * Math.cos(a), cy - 92 * Math.sin(a)], [bx, by] = [cx + (i % 5 ? 88 : 84) * Math.cos(a), cy - (i % 5 ? 88 : 84) * Math.sin(a)]; ticks += `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="#bbb8b0" stroke-width="1.5"/>`; }
  return `<svg viewBox="0 0 200 110" aria-hidden="true">${ticks}<path d="M${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1}" fill="none" stroke="#e2dfd8" stroke-width="12" stroke-linecap="round"/><path d="M${x0} ${y0} A${r} ${r} 0 0 1 ${xe.toFixed(1)} ${ye.toFixed(1)}" fill="none" stroke="#0a0a0a" stroke-width="12" stroke-linecap="round"/><circle cx="${xe.toFixed(1)}" cy="${ye.toFixed(1)}" r="9" fill="#ff2a2f" stroke="#fff" stroke-width="3"/></svg>`;
}
function battGauge(pct) {
  const r = 80, c = 2 * Math.PI * r;
  return `<svg viewBox="0 0 200 200" aria-hidden="true" style="max-width:150px"><circle cx="100" cy="100" r="${r}" fill="none" stroke="#e2dfd8" stroke-width="14"/><circle cx="100" cy="100" r="${r}" fill="none" stroke="${battCol(pct)}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${(c * pct / 100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 100 100)"/><circle cx="100" cy="100" r="62" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-dasharray="2 5" opacity=".35"/></svg>`;
}
function cyclesNote(l) {
  if (l.cycles != null && /замін/i.test(l.battRaw)) return `Акумулятор замінений · ${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}`;
  if (/замін/i.test(l.battRaw)) return 'Акумулятор замінений';
  if (l.battNew) return 'Новий акумулятор';
  if (l.cycles == null) return '';
  const cw = `${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}`, b = l.batt != null ? l.batt + '%' : '';
  if (l.cycles < 300) return b ? `${cw} — батарея майже не використовувалась, тримає ${b}` : `${cw} — батарея майже не використовувалась`;
  if (l.cycles < 700) return b ? `${cw} — звичайне використання, тримає ${b}` : `${cw} — звичайне використання`;
  return b ? `${cw} — батарея вже попрацювала, але тримає ${b}` : `${cw} — батарея вже попрацювала`;
}
/* passport visual: real photos as a swipeable gallery (thumbnails on desktop, dots + swipe on phones, ← → keys) with the 3D model as the last «3D» tab;
   a unit without photos keeps the 3D render alone */
let pgIdx = 0, pgRO = null;
function visHTML(l) {
  const ph = PH(l), n = ph.length, isPhone = l.cat === 'iphone', name = `${S.title(l)}${l.color ? ' ' + l.color : ''}`;
  const model = isPhone ? `<img src="assets/img/phones/${l.tint}.webp" alt="${esc(name)}, узагальнена 3D-модель" data-pv-img>` : `<div class="pass__dev">${deviceSVG(l, true)}</div>`;
  const hint0 = isPhone ? 'Узагальнена 3D-модель у кольорі ' + esc(l.color) : 'Узагальнене зображення';
  if (!n) return `<div class="pass__vis pass__vis--${l.cat}">
    <p class="pass__no">ПАСПОРТ · ${esc(l.code || l.id)}</p>
    ${model}
    <p class="pass__hint">${isPhone ? icon('360') : ''}<span data-pv-hint>${hint0}</span></p>
  </div>`;
  return `<div class="pass__vis pass__vis--${l.cat} has-photos" data-pg>
    <p class="pass__no">ПАСПОРТ · ${esc(l.code || l.id)}</p>
    <div class="pg__wrap">
      <div class="pg" tabindex="0" role="group" aria-roledescription="галерея" aria-label="Фото: ${esc(name)}. Гортайте стрілками" data-pg-track>
        ${ph.map((u, i) => `<div class="pg__s" role="group" aria-roledescription="слайд" aria-label="Фото ${i + 1} з ${n}" data-pg-slide="${i}">${photoImg(l, 'pg__img', { i, eager: i === 0, sizes: '(max-width:860px) 100vw, 560px' })}</div>`).join('')}
        <div class="pg__s pg__s--3d" role="group" aria-roledescription="слайд" aria-label="${isPhone ? '3D-модель' : 'Узагальнене зображення'}" data-pg-slide="${n}" data-pg-3d>${model}</div>
      </div>
      <button type="button" class="pg__nav pg__nav--prev" data-pg-go="-1" aria-label="Попереднє фото">${icon('arrow')}</button>
      <button type="button" class="pg__nav pg__nav--next" data-pg-go="1" aria-label="Наступне фото">${icon('arrow')}</button>
      <p class="pass__hint pg__hint"><span data-pv-hint>Фото цього екземпляра · 1 / ${n}</span></p>
    </div>
    <div class="pg__ths" role="group" aria-label="Фото й 3D">
      ${ph.map((u, i) => `<button type="button" class="pg__th" data-pg-to="${i}" aria-label="Фото ${i + 1} з ${n}" aria-current="${i === 0}">${photoImg(l, '', { i, sizes: '64px', alt: '' })}</button>`).join('')}
      <button type="button" class="pg__th pg__th--3d" data-pg-to="${n}" aria-label="${isPhone ? '3D-модель' : 'Узагальнене зображення'}" aria-current="false"><span>3D</span></button>
    </div>
  </div>`;
}
function start3D(d, l, host) {
  if (l.cat !== 'iphone' || !wantGL || qs.has('capture') || viewer || host.querySelector('canvas')) return;
  const id = l.id;
  import('./hero3d.js?v=20261124v51').then(mod => {
    if (!d.open || passId !== id || viewer || !host.isConnected) return;
    const c = document.createElement('canvas'); c.tabIndex = 0; c.setAttribute('aria-label', 'Покрутіть 3D-модель: перетягніть або стрілки'); c.setAttribute('role', 'img');
    host.appendChild(c); viewer = mod.startViewer(c, { tint: l.tint, font: '"ISP Display"', mono: '"ISP Mono"', auto: !reduced });
    const im = $('[data-pv-img]', host); if (im) im.style.visibility = 'hidden';
    if (!host.matches('[data-pg-3d]')) $('[data-pv-hint]', d).textContent = 'Покрутіть: тягніть пальцем або мишею';
    else if (pgIdx === PH(l).length) $('[data-pv-hint]', d).textContent = 'Покрутіть 3D-модель: тягніть пальцем або мишею';
  }).catch(() => { });
}
function wireVis(d, l) {
  const g = $('[data-pg]', d);
  d.classList.toggle('has-photos', !!g);
  d.onkeydown = null;
  if (!g) { pgIdx = 0; start3D(d, l, $('.pass__vis', d)); return; }
  const tr = $('[data-pg-track]', g), n = PH(l).length, last = n, hint = $('[data-pv-hint]', g);
  const paint = i => {
    pgIdx = i;
    $$('[data-pg-to]', g).forEach(b => b.setAttribute('aria-current', +b.dataset.pgTo === i));
    $('[data-pg-go="-1"]', g).disabled = i <= 0; $('[data-pg-go="1"]', g).disabled = i >= last;
    hint.textContent = i < n ? `Фото цього екземпляра · ${i + 1} / ${n}` : l.cat === 'iphone' ? (viewer ? 'Покрутіть 3D-модель: тягніть пальцем або мишею' : 'Узагальнена 3D-модель у кольорі ' + l.color) : 'Узагальнене зображення';
    g.classList.toggle('is-3d', i === last);
    const th = $(`[data-pg-to="${i}"]`, g), box = th.parentElement; // keep the active thumbnail in view: scroll only the thumbnail row, never the page
    if (th.offsetLeft < box.scrollLeft) box.scrollLeft = th.offsetLeft - 8; else if (th.offsetLeft + th.offsetWidth > box.scrollLeft + box.clientWidth) box.scrollLeft = th.offsetLeft + th.offsetWidth - box.clientWidth + 8;
    if (i === last) { // start the 3D only once the slide has landed: a canvas added mid-scroll makes the browser re-snap back to the previous photo
      const t0 = performance.now(), wait = () => { if (pgIdx !== last || !tr.isConnected) return; if (Math.abs(tr.scrollLeft - last * tr.clientWidth) < 2 || performance.now() - t0 > 1500) start3D(d, l, $('[data-pg-3d]', g)); else requestAnimationFrame(wait); };
      requestAnimationFrame(wait);
    }
  };
  const go = (i, instant) => { i = Math.max(0, Math.min(last, i)); tr.scrollTo({ left: i * tr.clientWidth, behavior: reduced || instant ? 'auto' : 'smooth' }); paint(i); };
  let st = 0;
  tr.addEventListener('scroll', () => { clearTimeout(st); st = setTimeout(() => { const i = Math.round(tr.scrollLeft / Math.max(1, tr.clientWidth)); if (i !== pgIdx) paint(i); }, 60); }, { passive: true });
  g.addEventListener('click', e => { const t = e.target.closest('[data-pg-to]'); if (t) return go(+t.dataset.pgTo); const s = e.target.closest('[data-pg-go]'); if (s) go(pgIdx + +s.dataset.pgGo); });
  d.onkeydown = e => { // ← → anywhere in the passport except fields, the 3D canvas (it turns the model with arrows) and lists
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' || e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.target.closest('input,select,textarea,canvas,[role=listbox]')) return;
    e.preventDefault(); go(pgIdx + (e.key === 'ArrowRight' ? 1 : -1));
  };
  if (pgRO) pgRO.disconnect(); pgRO = new ResizeObserver(() => { if (tr.isConnected) tr.scrollLeft = pgIdx * tr.clientWidth; }); pgRO.observe(tr); // rotate / resize: stay on the same slide
  go(Math.min(pgIdx, last), true);
}
function gallerySync() { // a photo failed: rebuild the visual without it, on the nearest slide
  const d = $('[data-pass]'), l = passId && byId(passId), vis = l && $('.pass__vis', d); if (!vis) return;
  if (viewer) { viewer.destroy(); viewer = null; }
  const n = PH(l).length; pgIdx = Math.min(pgIdx, n);
  vis.outerHTML = visHTML(l); wireVis(d, l);
}
let passPushed = false, passId = null, backPending = false;
function openPass(id, focusBook, viaPop) {
  const l = byId(id); if (!l) return;
  const d = $('[data-pass]'), ig = igUrl(l);
  if (viewer) { viewer.destroy(); viewer = null; } // a passport replaced in place (another unit, Back/Forward) never keeps the old 3D canvas
  const hist = [];
  if (l.label) hist.push([S.label(l), 'Позначка в пості', false]);
  svcList(l).forEach(s => hist.push([s[0].toUpperCase() + s.slice(1), 'Обслуговування', true]));
  if (/замін/i.test(l.battRaw) && !svcList(l).some(s => /акумул/i.test(s))) hist.push(['Акумулятор замінений', l.battRaw, true]);
  if (l.sealed) hist.push(['Герметичний', 'Без слідів ремонту', false]);
  if (l.note) hist.push([l.note, 'Примітка продавця', true]);
  const kit = [];
  if (/коробк/i.test(l.kit)) kit.push(['box', cap(brand((l.kit.match(/коробка[^+,]*/i) || ['Коробка'])[0].trim().replace(/ispayal/i, 'iSpayal'))), false]);
  if (/кабель/i.test(l.kit)) kit.push(['cable', 'Кабель', false]);
  if (/скло/i.test(l.bonus)) kit.push(['glass', 'Захисне скло', true]);
  if (/чохол/i.test(l.bonus)) kit.push(['case', 'Чохол', true]);
  if (/блок/i.test(l.bonus)) kit.push(['plug', 'Блок живлення', true]);
  const dials = [];
  if (l.score != null) dials.push(`<div class="dial">${gauge(l.score)}<p class="dial__v">${String(l.score).replace('.', ',')}</p><p class="dial__k">Стан, з 10</p></div>`);
  if (l.batt != null) dials.push(`<div class="dial">${battGauge(l.batt)}<p class="dial__v" style="margin-top:-96px;margin-bottom:58px">${l.batt}%</p><p class="dial__k">Ємність АКБ</p>${cyclesNote(l) ? `<p class="dial__s">${cyclesNote(l)}</p>` : ''}</div>`);
  if (!dials.length) dials.push(`<div class="dial dial--wide"><p class="dial__v" style="margin:6px 0 0">${esc(condGroup(l))}</p><p class="dial__k">${l.isNew ? 'Новий пристрій' : 'Стан у пості не вказано'}</p></div>`);
  if (l.score != null && !l.isNew) { const g = grade(l)[0]; dials.push(`<div class="glegend"><p class="glegend__k">Що означає стан x/10</p><ul>${[['Ідеальний', '9,8–10'], ['Відмінний', '9,4–9,7'], ['Хороший', '9,0–9,3'], ['Нормальний', 'до 9,0']].map(([t, r]) => `<li class="${t === g ? 'is-on' : ''}"><b>${t}</b><span>${r}</span></li>`).join('')}</ul></div>`); }
  const isPhone = l.cat === 'iphone';
  const others = LIST.filter(o => o.id !== l.id && o.model === l.model && o.cat === l.cat).sort((x, y) => (statusOf(x) === 'sold') - (statusOf(y) === 'sold') || x.price - y.price);
  const diff = o => { const v = o.price - l.price; return v === 0 ? 'та сама ціна' : (v > 0 ? '+' : '−') + fmt(Math.abs(v)) + ' ₴'; };
  const othersHTML = others.length ? `<div class="others"><h3>Інші екземпляри цієї моделі <small class="mono">${others.length}</small></h3><ul>${others.map(o => `<li><button type="button" class="other ${statusOf(o) === 'sold' ? 'is-sold' : ''}" data-other="${o.id}" aria-label="Відкрити паспорт: ${esc(S.title(o))} ${esc(o.color)}, ${fmt(o.price)} ₴">
      <span class="other__img">${thumbVis(o)}</span>
      <span class="other__t">${esc([S.memL(o.mem), o.color].filter(Boolean).join(' · ') || S.title(o))}</span>
      <span class="other__m mono">${o.score != null ? 'стан ' + String(o.score).replace('.', ',') : esc(S.cond(o))}${o.batt != null ? ' · АКБ ' + o.batt + '%' : ''}${statusOf(o) !== 'available' ? ' · ' + STATUS[statusOf(o)].toLowerCase() : ''}</span>
      <span class="other__p"><b>${fmt(o.price)} ₴</b><small class="${o.price < l.price ? 'is-less' : ''}">${diff(o)}</small></span></button></li>`).join('')}</ul></div>` : '';
  const warr = S.warranty(l), trust = [warr ? ['shield', esc(brand(warr))] : null, ['check', 'Перевірка при вас у магазині'], ['coins', 'Оплата частинами'], ['swap', 'Trade-in']].filter(Boolean);
  d.innerHTML = `
  ${visHTML(l)}
  <div class="pass__data">
    <button class="iconbtn pass__x" type="button" data-close aria-label="Закрити паспорт">${icon('x')}</button>
    <p class="pass__eyebrow">${esc(S.cond(l))}${l.special ? ' · спеціальна пропозиція' : ''}</p>
    ${statusHTML(l)}
    <h2 class="pass__h" id="pass-h">${esc(S.title(l))}</h2>
    <p class="pass__sub">${l.color ? `<span class="swatch" style="background:${SWATCH[l.tint]}"></span>${esc(l.color)}` : ''}${l.sim ? ` · ${simL(l.sim)}` : ''}</p>
    <p class="pass__title mono muted">${esc(l.title)}</p>
    <div class="dials ${dials.length === 1 ? 'dials--one' : ''}">${dials.join('')}</div>
    ${hist.length ? `<div class="hist"><h3>Що відомо про цей пристрій</h3><ol>${hist.map(([a, b, s]) => `<li class="${s ? 'is-svc' : ''}">${esc(a)}<small>${esc(b)}</small></li>`).join('')}</ol></div>` : ''}
    ${kit.length ? `<div class="kit"><h3>Комплект${l.bonus ? ' і бонус' : ''}</h3><ul>${kit.map(([i, t, b]) => `<li class="${b ? 'is-bonus' : ''}">${icon(i)}<span>${esc(t)}${b ? '<br><small class="mono">бонус*</small>' : ''}</span></li>`).join('')}</ul></div>` : ''}
    <div class="pay"><h3>Оплата${warr ? ' і гарантія' : ''}</h3><div class="pay__chips"><span>USDT</span><span>$</span><span>₴</span><span>€</span><span>Післяплата</span><span>Розстрочка</span></div>
      <p>${warr ? `${icon('shield')} ${esc(brand(warr))}. ` : ''}${l.special ? 'Спеціальна пропозиція — діє при визначених умовах оплати. ' : ''}<a href="#rozstrochka" data-to-calc="${l.price}">Порахувати розстрочку</a>${ig ? ` · <a href="${ig}" target="_blank" rel="noopener">Пост в Instagram ↗</a>` : ''}</p></div>
    ${othersHTML}
    <div class="pass__bookwrap" ${statusOf(l) === 'sold' ? 'hidden' : ''}><h3>${statusOf(l) === 'reserved' ? 'Вже заброньовано — стати в чергу' : 'Забронювати'}</h3>
      <form class="pass__book" data-pass-book novalidate>
        <label class="fld"><span>Імʼя</span><input name="name" autocomplete="given-name" required></label>
        <label class="fld"><span>Телефон</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+380" required></label>
        <button class="btn btn--red" type="submit">${statusOf(l) === 'reserved' ? 'Стати в чергу' : 'Забронювати'}</button>
        <p class="form__err" role="alert" data-err hidden style="grid-column:1/-1"></p><p class="form__ok" role="status" data-ok hidden style="grid-column:1/-1"></p>
      </form>
    </div>
    <div class="pass__buy">
      <div class="pass__row"><p class="price">${fmt(l.price)}<small>₴</small></p>
        <div class="pass__acts"><a class="sq" href="tel:${PHONE}" aria-label="Подзвонити">${icon('phone')}</a><button class="sq" type="button" data-share aria-label="Скопіювати посилання на цю позицію">${icon('share')}</button></div></div>
      <ul class="trust">${trust.map(([i, t]) => `<li>${icon(i)}${t}</li>`).join('')}</ul>
      ${directBtn(l, 'data-direct-pass')}
    </div>
  </div>`;
  const wasOpen = d.open;
  pgIdx = 0;
  if (!wasOpen) d.showModal();
  try { const r = JSON.parse(localStorage.getItem('ispayal.recent') || '[]').filter(x => x !== id); r.unshift(id); localStorage.setItem('ispayal.recent', JSON.stringify(r.slice(0, 8))); } catch { }
  // history: opening pushes one #t/<id> entry, so the browser Back button closes the passport instead of leaving the site;
  // switching to another unit inside the open passport only replaces it; a deep link opened directly pushes nothing
  passId = id;
  if (location.hash !== '#t/' + id) {
    if (wasOpen || viaPop) history.replaceState({ pass: id }, '', '#t/' + id);
    else { history.pushState({ pass: id }, '', '#t/' + id); passPushed = true; }
  }
  if (viaPop) passPushed = true;
  $('.pass__data', d).scrollTop = 0;
  if (focusBook) setTimeout(() => { const n = d.querySelector('[name=name]'); n.scrollIntoView({ block: 'center' }); n.focus({ preventScroll: true }); }, 60); else d.querySelector('[data-close]').focus({ preventScroll: true });
  wireVis(d, l);
  d.onclick = e => {
    if (e.target === d || e.target.closest('[data-close]')) d.close();
    if (e.target.closest('[data-share]')) { const u = (location.origin + location.pathname) + '#t/' + id; try { navigator.clipboard.writeText(u).then(() => toast('Посилання скопійовано — надішліть у Direct'), () => toast('Не вдалося скопіювати: ' + u)); } catch { toast(u); } }
    if (e.target.closest('[data-direct-pass]')) directCopy(l);
    const ot = e.target.closest('[data-other]'); if (ot) { if (viewer) { viewer.destroy(); viewer = null; } openPass(ot.dataset.other); return; }
    const c = e.target.closest('[data-to-calc]'); if (c) { e.preventDefault(); setCalcPrice(+c.dataset.toCalc); d.close(); setTimeout(() => { $('#rozstrochka').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); $('[data-c-price]').focus({ preventScroll: true }); }, 0); }
  };
  $('[data-pass-book]', d).onsubmit = e => {
    e.preventDefault(); const f = e.target, err = $('[data-err]', f), ok = $('[data-ok]', f);
    f.name.removeAttribute('aria-invalid'); f.phone.removeAttribute('aria-invalid');
    if (!f.name.value.trim() || !phoneOk(f.phone.value)) { err.textContent = !f.name.value.trim() ? 'Як до вас звертатися?' : PHONE_ERR; err.hidden = false; ok.hidden = true; const bad = f.name.value.trim() ? f.phone : f.name; bad.setAttribute('aria-invalid', 'true'); bad.focus(); return; }
    err.hidden = true;
    const bq = S.addRequest({ type: 'booking', listing: l.id, title: `${S.title(l)}${l.color ? ' ' + l.color : ''}`, price: l.price, name: f.name.value.trim(), phone: phoneNorm(f.phone.value) });
    ok.innerHTML = statusOf(l) === 'reserved' ? `${icon('check')}<span>Дякуємо! Ви в черзі на ${esc(bq.title)}. Якщо поточна бронь зніметься — напишемо вам у Direct або зателефонуємо на ${esc(bq.phone)}.</span>` : `${icon('check')}<span>Дякуємо! Бронь на ${esc(bq.title)} прийнято. Ми напишемо вам у Direct або зателефонуємо на ${esc(bq.phone)} протягом робочого дня, щоб підтвердити.</span>`; ok.hidden = false;
    f.querySelector('button').disabled = true;
  };
}
$$('dialog').forEach(d => d.addEventListener('keydown', e => trapTab(d, e)));
function paintRecent() { // below the grid, so adding it never moves what is on screen
  const box = $('[data-recent]'); if (!box) return; let r = []; try { r = JSON.parse(localStorage.getItem('ispayal.recent') || '[]').map(byId).filter(Boolean); } catch { }
  box.hidden = !r.length; if (!r.length) return;
  $('[data-recent-list]', box).innerHTML = r.map(l => `<li><button type="button" class="rcard" data-open="${l.id}"><span class="rcard__img">${thumbVis(l)}</span><span class="rcard__t">${esc(S.title(l))}<small>${esc(l.color || '')}</small></span><b>${fmt(l.price)} ₴</b></button></li>`).join('');
}
$('[data-recent]') && $('[data-recent]').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openPass(b.dataset.open); });
$('[data-pass]').addEventListener('close', () => {
  paintRecent(); if (viewer) { viewer.destroy(); viewer = null; } passId = null;
  if (passPushed) { passPushed = false; if (location.hash.startsWith('#t/')) { backPending = true; history.back(); } } // closed with × / Esc: step back over our own entry
  else if (location.hash.startsWith('#t/')) history.replaceState(null, '', location.pathname + location.search); /* deep link opened directly: drop it and stay on the page, without an implicit #katalog that would reopen mid-page */
});
addEventListener('popstate', () => { // browser Back / Forward while on the page
  const d = $('[data-pass]'), m = location.hash.match(/^#t\/([\w-]+)/);
  if (backPending) { backPending = false; if (d.open && passId) { history.replaceState({ pass: passId }, '', '#t/' + passId); passPushed = true; } return; } // our own step back landed; if another passport opened meanwhile, it takes this entry
  if (m && byId(m[1])) { if (!d.open || passId !== m[1]) openPass(m[1], false, true); }
  else if (d.open) { passPushed = false; d.close(); } // Back: our entry is already gone, so the close handler must not step back again
});
function routeHash() { const m = location.hash.match(/^#t\/([\w-]+)/); if (m && !byId(m[1]) && !$('[data-pass]').open) { history.replaceState(null, '', location.pathname + location.search); return; } /* unknown or sold-and-removed unit: drop the dead link */ if (m && byId(m[1]) && !($('[data-pass]').open && passId === m[1])) { noSmooth(() => $('#katalog').scrollIntoView()); openPass(m[1]); } } // jump instantly: the scroll lock must record the final position, not a frame of a smooth scroll
addEventListener('hashchange', routeHash);

/* notify */
{ // one-tap picker: model / memory / battery chips compose the «want» text
  const f = $('[data-notify-form]');
  const compose = () => { const v = n => (f.querySelector(`[name=${n}]:checked`) || {}).value || ''; const m = v('nm'); if (!m) return; f.want.value = [m, v('nmem'), v('nbat')].filter(Boolean).join(', '); f.want.removeAttribute('aria-invalid'); };
  f.addEventListener('change', e => { if (/^n(m|mem|bat)$/.test(e.target.name)) compose(); });
  f.addEventListener('reset', () => setTimeout(() => f.querySelectorAll('.ntf__g input').forEach(i => i.checked = false)));
}
$('[data-notify-form]').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target, err = $('[data-err]', f), ok = $('[data-ok]', f);
  const ct = f.contact.value.trim(), ctOk = phoneOk(ct) || /^@?[a-z0-9._]{2,30}$/i.test(ct) && /[a-z]/i.test(ct);
  f.want.removeAttribute('aria-invalid'); f.contact.removeAttribute('aria-invalid');
  if (!f.want.value.trim() || !ctOk) { const bad = !f.want.value.trim() ? f.want : f.contact; err.textContent = bad === f.want ? 'Оберіть модель або напишіть, яку шукаєте.' : 'Вкажіть телефон (+380 XX XXX XX XX) або нік в Instagram (@nick).'; err.hidden = false; ok.hidden = true; bad.setAttribute('aria-invalid', 'true'); bad.focus(); return; }
  err.hidden = true; S.addRequest({ type: 'notify', status: 'Чекає', want: f.want.value.trim(), contact: phoneNorm(ct) || (ct[0] === '@' ? ct : '@' + ct) });
  ok.innerHTML = `${icon('check')}<span>Дякуємо! Щойно «${esc(f.want.value.trim())}» зʼявиться на вітрині — напишемо вам у Direct або зателефонуємо.</span>`; ok.hidden = false; f.reset(); lockUntilEdit(f);
});

/* hero finder (iPhones) */
const HPR = { lo: 0, hi: Infinity }; // hero price range, any amount; synced with the catalog price filter
let hpSync = () => { };
{
  const f = $('[data-finder]');
  const fill = () => {
    f.model.innerHTML = `<option value="">будь-який iPhone</option>` + MODELS().map(m => `<option ${m === 'iPhone 15 Pro' ? 'selected' : ''}>${m}</option>`).join('');
    f.mem.innerHTML = `<option value="">будь-якій памʼяті</option>` + [...new Set(LIST.filter(l => l.cat === 'iphone').map(l => l.mem))].sort((a, b) => a - b).map(m => `<option value="${m}" ${m === 256 ? 'selected' : ''}>${memL(m)}</option>`).join('');
    f.batt.innerHTML = [0, 85, 90, 95].map(v => `<option value="${v}">${v ? v + '%+' : 'будь-якого %'}</option>`).join(''); f.batt.value = '85';
    f.max.innerHTML = `<option value="999999">будь-яка</option>` + PRICE_STEPS().map(v => `<option value="${v}">до ${fmt(v)} ₴</option>`).join(''); f.max.value = '999999';
    f.max.addEventListener('change', () => { HPR.lo = 0; HPR.hi = +f.max.value >= 999999 ? Infinity : +f.max.value; }); // no-JS-style select still works if someone uses it
  };
  const count = () => {
    const n = LIST.filter(l => l.cat === 'iphone' && (!f.model.value || l.model === f.model.value) && (!f.mem.value || l.mem === +f.mem.value) && (+f.batt.value === 0 || l.isNew || (l.batt != null && l.batt >= +f.batt.value)) && l.price >= HPR.lo && l.price <= HPR.hi).length;
    $('[data-f-count]').textContent = n ? `Показати ${n} ${plural(n, 'телефон', 'телефони', 'телефонів')}` : 'Повідомити, коли буде';
    return n;
  };
  fill(); count();
  f.addEventListener('change', count); f.addEventListener('hpr', count);
  f.addEventListener('submit', e => {
    e.preventDefault();
    ['cats', 'gens', 'vars', 'mems', 'conds', 'sims', 'quick'].forEach(k => F[k].clear());
    F.cats.add('iphone');
    F.models.clear(); F.colors.clear(); if (f.model.value) F.models.add(f.model.value);
    if (f.mem.value) F.mems.add(+f.mem.value);
    F.batt = Math.max(BATT_MIN, +f.batt.value || BATT_MIN); F.pmax = HPR.hi < P_MAX ? HPR.hi : P_MAX; F.pmin = HPR.lo > P_MIN ? HPR.lo : P_MIN; F.score = SCORE_MIN; F.sealed = false; F.fav = false; $('[data-fav-toggle]').setAttribute('aria-pressed', 'false');
    buildFilters(); renderGrid(); paintPick();
    const ch = $('.cat__count'); ch.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); // user click → land on the result count
    ch.tabIndex = -1; ch.focus({ preventScroll: true }); // keyboard / screen-reader users land on the result count
  });
}

/* hero sentence pickers: dark bottom sheet (≤768px) or a wide panel; the native <select>s stay as the no-JS fallback */
{
  const f = $('[data-finder]'), sheet = $('[data-hp]'), MOB = matchMedia('(max-width:768px)'), hero = $('.hero');
  const TITLES = { model: 'Оберіть модель', mem: 'Оберіть памʼять', batt: 'АКБ від', max: 'Ціна' };
  const NAMES = { model: 'Модель', mem: 'Памʼять', batt: 'АКБ від', max: 'Ціна' };
  const phones = () => LIST.filter(l => l.cat === 'iphone');
  const PR = () => { const p = phones().map(l => l.price); return { min: Math.floor(Math.min(...p) / 1000) * 1000, max: Math.ceil(Math.max(...p) / 1000) * 1000 }; };
  const pOk = (l, lo = HPR.lo, hi = HPR.hi) => l.price >= lo && l.price <= hi;
  const match = (o = {}) => { const v = k => (k in o ? o[k] : f[k].value); return phones().filter(l => (!v('model') || l.model === v('model')) && (!v('mem') || l.mem === +v('mem')) && (+v('batt') === 0 || l.isNew || (l.batt != null && l.batt >= +v('batt'))) && pOk(l, o.lo ?? HPR.lo, o.hi ?? HPR.hi)).length; };
  const priceLabel = () => { const { lo, hi } = HPR; return !lo && hi === Infinity ? 'будь-яка' : !lo ? `до ${fmt(hi)} ₴` : hi === Infinity ? `від ${fmt(lo)} ₴` : `від ${fmt(lo)} до ${fmt(hi)} ₴`; };
  const opts = k => {
    if (k === 'model') return [{ v: '', t: 'Будь-який iPhone', sub: `${phones().filter(avail).length} в наявності`, g: '' }, ...MODELS().map(m => { const st = modelStats(m); return { v: m, t: shortModel(m), img: st.tint, sub: `від ${fmt(st.min)} ₴`, n: st.n ? `${st.n} в наявності` : 'під замовлення', g: /\de\b/.test(m) ? gen(m) + 'e' : gen(m) }; })];
    return [...f[k].options].map(o => ({ v: o.value, t: k === 'batt' ? (+o.value ? o.value + '%+' : 'будь-яка') : (o.value ? o.textContent : 'будь-яка'), c: match({ [k]: o.value }) }));
  };
  let cur = null, trig = null;
  const pop = document.createElement('div'); pop.className = 'hp hp--pop'; pop.hidden = true; hero.appendChild(pop);
  const box = () => (MOB.matches ? sheet : pop);
  const label = k => { if (k === 'max') return priceLabel(); const o = f[k].selectedOptions[0]; return o ? o.textContent : ''; };
  const trigs = {};
  $$('.finder__sel', f).forEach(lb => {
    const sel = $('select', lb), k = sel.name;
    let b = $(`.hp-trig[data-k="${k}"]`, f); // rendered in the HTML so nothing shifts when JS starts
    if (!b) { b = document.createElement('button'); b.type = 'button'; b.className = 'hp-trig'; b.setAttribute('role', 'combobox'); b.setAttribute('aria-haspopup', k === 'max' ? 'dialog' : 'listbox'); b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', 'hp-list'); b.dataset.k = k; lb.after(b); }
    sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true'); lb.classList.add('is-js');
    trigs[k] = b;
  });
  const paintTrigs = () => Object.entries(trigs).forEach(([k, b]) => { $('.hp-trig__v', b)?.remove(); b.insertAdjacentHTML('beforeend', `<span class="hp-trig__v">${esc(label(k))}</span>`); b.setAttribute('aria-label', `${NAMES[k]}: ${label(k)}`); });
  const doneText = () => { const n = match(); return n ? `Готово · ${n} iPhone` : 'Готово · 0 iPhone — змініть умови'; };
  function priceHTML() {
    const { min, max } = PR(), ps = phones().map(l => l.price), bins = 32, step = (max - min) / bins, cnt = Array(bins).fill(0);
    ps.forEach(p => cnt[Math.min(bins - 1, Math.floor((p - min) / step))]++); const mx = Math.max(...cnt, 1);
    const lo = HPR.lo || min, hi = HPR.hi === Infinity ? max : HPR.hi;
    const PRE = [['до 20 тис.', 0, 20000], ['20–40 тис.', 20000, 40000], ['40–60 тис.', 40000, 60000], ['60+ тис.', 60000, Infinity]];
    return `<div class="pr" data-pr data-min="${min}" data-max="${max}">
      <div class="pr__hist" aria-hidden="true">${cnt.map((c, i) => `<i data-a="${min + i * step}" data-b="${min + (i + 1) * step}" style="height:${c ? 14 + c / mx * 86 : 4}%"></i>`).join('')}</div>
      <div class="pr__dual"><input type="range" min="${min}" max="${max}" step="100" value="${lo}" aria-label="Ціна від" data-pr-a><input type="range" min="${min}" max="${max}" step="100" value="${hi}" aria-label="Ціна до" data-pr-b></div>
      <div class="pr__nums"><label class="pr__f"><span>від</span><input inputmode="numeric" autocomplete="off" aria-label="Ціна від, гривень" data-pr-lo></label><span class="pr__dash" aria-hidden="true">—</span><label class="pr__f"><span>до</span><input inputmode="numeric" autocomplete="off" aria-label="Ціна до, гривень" data-pr-hi></label></div>
      <div class="pr__pre" role="group" aria-label="Швидкий вибір ціни">${PRE.map(([t, a, b]) => `<button type="button" class="pr__chip" data-pre="${a},${b === Infinity ? '' : b}">${t} <small>${match({ lo: a, hi: b })}</small></button>`).join('')}<button type="button" class="pr__chip" data-pre="0,">будь-яка <small>${match({ lo: 0, hi: Infinity })}</small></button></div></div>`;
  }
  function wirePrice(el) {
    const R = $('[data-pr]', el); if (!R) return;
    const min = +R.dataset.min, max = +R.dataset.max, A = $('[data-pr-a]', R), B = $('[data-pr-b]', R), L = $('[data-pr-lo]', R), H = $('[data-pr-hi]', R);
    const paint = (exact) => { // exact = [lo, hi] typed by hand (any amount, not snapped to the 100 ₴ step)
      let a = exact ? exact[0] : +A.value, b = exact ? exact[1] : +B.value; if (a > b) [a, b] = [b, a];
      HPR.lo = a <= min ? 0 : a; HPR.hi = b >= max ? Infinity : b;
      L.value = fmt(a) + ' ₴'; H.value = fmt(b) + ' ₴';
      R.style.setProperty('--a', ((a - min) / (max - min) * 100) + '%'); R.style.setProperty('--b', ((b - min) / (max - min) * 100) + '%');
      $$('.pr__hist i', R).forEach(i => i.classList.toggle('is-in', +i.dataset.b >= a && +i.dataset.a <= b));
      $$('[data-pre]', R).forEach(c => { const [x, y] = c.dataset.pre.split(','); c.setAttribute('aria-pressed', (+x || 0) === HPR.lo && (y ? +y : Infinity) === HPR.hi); });
      f.dispatchEvent(new Event('hpr')); paintTrigs(); const d = $('.hp__done', box()); if (d) d.textContent = doneText();
    };
    const fromText = e => { // typed amounts are clamped to the real range and to each other — never silently swapped
      const raw = x => parseInt(x.value.replace(/\D/g, ''), 10), g = (x, d) => { const v = raw(x); return isNaN(v) ? d : Math.max(min, Math.min(max, v)); };
      let a = g(L, HPR.lo || min), b = g(H, HPR.hi === Infinity ? max : HPR.hi);
      if (a > b) { if (e && e.target === L) a = b; else b = a; }
      A.value = a; B.value = b; paint([a, b]);
      [[L, a], [H, b]].forEach(([x, v]) => { if (!isNaN(raw(x)) && raw(x) !== v) { x.parentElement.classList.remove('is-clamped'); void x.offsetWidth; x.parentElement.classList.add('is-clamped'); setTimeout(() => x.parentElement.classList.remove('is-clamped'), 1200); } }); };
    [A, B].forEach(x => { x.addEventListener('input', () => paint()); x.addEventListener('keydown', e => { if (e.key === 'PageUp' || e.key === 'PageDown') { e.preventDefault(); x.value = +x.value + (e.key === 'PageUp' ? 1000 : -1000); paint(); } }); });
    L.addEventListener('change', fromText); H.addEventListener('change', fromText);
    [L, H].forEach(x => { x.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); x.dispatchEvent(new Event('change')); } }); x.addEventListener('focus', () => x.select()); });
    R.addEventListener('click', e => { const c = e.target.closest('[data-pre]'); if (!c) return; const [x, y] = c.dataset.pre.split(','); A.value = Math.max(min, +x || min); B.value = y ? Math.min(max, +y) : max; paint(); });
    paint();
  }
  function render() {
    const k = cur, el = box(), val = f[k].value;
    const head = `<div class="hp__head"><p class="hp__h" id="hp-h">${TITLES[k]}</p><button type="button" class="hp__x" data-hp-close aria-label="Закрити">${icon('x')}</button></div>`;
    const foot = `<div class="hp__foot"><button type="button" class="btn btn--red hp__done" data-hp-close>${doneText()}</button></div>`;
    if (k === 'max') { el.innerHTML = head + `<div class="hp__body" id="hp-list">${priceHTML()}</div>` + foot; el.dataset.k = k; wirePrice(el); return; }
    const list = opts(k), isModel = k === 'model';
    const gens = isModel ? [...new Set(list.map(o => o.g).filter(Boolean))].sort((a, b) => parseFloat(a === 'Air' ? 17.5 : a) - parseFloat(b === 'Air' ? 17.5 : b) || a.length - b.length) : [];
    el.innerHTML = head + (isModel && !MOB.matches ? `<div class="hp__tabs" role="group" aria-label="Перейти до покоління">${['', ...gens].map(g => `<button type="button" class="hp__tab" data-gen="${g}">${g ? (g === 'Air' ? 'Air' : g) : 'Усі'}</button>`).join('')}</div>` : '') +
      `<div class="hp__body"><div class="hp__list ${isModel ? 'hp__list--tiles' : 'hp__list--chips'}" role="listbox" id="hp-list" aria-labelledby="hp-h">${list.map((o, i) => `<div role="option" id="hp-o${i}" tabindex="${o.v === val ? 0 : -1}" aria-selected="${o.v === val}" class="hp__o ${isModel ? 'hp__o--tile' : 'hp__o--chip'} ${!isModel && !o.c && o.v !== val ? 'is-zero' : ''}" data-v="${esc(o.v)}" ${isModel ? `data-g="${o.g}"` : ''}>
        ${isModel ? `<span class="hp__img">${o.img ? `<img src="assets/img/phones/${o.img}.webp" alt="" width="560" height="700" loading="lazy">` : `<b class="hp__all">${icon('case')}</b>`}</span><span class="hp__t">${o.img ? '<small>iPhone</small>' : ''}${esc(o.t)}</span><span class="hp__p">${esc(o.sub)}</span>${o.n ? `<span class="hp__n">${esc(o.n)}</span>` : ''}` : `<span class="hp__t">${esc(o.t)}</span><span class="hp__c">${o.c} iPhone</span>`}
        <span class="hp__ok">${icon('check')}</span></div>`).join('')}</div></div>` + foot;
    el.dataset.k = k;
    if (!el.querySelector('[role=option][tabindex="0"]')) el.querySelector('[role=option]').tabIndex = 0;
  }
  function fitSheet() { // definite px height (iOS in-app WebKit collapsed the list when the sheet only had max-height)
    if (!sheet.open) return;
    const vv = window.visualViewport ? visualViewport.height : innerHeight, hd = $('.hp__head', sheet), ft = $('.hp__foot', sheet);
    const ls = $('.hp__list', sheet) || $('[data-pr]', sheet), nat = (hd ? hd.offsetHeight : 0) + (ls ? ls.offsetHeight + 20 : 300) + (ft ? ft.offsetHeight : 0) + 2;
    sheet.style.height = Math.round(Math.max(Math.min(nat, vv * 0.88, 760), Math.min(320, vv * 0.88))) + 'px';
  }
  window.visualViewport && visualViewport.addEventListener('resize', fitSheet);
  function reveal(o) { // scroll only the list, never the page
    const bd = o.closest('.hp__body'); if (!bd) return; const r = o.getBoundingClientRect(), br = bd.getBoundingClientRect();
    if (r.top < br.top) bd.scrollTop -= br.top - r.top + 8; else if (r.bottom > br.bottom) bd.scrollTop += r.bottom - br.bottom + 8;
  }
  function place() { // wide panel in the viewport (position: fixed), under the sentence when there is room
    if (MOB.matches || !trig) return;
    const W = innerWidth, H = innerHeight, wide = cur === 'model', w = Math.round(Math.min(wide ? 1040 : cur === 'max' ? 640 : 560, W * 0.92));
    const maxH = Math.round(Math.min(wide ? 720 : 560, H * 0.78)), tr = trig.getBoundingClientRect(), fr = f.getBoundingClientRect();
    pop.style.width = w + 'px'; pop.style.maxHeight = maxH + 'px';
    pop.style.left = Math.round(Math.max(16, Math.min(wide ? fr.left : tr.left - 12, W - w - 16))) + 'px';
    const h = Math.min(pop.scrollHeight, maxH), below = tr.bottom + 10, navB = 12 + (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav')) || 64);
    // never slide over the sentence's own row (the «Показати» button sits there): below it, else above it, else below with a shorter, scrolling panel
    const roomB = H - 12 - below, roomA = tr.top - 10 - navB;
    let top;
    if (h <= roomB) top = below;
    else if (wide) top = Math.max(navB, H - h - 12); // the model grid closes on a pick, so it may cover the row
    else if (h <= roomA) top = tr.top - 10 - h;
    else if (roomB >= 280 || roomB >= roomA) { top = below; pop.style.maxHeight = Math.max(200, roomB) + 'px'; }
    else { pop.style.maxHeight = roomA + 'px'; top = tr.top - 10 - Math.min(h, roomA); }
    pop.style.top = Math.round(top) + 'px';
  }
  const cols = () => { const l = $('.hp__list', box()); return l ? getComputedStyle(l).gridTemplateColumns.split(' ').length : 1; };
  function openHP(k) {
    if (cur) closeHP(false);
    cur = k; trig = trigs[k]; trig.setAttribute('aria-expanded', 'true');
    render();
    if (MOB.matches) { sheet.showModal(); fitSheet(); }
    else { pop.hidden = false; place(); }
    const o = box().querySelector('[role=option][tabindex="0"]') || box().querySelector('[data-pr-a]'); o.focus({ preventScroll: true }); if (o.matches('[role=option]')) reveal(o);
  }
  function closeHP(refocus = true) {
    if (!cur) return;
    const t = trig; t.setAttribute('aria-expanded', 'false'); cur = null; trig = null;
    if (sheet.open) sheet.close(); sheet.style.height = ''; pop.hidden = true; pop.innerHTML = '';
    if (refocus) t.focus({ preventScroll: true });
  }
  // a model without the chosen memory / battery would give 0 results: put those back to «будь-яка» and flash them
  function fixCombo() {
    const m = f.model.value; if (!m) return null;
    const units = phones().filter(l => l.model === m), was = [], m0 = +f.mem.value, b0 = +f.batt.value;
    if (f.mem.value && !units.some(l => l.mem === +f.mem.value)) { f.mem.value = ''; was.push('mem'); }
    const u2 = units.filter(l => !f.mem.value || l.mem === +f.mem.value);
    if (+f.batt.value && !u2.some(l => l.isNew || (l.batt != null && l.batt >= +f.batt.value))) { f.batt.value = '0'; was.push('batt'); }
    if (!was.length) return null;
    was.forEach(k => { const t = trigs[k]; if (!t) return; t.classList.remove('is-reset'); void t.offsetWidth; t.classList.add('is-reset'); setTimeout(() => t.classList.remove('is-reset'), 1600); });
    const msg = (was.length > 1 ? `${m} з такими умовами немає — памʼять і АКБ тепер будь-які` : was[0] === 'mem' ? `${m} на ${memL(m0)} немає — памʼять тепер будь-яка` : `${m} з АКБ від ${b0}% немає — АКБ тепер будь-який`);
    if (!MOB.matches) toast(msg); return msg; // on a phone the sheet stays open and covers the toast: the note goes into the sheet
  }
  function choose(o) {
    const k = cur; f[k].value = o.dataset.v; const note = k === 'model' ? fixCombo() : null; f.dispatchEvent(new Event('change')); paintTrigs();
    if (MOB.matches) { const v = o.dataset.v; render(); if (note) $('.hp__foot', sheet).insertAdjacentHTML('afterbegin', `<p class="hp__note" role="status">${esc(note)}</p>`); const n = box().querySelector(`[role=option][data-v="${CSS.escape(v)}"]`); n && n.focus({ preventScroll: true }); }
    else closeHP();
  }
  Object.values(trigs).forEach(b => {
    b.addEventListener('click', () => (cur === b.dataset.k ? closeHP() : openHP(b.dataset.k)));
    b.addEventListener('keydown', e => { if (['ArrowDown', 'ArrowUp'].includes(e.key)) { e.preventDefault(); openHP(b.dataset.k); } });
  });
  const onClick = e => {
    const tab = e.target.closest('[data-gen]'); if (tab) { const t = $(tab.dataset.gen ? `[role=option][data-g="${tab.dataset.gen}"]` : '[role=option]', box()), bd = $('.hp__body', box()); $$('[data-gen]', box()).forEach(x => x.setAttribute('aria-pressed', x === tab)); if (t && bd) { bd.scrollTop = t.offsetTop - $('.hp__list', box()).offsetTop; $$('[role=option]', box()).forEach(x => x.tabIndex = x === t ? 0 : -1); } return; }
    const o = e.target.closest('[role=option]'); if (o) return choose(o); if (e.target.closest('[data-hp-close]')) return closeHP(); if (e.target === sheet) closeHP();
  };
  sheet.addEventListener('click', onClick); pop.addEventListener('click', onClick);
  sheet.addEventListener('cancel', e => { e.preventDefault(); closeHP(); });
  const onKey = e => {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); return closeHP(); }
    const os = $$('[role=option]', box()), i = os.indexOf(document.activeElement);
    if (i < 0) return;
    const go = j => { j = Math.max(0, Math.min(os.length - 1, j)); os.forEach((x, n) => x.tabIndex = n === j ? 0 : -1); os[j].focus({ preventScroll: true }); reveal(os[j]); e.preventDefault(); };
    const c = cols();
    if (e.key === 'ArrowRight') go(i + 1); else if (e.key === 'ArrowLeft') go(i - 1); else if (e.key === 'ArrowDown') go(i + c); else if (e.key === 'ArrowUp') go(i - c);
    else if (e.key === 'Home') go(0); else if (e.key === 'End') go(os.length - 1);
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(os[i]); }
  };
  sheet.addEventListener('keydown', onKey); pop.addEventListener('keydown', onKey);
  pop.addEventListener('focusout', e => { if (cur && !MOB.matches && e.relatedTarget && !pop.contains(e.relatedTarget) && e.relatedTarget !== trig) closeHP(false); });
  document.addEventListener('pointerdown', e => { if (cur && !MOB.matches && !pop.contains(e.target) && !Object.values(trigs).some(t => t.contains(e.target))) closeHP(false); });
  addEventListener('scroll', () => { if (cur && !MOB.matches) closeHP(false); }, { passive: true }); // the panel is fixed: close it when the page moves
  addEventListener('resize', () => { if (!cur) return; if (MOB.matches !== sheet.open) { const k = cur; closeHP(false); openHP(k); } else place(); });
  f.addEventListener('change', paintTrigs);
  hpSync = () => { const lo = F.pmin > P_MIN ? F.pmin : 0, hi = F.pmax < P_MAX ? F.pmax : Infinity; if (lo === HPR.lo && hi === HPR.hi) return; HPR.lo = lo; HPR.hi = hi; f.dispatchEvent(new Event('hpr')); paintTrigs(); };
  f.classList.add('finder--js'); paintTrigs();
}

/* ---------------- check list ---------------- */
{
  const items = [
    ['face', 'Face ID або Touch ID', 'Налаштовуємо обличчя чи відбиток при вас. Якщо біометрія не працює, це часто слід невдалого ремонту — такі телефони ми так і позначаємо.'],
    ['sun', 'Дисплей і True Tone', 'Дивимося на білому фоні: плями, смуги, «вигорання». Перемикач True Tone у Пункті керування — є він чи ні, підказує, чи дисплей рідний.'],
    ['cam', 'Камери', 'Фокус на близькій і далекій відстані, перемикання між камерами, відео зі стабілізацією, фронтальна камера.'],
    ['mic', 'Мікрофони і динаміки', 'Записуємо голосове, дзвонимо на гучному звʼязку, вмикаємо музику на повну гучність — без хрипу.'],
    ['battery', 'АКБ: відсоток і цикли', 'Відсоток видно в налаштуваннях, цикли — у діагностиці. Ми пишемо обидва числа в паспорт, а в магазині показуємо їх на екрані.'],
    ['drop', 'Герметичність', 'Перевіряємо, чи корпус тримає герметичність, і пишемо результат у паспорт: «герметичний, без слідів ремонту» — або чесно, що ні.'],
    ['chip', 'Оригінальність деталей', 'У налаштуваннях є розділ «Історія деталей і обслуговування»: там видно, чи міняли екран, батарею чи камеру на невідомі деталі.'],
    ['lock', 'Відвʼязка від Apple ID', '«Локатор» вимкнено, акаунт попереднього власника вийшов. Без цього телефон купувати не можна — ми таких не продаємо.'],
    ['signal', 'Звʼязок', 'Ставимо SIM або eSIM, ловимо мережу, Wi-Fi, Bluetooth і NFC для оплати телефоном.'],
  ];
  const ol = $('[data-check]'), seen = new Set();
  ol.innerHTML = items.map(([ic, q, a], i) => `<li><button class="check__q" type="button" aria-expanded="false" aria-controls="ck${i}" data-i="${i}"><span class="check__ico">${icon(ic)}</span><b>${q}</b><span class="check__tick">${icon('check')}</span></button><div class="check__a" id="ck${i}" hidden><p>${a}</p></div></li>`).join('');
  const paint = () => { $('[data-check-bar]').style.width = (seen.size / items.length * 100) + '%'; $('[data-check-n]').textContent = seen.size === items.length ? 'Усі пункти переглянуто — тепер ви знаєте більше за більшість продавців.' : `Переглянуто ${seen.size} з ${items.length}`; };
  ol.addEventListener('click', e => {
    const b = e.target.closest('.check__q'); if (!b) return;
    const li = b.parentElement, open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', open); li.classList.toggle('is-open', open); $('.check__a', li).hidden = !open;
    if (open) { seen.add(b.dataset.i); li.classList.add('is-seen'); paint(); }
  });
  ol.querySelector('.check__q').click();
}

/* ---------------- installment calculator ---------------- */
const BANKS = [
  // payment_terms from the shop's posts: «Приват / Моно / ПУМБ / Sens / A Bank — 3–4 платежі без %, до 12 міс — за умовами банку»,
  // «Укрсиб: до 14 платежів», «Sens: 11 платежів без % (до 16 на вигідних умовах)». «3–4 без %»: up to 4 the note says «без %», and at 4 it adds that 3 or 4 is the bank's call — exactly as the source text puts it.
  { id: 'privat', n: 'Приват', note: '3–4 платежі без %, до 12 міс', def: 4, max: 12, free: 4, freeExact: 3 },
  { id: 'mono', n: 'Моно', note: '3–4 платежі без %, до 12 міс', def: 4, max: 12, free: 4, freeExact: 3 },
  { id: 'pumb', n: 'ПУМБ', note: '3–4 платежі без %, до 12 міс', def: 4, max: 12, free: 4, freeExact: 3 },
  { id: 'abank', n: 'A-Bank', note: '3–4 платежі без %, до 12 міс', def: 4, max: 12, free: 4, freeExact: 3 },
  { id: 'sens', n: 'Sens', note: '11 без %, до 16 на вигідних умовах', def: 11, max: 16, free: 11 },
  { id: 'ukrsib', n: 'Укрсиб', note: 'до 14 платежів', def: 14, max: 14, free: 0 },
];
let bank = BANKS.find(b => b.id === 'ukrsib');
function setCalcPrice(v, keepPick) { const p = $('[data-c-price]'), r = $('[data-c-range]'), pk = $('[data-c-pick]'); p.value = v; r.value = Math.min(95000, Math.max(5000, v)); rangeFill(r); if (!keepPick) pk.value = [...pk.options].some(o => o.value === String(v)) ? String(v) : ''; calc(); }
function calc() {
  const price = Math.max(0, +$('[data-c-price]').value || 0), nI = $('[data-c-n]');
  nI.max = bank.max; if (+nI.value > bank.max) nI.value = bank.max; rangeFill(nI);
  const n = +nI.value; $('[data-c-nout]').textContent = n;
  const empty = $('[data-c-price]').value.trim() === '', bad = price < 3000 || price > 150000; bad && !empty ? $('[data-c-price]').setAttribute('aria-invalid', 'true') : $('[data-c-price]').removeAttribute('aria-invalid');
  const sum = $('[data-c-sum]'), msg = $('[data-c-msg]'), unit = $('.calc__unit');
  sum.textContent = bad ? '' : fmt(Math.ceil(price / n)); sum.hidden = bad; if (unit) unit.hidden = bad;
  if (msg) { msg.hidden = !bad; msg.textContent = empty ? 'Введіть ціну — порахуємо платіж' : price > 150000 ? 'Забагато для розстрочки' : 'Замало для розстрочки'; }
  $('.calc__sum').classList.toggle('is-msg', bad);
  $('[data-c-note]').textContent = bad ? 'Розстрочка — на суму від 3 000 до 150 000 ₴' : bank.free && n <= bank.free ? (bank.freeExact && n > bank.freeExact ? `${n} ${plural(n, 'платіж', 'платежі', 'платежів')} без % · 3 чи 4 без %, точно скаже банк` : `${n} ${plural(n, 'платіж', 'платежі', 'платежів')} без % · перший платіж у день покупки`) : `${n} ${plural(n, 'платіж', 'платежі', 'платежів')} · ${bank.id === 'sens' && n > 11 ? 'на вигідних умовах Sens' : 'за умовами банку'}, без урахування комісії`;
  $('[data-c-bars]').innerHTML = Array.from({ length: n }, () => '<i></i>').join('');
}
{
  $('[data-banks]').innerHTML = BANKS.map(b => `<label class="bank"><input type="radio" name="bank" value="${b.id}" ${b === bank ? 'checked' : ''}><span><b>${b.n}</b><small>${b.note}</small></span></label>`).join('');
  $('[data-banks]').addEventListener('change', e => { bank = BANKS.find(b => b.id === e.target.value); const nI = $('[data-c-n]'); nI.max = bank.max; nI.value = bank.def; calc(); });
  $('[data-c-price]').addEventListener('input', e => { const r = $('[data-c-range]'); $('[data-c-pick]').value = ''; r.value = Math.min(95000, Math.max(5000, +e.target.value || 0)); rangeFill(r); calc(); });
  $('[data-c-range]').addEventListener('input', e => { $('[data-c-price]').value = e.target.value; $('[data-c-pick]').value = ''; rangeFill(e.target); calc(); });
  $('[data-c-n]').addEventListener('input', calc);
  $('[data-c-pick]').addEventListener('change', e => { if (e.target.value) setCalcPrice(+e.target.value, true); });
  rangeFill($('[data-c-range]')); calc();
}

/* ---------------- trade-in ---------------- */
{
  const f = $('[data-trade-form]');
  const olds = ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 16', 'iPhone 16 Plus', 'iPhone 16e', 'iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 17', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone Air', 'iPhone 18 Pro', 'iPhone 18 Pro Max', 'Інший iPhone'];
  f.model.innerHTML = olds.map(m => `<option ${m === 'iPhone 13' ? 'selected' : ''}>${m}</option>`).join('');
  const factors = () => {
    const b = +f.batt.value, look = f.look.value, out = [];
    $('[data-t-bo]').textContent = b + '%'; rangeFill(f.batt);
    out.push(b >= 85 ? ['up', `АКБ ${b}% — плюс до оцінки`] : ['down', `АКБ ${b}% — врахуємо заміну батареї`]);
    out.push(look === 'Як новий' ? ['up', 'Корпус і екран без слідів'] : look === 'Дрібні подряпини' ? ['up', 'Дрібні подряпини — звична справа'] : look === 'Не вмикається' ? ['down', 'Не вмикається — спершу діагностика'] : ['down', 'Сколи чи тріщини — врахуємо ремонт']);
    out.push(f.box.checked ? ['up', 'Коробка є'] : ['down', 'Без коробки — трохи менше']);
    out.push(f.faceid.checked ? ['up', 'Face ID / Touch ID працює'] : ['down', 'Біометрія не працює — суттєво впливає']);
    if (f.repaired.checked) out.push(['down', 'Був у ремонті — подивимось, що міняли']);
    $('[data-t-factors]').innerHTML = out.map(([c, t]) => `<li class="${c}">${icon(c === 'up' ? 'check' : 'x')}${t}</li>`).join('');
  };
  f.addEventListener('input', factors); f.addEventListener('change', factors); factors();
  f.target.innerHTML = '<option value="">Ще не вирішив(-ла)</option>' + LIST.filter(l => l.cat === 'iphone').map(l => `<option value="${l.id}">${esc(S.title(l))} ${esc(l.color)} — ${fmt(l.price)} ₴</option>`).join('');
  f.addEventListener('submit', e => {
    e.preventDefault(); const err = $('[data-err]', f), ok = $('[data-ok]', f);
    f.name.removeAttribute('aria-invalid'); f.phone.removeAttribute('aria-invalid');
    if (!f.name.value.trim() || !phoneOk(f.phone.value)) { err.textContent = !f.name.value.trim() ? 'Як до вас звертатися?' : PHONE_ERR; err.hidden = false; ok.hidden = true; const bad = f.name.value.trim() ? f.phone : f.name; bad.setAttribute('aria-invalid', 'true'); bad.focus(); return; }
    err.hidden = true;
    const t = byId(f.target.value);
    S.addRequest({ type: 'tradein', model: f.model.value, mem: f.mem.value, look: f.look.value, batt: +f.batt.value, box: f.box.checked, repaired: f.repaired.checked, faceid: f.faceid.checked, target: t ? `${S.title(t)} ${t.color || ''}`.trim() : '', name: f.name.value.trim(), phone: phoneNorm(f.phone.value) });
    ok.innerHTML = `${icon('check')}<span>Дякуємо! Ми напишемо вам у Direct або зателефонуємо протягом робочого дня (${openState().when}). Остаточну суму назвемо після огляду телефона в магазині.</span>`; ok.hidden = false; lockUntilEdit(f);
  });
}

/* ---------------- overlays: scroll lock + hide the bottom bar ----------------
   Any open dialog, the filter sheet or the mobile menu locks the page (no jump on unlock)
   and hides the sticky bar, so nothing covers the sheet's own buttons (Instagram in-app browser too). */
{
  const html = document.documentElement, fl = $('[data-filters]'), menu = $('[data-menu]'), ob = $('[data-filters-open]');
  let on = false, y = 0;
  const sheetMode = () => getComputedStyle(ob).display !== 'none';
  const anyOpen = () => !!document.querySelector('dialog[open]') || (fl.classList.contains('is-open') && sheetMode()) || !menu.hidden;
  const sync = () => {
    const want = anyOpen(); if (want === on) return; on = want;
    if (want) { y = scrollY; html.classList.add('is-locked'); document.body.style.top = `-${y}px`; }
    else { html.classList.remove('is-locked'); document.body.style.top = ''; noSmooth(() => window.scrollTo(0, y)); }
  };
  const mo = new MutationObserver(sync);
  $$('dialog').forEach(d => mo.observe(d, { attributes: true, attributeFilter: ['open'] }));
  mo.observe(fl, { attributes: true, attributeFilter: ['class'] });
  mo.observe(menu, { attributes: true, attributeFilter: ['hidden'] });
  // typing: hide the bar so the on-screen keyboard + bar never cover the field
  const typing = el => el && el.matches && el.matches('input:not([type=range]):not([type=checkbox]):not([type=radio]), select, textarea');
  document.addEventListener('focusin', e => html.classList.toggle('is-typing', typing(e.target)));
  document.addEventListener('focusout', () => setTimeout(() => html.classList.toggle('is-typing', typing(document.activeElement)), 50));
}

/* ---------------- init ---------------- */
function refreshData() {
  LIST = S.listings();
  buildFilters(); renderGrid(); saveFav(); paintTray(); buildTiles(); paintPick();
  { // calculator pick list: one group per model (iPhones newest last, as in the picker), cheapest first inside
    const pk = $('[data-c-pick]'), keep = pk.value, CO = { iphone: 0, watch: 1, airpods: 2, mac: 3 }, by = new Map();
    [...LIST].filter(avail).sort((x, y) => CO[x.cat] - CO[y.cat] || (x.cat === 'iphone' ? famOrder(x.model) - famOrder(y.model) : x.model.localeCompare(y.model)) || x.price - y.price)
      .forEach(l => { if (!by.has(l.model)) by.set(l.model, []); by.get(l.model).push(l); });
    pk.innerHTML = '<option value="">— позиція з каталогу —</option>' + [...by].map(([m, ls]) => `<optgroup label="${esc(m)}">${ls.map(l => `<option value="${l.price}">${esc([l.cat === 'iphone' ? memL(l.mem) : '', l.color].filter(Boolean).join(' ') || S.title(l))} — ${fmt(l.price)} ₴</option>`).join('')}</optgroup>`).join('');
    pk.value = keep;
  }
}
refreshData();
if (window.__fillFilmUnit) window.__fillFilmUnit();
addEventListener('storage', e => { if (e.key === 'ispayal.listings.v2') refreshData(); });
onStageScroll();
routeHash();
if ('requestIdleCallback' in window) requestIdleCallback(bootGL, { timeout: 1200 }); else setTimeout(bootGL, 300);
