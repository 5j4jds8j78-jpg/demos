/* Кабінет студії — demo. All data below is invented for the demo; requests left on the demo site are read from this browser's localStorage. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const TZ = 'Europe/Kyiv';
  const STATUSES = ['Нова', 'Підтверджено', 'Прийшла', 'Скасовано'];
  const CLS = { 'Нова': 'new', 'Підтверджено': 'ok', 'Прийшла': 'came', 'Скасовано': 'cancel' };
  const MONTHS = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function kyiv(d = new Date()) {
    const p = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(d);
    const g = t => +p.find(x => x.type === t).value;
    return { y: g('year'), m: g('month'), d: g('day'), h: g('hour'), min: g('minute') };
  }
  const now = kyiv();
  const iso = (o, add = 0) => new Date(Date.UTC(o.y, o.m - 1, o.d) + add * 864e5).toISOString().slice(0, 10);
  const TODAY = iso(now);
  const human = key => { const [y, m, d] = key.split('-').map(Number); return key === TODAY ? 'сьогодні' : key === iso(now, 1) ? 'завтра' : `${d} ${MONTHS[m - 1]}`; };
  $('[data-today]').textContent = new Intl.DateTimeFormat('uk-UA', { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  // ---- demo data (invented) ----
  const PH = n => `+380 XX XXX 00 0${n}`;
  const seed = [
    { id: 'SR-1041', name: 'Марина', phone: PH(1), service: 'Нарощування вій', style: 'Натуральний', master: 'Юля', date: TODAY, time: '09:00', dur: 2, status: 'Прийшла', source: 'сайт' },
    { id: 'SR-1042', name: 'Віка', phone: PH(2), service: 'Ламінування брів', master: 'Ксюша', date: TODAY, time: '10:00', dur: 1, status: 'Прийшла', source: 'Instagram' },
    { id: 'SR-1043', name: 'Іра', phone: PH(3), service: 'Фарбування та корекція брів', master: 'Ксюша', date: TODAY, time: '11:30', dur: 1, status: 'Підтверджено', source: 'телефон' },
    { id: 'SR-1044', name: 'Оксана', phone: PH(4), service: 'Перманентний макіяж', style: 'губи', master: 'Юля', date: TODAY, time: '12:00', dur: 2.5, status: 'Підтверджено', source: 'сайт' },
    { id: 'SR-1045', name: 'Аня', phone: PH(5), service: 'Ламінування вій', master: 'Ксюша', date: TODAY, time: '13:30', dur: 1.5, status: 'Підтверджено', source: 'сайт' },
    { id: 'SR-1046', name: 'Світлана', phone: PH(6), service: 'Ламінування брів', master: 'Ксюша', date: TODAY, time: '16:00', dur: 1, status: 'Скасовано', source: 'Instagram' },
    { id: 'SR-1047', name: 'Дарина', phone: PH(7), service: 'Нарощування вій', style: 'Лисячий', master: 'Юля', date: TODAY, time: '16:00', dur: 2, status: 'Нова', source: 'сайт' },
    { id: 'SR-1048', name: 'Катя', phone: PH(8), service: 'Ламінування вій', master: 'Будь-хто', date: iso(now, 1), time: '11:30', dur: 1.5, status: 'Нова', source: 'сайт' },
    { id: 'SR-1049', name: 'Наталя', phone: PH(9), service: 'Нарощування вій', style: 'Обʼєм 2D–3D', master: 'Юля', date: iso(now, 2), time: '14:30', dur: 2, status: 'Нова', source: 'сайт' },
  ];
  const certs = [
    { id: 'CERT-07', who: 'від Андрія → для Дани', what: 'нарощування вій у Юлі', date: 'продано 2 тижні тому', status: 'Використано' },
    { id: 'CERT-08', who: 'від колег → для Ірини', what: 'на будь-яку послугу', date: 'продано 9 днів тому', status: 'Активний' },
    { id: 'CERT-09', who: 'від мами → для Софії', what: 'ламінування вій', date: 'продано вчора', status: 'Активний' },
    { id: 'CERT-10', who: 'для Марти', what: 'перманентний макіяж', date: 'продано сьогодні', status: 'Активний' },
  ];

  // overrides of status kept in this browser
  const KEY = 'sr-demo-admin-status';
  let over = {}; try { over = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { /* none */ }
  function fromSite() {
    try { return JSON.parse(localStorage.getItem('sr-demo-requests') || '[]').map(r => Object.assign({ dur: 1.5, fresh: true }, r, { source: 'сайт' })); } catch { return []; }
  }
  let extra = [];
  const all = () => [...extra, ...fromSite(), ...seed].map(r => Object.assign({}, r, over[r.id] ? { status: over[r.id] } : {}));
  const setStatus = (id, s) => { over[id] = s; try { localStorage.setItem(KEY, JSON.stringify(over)); } catch { /* */ } render(); };

  // ---- schedule ----
  const START = 9, HOURS = 10;
  const times = $('.sched__times');
  times.innerHTML = Array.from({ length: HOURS + 1 }, (_, i) => `<span>${String(START + i).padStart(2, '0')}:00</span>`).join('');
  function renderSched(list) {
    $$('.sched__track').forEach(t => t.innerHTML = '');
    const hour = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hour')) || 64;
    list.filter(r => r.date === TODAY && r.time).forEach(r => {
      const col = $(`[data-col="${r.master === 'Будь-хто' ? 'Ксюша' : r.master}"] .sched__track`); if (!col) return;
      const [h, m] = r.time.split(':').map(Number);
      const top = (h + m / 60 - START) * hour, height = Math.max(44, (r.dur || 1) * hour - 6);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'slot'; b.dataset.s = r.status;
      b.style.top = top + 3 + 'px'; b.style.height = height + 'px';
      b.innerHTML = `<b>${esc(r.name)} · ${esc(r.time)}</b><small>${esc(r.service)}${r.style ? ' · ' + esc(r.style) : ''}</small><small><span class="st st--${CLS[r.status]}">${r.status}</span></small>`;
      b.setAttribute('aria-label', `${r.time}, ${r.name}, ${r.service}, ${r.status}`);
      b.addEventListener('click', () => open(r.id));
      col.appendChild(b);
    });
    const line = $('[data-now]');
    const t = now.h + now.min / 60;
    if (t >= START && t <= START + HOURS) { line.hidden = false; line.style.top = 44 + (t - START) * hour + 'px'; } else line.hidden = true;
  }

  // ---- requests ----
  let filter = '';
  function renderReq(list) {
    const rows = list.filter(r => !filter || r.status === filter);
    $('[data-req]').innerHTML = rows.map(r => `
      <tr data-id="${esc(r.id)}">
        <td class="who"><button type="button">${esc(r.name)}${r.fresh ? '<span class="fresh">з сайту</span>' : ''}</button><small>${esc(r.phone)}</small></td>
        <td>${esc(r.service)}${r.style ? `<br><small>${esc(r.style)}</small>` : ''}</td>
        <td>${esc(r.master)}</td>
        <td>${esc(human(r.date))}, ${esc(r.time)}</td>
        <td><small>${esc(r.source)}</small></td>
        <td><span class="st st--${CLS[r.status]}">${r.status}</span></td>
      </tr>`).join('') || '<tr><td colspan="6"><small>Немає заявок з таким статусом.</small></td></tr>';
    $$('[data-req] tr[data-id]').forEach(tr => tr.addEventListener('click', () => open(tr.dataset.id)));
  }
  $$('[data-filter]').forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter; $$('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); render();
  }));

  // ---- certificates ----
  $('[data-certs]').innerHTML = certs.map(c => `<li class="cert"><span class="cert__ic" aria-hidden="true"></span><b>${c.id} · ${esc(c.what)}</b><small>${esc(c.who)} · ${esc(c.date)}</small><span class="st st--${c.status === 'Активний' ? 'ok' : 'came'}">${c.status}</span></li>`).join('');

  // ---- messenger preview ----
  let kind = 'tg';
  function renderChat(list) {
    const r = list.find(x => x.status === 'Нова') || list[0];
    const phone = $('[data-phone]'); phone.dataset.kind = kind;
    $('[data-chat-title]').textContent = kind === 'tg' ? 'Бот студії · Telegram' : 'Студія · Viber';
    $('[data-chat-sub]').textContent = kind === 'tg' ? 'сповіщення про записи' : 'чат для майстрів';
    $('[data-chat]').innerHTML = `
      <div class="bubble"><b>Нова заявка з сайту · ${esc(r.id)}</b>
        ${esc(r.service)}${r.style ? ' · ' + esc(r.style) : ''}<br>
        Майстер: ${esc(r.master)}<br>
        Коли: ${esc(human(r.date))}, ${esc(r.time)}<br>
        ${esc(r.name)}, ${esc(r.phone)}
        <time>${String(now.h).padStart(2, '0')}:${String(now.min).padStart(2, '0')}</time></div>
      <div class="bubble__btns" aria-hidden="true"><span>Підтвердити</span><span>Подзвонити</span></div>
      <div class="bubble"><b>Нагадування</b>Завтра о 10:00 у Ксюші — Катя, ламінування вій. Надіслати клієнтці SMS-нагадування?<time>08:30</time></div>`;
  }
  const segs = $$('[data-msgr]');
  segs.forEach((b, i) => {
    b.addEventListener('click', () => { kind = b.dataset.msgr; segs.forEach(x => { x.setAttribute('aria-selected', String(x === b)); x.tabIndex = x === b ? 0 : -1; }); $('#phone').setAttribute('aria-labelledby', b.id); render(); });
    b.addEventListener('keydown', e => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return; e.preventDefault(); const n = segs[(i + d + segs.length) % segs.length]; n.focus(); n.click(); });
  });

  // ---- KPIs ----
  function renderKpi(list) {
    const today = list.filter(r => r.date === TODAY && r.status !== 'Скасовано').length;
    const nw = list.filter(r => r.status === 'Нова').length;
    $('[data-kpi="visits"]').textContent = today;
    $('[data-kpi="new"]').textContent = nw;
    $('[data-kpi="certs"]').textContent = certs.filter(c => c.status === 'Активний').length;
    const b = $('[data-new-count]'); b.textContent = nw || ''; nw ? b.removeAttribute('data-zero') : b.setAttribute('data-zero', '');
    const t = now.h * 60 + now.min, open = t >= 540 && t < 1140;
    const o = $('[data-open]'); o.textContent = open ? 'Зараз відчинено' : 'Зараз зачинено'; o.classList.toggle('is-closed', !open);
  }

  // ---- drawer ----
  const drawer = $('[data-drawer]'); let lastFocus = null, current = null;
  function open(id) {
    const r = all().find(x => x.id === id); if (!r) return;
    current = r; lastFocus = document.activeElement;
    $('[data-d-id]').textContent = r.id + (r.fresh ? ' · з вашого тесту на сайті' : '');
    $('[data-d-name]').textContent = r.name;
    $('[data-d-dl]').innerHTML = [['Послуга', r.service + (r.style ? ' · ' + r.style : '')], ['Майстер', r.master], ['Коли', `${human(r.date)}, ${r.time}`], ['Телефон', r.phone], ['Звідки', r.source]].map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');
    $('[data-d-status]').innerHTML = STATUSES.map(s => `<button type="button" aria-pressed="${s === r.status}" data-set="${s}">${s}</button>`).join('');
    $$('[data-set]').forEach(b => b.addEventListener('click', () => { setStatus(r.id, b.dataset.set); $$('[data-set]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); }));
    const call = $('[data-d-call]'); call.setAttribute('aria-disabled', 'true'); call.removeAttribute('href'); call.setAttribute('role', 'link'); call.tabIndex = 0;
    drawer.hidden = false; document.body.style.overflow = 'hidden';
    $('.drawer__panel .icon-btn').focus();
  }
  function close() { drawer.hidden = true; document.body.style.overflow = ''; lastFocus?.focus?.(); }
  $$('[data-close]').forEach(b => b.addEventListener('click', close));
  $('[data-d-confirm]').addEventListener('click', () => { if (current) { setStatus(current.id, 'Підтверджено'); $$('[data-set]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.set === 'Підтверджено'))); } });
  document.addEventListener('keydown', e => {
    if (drawer.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') { // keep focus inside
      const f = $$('.drawer__panel button, .drawer__panel [tabindex="0"], .drawer__panel textarea'); const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });

  // ---- simulate an incoming request ----
  const NAMES = ['Олена', 'Юлія', 'Тетяна', 'Ліза', 'Христина'];
  const SVCS = [['Нарощування вій', 'Ляльковий', 'Юля'], ['Ламінування брів', '', 'Ксюша'], ['Ламінування вій', '', 'Ксюша'], ['Перманентний макіяж', '', 'Юля']];
  let n = 0;
  $('[data-simulate]').addEventListener('click', () => {
    const [service, style, master] = SVCS[n % SVCS.length];
    const r = { id: 'SR-' + (1100 + n), name: NAMES[n % NAMES.length], phone: PH((n % 9) + 1), service, style, master, date: iso(now, 1 + (n % 3)), time: ['10:00', '13:00', '15:30'][n % 3], status: 'Нова', source: 'сайт', fresh: true };
    n++; extra.unshift(r); filter = ''; $$('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.filter === ''))); render();
    const tr = $(`[data-req] tr[data-id="${r.id}"]`); tr?.classList.add('is-flash');
  });

  // nav highlight
  const links = $$('.side__nav a');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + e.target.id))); }), { rootMargin: '-30% 0px -60% 0px' });
  ['today', 'requests', 'certs', 'notify'].forEach(id => io.observe(document.getElementById(id)));

  function render() { const list = all(); renderSched(list); renderReq(list); renderChat(list); renderKpi(list); }
  render();
  addEventListener('resize', () => renderSched(all()));
})();
