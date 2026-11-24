// iSPAYAL owner panel. One entry -> site listing + Instagram caption. Stored in localStorage until the backend is connected.
(function () {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const S = window.ISP, fmt = S.fmt;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ic = id => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const TINTS = { silver: 'Сріблястий', burgundy: 'Бордовий', glacier: 'Блакитний (Glacier / Sky)', ultramarine: 'Ультрамарин', sierra: 'Sierra Blue', natural: 'Натуральний титан', black: 'Чорний', white: 'Білий', gray: 'Сірий', blue: 'Синій', desert: 'Пісочний / золотий', pink: 'Рожевий', green: 'Зелений', purple: 'Фіолетовий', yellow: 'Жовтий', red: 'Червоний', orange: 'Помаранчевий' };
  const kyivDay = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Kyiv' }).format(new Date()); // YYYY-MM-DD, same day keys as the site's booking form
  const cyc = n => { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? 'цикл' : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'цикли' : 'циклів'; };
  const memL = m => (+m >= 1024 ? (+m / 1024) + ' ТБ' : m + ' ГБ');
  let toastT; const toast = m => { const t = $('[data-toast]'); t.textContent = m; t.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('is-on'), 2600); };

  // no invented requests: the tables show only what visitors really left on the site (old seeded rows keep their «приклад» tag)

  /* tiles */
  function tiles() {
    const r = S.requests(), L = S.listings(), today = kyivDay();
    const n = t => r.filter(x => x.type === t && !['Скасовано', 'Видано', 'Продано'].includes(x.status)).length;
    $('[data-tiles]').innerHTML = [
      ['Нових заявок', r.filter(x => x.status === 'Нова').length, true], ['Бронювань', n('booking')], ['Trade-in', n('tradein')],
      ['Ремонтів сьогодні', r.filter(x => x.type === 'repair' && x.day === today).length], ['На вітрині', L.length],
    ].map(([k, v, red]) => `<div class="tile ${red ? 'tile--red' : ''}"><b>${v}</b><span>${k}</span></div>`).join('');
  }

  /* add / edit form */
  const f = $('[data-add]');
  $('#models').innerHTML = [...new Set(S.listings().filter(l => l.cat === 'iphone').map(l => l.model))].map(m => `<option value="${m}">`).join('');
  $('[data-tint]').innerHTML = Object.entries(TINTS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
  $('[data-tint]').value = 'blue';
  function read() {
    const fd = new FormData(f);
    const cond = fd.get('cond'), isNew = cond === 'Новий' || cond === 'Під замовлення';
    const model = fd.get('model').trim(), mem = +fd.get('mem'), color = fd.get('color').trim(), sim = fd.get('sim');
    const score = isNew ? null : Math.min(10, +String(fd.get('score') || '').replace(',', '.') || 0) || null;
    let batt = isNew ? null : (+fd.get('batt') || null), cycles = isNew ? null : (fd.get('cycles') === '' ? null : +fd.get('cycles'));
    const battNew = !!fd.get('battNew');
    const battRaw = batt == null ? '' : (battNew ? `АКБ замінений ${batt}%` : `${batt}%`) + (cycles != null && !(battNew && cycles === 0) ? ` (${cycles} ${cyc(cycles)})` : '');
    if (battNew && cycles === 0) cycles = null;
    const label = (fd.get('label') || '').trim() || (cond === 'Майже новий' || cond === 'Під замовлення' ? cond : '');
    const svc = fd.getAll('svc');
    const photos = String(fd.get('photos') || '').split(/[\n,]+/).map(x => x.trim()).filter(Boolean);
    return {
      id: fd.get('id') || 'new' + Date.now().toString(36).slice(-5), code: String(fd.get('code') || '').trim().replace(/^.*instagram\.com\/(?:p|reel)\/([\w-]+).*$/i, '$1'), cat: 'iphone', photos,
      title: `Apple ${model} ${mem >= 1024 ? mem / 1024 + 'TB' : mem + 'GB'} (${color})${sim ? ` (${sim})` : ''}`,
      model, mem, color, tint: fd.get('tint'), sim, label, isNew, score, batt, cycles, battRaw, battNew: battNew || svc.includes('новий акумулятор'),
      kit: fd.get('kit') || '', service: svc.join(' + '), sealed: !!fd.get('sealed'), bonus: fd.getAll('bonus').join(' + ') + (fd.getAll('bonus').length ? '*' : ''),
      warranty: fd.get('warranty'), price: +fd.get('price') || 0, note: (fd.get('note') || '').trim(), special: isNew, order: -1, added: new Date().toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' }),
    };
  }
  function preview() {
    const l = read(), flags = [];
    if (l.sealed) flags.push(`<span class="flag flag--ok">${ic('drop')}Герметичний, без слідів ремонту</span>`);
    if (l.service) l.service.split(' + ').forEach(s => flags.push(`<span class="flag flag--svc">${ic('wrench')}${esc(s)}</span>`));
    if (l.note) flags.push(`<span class="flag flag--note">${esc(l.note)}</span>`);
    if (l.bonus) flags.push(`<span class="flag">${ic('gift')}${esc(l.bonus.replace(/\*$/, ''))}</span>`);
    const r = 29, c = 2 * Math.PI * r;
    const pp = l.score != null || l.batt != null ? `<div class="pp">${l.score != null ? `<div><p class="pp__k">Стан</p><p class="pp__score"><b>${String(l.score).replace('.', ',')}</b><span>| 10</span></p><div class="bar"><i style="width:${l.score * 10}%"></i></div></div>` : '<div></div>'}
      ${l.batt != null ? `<div class="ring"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="${r}" fill="none" stroke="#e4e2dc" stroke-width="6"/><circle cx="32" cy="32" r="${r}" fill="none" stroke="#ff2a2f" stroke-width="6" stroke-linecap="round" stroke-dasharray="${(c * l.batt / 100).toFixed(1)} ${c.toFixed(1)}"/></svg><b>${l.batt}%</b></div><p class="pp__cyc"><span>АКБ</span><b>${esc(l.battRaw)}</b></p>` : ''}</div>`
      : `<div class="pp pp--new"><p class="pp__k">${esc(S.cond(l))}</p><p class="pp__newt">${esc(l.warranty)}</p></div>`;
    const ph = S.photos(l), rel = u => /^assets\//.test(u) ? '../' + u : u, phN = $('[data-ph-n]');
    if (phN) phN.textContent = ph.length ? `${ph.length} фото — перше на картці, усі в паспорті` : 'Без фото — на сайті 3D-модель';
    $('[data-preview]').innerHTML = `<li class="card"><div class="card__vis${ph.length ? ' card__vis--photo' : ''}">${ph.length ? `<img class="vis__photo" src="${esc(rel(S.photoSmall(ph[0])))}" alt="" onerror="this.outerHTML='<img src=&quot;../assets/img/phones/${l.tint}.webp&quot; alt=&quot;&quot;>'">` : `<img src="../assets/img/phones/${l.tint}.webp" alt="" width="560" height="700">`}<span class="card__tag ${l.isNew ? 'card__tag--new' : ''}">${esc(S.cond(l))}</span></div>
      <div class="card__body"><h3 class="card__t">${esc(l.model)} · ${S.memL(l.mem)}</h3><p class="card__sub">${esc(l.color)}${l.sim ? ' · ' + esc(l.sim) : ''}</p>${pp}
      <div class="flags">${flags.join('')}</div><div class="card__foot"><div><p class="price">${fmt(l.price)}<small>₴</small></p><p class="card__warr">${esc(l.warranty)}</p></div></div></div></li>`;
  }
  let t0 = 0, tick = 0;
  f.addEventListener('input', () => {
    preview();
    if (!t0) { t0 = performance.now(); tick = setInterval(() => { $('[data-timer]').textContent = `Секундомір: ${((performance.now() - t0) / 1000).toFixed(0)} с`; }, 500); }
  });
  f.addEventListener('change', preview);
  $('[data-gen]').addEventListener('click', () => { $('[data-caption]').value = S.caption(read()); $('[data-copy]').disabled = false; toast('Текст готовий — скопіюйте і вставте в пост'); });
  $('[data-copy]').addEventListener('click', () => { const ta = $('[data-caption]'); ta.select(); try { navigator.clipboard.writeText(ta.value).then(() => toast('Скопійовано')); } catch { document.execCommand('copy'); toast('Скопійовано'); } });
  $('[data-new]').addEventListener('click', () => { f.reset(); f.id.value = ''; $('[data-err]', f).hidden = true; $('[data-ok]', f).hidden = true; f.score.removeAttribute('aria-invalid'); $('[data-publish]').textContent = 'Опублікувати на сайті'; preview(); });
  f.addEventListener('submit', e => {
    e.preventDefault();
    const err = $('[data-err]', f), ok = $('[data-ok]', f), l = read();
    const fail = (m, el) => { err.textContent = m; err.hidden = false; ok.hidden = true; if (el) { el.setAttribute('aria-invalid', 'true'); el.focus(); } };
    f.score.removeAttribute('aria-invalid');
    const sc = f.score.value.trim().replace(',', '.'), used = !l.isNew;
    if (used && sc !== '' && !(+sc >= 1 && +sc <= 10)) return fail('Стан — число від 1 до 10, наприклад 9,4.', f.score);
    if (!l.model || !l.color || l.price < 1000) return fail('Потрібні модель, колір і ціна.');
    err.hidden = true;
    const L = S.listings(), i = L.findIndex(x => x.id === l.id);
    if (i >= 0) { l.code = l.code || L[i].code || ''; l.order = L[i].order; l.status = L[i].status; L[i] = l; } else L.unshift(l);
    S.saveListings(L);
    $('[data-caption]').value = S.caption(l); $('[data-copy]').disabled = false;
    const secs = t0 ? Math.round((performance.now() - t0) / 1000) : 0; clearInterval(tick); t0 = 0;
    ok.innerHTML = `${ic('check')}<span>${i >= 0 ? 'Оновлено' : 'Опубліковано'}: ${esc(S.title(l))} ${esc(l.color)}${secs ? ` — за ${secs} с` : ''}. Уже на сайті, підпис для Instagram — праворуч. <a href="../index.html#t/${l.id}" target="_blank" rel="noopener">Відкрити паспорт на сайті</a></span>`;
    ok.hidden = false; $('[data-timer]').textContent = secs ? `Останній телефон додано за ${secs} с` : 'Збережено';
    // the form now edits the unit it just published: a second press saves changes instead of adding a duplicate
    f.id.value = l.id; $('[data-publish]').textContent = 'Зберегти зміни';
    stock(); tiles();
  });

  /* stock table */
  function stock() {
    const q = ($('[data-stock-q]').value || '').toLowerCase(), L = S.listings();
    const rows = L.filter(l => (l.title + ' ' + l.model + ' ' + l.color).toLowerCase().includes(q));
    $('[data-stock-n]').textContent = `${L.length} поз.`;
    $('[data-stock]').innerHTML = rows.map(l => `<tr><td><div class="who">${S.photos(l).length ? `<img class="who__ph" src="${esc((/^assets\//.test(S.photos(l)[0]) ? '../' : '') + S.photoSmall(S.photos(l)[0]))}" alt="" onerror="this.remove()">` : l.cat === 'iphone' ? `<img src="../assets/img/phones/${l.tint}.webp" alt="">` : `<span class="tag">${{ watch: 'Watch', airpods: 'AirPods', mac: 'Mac' }[l.cat]}</span>`}<span><b>${esc(S.title(l))}</b><small>${esc(l.color)}${l.sim ? ' · ' + esc(l.sim) : ''}${l.code ? ` · <a href="https://www.instagram.com/p/${l.code}/" target="_blank" rel="noopener">пост ↗</a>` : ''}</small></span></div></td>
      <td>${l.score != null ? String(l.score).replace('.', ',') : '—'}</td><td>${l.batt != null ? l.batt + '%' : '—'}${l.cycles != null ? ` · ${l.cycles}` : ''}</td><td><b>${fmt(l.price)} ₴</b></td><td class="hide-m">${esc(S.cond(l))}</td>
      <td><div class="acts">${l.cat === 'iphone' ? `<button type="button" data-edit="${l.id}">Редагувати</button>` : ''}<button type="button" data-cap="${l.id}" aria-label="Згенерувати текст посту для Instagram: ${esc(S.title(l))}">Текст посту</button><select data-lst="${l.id}" aria-label="Статус на сайті">${[['available', 'Є в наявності'], ['reserved', 'Заброньовано'], ['sold', 'Продано']].map(([k, v]) => `<option value="${k}" ${(l.status || 'available') === k ? 'selected' : ''}>${v}</option>`).join('')}</select><button type="button" data-del="${l.id}" aria-label="Прибрати з вітрини">Прибрати</button></div></td></tr>`).join('');
  }
  $('[data-stock-q]').addEventListener('input', stock);
  $('[data-stock]').addEventListener('change', e => {
    const sel = e.target.closest('[data-lst]'); if (!sel) return;
    const L = S.listings(), l = L.find(x => x.id === sel.dataset.lst); if (!l) return;
    l.status = sel.value; S.saveListings(L); toast(`На сайті: ${sel.options[sel.selectedIndex].text}`);
  });
  $('[data-stock]').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return; const L = S.listings();
    if (b.dataset.del) { const l = L.find(x => x.id === b.dataset.del); if (!confirm(`Прибрати з вітрини «${S.title(l)} ${l.color || ''}»? На сайті позиція зникне.`)) return; S.saveListings(L.filter(x => x.id !== b.dataset.del)); toast('Прибрано з вітрини'); stock(); tiles(); return; }
    const id = b.dataset.edit || b.dataset.cap, l = L.find(x => x.id === id); if (!l) return;
    if (b.dataset.cap) { $('[data-caption]').value = S.caption(l); $('[data-copy]').disabled = false; $('#add').scrollIntoView({ behavior: 'smooth' }); return; }
    f.id.value = l.id; f.model.value = l.model; f.mem.value = String(l.mem); f.color.value = l.color; f.tint.value = l.tint;
    $$('[name=sim]', f).forEach(i => i.checked = i.value === l.sim);
    const cg = /замовл/i.test(l.label) ? 'Під замовлення' : l.isNew ? 'Новий' : /майже|як нов/i.test(l.label) ? 'Майже новий' : 'б/у';
    $$('[name=cond]', f).forEach(i => i.checked = i.value === cg);
    f.score.value = l.score ?? ''; f.batt.value = l.batt ?? ''; f.cycles.value = l.cycles ?? ''; f.battNew.checked = /замін/i.test(l.battRaw || ''); f.kit.value = l.kit || '';
    $$('[name=svc]', f).forEach(i => { const sv = (l.service || '').toLowerCase().replace(/переклей скла/g, 'переклеювання скла'); i.checked = sv.includes(i.value.split(' ')[0].toLowerCase()); });
    f.sealed.checked = !!l.sealed; $$('[name=bonus]', f).forEach(i => i.checked = (l.bonus || '').includes(i.value.split(' ')[0]));
    f.label.value = l.label || ''; f.note.value = l.note || ''; f.code.value = l.code || ''; f.photos.value = S.photos(l).join('\n'); f.warranty.value = l.warranty || f.warranty.value; f.price.value = l.price;
    $('[data-publish]').textContent = 'Зберегти зміни'; preview(); $('#add').scrollIntoView({ behavior: 'smooth' });
  });
  $('[data-reset-stock]').addEventListener('click', () => { S.resetListings(); stock(); tiles(); toast('Вітрину повернуто до позицій з Instagram'); });

  /* requests */
  let tab = 'booking';
  const STAT = { booking: ['Нова', 'Підтверджено', 'Продано', 'Скасовано'], tradein: ['Нова', 'Чекаємо фото', 'Оглянули', 'Обмін зроблено', 'Скасовано'], notify: ['Чекає', 'Повідомили', 'Скасовано'] };
  const when = iso => { const d = new Date(iso); return d.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' }) + ' ' + d.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }); };
  function reqs() {
    const r = S.requests();
    $$('[data-tab]').forEach(b => { b.setAttribute('aria-selected', b.dataset.tab === tab); b.querySelector('b').textContent = r.filter(x => x.type === b.dataset.tab).length; });
    const head = { booking: ['Коли', 'Клієнт', 'Що бронює', 'Сума', 'Статус'], tradein: ['Коли', 'Клієнт', 'Що здає', 'Хоче', 'Статус'], notify: ['Коли', 'Чекає', 'Контакт', '', 'Статус'] }[tab];
    $('[data-req-head]').innerHTML = `<tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>`;
    const rows = r.filter(x => x.type === tab);
    $('[data-req]').innerHTML = rows.length ? rows.map(x => {
      const demo = x.demo ? '<span class="tag">приклад</span>' : '';
      const sel = `<select data-st="${x.id}" aria-label="Статус">${STAT[tab].map(s => `<option ${s === x.status ? 'selected' : ''}>${s}</option>`).join('')}</select>`;
      if (tab === 'booking') return `<tr><td>${when(x.created)}</td><td><b>${esc(x.name)}</b> · ${esc(x.phone)}${demo}</td><td>${esc(x.title)}</td><td>${fmt(x.price)} ₴</td><td>${sel}</td></tr>`;
      if (tab === 'tradein') return `<tr><td>${when(x.created)}</td><td><b>${esc(x.name)}</b> · ${esc(x.phone)}${demo}</td><td>${esc(x.model)} ${esc(x.mem)} · ${esc(x.look)} · АКБ ${x.batt}%${x.box ? ' · коробка' : ''}${x.repaired ? ' · був у ремонті' : ''}${x.faceid ? '' : ' · Face ID ✕'}</td><td>${esc(x.target || '—')}</td><td>${sel}</td></tr>`;
      return `<tr><td>${when(x.created)}</td><td><b>${esc(x.want)}</b>${demo}</td><td>${esc(x.contact)}</td><td></td><td>${sel}</td></tr>`;
    }).join('') : `<tr><td colspan="5" class="muted">Поки порожньо. Залиште заявку на сайті — вона зʼявиться тут.</td></tr>`;
  }
  $('[data-tabs]').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (b) { tab = b.dataset.tab; reqs(); } });
  document.addEventListener('change', e => {
    const s = e.target.closest('[data-st]'); if (!s) return;
    const r = S.requests(), x = r.find(y => y.id === s.dataset.st); if (!x) return; x.status = s.value; S.saveRequests(r); tiles();
    // a booking drives the unit's badge on the site: confirmed = reserved, sold = sold, cancelled = back in stock
    const map = { 'Підтверджено': 'reserved', 'Продано': 'sold', 'Скасовано': 'available' }, L = S.listings(), l = x.type === 'booking' && L.find(y => y.id === x.listing);
    if (l && map[s.value]) { l.status = map[s.value]; S.saveListings(L); stock(); toast(`Статус: ${s.value} · на сайті: ${{ reserved: 'Заброньовано', sold: 'Продано', available: 'Є в наявності' }[l.status]}`); } else toast('Статус: ' + s.value);
  });

  /* repair kanban */
  const STAGES = ['Записано', 'Діагностика', 'В роботі', 'Готово', 'Видано'];
  function kanban() {
    const r = S.requests().filter(x => x.type === 'repair');
    if (!r.length) { $('[data-kanban]').innerHTML = `<p class="kempty muted">Записів на ремонт ще немає. Щойно клієнт запишеться на сайті (розділ «Запис на ремонт»), картка зʼявиться тут у колонці «Записано».</p>`; return; }
    $('[data-kanban]').innerHTML = STAGES.map((st, i) => {
      const items = r.filter(x => (x.status || 'Записано') === st);
      return `<div class="kcol"><h3>${st}<span>${items.length}</span></h3>${items.map(x => `<div class="kcard"><b>${esc(x.model)}</b><small>${esc(x.service)}</small><small>${esc(x.day.split('-').reverse().slice(0, 2).join('.'))} о ${esc(x.time)} · ${esc(x.name)}${x.demo ? ' · приклад' : ''}</small>${i < STAGES.length - 1 ? `<button type="button" data-next="${x.id}">Далі: ${STAGES[i + 1]}</button>` : ''}</div>`).join('')}</div>`;
    }).join('');
  }
  $('[data-kanban]').addEventListener('click', e => {
    const b = e.target.closest('[data-next]'); if (!b) return;
    const r = S.requests(), x = r.find(y => y.id === b.dataset.next); const i = STAGES.indexOf(x.status || 'Записано'); x.status = STAGES[Math.min(i + 1, STAGES.length - 1)]; S.saveRequests(r); kanban(); tiles();
  });
  $('[data-reset-all]').addEventListener('click', () => { ['ispayal.requests.v1', 'ispayal.seeded.v1', 'ispayal.listings.v2'].forEach(k => localStorage.removeItem(k)); location.reload(); });
  addEventListener('storage', () => { reqs(); kanban(); tiles(); stock(); });

  tiles(); preview(); stock(); reqs(); kanban();
})();
