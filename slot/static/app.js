// Loads free time slots for the chosen service + day (no inline JS: CSP-friendly).
(() => {
  const form = document.getElementById('booking');
  if (!form) return;
  const box = document.getElementById('slots');
  const submit = document.getElementById('submit');

  async function load() {
    const service = form.querySelector('input[name=service]:checked');
    const day = form.querySelector('input[name=date]:checked');
    if (!service || !day) return;
    box.innerHTML = '<p class="muted">Завантаження…</p>';
    submit.disabled = true;
    try {
      const url = `${box.dataset.url}?service=${encodeURIComponent(service.value)}&date=${encodeURIComponent(day.value)}`;
      const res = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.status);
      const { slots } = await res.json();
      box.textContent = '';
      if (!slots.length) {
        box.innerHTML = '<p class="muted">На цей день вільного часу немає — оберіть інший.</p>';
        return;
      }
      slots.forEach((t, i) => {
        const label = document.createElement('label');
        label.className = 'slot';
        const input = document.createElement('input');
        Object.assign(input, { type: 'radio', name: 'time', value: t, required: true });
        const span = document.createElement('span');
        span.textContent = t;
        label.append(input, span);
        box.append(label);
      });
    } catch (e) {
      box.innerHTML = '<p class="muted">Не вдалося завантажити час. Оновіть сторінку.</p>';
    }
  }

  form.addEventListener('change', (e) => {
    if (e.target.name === 'service' || e.target.name === 'date') load();
    if (e.target.name === 'time') submit.disabled = false;
  });
  load();
})();
