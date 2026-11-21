/* Кав’ярня «Мишка» — інтерактив без бібліотек */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---- Шапка: тінь при прокручуванні, мобільне меню ---- */
  var header = $('.header');
  var onScroll = function () { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var burger = $('.burger'), nav = $('#nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Закрити меню навігації' : 'Відкрити меню навігації');
      nav.classList.toggle('is-open', open);
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
      });
    });
  }

  /* ---- Години роботи: «Сьогодні відчинено до …» ---- */
  var rows = $$('.hours tr[data-days]');
  var schedule = rows.length ? rows.map(function (r) {
    return { days: r.dataset.days.split(',').map(Number), open: r.dataset.open, close: r.dataset.close, el: r };
  }) : [
    { days: [1, 2, 3, 4, 5], open: '08:00', close: '21:00' },
    { days: [6, 0], open: '09:00', close: '22:00' }
  ];
  var now = new Date(), day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var toMin = function (t) { var p = t.split(':'); return +p[0] * 60 + +p[1]; };
  var today = schedule.filter(function (s) { return s.days.indexOf(day) > -1; })[0];
  if (today) {
    if (today.el) today.el.classList.add('is-today');
    var status = $('[data-open-status]'), dot = $('[data-open-dot]');
    if (status) {
      var isOpen = mins >= toMin(today.open) && mins < toMin(today.close);
      if (isOpen) status.textContent = 'Сьогодні відчинено до ' + today.close;
      else if (mins < toMin(today.open)) status.textContent = 'Відчиняємося сьогодні о ' + today.open;
      else {
        var tmr = schedule.filter(function (s) { return s.days.indexOf((day + 1) % 7) > -1; })[0];
        status.textContent = 'Зачинено, завтра чекаємо з ' + tmr.open;
      }
      if (dot && !isOpen) dot.classList.add('is-closed');
    }
  }

  /* ---- Меню з js/menu-data.js ---- */
  var MENU = window.MISHKA_MENU;
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var nameHtml = function (n) { return esc(n).replace(/«[^»]+»/g, function (m) { return '<span class="nw">' + m + '</span>'; }); };
  var price = function (p) { return esc(p) + ' грн'; };

  // Тизер на головній: позиції з popular: true
  var picks = $('[data-picks]');
  if (picks && MENU) {
    var all = [];
    MENU.categories.forEach(function (c) { c.items.forEach(function (i) { all.push(i); }); });
    var chosen = all.filter(function (i) { return i.popular; }).slice(0, 4);
    if (chosen.length < 4) chosen = chosen.concat(all.filter(function (i) { return !i.popular; }).slice(0, 4 - chosen.length));
    picks.innerHTML = chosen.map(function (i) {
      return '<li class="reveal-item"><a class="pick" href="menu.html#' + esc(i.category) + '">' +
        '<div class="pick__img"><img src="' + esc(i.image) + '" alt="' + esc(i.name) + '" loading="lazy" width="800" height="1000"></div>' +
        '<div class="pick__row"><span class="pick__name">' + nameHtml(i.name) + '</span><span class="pick__price">' + price(i.price) + '</span></div>' +
        (i.description ? '<p class="pick__desc">' + esc(i.description) + '</p>' : '') +
        '</a></li>';
    }).join('');
  }

  // Хіти дня в першому екрані
  var hits = $('[data-hits]');
  if (hits && MENU) {
    var byName = {};
    MENU.categories.forEach(function (c) { c.items.forEach(function (i) { i.category = i.category || c.id; byName[i.name] = i; }); });
    hits.innerHTML = hits.dataset.hits.split('|').map(function (n) {
      var i = byName[n.trim()]; if (!i) return '';
      return '<li><a class="hit" href="menu.html#' + esc(i.category) + '">' +
        '<img src="' + esc(i.image) + '" alt="" width="104" height="104">' +
        '<span class="hit__name">' + nameHtml(i.name) + '</span><span class="hit__price">' + price(i.price) + '</span></a></li>';
    }).join('');
  }

  // Повне меню
  var menuRoot = $('[data-menu]'), tabsRoot = $('[data-tabs]');
  if (menuRoot && MENU) {
    menuRoot.innerHTML = MENU.categories.map(function (c) {
      return '<section class="menu-cat" id="' + esc(c.id) + '" aria-labelledby="h-' + esc(c.id) + '">' +
        '<div class="menu-cat__head"><h2 id="h-' + esc(c.id) + '">' + esc(c.title) + '</h2>' +
        (c.note ? '<p>' + esc(c.note) + '</p>' : '') + '</div>' +
        '<ul class="menu-list">' + c.items.map(function (i) {
          return '<li class="item reveal-item">' +
            '<div class="item__img"><img src="' + esc(i.image) + '" alt="' + esc(i.name) + '" loading="lazy" width="224" height="224"></div>' +
            '<div class="item__body">' +
              '<div class="item__top"><h3 class="item__name">' + nameHtml(i.name) + '</h3><span class="item__dots" aria-hidden="true"></span><span class="item__price">' + price(i.price) + '</span></div>' +
              (i.description ? '<p class="item__desc">' + esc(i.description) + '</p>' : '') +
              (i.volume ? '<span class="item__vol">' + esc(i.volume) + '</span>' : '') +
              (i.tag ? '<span class="item__tag">' + esc(i.tag) + '</span>' : '') +
            '</div></li>';
        }).join('') + '</ul></section>';
    }).join('');

    if (tabsRoot) {
      tabsRoot.innerHTML = MENU.categories.map(function (c) {
        return '<li><a href="#' + esc(c.id) + '">' + esc(c.short || c.title) + ' <small>' + c.items.length + '</small></a></li>';
      }).join('');
      var links = $$('a', tabsRoot);
      var setActive = function (id) {
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + id;
          a.classList.toggle('is-active', on);
          if (on) {
            a.setAttribute('aria-current', 'true');
            var l = tabsRoot, r = a.getBoundingClientRect(), lr = l.getBoundingClientRect();
            if (r.left < lr.left + 8 || r.right > lr.right - 8) l.scrollTo({ left: l.scrollLeft + (r.left - lr.left) - 20, behavior: 'smooth' });
          } else a.removeAttribute('aria-current');
        });
      };
      var cats = $$('.menu-cat', menuRoot);
      var pick = function () {
        var line = 170, current = cats[0].id;
        cats.forEach(function (s) { if (s.getBoundingClientRect().top - line <= 0) current = s.id; });
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = cats[cats.length - 1].id;
        setActive(current);
      };
      window.addEventListener('scroll', pick, { passive: true }); pick();
    }
  }

  /* ---- М’яка поява при прокручуванні (блоки та картки по черзі) ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rev = $$('.reveal, .reveal-item');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      var n = 0;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        if (e.target.classList.contains('reveal-item')) { e.target.style.setProperty('--d', Math.min(n, 6) * 70 + 'ms'); n++; }
        e.target.classList.add('is-in'); io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    rev.forEach(function (el) { io.observe(el); });
  } else rev.forEach(function (el) { el.classList.add('is-in'); });

  /* ---- Легкий паралакс фото: лише transform, IntersectionObserver + requestAnimationFrame ---- */
  if (!reduce) {
    var mobile = window.matchMedia('(max-width: 760px)');
    var pxEls = $$('[data-px]');
    var visible = new Set();
    var ticking = false;
    var update = function () {
      ticking = false;
      var vh = window.innerHeight, k = mobile.matches ? 0.45 : 1;
      visible.forEach(function (el) {
        var host = el.closest('[data-px-host]') || el.parentElement;
        var r = host.getBoundingClientRect();
        var center = r.top + r.height / 2 - vh / 2;
        var speed = parseFloat(el.dataset.px) || 0.08;
        el.style.setProperty('--py', (-center * speed * k).toFixed(1) + 'px');
      });
    };
    var request = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    if ('IntersectionObserver' in window) {
      var pio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          (e.target.__px || []).forEach(function (el) {
            if (e.isIntersecting) visible.add(el); else visible.delete(el);
          });
        });
        request();
      }, { rootMargin: '100px 0px' });
      pxEls.forEach(function (el) {
        el.classList.add('px');
        if (el.dataset.pxScale) el.style.setProperty('--ps', el.dataset.pxScale);
        var host = el.closest('[data-px-host]') || el.parentElement;
        host.__px = (host.__px || []).concat(el); pio.observe(host);
      });
      window.addEventListener('scroll', request, { passive: true });
      window.addEventListener('resize', request);
    }
  }
})();
