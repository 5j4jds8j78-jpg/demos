/* eye.js — one hand-drawn ink eye, drawn on canvas from a few parameters.
   Used by the hero (draws itself, opens, blinks, the river moves), the before/after slider and the lash-style picker.
   Every stroke is a tapered ink line, seeded, so the drawing is the same on every visit. */
(() => {
  'use strict';
  const W = 640, H = 560;
  const INK = '#1F3A5C';

  // seeded random
  function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const q = (p0, p1, p2, t) => [(1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0], (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1]];
  const qd = (p0, p1, p2, t) => [2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]), 2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1])];

  // a tapered stroke through points: width rises fast, thins to a hair at the tip
  function taper(ctx, pts, w, start = .9, end = .04) {
    const n = pts.length; if (n < 2) return;
    // upsample with simple chaikin-ish smoothing
    let P = pts;
    for (let k = 0; k < 2; k++) {
      const o = [P[0]];
      for (let i = 0; i < P.length - 1; i++) { const a = P[i], b = P[i + 1]; o.push([a[0] * .75 + b[0] * .25, a[1] * .75 + b[1] * .25], [a[0] * .25 + b[0] * .75, a[1] * .25 + b[1] * .75]); }
      o.push(P[P.length - 1]); P = o;
    }
    const L = [], R = [], N = P.length;
    for (let i = 0; i < N; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(N - 1, i + 1)];
      let dx = b[0] - a[0], dy = b[1] - a[1]; const d = Math.hypot(dx, dy) || 1; dx /= d; dy /= d;
      const t = i / (N - 1);
      const k = t < .25 ? lerp(start, 1, t / .25) : lerp(1, end, Math.pow((t - .25) / .75, .9));
      const hw = w * k / 2;
      L.push([P[i][0] - dy * hw, P[i][1] + dx * hw]); R.push([P[i][0] + dy * hw, P[i][1] - dx * hw]);
    }
    ctx.beginPath(); ctx.moveTo(L[0][0], L[0][1]);
    for (let i = 1; i < N; i++) ctx.lineTo(L[i][0], L[i][1]);
    for (let i = N - 1; i >= 0; i--) ctx.lineTo(R[i][0], R[i][1]);
    ctx.closePath(); ctx.fill();
  }

  // the brow: a fixed set of hairs
  const BROW = (() => {
    const r = rng(14), out = [], b0 = [138, 150], b1 = [318, 40], b2 = [512, 122];
    for (let i = 0; i < 150; i++) {
      const t = Math.pow(i / 149, .95);
      let [x, y] = q(b0, b1, b2, t);
      const [tx, ty] = qd(b0, b1, b2, t); const a = Math.atan2(ty, tx);
      const band = 20 * Math.pow(1 - t, .7) + 4, off = (r() - .5) * band;
      x += -Math.sin(a) * off; y += Math.cos(a) * off;
      const ang = t < .18 ? -Math.PI / 2 + .5 + t * 2.5 : a - .22 + (r() - .5) * .16;
      const Ln = (24 + r() * 12) * (1 - .4 * t);
      out.push({ t, w: 1.4 + r() * .7, pts: [[x, y], [x + Math.cos(ang) * Ln * .5, y + Math.sin(ang) * Ln * .5], [x + Math.cos(ang + .15) * Ln, y + Math.sin(ang + .15) * Ln]] });
    }
    return out;
  })();

  // per-lash jitter, fixed
  const JIT = (() => { const r = rng(7); return Array.from({ length: 200 }, () => [r() - .5, r() - .5, r() - .5]); })();

  const PROFILES = {
    natural: t => .55 + .45 * Math.sin(Math.PI * Math.min(1, .12 + t * .95)),
    fox: t => .32 + .78 * Math.pow(t, 1.5),
    doll: t => .42 + .62 * Math.pow(Math.sin(Math.PI * t), 1.4),
    bare: t => .55 + .3 * Math.sin(Math.PI * t),
  };

  // default look; any of these can be passed in
  const BASE = { open: 1, len: 66, count: 30, vol: 1, lift: 1, curl: .6, profile: 'natural', reveal: 1, brow: 1, waves: 1, phase: 0, lower: 1, iris: 1, wave: true, brows: true };

  function draw(ctx, p) {
    p = Object.assign({}, BASE, p);
    const o = clamp(p.open);
    ctx.save();
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = p.ink || INK; ctx.strokeStyle = p.ink || INK;

    const I = [140, 300], O = [515, 285];
    const C = [lerp(325, 322, o), lerp(394, 150, o)];      // upper lid control: closed → open
    const LC = [325, 382];                                     // lower lid control
    const rev = clamp(p.reveal);

    // brow
    if (p.brows) {
      const bshow = clamp(p.brow);
      BROW.forEach(h => { if (h.t <= bshow) taper(ctx, h.pts, h.w, .9, .05); });
    }

    // iris, clipped between the lids
    if (o > .02 && p.iris > 0) {
      ctx.save();
      ctx.beginPath(); ctx.moveTo(I[0], I[1]); ctx.quadraticCurveTo(C[0], C[1], O[0], O[1]); ctx.quadraticCurveTo(LC[0], LC[1], I[0], I[1]); ctx.closePath(); ctx.clip();
      const cx = 326, cy = 300, r = 70;
      ctx.globalAlpha = clamp(o * 1.4) * p.iris;
      ctx.lineWidth = 1.6; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      const rr = rng(3);
      for (let i = 0; i < 64; i++) {           // radial hatch
        const a = i / 64 * Math.PI * 2 + rr() * .04, r0 = 30 + rr() * 6, r1 = r - 4 - rr() * 10;
        taper(ctx, [[cx + Math.cos(a) * r0, cy + Math.sin(a) * r0], [cx + Math.cos(a + .02) * r1, cy + Math.sin(a + .02) * r1]], .9 + rr() * .5, .6, .1);
      }
      ctx.beginPath(); ctx.arc(cx, cy, 27, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = p.paper || '#F4EFE4'; ctx.beginPath(); ctx.arc(cx + 16, cy - 18, 9, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = p.ink || INK;
      ctx.restore();
    }

    // crease
    ctx.globalAlpha = .9;
    const cc = [322, lerp(340, 96, o)];
    const cr = []; for (let k = 0; k <= 10; k++) cr.push(q([182, 282], cc, [472, 262], k / 10));
    if (rev > .3) taper(ctx, cr, 1.5, .05, .05);
    ctx.globalAlpha = 1;

    // lower lid + a few short lower lashes
    if (o > .05 && p.lower) {
      ctx.globalAlpha = clamp((o - .05) * 2);
      const lw = []; for (let k = 0; k <= 12; k++) lw.push(q(I, LC, O, k / 12));
      taper(ctx, lw, 1.7, .2, .2);
      for (let i = 0; i < 11; i++) {
        const t = .22 + .7 * i / 10; const [x, y] = q(I, LC, O, t);
        const a = Math.PI / 2 - (t - .5) * 1.1; const L = 8 + 6 * Math.sin(Math.PI * t);
        taper(ctx, [[x, y], [x + Math.cos(a) * L, y + Math.sin(a) * L]], 1.1, .9, .05);
      }
      ctx.globalAlpha = 1;
    }

    // upper lid (drawn progressively by reveal)
    const lid = []; const steps = 24;
    for (let k = 0; k <= steps * rev; k++) lid.push(q(I, C, O, k / steps));
    if (rev >= 1) lid.push([548, 266], [574, 254]);
    if (lid.length > 1) taper(ctx, lid, 4.4, .3, rev >= 1 ? 0 : .8);

    // lashes
    const prof = PROFILES[p.profile] || PROFILES.natural;
    const n = Math.round(p.count);
    for (let i = 0; i < n; i++) {
      const t = .06 + .88 * i / (n - 1);
      if (t > rev + .02) continue;
      const grow = clamp((rev - t) / .12 + (rev >= 1 ? 1 : 0));
      const [x, y] = q(I, C, O, t);
      const j = JIT[i % JIT.length];
      // closed: hang down and outwards; open: rise and fan
      const down = Math.PI / 2 - (t - .45) * 1.9;
      let up = -Math.PI / 2 + (t - .5) * (1.75 - .55 * p.lift);
      if (t < .45) up += Math.PI * 2;                    // inner lashes swing through the inner side
      let ang = lerp(down, up, ease(o)) + j[0] * .08;
      const side = t > .45 ? 1 : -1;
      const L = p.len * prof(t) * (1 + j[1] * .22) * grow;
      for (let v = 0; v < p.vol; v++) {
        const fan = p.vol > 1 ? (v - (p.vol - 1) / 2) * .13 : 0;
        const Lv = L * (v === 0 ? 1 : .86 + j[2] * .1);
        let a = ang + fan; const pts = [[x, y]]; let cx = x, cy = y;
        for (let s = 1; s <= 5; s++) {
          // curl: closed lashes flick back up a touch, open lashes lift then flick outwards
          const bend = lerp(-side * .1, side * p.curl * .22, o) * Math.pow(s / 5, 1.3);
          a += bend; cx += Math.cos(a) * Lv / 5; cy += Math.sin(a) * Lv / 5; pts.push([cx, cy]);
        }
        taper(ctx, pts, (p.vol > 1 ? 1.7 : 2.3) * (0.85 + (j[2] + .5) * .3), 1, .04);
      }
    }

    // the river
    if (p.wave) {
      const rows = [[470, 60, 400, 1, 2.2], [492, 250, 610, .8, 1.9], [510, 20, 250, .7, 1.6], [528, 300, 560, .5, 1.4], [546, 110, 380, .35, 1.2]];
      rows.forEach(([y, x0, x1, op, w], k) => {
        ctx.globalAlpha = op * clamp(p.waves);
        const pts = []; const drift = Math.sin(p.phase * .6 + k) * 10;
        for (let x = x0; x <= x1; x += 13) {
          const env = 4.5 * Math.sin(Math.PI * (x - x0) / (x1 - x0)) + .6;
          pts.push([x + drift, y + Math.sin((x - x0) / 26 * Math.PI / 2 + k + p.phase) * env]);
        }
        taper(ctx, pts, w, .05, .05);
      });
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  }

  // set a canvas up for crisp drawing at its CSS size
  function fit(canvas) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const r = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width * dpr)), h = Math.max(1, Math.round(r.width * H / W * dpr));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(w / W, 0, 0, h / H, 0, 0);
    return ctx;
  }

  window.InkEye = { draw, fit, W, H, lerp, ease, clamp, BASE };
})();
