// iSPAYAL demo — site logic (no framework). Data + requests: assets/js/store.js (localStorage, shared with /admin/).
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
const PHONE = '+380989885588', DIRECT = 'https://ig.me/m/ispayal.ua';

let toastT;
function toast(msg) { const t = $('[data-toast]'); t.textContent = msg; t.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('is-on'), 2800); }
function rangeFill(el) { const p = (el.value - el.min) / (el.max - el.min) * 100; el.style.setProperty('--p', p + '%'); }
const phoneOk = v => v.replace(/\D/g, '').length >= 10;
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
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
const DAYN = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'пʼятницю', 'суботу'];
function kyivNow() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kyiv', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).map(x => [x.type, x.value]));
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
  return { wd, h: +p.hour, m: +p.minute, ymd: `${p.year}-${p.month}-${p.day}` };
}
function openState() {
  const n = kyivNow(), [o, c] = HOURS[n.wd], t = n.h + n.m / 60;
  if (t >= o && t < c) { const left = c - t; return { open: true, text: left <= 1 ? `Відчинено, зачиняємось о ${c}:00` : `Відчинено до ${c}:00` }; }
  if (t < o) return { open: false, text: `Зачинено · відчинимо сьогодні о ${o}:00` };
  const nd = (n.wd + 1) % 7; return { open: false, text: `Зачинено · відчинимо ${nd === (n.wd + 1) % 7 ? 'завтра' : 'в ' + DAYN[nd]} о ${HOURS[nd][0]}:00` };
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

/* ---------------- 3D stage ---------------- */
const stage = $('[data-stage]'), wrap = $('[data-stagewrap]');
const chapters = { hero: $('.hero'), explode: $('[data-chapter="explode"]'), services: $('[data-chapter="services"]'), book: $('[data-chapter="book"]') };
let gl = null;
function hasWebGL() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } }
const lowPower = (navigator.connection && navigator.connection.saveData) || (navigator.deviceMemory && navigator.deviceMemory < 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 3);
const wantGL = !qs.has('poster') && (qs.has('capture') || qs.has('gl') || (!reduced && !lowPower)) && hasWebGL();

function stageProgress() {
  const y = scrollY, top = wrap.offsetTop, vh = innerHeight;
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
    const mod = await import('./hero3d.js');
    const labels = Object.fromEntries($$('[data-part]', stage).map(b => [b.dataset.part, b]));
    gl = mod.start($('[data-gl]'), {
      anchor: $('[data-anchor]'), labels, font: '"ISP Display"', mono: '"ISP Mono"', capture: qs.has('capture'), still: qs.has('capture'),
      onPick: name => pickPart(name, true),
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
  screen: { t: 'Переклей скла', s: 'Переклей скла', pts: ['Скло тріснуло, а зображення і сенсор працюють', 'Міняємо лише скло — оригінальний дисплей залишається', 'Приклади «до / після» — у хайлайті «Переклей скла»'] },
  back: { t: 'Заднє скло', s: 'Заднє скло', pts: ['Тріщина на задній панелі, скло кришиться по краях', 'Замінюємо скло, поки тріщина не пішла далі', 'Ставимо нову проклейку корпусу'] },
  board: { t: 'Контролер заряджання', s: 'Контролер заряджання', pts: ['Не заряджається, заряджається через раз або не бачить кабель', 'Гріється під час зарядки', 'Діагностуємо плату і міняємо мікросхему контролера'] },
  frame: { t: 'Полірування корпусу', s: 'Полірування корпусу', pts: ['Подряпини та потертості на рамці', 'Повертаємо товарний вигляд — для себе чи перед продажем', 'Робимо, поки чекаєте, якщо майстер вільний'] },
};
let currentSvc = 'battery';
function renderSvc(k) {
  currentSvc = k; const s = SVC[k];
  $$('[data-svc]').forEach(b => b.setAttribute('aria-selected', b.dataset.svc === k));
  $('[data-svc-panel]').innerHTML = `<h3>${s.t}</h3><ul>${s.pts.map(p => `<li>${p}</li>`).join('')}</ul>
    <p class="svc__price">${icon('wrench')}Ціну скаже майстер після діагностики</p>
    <a class="btn btn--red btn--sm" href="#zapys" data-svc-book="${s.s}">Записатися: ${s.t.toLowerCase()}${icon('arrow')}</a>`;
  onStageScroll();
}
function pickPart(name, scroll) {
  renderSvc(name);
  if (scroll) chapters.services.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}
$('[data-svc-list]').addEventListener('click', e => { const b = e.target.closest('[data-svc]'); if (b) renderSvc(b.dataset.svc); });
$('[data-svc-list]').addEventListener('keydown', e => {
  const tabs = $$('[data-svc]'), i = tabs.findIndex(t => t.dataset.svc === currentSvc);
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]; renderSvc(n.dataset.svc); n.focus(); e.preventDefault(); }
});
$('[data-svc-panel]').addEventListener('click', e => { const a = e.target.closest('[data-svc-book]'); if (a) { $('[data-repair-service]').value = a.dataset.svcBook; } });
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
    const bad = [];
    if (!form.model.value.trim()) bad.push(form.model);
    if (!form.name.value.trim()) bad.push(form.name);
    if (!phoneOk(form.phone.value)) bad.push(form.phone);
    $$('input', form).forEach(i => i.removeAttribute('aria-invalid')); bad.forEach(i => i.setAttribute('aria-invalid', 'true'));
    if (!form.time || !form.querySelector('[name=time]:checked')) { err.textContent = 'Оберіть вільну годину.'; err.hidden = false; return; }
    if (bad.length) { err.textContent = bad[0] === form.phone ? 'Перевірте номер телефону — потрібно 10 цифр.' : 'Заповніть позначені поля.'; err.hidden = false; bad[0].focus(); return; }
    const r = S.addRequest({ type: 'repair', model: form.model.value.trim(), service: form.service.value, day: form.day.value, time: form.querySelector('[name=time]:checked').value, name: form.name.value.trim(), phone: form.phone.value.trim(), status: 'Записано' });
    ok.innerHTML = `${icon('check')}<span>Записали: ${esc(r.service)}, ${r.day.split('-').reverse().slice(0, 2).join('.')} о ${r.time}. Майстер підтвердить дзвінком. <small class="mono">Демо: заявка зберігається в цьому браузері й одразу видна в /admin/.</small></span>`;
    ok.hidden = false; paintTimes();
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
    while (tried < cands.length) { const f = cands[tried++]; const type = f.endsWith('webm') ? 'video/webm' : 'video/mp4'; if (v.canPlayType(type)) { v.src = 'assets/film/' + f; v.load(); return; } }
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
    if (p) { v.pause(); } else { v.play().catch(() => { }); }
  });
  // fill the unit line from the real listing
  window.__fillFilmUnit = () => {
    const l = byId('Df4qevaMr-N'); if (!l) return;
    $('[data-unit-spec]', sec).textContent = `${l.model} ${memL(l.mem)} · стан ${l.score} | 10 · АКБ ${l.batt}% · ${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}`;
  };
}

/* ---------------- catalog ---------------- */
const F = { models: new Set(), colors: new Set(), cats: new Set(), gens: new Set(), vars: new Set(), mems: new Set(), conds: new Set(), sims: new Set(), score: 8, batt: 80, pmin: 5000, pmax: 95000, sealed: false, fav: false, sort: 'feed' };
const SCORE_MIN = 8, BATT_MIN = 80, P_MIN = 5000, P_MAX = 95000;
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
  chipGroup($('[data-fl-cond]'), ['Новий', 'Майже новий', 'б/у', 'Під замовлення'].filter(c => LIST.some(l => condGroup(l) === c)), F.conds);
  chipGroup($('[data-fl-sim]'), ['Фіз', 'eSIM'].filter(s => LIST.some(l => l.sim === s)), F.sims, v => v === 'Фіз' ? 'Фізична SIM' : 'eSIM');
  const sc = $('[data-fl-score]'), bt = $('[data-fl-batt]'), a = $('[data-fl-pmin]'), b = $('[data-fl-pmax]');
  sc.min = SCORE_MIN; a.min = b.min = P_MIN; a.max = b.max = P_MAX;
  sc.value = F.score; bt.value = F.batt; a.value = F.pmin; b.value = F.pmax;
  const paint = () => {
    F.score = +sc.value; F.batt = +bt.value;
    let lo = +a.value, hi = +b.value; if (lo > hi - 1000) { if (document.activeElement === a) a.value = lo = hi - 1000; else b.value = hi = lo + 1000; }
    F.pmin = lo; F.pmax = hi;
    $('[data-o-score]').textContent = F.score <= SCORE_MIN ? 'будь-яка' : F.score.toFixed(1); $('[data-o-batt]').textContent = F.batt <= BATT_MIN ? 'будь-яка' : F.batt + '%';
    const w = $('[data-o-word]'); if (w) w.textContent = F.score <= SCORE_MIN ? '' : F.score >= 9.8 ? '· Як новий' : F.score >= 9.4 ? '· Відмінний' : F.score >= 9 ? '· Хороший' : '· Нормальний';
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
  [sc, bt, a, b].forEach(i => i.oninput = () => { paint(); renderGrid(); });
  $('[data-fl-sealed]').checked = F.sealed; $('[data-fl-sealed]').onchange = e => { F.sealed = e.target.checked; renderGrid(); };
  paint();
}
function passScore(l) { return F.score <= SCORE_MIN || l.isNew || (l.score != null && l.score >= F.score - 1e-9); }
function passBatt(l) { return F.batt <= BATT_MIN || l.isNew || (l.batt != null && l.batt >= F.batt); }
function filtered() {
  const a = LIST.filter(l =>
    (!F.cats.size || F.cats.has(l.cat)) && (!F.models.size || F.models.has(l.model)) && (!F.colors.size || F.colors.has(l.color)) &&
    (!F.gens.size || (l.cat === 'iphone' && F.gens.has(gen(l.model)))) && (!F.vars.size || (l.cat === 'iphone' && F.vars.has(variant(l.model)))) &&
    (!F.mems.size || F.mems.has(l.mem)) && (!F.conds.size || F.conds.has(condGroup(l))) && (!F.sims.size || F.sims.has(l.sim)) &&
    passScore(l) && passBatt(l) && l.price >= F.pmin && l.price <= F.pmax && (!F.sealed || l.sealed) && (!F.fav || FAV.has(l.id)));
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
  return 'цикли не вказані';
}
/* drawn devices for non-phones (generic, original) */
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
function visual(l, big) {
  return l.cat === 'iphone' ? `<img src="assets/img/phones/${l.tint}.webp" alt="" width="560" height="700" loading="lazy">` : deviceSVG(l, big);
}
const STATUS = { available: 'Є в наявності', reserved: 'Заброньовано', sold: 'Продано' };
const statusOf = l => STATUS[l.status] ? l.status : 'available';
function statusHTML(l) { const st = statusOf(l); return `<span class="stat stat--${st}">${STATUS[st]}${st === 'available' ? ' <small>станом на 22.11</small>' : ''}</span>`; }
const whatWord = l => l.cat === 'iphone' ? 'цей iPhone' : l.cat === 'watch' ? 'цей Apple Watch' : l.cat === 'airpods' ? 'ці AirPods' : 'цей MacBook';
function directBtn(l, attr, cls = 'btn btn--red') { return `<a class="${cls} btn--direct" href="${DIRECT}" target="_blank" rel="noopener" ${attr}="${l.id}">${icon('direct')}<span>Написати в Direct про ${whatWord(l)}</span></a>`; }
function tagHTML(l) {
  const g = condGroup(l), cls = g === 'Новий' ? 'card__tag--new' : g === 'Під замовлення' ? 'card__tag--order' : '';
  return `<span class="card__tag ${cls}">${esc(S.cond(l))}</span>`;
}
function svcList(l) { return l.service ? l.service.split(/\s*\+\s*/).filter(Boolean) : []; }
function cardHTML(l) {
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
      ${l.batt != null ? `<div class="ring" role="img" aria-label="АКБ ${l.batt}%">${ringSVG(l.batt)}<b>${l.batt}%</b></div>` : ''}
      ${l.batt != null ? `<p class="pp__cyc"><span>АКБ</span><b>${battText(l)}</b></p>` : ''}</div>`;
  } else if (l.isNew) {
    pp = `<div class="pp pp--new"><p class="pp__k">${l.label && /замовл/i.test(l.label) ? 'Під замовлення' : 'Новий'}</p><p class="pp__newt">${esc(l.warranty || 'Новий пристрій')}</p></div>`;
  }
  const ig = igUrl(l);
  return `<li class="card card--${statusOf(l)}" data-id="${l.id}">
    <button class="card__vis card__vis--${l.cat}" type="button" data-open="${l.id}" aria-label="Паспорт: ${esc(S.title(l))} ${esc(l.color)}">${visual(l)}${tagHTML(l)}</button>
    <div class="card__icons">
      <button class="iconbtn" type="button" data-fav="${l.id}" aria-pressed="${FAV.has(l.id)}" aria-label="В обране">${icon('heart')}</button>
      <button class="iconbtn" type="button" data-cmp="${l.id}" aria-pressed="${CMP.includes(l.id)}" aria-label="Додати до порівняння">${icon('compare')}</button>
    </div>
    <div class="card__body">
      ${statusHTML(l)}${BEST.has(l.id) ? `<span class="bestv" title="Найменше ₴ за 1% АКБ серед таких самих моделей у видачі">${icon('battery')}Найкраща ціна за АКБ</span>` : ''}
      <h3 class="card__t">${esc(S.title(l)).replace(/ (\d+ [ГТ]Б)$/, ' · $1')}</h3>
      <p class="card__sub">${l.color ? `<span class="swatch" style="background:${SWATCH[l.tint] || '#999'}"></span>${esc(l.color)}` : ''}${l.sim ? ` · ${l.sim === 'Фіз' ? 'Фіз. SIM' : 'eSIM'}` : ''}</p>
      ${pp}
      <div class="flags">${flags.join('')}</div>
      <div class="card__foot"><div><p class="price">${fmt(l.price)}<small>₴</small></p>${l.warranty ? `<p class="card__warr">${esc(l.warranty)}</p>` : ''}</div></div>
      <div class="card__cta">${directBtn(l, 'data-direct')}</div>
      <div class="card__acts">
        <button class="btn btn--line" type="button" data-book="${l.id}" ${statusOf(l) === 'sold' ? 'disabled' : ''}>${statusOf(l) === 'sold' ? 'Продано' : 'Забронювати'}</button>
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
function renderGrid() {
  const a = filtered(), grid = $('[data-grid]');
  BEST = computeBest(a);
  // FLIP: remember where cards were
  const gr = grid.getBoundingClientRect(), flip = !reduced && gr.bottom > 0 && gr.top < innerHeight && a.length <= 60;
  const before = {}; if (flip) $$('.card', grid).forEach(c => { before[c.dataset.id] = c.getBoundingClientRect(); });
  grid.innerHTML = a.length ? a.map(cardHTML).join('') : `<li class="empty"><p class="h3">Такого зараз немає — але може зʼявитися завтра.</p><p style="margin-top:8px">Скажіть, що шукаєте, і ми напишемо першими, ще до посту в Instagram.</p><button type="button" class="btn btn--red" style="margin-top:16px" data-notify-go>${icon('bell')}Повідомити, коли зʼявиться</button></li>`;
  if (flip) $$('.card', grid).forEach((c, i) => {
    const b = before[c.dataset.id], r = c.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    if (b) { const dx = b.left - r.left, dy = b.top - r.top; if (dx || dy) c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' }); }
    else c.animate([{ opacity: 0, transform: 'scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: Math.min(i, 8) * 30, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
  });
  tickCount($('[data-count]'), a.length); $('[data-count-word]').textContent = unitWord(a.length);
  $('[data-count-btn]').textContent = a.length ? `Показати ${a.length} ${a.every(l => l.cat === 'iphone') ? 'iPhone' : unitWord(a.length)}` : 'Нічого не знайдено — змініть фільтри';
  const act = F.models.size + F.colors.size + F.cats.size + F.gens.size + F.vars.size + F.mems.size + F.conds.size + F.sims.size + (F.score > SCORE_MIN) + (F.batt > BATT_MIN) + (F.pmin > P_MIN || F.pmax < P_MAX) + F.sealed;
  $('[data-active-count]').textContent = act ? act : '';
  const want = F.gens.size === 1 ? `iPhone ${[...F.gens][0]}${F.vars.size === 1 && [...F.vars][0] !== 'Базова' ? ' ' + [...F.vars][0] : ''}${F.mems.size === 1 ? ' ' + [...F.mems][0] : ''}${F.batt > BATT_MIN ? `, АКБ від ${F.batt}%` : ''}` : '';
  if (want) $('[data-notify-want]').value = want;
}
$('[data-sort]').addEventListener('change', e => { F.sort = e.target.value; renderGrid(); });
$('[data-grid]').addEventListener('click', e => { if (!e.target.closest('[data-notify-go]')) return; const f = $('[data-notify-form]'); f.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); setTimeout(() => f.want.focus({ preventScroll: true }), reduced ? 0 : 450); });

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
    import('./hero3d.js').then(mod => {
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
      F.models.clear(); F.colors.clear(); if (!on) { F.models.add(m); F.cats.clear(); F.gens.clear(); F.vars.clear(); }
      buildFilters(); renderGrid(); paintPick();
      if (!on) t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
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
function resetFilters() { Object.assign(F, { score: SCORE_MIN, batt: BATT_MIN, pmin: P_MIN, pmax: P_MAX, sealed: false }); ['models', 'colors', 'cats', 'gens', 'vars', 'mems', 'conds', 'sims'].forEach(k => F[k].clear()); buildFilters(); renderGrid(); paintPick(); }
$('[data-reset]').addEventListener('click', resetFilters);
$('[data-fav-toggle]').addEventListener('click', e => { F.fav = !F.fav; e.currentTarget.setAttribute('aria-pressed', F.fav); renderGrid(); });
{
  const fl = $('[data-filters]'), ob = $('[data-filters-open]');
  const sheet = () => getComputedStyle(ob).display !== 'none'; // filters are a bottom sheet only when the button is shown
  const close = () => { if (!fl.classList.contains('is-open')) return; fl.classList.remove('is-open'); ob.setAttribute('aria-expanded', 'false'); ob.focus({ preventScroll: true }); };
  ob.addEventListener('click', () => { const bd = $('[data-filters-body]', fl); if (bd) bd.scrollTop = 0; fl.scrollTop = 0; fl.classList.add('is-open'); ob.setAttribute('aria-expanded', 'true'); $('.filters__close', fl).focus({ preventScroll: true }); });
  $$('[data-filters-close]').forEach(b => b.addEventListener('click', close));
  fl.addEventListener('keydown', e => { if (!sheet() || !fl.classList.contains('is-open')) return; if (e.key === 'Escape') { close(); e.preventDefault(); } else trapTab(fl, e); });
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
  const link = location.href.split('#')[0] + '#t/' + l.id;
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
  d.innerHTML = `<div class="cmp__in"><div class="cmp__head"><h2 class="h3">Порівняння</h2><button class="iconbtn" type="button" data-close aria-label="Закрити">${icon('x')}</button></div>
  <div style="overflow-x:auto"><table><thead><tr><th></th>${ls.map(l => `<td><div class="cmp__vis">${visual(l)}</div><b>${esc(S.title(l))}</b></td>`).join('')}</tr></thead><tbody>
  ${row('Ціна', l => fmt(l.price) + ' ₴', bP)}${row('Стан', l => dash(l.score != null ? l.score + ' | 10' : null), bS)}${row('АКБ', l => dash(l.batt != null ? l.batt + '%' : null), bB)}${row('Цикли', l => dash(l.cycles), bC)}
  ${row('Колір', l => dash(esc(l.color)))}${row('SIM', l => dash(l.sim))}${row('Тип', l => esc(S.cond(l)))}${row('Герметичний', l => l.sealed ? 'так, без слідів ремонту' : dash(null))}
  ${row('Обслуговування', l => dash(esc(l.service)))}${row('Примітка', l => dash(esc(l.note)))}${row('Комплект', l => dash(esc(l.kit)))}${row('Бонус', l => dash(esc(l.bonus)))}${row('Гарантія', l => dash(esc(l.warranty)))}
  <tr><th></th>${ls.map(l => `<td><button class="btn btn--red btn--sm" type="button" data-open-from-cmp="${l.id}">Паспорт</button></td>`).join('')}</tr></tbody></table></div>
  <p class="mono muted" style="margin-top:12px">Червоним — найкраще значення серед обраних. «Не вказано» — у пості цього немає.</p></div>`;
  d.showModal();
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
  return `<svg viewBox="0 0 200 200" aria-hidden="true" style="max-width:150px"><circle cx="100" cy="100" r="${r}" fill="none" stroke="#e2dfd8" stroke-width="14"/><circle cx="100" cy="100" r="${r}" fill="none" stroke="#ff2a2f" stroke-width="14" stroke-linecap="round" stroke-dasharray="${(c * pct / 100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 100 100)"/><circle cx="100" cy="100" r="62" fill="none" stroke="#0a0a0a" stroke-width="2" stroke-dasharray="2 5" opacity=".35"/></svg>`;
}
function cyclesNote(l) {
  if (l.cycles != null && /замін/i.test(l.battRaw)) return `Акумулятор замінений · ${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}`;
  if (/замін/i.test(l.battRaw)) return 'Акумулятор замінений';
  if (l.battNew) return 'Новий акумулятор';
  if (l.cycles == null) return 'Цикли в пості не вказані';
  const cw = `${l.cycles} ${plural(l.cycles, 'цикл', 'цикли', 'циклів')}`, b = l.batt != null ? l.batt + '%' : '';
  if (l.cycles < 300) return b ? `${cw} — батарея майже не використовувалась, тримає ${b}` : `${cw} — батарея майже не використовувалась`;
  if (l.cycles < 700) return b ? `${cw} — звичайне використання, тримає ${b}` : `${cw} — звичайне використання`;
  return b ? `${cw} — батарея вже попрацювала, але тримає ${b}` : `${cw} — батарея вже попрацювала`;
}
function openPass(id, focusBook) {
  const l = byId(id); if (!l) return;
  const d = $('[data-pass]'), ig = igUrl(l);
  const hist = [];
  if (l.label) hist.push([l.label, 'Позначка в пості', false]);
  svcList(l).forEach(s => hist.push([s[0].toUpperCase() + s.slice(1), 'Обслуговування', true]));
  if (/замін/i.test(l.battRaw) && !svcList(l).some(s => /акумул/i.test(s))) hist.push(['Акумулятор замінений', l.battRaw, true]);
  if (l.sealed) hist.push(['Герметичний', 'Без слідів ремонту', false]);
  if (l.note) hist.push([l.note, 'Примітка продавця', true]);
  const kit = [];
  if (/коробк/i.test(l.kit)) kit.push(['box', (l.kit.match(/коробка[^+,]*/i) || ['Коробка'])[0].trim(), false]);
  if (/кабель/i.test(l.kit)) kit.push(['cable', 'Кабель', false]);
  if (/скло/i.test(l.bonus)) kit.push(['glass', 'Захисне скло', true]);
  if (/чохол/i.test(l.bonus)) kit.push(['case', 'Чохол', true]);
  if (/блок/i.test(l.bonus)) kit.push(['plug', 'Блок живлення', true]);
  const dials = [];
  if (l.score != null) dials.push(`<div class="dial">${gauge(l.score)}<p class="dial__v">${String(l.score).replace('.', ',')}</p><p class="dial__k">Стан, з 10</p></div>`);
  if (l.batt != null) dials.push(`<div class="dial">${battGauge(l.batt)}<p class="dial__v" style="margin-top:-96px;margin-bottom:58px">${l.batt}%</p><p class="dial__k">Ємність АКБ</p><p class="dial__s">${cyclesNote(l)}</p></div>`);
  if (!dials.length) dials.push(`<div class="dial dial--wide"><p class="dial__v" style="margin:6px 0 0">${esc(condGroup(l))}</p><p class="dial__k">${l.isNew ? 'Новий пристрій' : 'Стан у пості не вказано'}</p></div>`);
  const isPhone = l.cat === 'iphone';
  d.innerHTML = `
  <div class="pass__vis pass__vis--${l.cat}">
    <p class="pass__no">ПАСПОРТ · ${esc(l.code || l.id)}</p>
    ${isPhone ? `<img src="assets/img/phones/${l.tint}.webp" alt="${esc(S.title(l))} ${esc(l.color)}, узагальнена 3D-модель" data-pv-img>` : `<div class="pass__dev">${deviceSVG(l, true)}</div>`}
    <p class="pass__hint">${isPhone ? icon('360') : ''}<span data-pv-hint>${isPhone ? 'Узагальнена 3D-модель у кольорі ' + esc(l.color) : 'Узагальнене зображення'}</span></p>
  </div>
  <div class="pass__data">
    <button class="iconbtn pass__x" type="button" data-close aria-label="Закрити паспорт">${icon('x')}</button>
    <p class="pass__eyebrow">${esc(S.cond(l))}${l.isNew ? ' · спеціальна пропозиція' : ''}</p>
    ${statusHTML(l)}
    <h2 class="pass__h" id="pass-h">${esc(S.title(l))}</h2>
    <p class="pass__sub">${l.color ? `<span class="swatch" style="background:${SWATCH[l.tint]}"></span>${esc(l.color)}` : ''}${l.sim ? ` · SIM: ${esc(l.sim)}` : ''}</p>
    <p class="pass__title mono muted">${esc(l.title)}</p>
    <div class="dials ${dials.length === 1 ? 'dials--one' : ''}">${dials.join('')}</div>
    ${hist.length ? `<div class="hist"><h3>Що відомо про цей пристрій</h3><ol>${hist.map(([a, b, s]) => `<li class="${s ? 'is-svc' : ''}">${esc(a)}<small>${esc(b)}</small></li>`).join('')}</ol></div>` : ''}
    ${kit.length ? `<div class="kit"><h3>Комплект${l.bonus ? ' і бонус' : ''}</h3><ul>${kit.map(([i, t, b]) => `<li class="${b ? 'is-bonus' : ''}">${icon(i)}<span>${esc(t)}${b ? '<br><small class="mono">бонус*</small>' : ''}</span></li>`).join('')}</ul></div>` : ''}
    <div class="pay"><h3>Оплата${l.warranty ? ' і гарантія' : ''}</h3><div class="pay__chips"><span>USDT</span><span>$</span><span>₴</span><span>€</span><span>Післяплата</span><span>Розстрочка</span></div>
      <p>${l.warranty ? `${icon('shield')} ${esc(l.warranty)}. ` : ''}${l.isNew ? 'Спеціальна пропозиція — діє при визначених умовах оплати. ' : ''}<a href="#rozstrochka" data-to-calc="${l.price}">Порахувати розстрочку</a>${ig ? ` · <a href="${ig}" target="_blank" rel="noopener">Пост в Instagram ↗</a>` : ''}</p></div>
    <div class="pass__bookwrap" ${statusOf(l) === 'sold' ? 'hidden' : ''}><h3>Забронювати</h3>
      <form class="pass__book" data-pass-book novalidate>
        <label class="fld"><span>Імʼя</span><input name="name" autocomplete="given-name" required></label>
        <label class="fld"><span>Телефон</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+380" required></label>
        <button class="btn btn--red" type="submit">Забронювати</button>
        <p class="form__err" data-err hidden style="grid-column:1/-1"></p><p class="form__ok" data-ok hidden style="grid-column:1/-1"></p>
      </form>
    </div>
    <div class="pass__buy">
      <div class="pass__row"><p class="price">${fmt(l.price)}<small>₴</small></p>
        <div class="pass__acts"><a class="sq" href="tel:${PHONE}" aria-label="Подзвонити">${icon('phone')}</a><button class="sq" type="button" data-share aria-label="Скопіювати посилання на цю позицію">${icon('share')}</button></div></div>
      ${directBtn(l, 'data-direct-pass')}
    </div>
  </div>`;
  d.showModal();
  if (location.hash !== '#t/' + id) history.replaceState(null, '', '#t/' + id);
  $('.pass__data', d).scrollTop = 0;
  if (focusBook) setTimeout(() => { const n = d.querySelector('[name=name]'); n.scrollIntoView({ block: 'center' }); n.focus({ preventScroll: true }); }, 60); else d.querySelector('[data-close]').focus({ preventScroll: true });
  if (isPhone && wantGL && !qs.has('capture')) {
    import('./hero3d.js').then(mod => {
      if (!d.open) return;
      const vis = $('.pass__vis', d), c = document.createElement('canvas'); c.tabIndex = 0; c.setAttribute('aria-label', 'Покрутіть 3D-модель: перетягніть або стрілки'); c.setAttribute('role', 'img');
      vis.appendChild(c); viewer = mod.startViewer(c, { tint: l.tint, font: '"ISP Display"', mono: '"ISP Mono"', auto: !reduced });
      $('[data-pv-img]', d).style.visibility = 'hidden'; $('[data-pv-hint]', d).textContent = 'Покрутіть: тягніть пальцем або мишею';
    }).catch(() => { });
  }
  d.onclick = e => {
    if (e.target === d || e.target.closest('[data-close]')) d.close();
    if (e.target.closest('[data-share]')) { const u = location.href.split('#')[0] + '#t/' + id; try { navigator.clipboard.writeText(u).then(() => toast('Посилання скопійовано — надішліть у Direct')); } catch { toast(u); } }
    if (e.target.closest('[data-direct-pass]')) directCopy(l);
    const c = e.target.closest('[data-to-calc]'); if (c) { e.preventDefault(); setCalcPrice(+c.dataset.toCalc); d.close(); setTimeout(() => { $('#rozstrochka').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); $('[data-c-price]').focus({ preventScroll: true }); }, 0); }
  };
  $('[data-pass-book]', d).onsubmit = e => {
    e.preventDefault(); const f = e.target, err = $('[data-err]', f), ok = $('[data-ok]', f);
    if (!f.name.value.trim() || !phoneOk(f.phone.value)) { err.textContent = !f.name.value.trim() ? 'Як до вас звертатися?' : 'Перевірте номер телефону — потрібно 10 цифр.'; err.hidden = false; (f.name.value.trim() ? f.phone : f.name).setAttribute('aria-invalid', 'true'); return; }
    err.hidden = true;
    S.addRequest({ type: 'booking', listing: l.id, title: `${S.title(l)}${l.color ? ' ' + l.color : ''}`, price: l.price, name: f.name.value.trim(), phone: f.phone.value.trim() });
    ok.innerHTML = `${icon('check')}<span>Забронюємо — менеджер напише в Direct або передзвонить. <small class="mono">Демо: заявка вже в /admin/.</small></span>`; ok.hidden = false;
    f.querySelector('button').disabled = true;
  };
}
$$('dialog').forEach(d => d.addEventListener('keydown', e => trapTab(d, e)));
$('[data-pass]').addEventListener('close', () => { if (viewer) { viewer.destroy(); viewer = null; } if (location.hash.startsWith('#t/')) history.replaceState(null, '', '#katalog'); });
function routeHash() { const m = location.hash.match(/^#t\/([\w-]+)/); if (m && byId(m[1])) { $('#katalog').scrollIntoView(); openPass(m[1]); } }
addEventListener('hashchange', routeHash);

/* notify */
$('[data-notify-form]').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target, err = $('[data-err]', f), ok = $('[data-ok]', f);
  if (!f.want.value.trim() || f.contact.value.trim().length < 3) { err.textContent = 'Вкажіть, що чекаєте, і як з вами звʼязатися.'; err.hidden = false; return; }
  err.hidden = true; S.addRequest({ type: 'notify', want: f.want.value.trim(), contact: f.contact.value.trim() });
  ok.innerHTML = `${icon('check')}<span>Готово. Напишемо, щойно «${esc(f.want.value.trim())}» буде на вітрині.</span>`; ok.hidden = false; f.reset();
});

/* hero finder (iPhones) */
{
  const f = $('[data-finder]');
  const fill = () => {
    f.model.innerHTML = `<option value="">будь-який iPhone</option>` + MODELS().map(m => `<option ${m === 'iPhone 15 Pro' ? 'selected' : ''}>${m}</option>`).join('');
    f.mem.innerHTML = `<option value="">будь-якій памʼяті</option>` + [...new Set(LIST.filter(l => l.cat === 'iphone').map(l => l.mem))].sort((a, b) => a - b).map(m => `<option value="${m}" ${m === 256 ? 'selected' : ''}>${memL(m)}</option>`).join('');
    f.batt.value = '85'; f.max.value = '40000';
  };
  const count = () => {
    const n = LIST.filter(l => l.cat === 'iphone' && (!f.model.value || l.model === f.model.value) && (!f.mem.value || l.mem === +f.mem.value) && (+f.batt.value === 0 || l.isNew || (l.batt != null && l.batt >= +f.batt.value)) && l.price <= +f.max.value).length;
    $('[data-f-count]').textContent = n ? `Показати ${n} ${plural(n, 'телефон', 'телефони', 'телефонів')}` : 'Повідомити, коли буде';
    return n;
  };
  fill(); count();
  f.addEventListener('change', count);
  f.addEventListener('submit', e => {
    e.preventDefault();
    ['cats', 'gens', 'vars', 'mems', 'conds', 'sims'].forEach(k => F[k].clear());
    F.cats.add('iphone');
    F.models.clear(); F.colors.clear(); if (f.model.value) F.models.add(f.model.value);
    if (f.mem.value) F.mems.add(+f.mem.value);
    F.batt = Math.max(BATT_MIN, +f.batt.value || BATT_MIN); F.pmax = Math.min(P_MAX, +f.max.value); F.pmin = P_MIN; F.score = SCORE_MIN; F.sealed = false; F.fav = false; $('[data-fav-toggle]').setAttribute('aria-pressed', 'false');
    buildFilters(); renderGrid(); paintPick();
    $('#katalog').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  });
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
  { id: 'privat', n: 'Приват', note: '4 платежі без % від банку', def: 4, max: 12, free: 4 },
  { id: 'mono', n: 'Моно', note: '4 платежі без % від банку', def: 4, max: 12, free: 4 },
  { id: 'pumb', n: 'ПУМБ', note: '4 платежі без % від банку', def: 4, max: 12, free: 4 },
  { id: 'abank', n: 'A-Bank', note: '4 платежі без % від банку', def: 4, max: 12, free: 4 },
  { id: 'sens', n: 'Sens', note: '11 платежів без %', def: 11, max: 11, free: 11 },
  { id: 'ukrsib', n: 'Укрсиб', note: 'до 14 платежів', def: 14, max: 14, free: 0 },
];
let bank = BANKS[1];
function setCalcPrice(v) { const p = $('[data-c-price]'), r = $('[data-c-range]'); p.value = v; r.value = Math.min(95000, Math.max(5000, v)); rangeFill(r); calc(); }
function calc() {
  const price = Math.max(0, +$('[data-c-price]').value || 0), nI = $('[data-c-n]');
  nI.max = bank.max; if (+nI.value > bank.max) nI.value = bank.max; rangeFill(nI);
  const n = +nI.value; $('[data-c-nout]').textContent = n;
  $('[data-c-sum]').textContent = fmt(Math.ceil(price / n));
  $('[data-c-note]').textContent = bank.free && n <= bank.free ? `${n} ${plural(n, 'платіж', 'платежі', 'платежів')} без переплати · перший платіж у день покупки` : `${n} ${plural(n, 'платіж', 'платежі', 'платежів')} · без урахування можливої комісії банку`;
  $('[data-c-bars]').innerHTML = Array.from({ length: n }, () => '<i></i>').join('');
}
{
  $('[data-banks]').innerHTML = BANKS.map(b => `<label class="bank"><input type="radio" name="bank" value="${b.id}" ${b === bank ? 'checked' : ''}><span><b>${b.n}</b><small>${b.note}</small></span></label>`).join('');
  $('[data-banks]').addEventListener('change', e => { bank = BANKS.find(b => b.id === e.target.value); const nI = $('[data-c-n]'); nI.max = bank.max; nI.value = bank.def; calc(); });
  $('[data-c-price]').addEventListener('input', e => { const r = $('[data-c-range]'); r.value = Math.min(95000, Math.max(5000, +e.target.value || 0)); rangeFill(r); calc(); });
  $('[data-c-range]').addEventListener('input', e => { $('[data-c-price]').value = e.target.value; rangeFill(e.target); calc(); });
  $('[data-c-n]').addEventListener('input', calc);
  $('[data-c-pick]').addEventListener('change', e => { if (e.target.value) setCalcPrice(+e.target.value); });
  rangeFill($('[data-c-range]')); calc();
}

/* ---------------- trade-in ---------------- */
{
  const f = $('[data-trade-form]');
  const olds = ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 16', 'iPhone 16 Pro', 'iPhone 16 Pro Max', 'Інший iPhone'];
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
    if (!f.name.value.trim() || !phoneOk(f.phone.value)) { err.textContent = !f.name.value.trim() ? 'Як до вас звертатися?' : 'Перевірте номер телефону — потрібно 10 цифр.'; err.hidden = false; (f.name.value.trim() ? f.phone : f.name).setAttribute('aria-invalid', 'true'); return; }
    err.hidden = true;
    const t = byId(f.target.value);
    S.addRequest({ type: 'tradein', model: f.model.value, mem: f.mem.value, look: f.look.value, batt: +f.batt.value, box: f.box.checked, repaired: f.repaired.checked, faceid: f.faceid.checked, target: t ? `${S.title(t)} ${t.color || ''}`.trim() : '', name: f.name.value.trim(), phone: f.phone.value.trim() });
    ok.innerHTML = `${icon('check')}<span>Отримали. Напишемо або передзвонимо сьогодні в робочі години. Візьміть телефон у магазин — огляд займе близько 15 хвилин.</span>`; ok.hidden = false;
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
    else { html.classList.remove('is-locked'); document.body.style.top = ''; window.scrollTo({ top: y, behavior: 'instant' }); }
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
  $('[data-c-pick]').innerHTML = '<option value="">— позиція з каталогу —</option>' + LIST.map(l => `<option value="${l.price}">${esc(S.title(l))}${l.color ? ' ' + esc(l.color) : ''} — ${fmt(l.price)} ₴</option>`).join('');
}
refreshData();
if (window.__fillFilmUnit) window.__fillFilmUnit();
addEventListener('storage', e => { if (e.key === 'ispayal.listings.v2') refreshData(); });
onStageScroll();
routeHash();
if ('requestIdleCallback' in window) requestIdleCallback(bootGL, { timeout: 1200 }); else setTimeout(bootGL, 300);
