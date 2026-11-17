/* Worksheet themes. Every page loads this file; the theme is picked on the worksheet list page
   and saved only on this device (like the name). Add ?theme=cats to any page address to try a theme. */
(function () {
  const KEY = 'worksheetTheme';

  // ---------------- Cat art (original drawings) ----------------
  const FUR = '#f6a04d', LINE = '#b9651c', STRIPE = '#d9772a', BELLY = '#ffe3c6', PINK = '#ff9fb0', EYE = '#2b211c', MOUTH = '#6b4430';

  const catFace = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 14 L6.5 3 L14 8.5 Z" fill="${FUR}" stroke="${LINE}" stroke-width="1.2"/>
    <path d="M27 14 L25.5 3 L18 8.5 Z" fill="${FUR}" stroke="${LINE}" stroke-width="1.2"/>
    <path d="M8 10.5 L8.6 6 L12 8.6 Z" fill="${PINK}"/><path d="M24 10.5 L23.4 6 L20 8.6 Z" fill="${PINK}"/>
    <ellipse cx="16" cy="18.5" rx="12.5" ry="10.5" fill="${FUR}" stroke="${LINE}" stroke-width="1.2"/>
    <path d="M16 8.6 v3.2 M12.8 9.2 l.7 2.6 M19.2 9.2 l-.7 2.6" stroke="${STRIPE}" stroke-width="1.4" fill="none"/>
    <ellipse cx="11.3" cy="17.6" rx="1.8" ry="2.3" fill="${EYE}"/><ellipse cx="20.7" cy="17.6" rx="1.8" ry="2.3" fill="${EYE}"/>
    <circle cx="11.9" cy="16.8" r=".7" fill="#fff"/><circle cx="21.3" cy="16.8" r=".7" fill="#fff"/>
    <ellipse cx="8.6" cy="21.4" rx="1.9" ry="1.1" fill="${PINK}" opacity=".6"/><ellipse cx="23.4" cy="21.4" rx="1.9" ry="1.1" fill="${PINK}" opacity=".6"/>
    <path d="M14.7 20.6 h2.6 l-1.3 1.5 z" fill="#ff7f98"/>
    <path d="M16 22.1 q-1 1.7 -2.5 .8 M16 22.1 q1 1.7 2.5 .8" stroke="${MOUTH}" stroke-width=".9" fill="none"/>
    <path d="M2.8 20 l5.4 .7 M3.3 23.4 l5.2 -.9 M29.2 20 l-5.4 .7 M28.7 23.4 l-5.2 -.9" stroke="${MOUTH}" stroke-width=".7"/>
  </g></svg>`;

  const catSit = `<svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round">
    <path d="M138 206 C 176 212, 194 182, 188 150 C 184 130, 168 124, 161 136" fill="none" stroke="${LINE}" stroke-width="19"/>
    <path d="M138 206 C 176 212, 194 182, 188 150 C 184 130, 168 124, 161 136" fill="none" stroke="${FUR}" stroke-width="13"/>
    <path d="M180 176 l11 3 M186 156 l10 -1" stroke="${STRIPE}" stroke-width="4"/>
    <ellipse cx="100" cy="170" rx="50" ry="52" fill="${FUR}" stroke="${LINE}" stroke-width="3"/>
    <ellipse cx="100" cy="183" rx="28" ry="34" fill="${BELLY}"/>
    <path d="M54 160 q10 2 16 -4 M52 179 q11 2 17 -3 M146 160 q-10 2 -16 -4 M148 179 q-11 2 -17 -3" stroke="${STRIPE}" stroke-width="4.5" fill="none"/>
    <ellipse cx="80" cy="219" rx="15" ry="9" fill="${FUR}" stroke="${LINE}" stroke-width="3"/>
    <ellipse cx="120" cy="219" rx="15" ry="9" fill="${FUR}" stroke="${LINE}" stroke-width="3"/>
    <path d="M74 214 v7 M80 213 v8 M86 214 v7 M114 214 v7 M120 213 v8 M126 214 v7" stroke="${LINE}" stroke-width="2"/>
    <path d="M48 80 L56 18 L96 48 Z" fill="${FUR}" stroke="${LINE}" stroke-width="3"/>
    <path d="M152 80 L144 18 L104 48 Z" fill="${FUR}" stroke="${LINE}" stroke-width="3"/>
    <path d="M59 63 L62 33 L84 50 Z" fill="${PINK}"/><path d="M141 63 L138 33 L116 50 Z" fill="${PINK}"/>
    <ellipse cx="100" cy="93" rx="60" ry="50" fill="${FUR}" stroke="${LINE}" stroke-width="3"/>
    <path d="M100 46 v15 M87 48 l3 13 M113 48 l-3 13" stroke="${STRIPE}" stroke-width="4.5" fill="none"/>
    <path d="M41 92 h13 M43 103 h12 M159 92 h-13 M157 103 h-12" stroke="${STRIPE}" stroke-width="4" fill="none"/>
    <ellipse cx="100" cy="114" rx="23" ry="15" fill="${BELLY}"/>
    <ellipse cx="76" cy="92" rx="9.5" ry="11.5" fill="${EYE}"/><ellipse cx="124" cy="92" rx="9.5" ry="11.5" fill="${EYE}"/>
    <circle cx="79.5" cy="87.5" r="3.6" fill="#fff"/><circle cx="127.5" cy="87.5" r="3.6" fill="#fff"/>
    <circle cx="73" cy="97" r="1.7" fill="#fff"/><circle cx="121" cy="97" r="1.7" fill="#fff"/>
    <ellipse cx="62" cy="113" rx="8.5" ry="4.8" fill="${PINK}" opacity=".6"/><ellipse cx="138" cy="113" rx="8.5" ry="4.8" fill="${PINK}" opacity=".6"/>
    <path d="M94 106 h12 l-6 7 z" fill="#ff7f98" stroke="#d65f78" stroke-width="1.5"/>
    <path d="M100 113.5 q-5 8 -11 3 M100 113.5 q5 8 11 3" stroke="${MOUTH}" stroke-width="2.4" fill="none"/>
    <path d="M28 109 l27 3 M30 122 l26 -4 M172 109 l-27 3 M170 122 l-26 -4" stroke="${MOUTH}" stroke-width="2"/>
  </g></svg>`;

  // Peeks over the top of the problem card. Its face changes: normal, happy (right), surprised (wrong).
  const catPeek = `<svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><clipPath id="catpeek-clip"><rect x="0" y="0" width="180" height="79"/></clipPath></defs>
    <g stroke-linecap="round" stroke-linejoin="round">
    <g clip-path="url(#catpeek-clip)">
      <path d="M43 50 L50 4 L80 29 Z" fill="${FUR}" stroke="${LINE}" stroke-width="2.6"/>
      <path d="M137 50 L130 4 L100 29 Z" fill="${FUR}" stroke="${LINE}" stroke-width="2.6"/>
      <path d="M52 39 L55 16 L72 30 Z" fill="${PINK}"/><path d="M128 39 L125 16 L108 30 Z" fill="${PINK}"/>
      <ellipse cx="90" cy="56" rx="50" ry="40" fill="${FUR}" stroke="${LINE}" stroke-width="2.6"/>
      <path d="M90 17 v11 M80 19 l2 10 M100 19 l-2 10" stroke="${STRIPE}" stroke-width="3.6" fill="none"/>
      <path d="M41 54 h10 M42 63 h9 M139 54 h-10 M138 63 h-9" stroke="${STRIPE}" stroke-width="3.2" fill="none"/>
      <ellipse cx="90" cy="70" rx="18" ry="11" fill="${BELLY}"/>
      <ellipse cx="66" cy="66" rx="7" ry="4" fill="${PINK}" opacity=".6"/><ellipse cx="114" cy="66" rx="7" ry="4" fill="${PINK}" opacity=".6"/>
      <g class="e-normal">
        <ellipse cx="72" cy="52" rx="7.5" ry="9" fill="${EYE}"/><ellipse cx="108" cy="52" rx="7.5" ry="9" fill="${EYE}"/>
        <circle cx="74.6" cy="48.6" r="2.8" fill="#fff"/><circle cx="110.6" cy="48.6" r="2.8" fill="#fff"/>
        <path d="M90 69 q-4 6 -9 2 M90 69 q4 6 9 2" stroke="${MOUTH}" stroke-width="2" fill="none"/>
      </g>
      <g class="e-happy">
        <path d="M64 54 q8 -11 16 0 M100 54 q8 -11 16 0" stroke="${EYE}" stroke-width="3.6" fill="none"/>
        <path d="M82 68 q8 11 16 0 z" fill="#c2455d" stroke="${MOUTH}" stroke-width="1.6"/>
        <path d="M86 72 q4 4 8 0" fill="#ff8fa3"/>
      </g>
      <g class="e-wow">
        <circle cx="72" cy="52" r="9" fill="#fff" stroke="${EYE}" stroke-width="2"/><circle cx="108" cy="52" r="9" fill="#fff" stroke="${EYE}" stroke-width="2"/>
        <circle cx="72" cy="53" r="4.5" fill="${EYE}"/><circle cx="108" cy="53" r="4.5" fill="${EYE}"/>
        <ellipse cx="90" cy="72" rx="3.6" ry="4.6" fill="${MOUTH}"/>
      </g>
      <path d="M85 61 h10 l-5 6 z" fill="#ff7f98" stroke="#d65f78" stroke-width="1.2"/>
      <path d="M26 64 l24 2 M28 75 l23 -3 M154 64 l-24 2 M152 75 l-23 -3" stroke="${MOUTH}" stroke-width="1.6"/>
    </g>
    <ellipse cx="57" cy="83" rx="16" ry="10" fill="${FUR}" stroke="${LINE}" stroke-width="2.6"/>
    <ellipse cx="123" cy="83" rx="16" ry="10" fill="${FUR}" stroke="${LINE}" stroke-width="2.6"/>
    <path d="M51 82 v8 M57 81 v9 M63 82 v8 M117 82 v8 M123 81 v9 M129 82 v8" stroke="${LINE}" stroke-width="1.8"/>
  </g></svg>`;

  const pawPath = (fill) => `<ellipse cx="12" cy="16.4" rx="5.6" ry="4.7" fill="${fill}"/>
    <ellipse cx="5.6" cy="10.4" rx="2.2" ry="2.8" fill="${fill}" transform="rotate(-18 5.6 10.4)"/>
    <ellipse cx="9.6" cy="6.6" rx="2.3" ry="2.9" fill="${fill}" transform="rotate(-6 9.6 6.6)"/>
    <ellipse cx="14.4" cy="6.6" rx="2.3" ry="2.9" fill="${fill}" transform="rotate(6 14.4 6.6)"/>
    <ellipse cx="18.4" cy="10.4" rx="2.2" ry="2.8" fill="${fill}" transform="rotate(18 18.4 10.4)"/>`;
  const paw = (fill = '#f08a2c', cls = '') => `<svg ${cls ? `class="${cls}" ` : ''}viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${pawPath(fill)}</svg>`;
  const dataUri = svg => `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' '))}")`;
  const pawPattern = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
    <g opacity=".075"><g transform="translate(14 18) rotate(-22 12 12) scale(1.1)">${pawPath('#e07a1f')}</g>
    <g transform="translate(86 80) rotate(24 12 12) scale(1.1)">${pawPath('#e07a1f')}</g></g></svg>`);
  const pawOrange = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${pawPath('#f08a2c')}</svg>`);
  const pawPink = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${pawPath('#e8628a')}</svg>`);

  // ---------------- Sounds: a little synthesized meow ----------------
  function meow(ctx, o) {
    if (!ctx) return;
    o = o || {};
    try { if (ctx.state === 'suspended' && !(ctx instanceof (window.OfflineAudioContext || Object))) { const r = ctx.resume(); if (r && r.catch) r.catch(() => {}); } } catch (e) {}
    const p = o.pitch || 1, dur = o.dur || 0.5, vol = o.vol || 0.6, t0 = ctx.currentTime + 0.01;
    const src = ctx.createOscillator(); src.type = 'sawtooth';
    const f = src.frequency;
    if (o.sad) { f.setValueAtTime(560 * p, t0); f.linearRampToValueAtTime(610 * p, t0 + dur * 0.2); f.exponentialRampToValueAtTime(360 * p, t0 + dur); }
    else { f.setValueAtTime(470 * p, t0); f.linearRampToValueAtTime(780 * p, t0 + dur * 0.35); f.exponentialRampToValueAtTime(520 * p, t0 + dur); }
    const lfo = ctx.createOscillator(); lfo.frequency.value = 7;
    const lg = ctx.createGain(); lg.gain.value = 9 * p; lfo.connect(lg); lg.connect(f);
    const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.Q.value = 4;            // "mi-AOW" mouth shape
    f1.frequency.setValueAtTime(520, t0); f1.frequency.linearRampToValueAtTime(1000, t0 + dur * 0.4); f1.frequency.linearRampToValueAtTime(760, t0 + dur);
    const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.Q.value = 6;
    f2.frequency.setValueAtTime(2400, t0); f2.frequency.linearRampToValueAtTime(1500, t0 + dur * 0.45); f2.frequency.linearRampToValueAtTime(1000, t0 + dur);
    const g2 = ctx.createGain(); g2.gain.value = 0.55;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, t0); env.gain.exponentialRampToValueAtTime(vol, t0 + 0.05);
    env.gain.setValueAtTime(vol, t0 + dur * 0.6); env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3600;
    src.connect(f1); src.connect(f2); f1.connect(env); f2.connect(g2); g2.connect(env); env.connect(lp); lp.connect(ctx.destination);
    src.start(t0); lfo.start(t0); src.stop(t0 + dur + 0.05); lfo.stop(t0 + dur + 0.05);
  }

  // ---------------- Theme CSS (shared by the animal themes) ----------------
  const petCss = (id, c) => `
  html.theme-${id} {
    --ink: ${c.ink}; --muted: ${c.muted}; --bg: ${c.bg}; --line: ${c.line};
    --band: ${c.band}; --box: ${c.box}; --blue: ${c.accent};
  }
  @media screen {
    html.theme-${id} body { background-color: ${c.bg}; background-image: ${c.pattern}; background-size: 140px 140px; }
    html.theme-${id} .top, html.theme-${id} header { background-color: rgba(255,255,255,.92); }
  }
  /* audio practice */
  html.theme-${id} .hero { display: block; width: 170px; margin: 0 auto 4px; }
  html.theme-${id} .hero.small { width: 130px; }
  html.theme-${id} .hero svg { width: 100%; height: auto; display: block; }
  html.theme-${id} .big { background: ${c.accent}; box-shadow: 0 6px 0 ${c.accentDark}; }
  html.theme-${id} .big:active { box-shadow: 0 3px 0 ${c.accentDark}; }
  html.theme-${id} .card { position: relative; margin-top: 70px; }
  html.theme-${id} .peek { display: block; position: absolute; left: 50%; top: 0; width: 160px; transform: translate(-50%, -78%); pointer-events: none; z-index: 2; }
  html.theme-${id} .peek svg { width: 100%; height: auto; display: block; }
  html.theme-${id} .peek .e-happy, html.theme-${id} .peek .e-wow { display: none; }
  html.theme-${id} .card.good .peek .e-normal, html.theme-${id} .card.bad .peek .e-normal { display: none; }
  html.theme-${id} .card.good .peek .e-happy, html.theme-${id} .card.bad .peek .e-wow { display: inline; }
  html.theme-${id} .card.good .peek svg { animation: pet-hop .45s ease-out; }
  html.theme-${id} .card.bad .peek svg { animation: pet-tilt .5s ease-in-out; }
  @keyframes pet-hop { 0% { transform: translateY(0); } 40% { transform: translateY(-14px); } 100% { transform: translateY(0); } }
  @keyframes pet-tilt { 0%,100% { transform: rotate(0); } 30% { transform: rotate(-6deg); } 70% { transform: rotate(5deg); } }
  html.theme-${id} .peek.swap svg { animation: pet-in .4s ease-out; }
  @keyframes pet-in { from { transform: translateY(26px); opacity: 0; } to { transform: none; opacity: 1; } }
  html.theme-${id} .pad .ok { border-color: ${c.accent}; box-shadow: 0 3px 0 ${c.accentDark}; }
  html.theme-${id} .gotit { box-shadow: 0 4px 0 ${c.accentDark}; }
  html.theme-${id} .drow i { background: ${c.dotA} center / contain no-repeat; border-radius: 0; width: 15px; height: 15px; }
  html.theme-${id} .drow:nth-child(even) i { background-image: ${c.dotB}; }
  html.theme-${id} .lesson { border-color: ${c.soft}; }
  @media (max-width: 600px) {
    html.theme-${id} .card { margin-top: 52px; }
    html.theme-${id} .peek { width: 120px; }
    html.theme-${id} .hero { width: 130px; }
    html.theme-${id} .hero.small { width: 100px; }
  }
  /* printable sheets */
  html.theme-${id} header.with-cat { display: flex; align-items: center; gap: 0.12in; }
  html.theme-${id} .hdr-cat { flex: none; width: 0.74in; }
  html.theme-${id} .hdr-cat.small { width: 0.42in; }
  html.theme-${id} .hdr-cat svg { width: 100%; height: auto; display: block; }
  html.theme-${id} .hdr-main { flex: 1; min-width: 0; }
  html.theme-${id} .foot .paws svg { width: 0.15in; height: 0.15in; vertical-align: -2px; margin-left: 3px; }
  /* list page */
  html.theme-${id} .feature { border-color: ${c.soft}; background: linear-gradient(135deg, #fff 60%, ${c.featureTint}); }
  html.theme-${id} .themebox button[aria-pressed="true"] { border-color: ${c.accent}; background: ${c.featureTint}; }
  `;
  const catsCss = petCss('cats', {
    ink: '#3a2a22', muted: '#8a7266', bg: '#fff7ef', line: '#f1dccb', band: '#fff0e3', box: '#b08b74',
    accent: '#f08a2c', accentDark: '#c2691c', pattern: pawPattern, dotA: pawOrange, dotB: pawPink,
    soft: '#f6c79c', featureTint: '#fff1e3',
  });

  // ---------------- Chicken art (original drawings) ----------------
  const HEN = '#f9d27a', HEN2 = '#eab44a', HLINE = '#b98226', HBELLY = '#fde9b8', COMB = '#e5484d', COMBD = '#b8343a',
        BEAK = '#f6a623', BEAKD = '#d9821a', FEATHER = '#dca540';

  const henFace = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.5 10 C 9.4 5.6, 13 4.6, 13.4 7.6 C 13.6 3.6, 18.4 3.6, 18.4 7.6 C 19 4.8, 22.6 5.6, 21.5 10 Z" fill="${COMB}" stroke="${COMBD}" stroke-width="1"/>
    <circle cx="16" cy="17.5" r="11" fill="${HEN}" stroke="${HLINE}" stroke-width="1.2"/>
    <circle cx="12" cy="15.8" r="1.8" fill="${EYE}"/><circle cx="20" cy="15.8" r="1.8" fill="${EYE}"/>
    <circle cx="12.6" cy="15.1" r=".65" fill="#fff"/><circle cx="20.6" cy="15.1" r=".65" fill="#fff"/>
    <ellipse cx="9" cy="20" rx="1.9" ry="1.1" fill="${PINK}" opacity=".6"/><ellipse cx="23" cy="20" rx="1.9" ry="1.1" fill="${PINK}" opacity=".6"/>
    <path d="M13.4 18.4 L18.6 18.4 L16 22.2 Z" fill="${BEAK}" stroke="${BEAKD}" stroke-width=".9"/>
    <path d="M15 21.8 C 14.2 25, 16 26, 16 24.4 C 16.2 26, 17.8 25, 17 21.8 Z" fill="${COMB}" stroke="${COMBD}" stroke-width=".7"/>
  </g></svg>`;

  const henSit = `<svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="156" cy="100" rx="10" ry="27" transform="rotate(18 156 100)" fill="${HEN2}" stroke="${HLINE}" stroke-width="3"/>
    <ellipse cx="170" cy="112" rx="9.5" ry="25" transform="rotate(42 170 112)" fill="${HEN2}" stroke="${HLINE}" stroke-width="3"/>
    <ellipse cx="177" cy="128" rx="9" ry="22" transform="rotate(66 177 128)" fill="${HEN2}" stroke="${HLINE}" stroke-width="3"/>
    <path d="M84 196 V 220 M116 196 V 220" stroke="${BEAK}" stroke-width="6"/>
    <path d="M84 220 l-10 6 M84 220 v8 M84 220 l10 6 M116 220 l-10 6 M116 220 v8 M116 220 l10 6" stroke="${BEAKD}" stroke-width="4.5"/>
    <ellipse cx="100" cy="148" rx="62" ry="60" fill="${HEN}" stroke="${HLINE}" stroke-width="3"/>
    <ellipse cx="100" cy="162" rx="36" ry="40" fill="${HBELLY}"/>
    <path d="M79 146 q7 7 14 0 q7 7 14 0 q7 7 14 0 M86 164 q7 7 14 0 q7 7 14 0 M93 182 q7 7 14 0" stroke="${FEATHER}" stroke-width="2.6" fill="none"/>
    <path d="M42 138 C 28 160, 38 192, 70 194 C 60 178, 58 156, 64 136 Z" fill="${HEN2}" stroke="${HLINE}" stroke-width="3"/>
    <path d="M158 138 C 172 160, 162 192, 130 194 C 140 178, 142 156, 136 136 Z" fill="${HEN2}" stroke="${HLINE}" stroke-width="3"/>
    <path d="M48 160 q8 6 14 4 M50 175 q8 6 13 3 M152 160 q-8 6 -14 4 M150 175 q-8 6 -13 3" stroke="${HLINE}" stroke-width="2.2" fill="none"/>
    <path d="M73 48 C 68 30, 84 22, 88 36 C 88 16, 110 16, 110 34 C 114 22, 132 28, 126 48 Z" fill="${COMB}" stroke="${COMBD}" stroke-width="3"/>
    <circle cx="100" cy="82" r="44" fill="${HEN}" stroke="${HLINE}" stroke-width="3"/>
    <ellipse cx="82" cy="78" rx="8.5" ry="10" fill="${EYE}"/><ellipse cx="118" cy="78" rx="8.5" ry="10" fill="${EYE}"/>
    <circle cx="85" cy="74" r="3.3" fill="#fff"/><circle cx="121" cy="74" r="3.3" fill="#fff"/>
    <circle cx="79.5" cy="83" r="1.5" fill="#fff"/><circle cx="115.5" cy="83" r="1.5" fill="#fff"/>
    <ellipse cx="68" cy="97" rx="8.5" ry="4.8" fill="${PINK}" opacity=".6"/><ellipse cx="132" cy="97" rx="8.5" ry="4.8" fill="${PINK}" opacity=".6"/>
    <path d="M90 90 L110 90 L100 104 Z" fill="${BEAK}" stroke="${BEAKD}" stroke-width="2.5"/>
    <path d="M96 103 C 92 116, 100 121, 100.5 113 C 101.5 121, 109 116, 104.5 103 Z" fill="${COMB}" stroke="${COMBD}" stroke-width="2"/>
  </g></svg>`;

  const henPeek = `<svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><clipPath id="henpeek-clip"><rect x="0" y="0" width="180" height="79"/></clipPath></defs>
    <g stroke-linecap="round" stroke-linejoin="round">
    <g clip-path="url(#henpeek-clip)">
      <path d="M67 26 C 62 11, 76 4, 80 15 C 81 1, 100 1, 100 15 C 104 4, 119 9, 113 25 Z" fill="${COMB}" stroke="${COMBD}" stroke-width="2.4"/>
      <circle cx="90" cy="60" r="41" fill="${HEN}" stroke="${HLINE}" stroke-width="2.6"/>
      <ellipse cx="62" cy="64" rx="7" ry="4" fill="${PINK}" opacity=".6"/><ellipse cx="118" cy="64" rx="7" ry="4" fill="${PINK}" opacity=".6"/>
      <g class="e-normal">
        <ellipse cx="74" cy="50" rx="7" ry="8.5" fill="${EYE}"/><ellipse cx="106" cy="50" rx="7" ry="8.5" fill="${EYE}"/>
        <circle cx="76.4" cy="46.8" r="2.6" fill="#fff"/><circle cx="108.4" cy="46.8" r="2.6" fill="#fff"/>
      </g>
      <g class="e-happy">
        <path d="M66 52 q8 -11 16 0 M98 52 q8 -11 16 0" stroke="${EYE}" stroke-width="3.6" fill="none"/>
      </g>
      <g class="e-wow">
        <circle cx="74" cy="50" r="9" fill="#fff" stroke="${EYE}" stroke-width="2"/><circle cx="106" cy="50" r="9" fill="#fff" stroke="${EYE}" stroke-width="2"/>
        <circle cx="74" cy="51" r="4.5" fill="${EYE}"/><circle cx="106" cy="51" r="4.5" fill="${EYE}"/>
      </g>
      <path d="M81 59 L99 59 L90 71 Z" fill="${BEAK}" stroke="${BEAKD}" stroke-width="2"/>
      <path class="e-wow" d="M84 64 L96 64 L90 69 Z" fill="#c2455d"/>
      <path d="M86.5 70 C 83 80, 90 84, 90.5 77 C 91.5 84, 98 80, 94 70 Z" fill="${COMB}" stroke="${COMBD}" stroke-width="1.8"/>
    </g>
    <path d="M34 87 C 38 73, 62 70, 74 79 C 67 89, 50 93, 34 87 Z" fill="${HEN2}" stroke="${HLINE}" stroke-width="2.6"/>
    <path d="M146 87 C 142 73, 118 70, 106 79 C 113 89, 130 93, 146 87 Z" fill="${HEN2}" stroke="${HLINE}" stroke-width="2.6"/>
    <path d="M44 84 q8 2 14 -2 M136 84 q-8 2 -14 -2" stroke="${HLINE}" stroke-width="1.8" fill="none"/>
  </g></svg>`;

  const eggPath = (fill, line) => `<path d="M12 2.5 C 17 2.5, 20 10, 20 14.5 C 20 19, 16.5 22, 12 22 C 7.5 22, 4 19, 4 14.5 C 4 10, 7 2.5, 12 2.5 Z" fill="${fill}" stroke="${line}" stroke-width="1.6"/>
    <ellipse cx="9" cy="10" rx="1.6" ry="2.6" fill="#fff" opacity=".7" transform="rotate(20 9 10)"/>`;
  const egg = (fill = '#fffaf0', line = '#c9a77a', cls = '') => `<svg ${cls ? `class="${cls}" ` : ''}viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${eggPath(fill, line)}</svg>`;
  const eggWhite = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${eggPath('#fffaf0', '#c9a77a')}</svg>`);
  const eggBrown = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${eggPath('#e9b98b', '#b5845a')}</svg>`);
  const track = `<path d="M12 21 V 11 M12 11 L5.5 4.5 M12 11 V 2.5 M12 11 L18.5 4.5 M12 15 L9 18" stroke="#9a6b2c" stroke-width="2" stroke-linecap="round" fill="none"/>`;
  const trackPattern = dataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
    <g opacity=".11"><g transform="translate(16 20) rotate(-14 12 12)">${track}</g><g transform="translate(40 52) rotate(10 12 12)">${track}</g>
    <g transform="translate(88 78) rotate(-8 12 12)">${track}</g><g transform="translate(108 108) rotate(16 12 12)">${track}</g></g></svg>`);
  const chickensCss = petCss('chickens', {
    ink: '#3b2f1e', muted: '#85745a', bg: '#fdf8ec', line: '#f0e2bc', band: '#fff3d1', box: '#b59a62',
    accent: '#ee8f12', accentDark: '#b86a06', pattern: trackPattern, dotA: eggWhite, dotB: eggBrown,
    soft: '#f3d58e', featureTint: '#fff4d6',
  });

  // ---------------- More animals (original drawings) ----------------
  // Each head is drawn once (centered near 90,56) and used two ways: peeking over the problem card
  // (with happy / surprised faces), and on top of a body for the sitting picture.
  const OUTLINE_W = 2.6;
  function animalArt(id, head, hands, body, headShift) {
    const peek = `<svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><clipPath id="${id}peek-clip"><rect x="0" y="0" width="180" height="79"/></clipPath></defs>
      <g stroke-linecap="round" stroke-linejoin="round"><g clip-path="url(#${id}peek-clip)">${head(true)}</g>${hands}</g></svg>`;
    const sit = `<svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke-linecap="round" stroke-linejoin="round">${body}<g transform="translate(10 ${headShift})">${head(false)}</g></g></svg>`;
    return { peek, sit };
  }
  // faces: normal is always drawn; happy / surprised only on the peeking version
  const faces = (normal, happy, wow, peek) => `<g class="e-normal">${normal}</g>` + (peek ? `<g class="e-happy">${happy}</g><g class="e-wow">${wow}</g>` : '');
  const dotEyes = (lx, rx, y, rxx, ryy) => `<ellipse cx="${lx}" cy="${y}" rx="${rxx}" ry="${ryy}" fill="${EYE}"/><ellipse cx="${rx}" cy="${y}" rx="${rxx}" ry="${ryy}" fill="${EYE}"/>
    <circle cx="${lx + 2.4}" cy="${y - 3.2}" r="2.4" fill="#fff"/><circle cx="${rx + 2.4}" cy="${y - 3.2}" r="2.4" fill="#fff"/>`;
  const arcEyes = (lx, rx, y) => `<path d="M${lx - 8} ${y + 2} q8 -10 16 0 M${rx - 8} ${y + 2} q8 -10 16 0" stroke="${EYE}" stroke-width="3.6" fill="none"/>`;
  const wowEyes = (lx, rx, y, r) => `<circle cx="${lx}" cy="${y}" r="${r}" fill="#fff" stroke="${EYE}" stroke-width="2"/><circle cx="${rx}" cy="${y}" r="${r}" fill="#fff" stroke="${EYE}" stroke-width="2"/>
    <circle cx="${lx}" cy="${y + 1}" r="${r * 0.48}" fill="${EYE}"/><circle cx="${rx}" cy="${y + 1}" r="${r * 0.48}" fill="${EYE}"/>`;
  const cheeks = (lx, rx, y) => `<ellipse cx="${lx}" cy="${y}" rx="7" ry="4" fill="${PINK}" opacity=".6"/><ellipse cx="${rx}" cy="${y}" rx="7" ry="4" fill="${PINK}" opacity=".6"/>`;

  // Puppy
  const DOG = '#dba46c', DOGD = '#a86b35', DOGL = '#7a4b22', DOGC = '#f6e3c6';
  const dog = animalArt('dog', peek => `
      <ellipse cx="90" cy="56" rx="42" ry="38" fill="${DOG}" stroke="${DOGL}" stroke-width="${OUTLINE_W}"/>
      <ellipse cx="107" cy="47" rx="13" ry="12" fill="${DOGD}" opacity=".5"/>
      <ellipse cx="90" cy="70" rx="21" ry="14" fill="${DOGC}"/>
      <path d="M54 30 C 37 30, 29 58, 40 75 C 48 77, 57 62, 61 44 Z" fill="${DOGD}" stroke="${DOGL}" stroke-width="${OUTLINE_W}"/>
      <path d="M126 30 C 143 30, 151 58, 140 75 C 132 77, 123 62, 119 44 Z" fill="${DOGD}" stroke="${DOGL}" stroke-width="${OUTLINE_W}"/>
      ${cheeks(65, 115, 66)}
      ${faces(dotEyes(74, 106, 50, 6.5, 8) + `<path d="M90 69 v4 M90 73 q-5 5 -10 1 M90 73 q5 5 10 1" stroke="${DOGL}" stroke-width="2" fill="none"/>`,
              arcEyes(74, 106, 50) + `<path d="M80 72 q10 13 20 0 z" fill="#c2455d" stroke="${DOGL}" stroke-width="1.6"/><path d="M86 76 q4 9 8 0" fill="#ff8fa3"/>`,
              wowEyes(74, 106, 50, 8.5) + `<ellipse cx="90" cy="77" rx="3.5" ry="4.2" fill="${DOGL}"/>`, peek)}
      <ellipse cx="90" cy="64" rx="7.5" ry="5.5" fill="${EYE}"/><ellipse cx="88" cy="62.5" rx="2.2" ry="1.4" fill="#fff" opacity=".7"/>`,
    `<ellipse cx="57" cy="84" rx="15" ry="10" fill="${DOG}" stroke="${DOGL}" stroke-width="${OUTLINE_W}"/><ellipse cx="123" cy="84" rx="15" ry="10" fill="${DOG}" stroke="${DOGL}" stroke-width="${OUTLINE_W}"/>
     <path d="M51 83 v8 M57 82 v9 M63 83 v8 M117 83 v8 M123 82 v9 M129 83 v8" stroke="${DOGL}" stroke-width="1.8"/>`,
    `<path d="M144 198 C 172 198, 186 172, 180 148" fill="none" stroke="${DOGL}" stroke-width="16"/><path d="M144 198 C 172 198, 186 172, 180 148" fill="none" stroke="${DOG}" stroke-width="10"/>
     <ellipse cx="100" cy="170" rx="48" ry="52" fill="${DOG}" stroke="${DOGL}" stroke-width="3"/><ellipse cx="100" cy="182" rx="26" ry="32" fill="${DOGC}"/>
     <ellipse cx="82" cy="219" rx="14" ry="9" fill="${DOG}" stroke="${DOGL}" stroke-width="3"/><ellipse cx="118" cy="219" rx="14" ry="9" fill="${DOG}" stroke="${DOGL}" stroke-width="3"/>
     <path d="M77 214 v7 M82 213 v8 M87 214 v7 M113 214 v7 M118 213 v8 M123 214 v7" stroke="${DOGL}" stroke-width="2"/>`, 22);

  // Bunny
  const BUN = '#eee9f2', BUNL = '#857a90', BUNP = '#ffc2d1';
  const bunny = animalArt('bunny', peek => `
      <ellipse cx="74" cy="27" rx="10" ry="25" transform="rotate(-10 74 27)" fill="${BUN}" stroke="${BUNL}" stroke-width="${OUTLINE_W}"/>
      <ellipse cx="106" cy="27" rx="10" ry="25" transform="rotate(10 106 27)" fill="${BUN}" stroke="${BUNL}" stroke-width="${OUTLINE_W}"/>
      <ellipse cx="74" cy="29" rx="5" ry="17" transform="rotate(-10 74 29)" fill="${BUNP}"/><ellipse cx="106" cy="29" rx="5" ry="17" transform="rotate(10 106 29)" fill="${BUNP}"/>
      <ellipse cx="90" cy="62" rx="37" ry="32" fill="${BUN}" stroke="${BUNL}" stroke-width="${OUTLINE_W}"/>
      ${cheeks(66, 114, 70)}
      ${faces(dotEyes(76, 104, 57, 5.5, 7) + `<path d="M90 70 q-4 5 -8 2 M90 70 q4 5 8 2" stroke="${BUNL}" stroke-width="1.8" fill="none"/>`,
              arcEyes(76, 104, 57) + `<path d="M90 70 q-5 5 -9 2 M90 70 q5 5 9 2" stroke="${BUNL}" stroke-width="1.8" fill="none"/><rect x="86.5" y="72.5" width="7" height="6.5" rx="1.5" fill="#fff" stroke="${BUNL}" stroke-width="1.2"/><path d="M90 72.5 v6.5" stroke="${BUNL}" stroke-width="1"/>`,
              wowEyes(76, 104, 57, 7.5) + `<ellipse cx="90" cy="75" rx="3" ry="3.8" fill="${BUNL}"/>`, peek)}
      <path d="M86.5 65 h7 l-3.5 4 z" fill="#ff8fa3" stroke="#d65f78" stroke-width="1"/>
      <path d="M42 66 l20 2 M44 76 l19 -3 M138 66 l-20 2 M136 76 l-19 -3" stroke="${BUNL}" stroke-width="1.4"/>`,
    `<ellipse cx="60" cy="85" rx="13" ry="9" fill="#fbf9fc" stroke="${BUNL}" stroke-width="${OUTLINE_W}"/><ellipse cx="120" cy="85" rx="13" ry="9" fill="#fbf9fc" stroke="${BUNL}" stroke-width="${OUTLINE_W}"/>`,
    `<circle cx="148" cy="192" r="14" fill="#fff" stroke="${BUNL}" stroke-width="3"/>
     <ellipse cx="100" cy="170" rx="46" ry="50" fill="${BUN}" stroke="${BUNL}" stroke-width="3"/><ellipse cx="100" cy="180" rx="27" ry="31" fill="#fbf9fc"/>
     <ellipse cx="76" cy="222" rx="21" ry="9" fill="${BUN}" stroke="${BUNL}" stroke-width="3"/><ellipse cx="124" cy="222" rx="21" ry="9" fill="${BUN}" stroke="${BUNL}" stroke-width="3"/>
     <ellipse cx="88" cy="206" rx="9" ry="7" fill="#fbf9fc" stroke="${BUNL}" stroke-width="2.4"/><ellipse cx="112" cy="206" rx="9" ry="7" fill="#fbf9fc" stroke="${BUNL}" stroke-width="2.4"/>`, 29);

  // Frog
  const FROG = '#8fd06c', FROGD = '#5aa63c', FROGL = '#3f7d2a', FROGB = '#dcf3c8';
  const frog = animalArt('frog', peek => `
      <circle cx="70" cy="38" r="16" fill="${FROG}" stroke="${FROGL}" stroke-width="${OUTLINE_W}"/><circle cx="110" cy="38" r="16" fill="${FROG}" stroke="${FROGL}" stroke-width="${OUTLINE_W}"/>
      <ellipse cx="90" cy="63" rx="47" ry="30" fill="${FROG}" stroke="${FROGL}" stroke-width="${OUTLINE_W}"/>
      <path d="M58 45 q12 -4 24 0 M98 45 q12 -4 24 0" stroke="${FROG}" stroke-width="5"/>
      <circle cx="70" cy="37" r="10.5" fill="#fff"/><circle cx="110" cy="37" r="10.5" fill="#fff"/>
      <circle cx="88" cy="50" r="2.6" fill="${FROGD}"/><circle cx="96" cy="55" r="1.8" fill="${FROGD}"/>
      ${cheeks(58, 122, 64)}
      ${faces(`<circle cx="71" cy="38" r="5.2" fill="${EYE}"/><circle cx="109" cy="38" r="5.2" fill="${EYE}"/><circle cx="73" cy="36" r="1.8" fill="#fff"/><circle cx="111" cy="36" r="1.8" fill="#fff"/>
               <path d="M66 66 q24 15 48 0" stroke="${FROGL}" stroke-width="3" fill="none"/>`,
              `<circle cx="70" cy="37" r="11" fill="${FROG}"/><circle cx="110" cy="37" r="11" fill="${FROG}"/><path d="M62 39 q8 -9 16 0 M102 39 q8 -9 16 0" stroke="${EYE}" stroke-width="3.4" fill="none"/>
               <path d="M64 63 q26 22 52 0 z" fill="#c2455d" stroke="${FROGL}" stroke-width="2"/>`,
              `<circle cx="70" cy="37" r="3" fill="${EYE}"/><circle cx="110" cy="37" r="3" fill="${EYE}"/><ellipse cx="90" cy="71" rx="4" ry="5" fill="${FROGL}"/>`, peek)}`,
    `<g fill="${FROG}" stroke="${FROGL}" stroke-width="2.2"><ellipse cx="58" cy="87" rx="12" ry="7"/><circle cx="48" cy="83" r="4.5"/><circle cx="58" cy="80" r="4.5"/><circle cx="68" cy="83" r="4.5"/>
     <ellipse cx="122" cy="87" rx="12" ry="7"/><circle cx="112" cy="83" r="4.5"/><circle cx="122" cy="80" r="4.5"/><circle cx="132" cy="83" r="4.5"/></g>`,
    `<ellipse cx="58" cy="198" rx="24" ry="17" fill="${FROG}" stroke="${FROGL}" stroke-width="3"/><ellipse cx="142" cy="198" rx="24" ry="17" fill="${FROG}" stroke="${FROGL}" stroke-width="3"/>
     <ellipse cx="100" cy="178" rx="45" ry="48" fill="${FROG}" stroke="${FROGL}" stroke-width="3"/><ellipse cx="100" cy="188" rx="29" ry="30" fill="${FROGB}"/>
     <g fill="${FROG}" stroke="${FROGL}" stroke-width="2.4"><ellipse cx="80" cy="222" rx="13" ry="7"/><circle cx="70" cy="219" r="4.5"/><circle cx="80" cy="216" r="4.5"/><circle cx="90" cy="219" r="4.5"/>
     <ellipse cx="120" cy="222" rx="13" ry="7"/><circle cx="110" cy="219" r="4.5"/><circle cx="120" cy="216" r="4.5"/><circle cx="130" cy="219" r="4.5"/></g>`, 44);

  // Owl
  const OWL = '#ad8054', OWL2 = '#8f653d', OWLL = '#5e3f22', OWLD = '#f1dcb8';
  const owl = animalArt('owl', peek => `
      <path d="M55 34 L57 9 L77 24 Z M125 34 L123 9 L103 24 Z" fill="${OWL}" stroke="${OWLL}" stroke-width="${OUTLINE_W}"/>
      <ellipse cx="90" cy="57" rx="45" ry="39" fill="${OWL}" stroke="${OWLL}" stroke-width="${OUTLINE_W}"/>
      <circle cx="72" cy="54" r="17" fill="${OWLD}"/><circle cx="108" cy="54" r="17" fill="${OWLD}"/>
      <path d="M56 38 q16 -8 32 3 M124 38 q-16 -8 -32 3" stroke="${OWL2}" stroke-width="3" fill="none"/>
      ${faces(`<circle cx="72" cy="54" r="11" fill="#fff" stroke="${OWLL}" stroke-width="1.4"/><circle cx="108" cy="54" r="11" fill="#fff" stroke="${OWLL}" stroke-width="1.4"/>
               <circle cx="73" cy="55" r="6" fill="${EYE}"/><circle cx="107" cy="55" r="6" fill="${EYE}"/><circle cx="75" cy="52.5" r="2" fill="#fff"/><circle cx="109" cy="52.5" r="2" fill="#fff"/>`,
              arcEyes(72, 108, 54),
              wowEyes(72, 108, 54, 12), peek)}
      <path d="M84 62 L96 62 L90 75 Z" fill="${BEAK}" stroke="${BEAKD}" stroke-width="1.8"/>
      ${peek ? `<path class="e-wow" d="M86.5 66 L93.5 66 L90 71 Z" fill="#c2455d"/>` : ''}`,
    `<path d="M34 87 C 38 73, 62 70, 74 79 C 67 89, 50 93, 34 87 Z M146 87 C 142 73, 118 70, 106 79 C 113 89, 130 93, 146 87 Z" fill="${OWL2}" stroke="${OWLL}" stroke-width="${OUTLINE_W}"/>`,
    `<path d="M86 210 v12 M80 212 l-3 10 M92 212 l3 10 M114 210 v12 M108 212 l-3 10 M120 212 l3 10" stroke="${BEAK}" stroke-width="4.5"/>
     <ellipse cx="100" cy="158" rx="52" ry="58" fill="${OWL}" stroke="${OWLL}" stroke-width="3"/><ellipse cx="100" cy="170" rx="32" ry="38" fill="${OWLD}"/>
     <path d="M86 156 l5 5 l5 -5 M104 156 l5 5 l5 -5 M95 172 l5 5 l5 -5 M86 188 l5 5 l5 -5 M104 188 l5 5 l5 -5" stroke="${OWL2}" stroke-width="2.4" fill="none"/>
     <path d="M48 128 C 32 150, 40 190, 70 198 C 62 178, 60 150, 66 126 Z M152 128 C 168 150, 160 190, 130 198 C 138 178, 140 150, 134 126 Z" fill="${OWL2}" stroke="${OWLL}" stroke-width="3"/>`, 18);

  // Sounds for any animal: notes are [start, startPitch, endPitch, length, volume]
  function voice(ctx, notes, o) {
    if (!ctx) return;
    o = o || {};
    try { if (ctx.state === 'suspended' && !(ctx instanceof (window.OfflineAudioContext || Object))) { const r = ctx.resume(); if (r && r.catch) r.catch(() => {}); } } catch (e) {}
    for (const [at, f0, f1, dur, vol] of notes) {
      const t0 = ctx.currentTime + 0.01 + at;
      const osc = ctx.createOscillator(); osc.type = o.type || 'sawtooth';
      osc.frequency.setValueAtTime(f0, t0); osc.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
      let node = osc;
      if (o.bp) {
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = o.q || 2.5;
        bp.frequency.setValueAtTime(o.bp[0], t0); bp.frequency.linearRampToValueAtTime(o.bp[1], t0 + dur);
        node.connect(bp); node = bp;
      }
      const g = ctx.createGain(), att = o.attack || 0.012;
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + att); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      if (o.lfo) {
        const l = ctx.createOscillator(); l.frequency.value = o.lfo[0];
        const lg = ctx.createGain(); lg.gain.value = o.lfo[1] * vol; l.connect(lg); lg.connect(g.gain);
        l.start(t0); l.stop(t0 + dur + 0.03);
      }
      node.connect(g); g.connect(ctx.destination);
      osc.start(t0); osc.stop(t0 + dur + 0.03);
    }
  }

  // "buk-buk-bagawk!" (right) and a low "bawk… bawk" (wrong), made in the browser
  function clucks(ctx, notes) {
    if (!ctx) return;
    try { if (ctx.state === 'suspended' && !(ctx instanceof (window.OfflineAudioContext || Object))) { const r = ctx.resume(); if (r && r.catch) r.catch(() => {}); } } catch (e) {}
    for (const [at, f0, f1, dur, vol] of notes) {
      const t0 = ctx.currentTime + 0.01 + at;
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 2.5;
      bp.frequency.setValueAtTime(1350, t0); bp.frequency.linearRampToValueAtTime(900, t0 + dur);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(bp); bp.connect(g); g.connect(ctx.destination);
      o.start(t0); o.stop(t0 + dur + 0.03);
    }
  }

  const animalCast = [
    { label: 'the kitty', sit: catSit, peek: catPeek,
      sounds: { good: ctx => meow(ctx, { pitch: 1.18, dur: 0.42, vol: 0.6 }), bad: ctx => meow(ctx, { sad: true, pitch: 0.85, dur: 0.6, vol: 0.55 }) },
      praiseNamed: ['Purr-fect, {name}!', 'Paw-some, {name}!', 'Meow-velous, {name}!', 'You\'re the cat\'s meow, {name}!', 'Claw-some, {name}!'],
      praise: ['Purr-fect!', 'Meow-velous!', 'Paw-some!'] },
    { label: 'the hen', sit: henSit, peek: henPeek,
      sounds: { good: ctx => clucks(ctx, [[0, 430, 330, 0.07, 0.95], [0.11, 450, 340, 0.07, 0.95], [0.24, 520, 780, 0.22, 1.0]]), bad: ctx => clucks(ctx, [[0, 360, 300, 0.13, 0.8], [0.22, 310, 220, 0.3, 0.8]]) },
      praiseNamed: ['Egg-cellent, {name}!', 'You cracked it, {name}!', 'Cluck-tastic, {name}!', 'You rule the roost, {name}!', 'Wing-credible, {name}!'],
      praise: ['Egg-cellent!', 'Cluck-tastic!', 'Cock-a-doodle-doo!'] },
    { label: 'the puppy', sit: dog.sit, peek: dog.peek,
      sounds: { good: ctx => voice(ctx, [[0, 330, 210, 0.11, 0.9], [0.17, 350, 220, 0.13, 0.9]], { type: 'sawtooth', bp: [850, 520], q: 2 }),
                bad: ctx => voice(ctx, [[0, 720, 430, 0.55, 0.35]], { type: 'sine', attack: 0.06 }) },
      praiseNamed: ['Paw-some, {name}!', 'Fetch-tastic, {name}!', 'Doggone good, {name}!', 'Woof! Great job, {name}!', 'You\'re top dog, {name}!'],
      praise: ['Woof woof!', 'Fetch-tastic!', 'Top dog!'] },
    { label: 'the bunny', sit: bunny.sit, peek: bunny.peek,
      sounds: { good: ctx => voice(ctx, [[0, 420, 1100, 0.22, 0.35], [0.2, 700, 1300, 0.16, 0.25]], { type: 'sine', attack: 0.01 }),
                bad: ctx => voice(ctx, [[0, 700, 260, 0.4, 0.3]], { type: 'triangle' }) },
      praiseNamed: ['Hop-tastic, {name}!', 'Some-bunny is smart! Great job, {name}!', 'Hoppin\' great, {name}!', 'Ear-resistible, {name}!', 'Hip hop hooray, {name}!'],
      praise: ['Hop-tastic!', 'Hoppin\' great!', 'Hip hop hooray!'] },
    { label: 'the frog', sit: frog.sit, peek: frog.peek,
      sounds: { good: ctx => voice(ctx, [[0, 190, 170, 0.1, 0.9], [0.14, 210, 160, 0.16, 0.9]], { type: 'square', bp: [1000, 800], q: 5, lfo: [45, 0.5] }),
                bad: ctx => voice(ctx, [[0, 150, 110, 0.35, 0.9]], { type: 'square', bp: [700, 500], q: 4, lfo: [30, 0.5] }) },
      praiseNamed: ['Toad-ally right, {name}!', 'Ribbit-ing, {name}!', 'Un-frog-gettable, {name}!', 'Hoppy dance time, {name}!', 'Toad-ally awesome, {name}!'],
      praise: ['Ribbit!', 'Toad-ally right!', 'Hoppy dance!'] },
    { label: 'the owl', sit: owl.sit, peek: owl.peek,
      sounds: { good: ctx => voice(ctx, [[0, 430, 390, 0.2, 0.4], [0.3, 420, 370, 0.32, 0.4]], { type: 'sine', attack: 0.05 }),
                bad: ctx => voice(ctx, [[0, 340, 280, 0.45, 0.4]], { type: 'sine', attack: 0.06 }) },
      praiseNamed: ['Owl-standing, {name}!', 'Hoot hoot hooray, {name}!', 'Whooo\'s smart? You are, {name}!', 'Owl-some, {name}!', 'Wise choice, {name}!'],
      praise: ['Owl-standing!', 'Hoot hoot!', 'Whooo knew? You did!'] },
  ];

  // ---------------- Dance party extras ----------------
  const notePath = (fill) => `<ellipse cx="8" cy="18" rx="5" ry="3.8" transform="rotate(-20 8 18)" fill="${fill}"/>
    <rect x="11.6" y="3" width="2.4" height="15" rx="1" fill="${fill}"/><path d="M14 3 C 18 4, 20 7, 19 11 C 18 8, 16 7, 14 7 Z" fill="${fill}"/>`;
  const note = (fill = '#e0457b', cls = '') => `<svg ${cls ? `class="${cls}" ` : ''}viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${notePath(fill)}</svg>`;
  // an animal with music notes around it (for the printable header)
  const withNotes = sit => `<svg viewBox="0 0 240 232" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
    sit.replace('<svg viewBox="0 0 200 232"', '<svg x="20" y="0" width="200" height="232" viewBox="0 0 200 232"') +
    `<g transform="translate(0 20) scale(1.6)">${notePath('#e0457b')}</g><g transform="translate(196 6) scale(1.5)">${notePath('#7c5cd6')}</g>
     <g transform="translate(202 120) scale(1.3)">${notePath('#1f9d55')}</g></svg>`;
  const danceJingles = [
    [[0, 523, 523, 0.1, 0.22], [0.12, 659, 659, 0.1, 0.22], [0.24, 784, 784, 0.1, 0.22], [0.36, 1047, 1047, 0.24, 0.24]],
    [[0, 784, 784, 0.09, 0.22], [0.1, 659, 659, 0.09, 0.22], [0.2, 784, 784, 0.09, 0.22], [0.3, 988, 988, 0.09, 0.22], [0.4, 1047, 1047, 0.22, 0.24]],
    [[0, 587, 587, 0.1, 0.22], [0.12, 740, 740, 0.1, 0.22], [0.24, 880, 880, 0.1, 0.22], [0.36, 1175, 1175, 0.24, 0.24]],
  ];
  const kicks = (ctx, n) => voice(ctx, Array.from({ length: n }, (_, i) => [i * 0.24, 120, 50, 0.14, 0.42]), { type: 'sine', attack: 0.004 });
  const danceJingle = ctx => {
    voice(ctx, danceJingles[Math.floor(Math.random() * danceJingles.length)], { type: 'square', bp: [2200, 2200], q: 0.7 });
    kicks(ctx, 2);
  };
  const partyBeat = ctx => {
    kicks(ctx, 8);
    voice(ctx, [[0, 523, 523, 0.12, 0.22], [0.24, 659, 659, 0.12, 0.22], [0.48, 784, 784, 0.12, 0.22], [0.72, 659, 659, 0.12, 0.22],
                [0.96, 784, 784, 0.12, 0.22], [1.2, 880, 880, 0.12, 0.22], [1.44, 1047, 1047, 0.36, 0.24]], { type: 'square', bp: [2200, 2200], q: 0.7 });
  };
  const danceCast = animalCast.map(a => ({ label: a.label, sit: a.sit, peek: a.peek, printSit: withNotes(a.sit),
                                           sounds: { good: danceJingle, bad: a.sounds.bad } }));
  const danceExtraCss = `
  html.theme-dance .peek svg { transform-origin: 50% 92%; animation: dance-sway 1.6s ease-in-out infinite; }
  html.theme-dance .peek.swap svg { animation: pet-in .4s ease-out, dance-sway 1.6s ease-in-out .4s infinite; }
  html.theme-dance .card.good .peek svg { animation: dance-move 1.3s ease-in-out; }
  html.theme-dance .card.bad .peek svg { animation: pet-tilt .5s ease-in-out; }
  @keyframes dance-sway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg) translateY(-3px); } }
  @keyframes dance-move {
    0% { transform: none; } 14% { transform: translateY(-16px) rotate(-12deg); } 28% { transform: none; }
    42% { transform: translateY(-16px) rotate(12deg); } 56% { transform: none; } 72% { transform: translateY(-12px) scale(1.1); } 100% { transform: none; } }
  html.theme-dance .card.good .peek::before, html.theme-dance .card.good .peek::after {
    content: '♪'; position: absolute; top: 0; font-size: 26px; font-weight: 800; color: #e0457b; animation: note-up 1.3s ease-out forwards; }
  html.theme-dance .card.good .peek::before { left: -6px; }
  html.theme-dance .card.good .peek::after { content: '♫'; right: -8px; color: #7c5cd6; animation-delay: .2s; opacity: 0; }
  @keyframes note-up { 0% { opacity: 0; transform: translateY(10px); } 20% { opacity: 1; } 100% { opacity: 0; transform: translateY(-40px) rotate(15deg); } }
  html.theme-dance .hero { width: 330px; display: flex; gap: 6px; align-items: flex-end; }
  html.theme-dance .hero.small { width: 270px; }
  html.theme-dance .hero .dancer { flex: 1; transform-origin: 50% 100%; animation: dance-loop .7s ease-in-out infinite alternate; }
  html.theme-dance .hero .dancer:nth-child(2) { animation-delay: .35s; }
  html.theme-dance .hero .dancer:nth-child(3) { animation-direction: alternate-reverse; }
  @keyframes dance-loop { from { transform: translateY(0) rotate(-7deg); } to { transform: translateY(-14px) rotate(7deg); } }
  @media (max-width: 600px) { html.theme-dance .hero { width: 270px; } html.theme-dance .hero.small { width: 220px; } }
  html.theme-dance .hdr-cat { width: 0.86in; }
  html.theme-dance .hdr-cat.small { width: 0.5in; }
  `;

  // ---------------- Cars (original drawings, side view, facing right) ----------------
  // Wheels sit on the top edge of the problem card. Happy = speed lines; surprised = a puff of smoke and "!".
  function vehicleArt(body, wheels, top) {
    const wheel = ([x, r]) => {
      const cy = 80 - r;
      return `<g class="wheel"><circle cx="${x}" cy="${cy}" r="${r}" fill="#2b2f36"/>` +
        (r >= 14 ? `<circle cx="${x}" cy="${cy}" r="${r - 1.5}" fill="none" stroke="#555c66" stroke-width="3" stroke-dasharray="4 3"/>` : '') +
        `<circle cx="${x}" cy="${cy}" r="${r * 0.45}" fill="#c9d1db"/>` +
        `<path d="M${x - r * 0.42} ${cy} h${r * 0.84} M${x} ${cy - r * 0.42} v${r * 0.84}" stroke="#7d8796" stroke-width="1.5"/></g>`;
    };
    const parts = body + wheels.map(wheel).join('');
    const happy = `<g class="e-happy"><path d="M4 44 h20 M0 56 h22 M8 68 h14" stroke="#9fb3c8" stroke-width="3.2" fill="none"/></g>`;
    const wow = `<g class="e-wow"><circle cx="18" cy="71" r="7" fill="#cfd6df"/><circle cx="9" cy="64" r="5" fill="#dfe4ea"/><circle cx="4" cy="73" r="4" fill="#e7ebf0"/>
      <circle cx="160" cy="14" r="9" fill="#fff" stroke="#e63946" stroke-width="2"/><path d="M160 9 v6" stroke="#e63946" stroke-width="2.6"/><circle cx="160" cy="19" r="1.5" fill="#e63946"/></g>`;
    return {
      peek: `<svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round">${happy}${wow}${parts}</g></svg>`,
      sit: `<svg viewBox="20 ${top} 154 ${84 - top}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke-linecap="round" stroke-linejoin="round">${parts}</g></svg>`,
    };
  }
  const WIN = '#cfe8ff';
  const raceCar = vehicleArt(`
    <path d="M28 56 L28 44 L46 44 L46 52" fill="#2f6fe0" stroke="#1d4596" stroke-width="2.4"/>
    <path d="M28 70 L30 60 Q32 54 40 53 L66 50 L82 38 Q85 36 90 36 L112 36 Q118 36 122 41 L130 50 L156 53 Q170 55 170 64 L170 70 Z" fill="#2f6fe0" stroke="#1d4596" stroke-width="2.4"/>
    <path d="M89 41 L111 41 L119 50 L83 50 Z" fill="${WIN}" stroke="#1d4596" stroke-width="1.8"/>
    <path d="M34 61 H166" stroke="#fff" stroke-width="4"/>
    <circle cx="100" cy="61" r="7.5" fill="#fff" stroke="#1d4596" stroke-width="1.6"/>
    <path d="M100 56.3 l1.5 3 3.3 .5 -2.4 2.3 .6 3.3 -3 -1.6 -3 1.6 .6 -3.3 -2.4 -2.3 3.3 -.5 z" fill="#f5b301"/>
    <circle cx="166" cy="59" r="2.6" fill="#ffe27a"/>`, [[56, 10], [142, 10]], 30);
  const fireTruck = vehicleArt(`
    <path d="M30 30 H122 M30 36 H122 M40 30 v6 M52 30 v6 M64 30 v6 M76 30 v6 M88 30 v6 M100 30 v6 M112 30 v6" stroke="#aab4c0" stroke-width="2.6"/>
    <path d="M42 36 v4 M112 36 v4" stroke="#9b1d20" stroke-width="2.4"/>
    <rect x="26" y="40" width="104" height="30" rx="3" fill="#e5383b" stroke="#9b1d20" stroke-width="2.4"/>
    <path d="M130 70 V46 H150 Q154 46 157 49 L168 60 V70 Z" fill="#e5383b" stroke="#9b1d20" stroke-width="2.4"/>
    <path d="M136 50 H149 L158 59 H136 Z" fill="${WIN}" stroke="#9b1d20" stroke-width="1.8"/>
    <rect x="137" y="40" width="12" height="6" rx="2.5" fill="#3b7be0" stroke="#1d4596" stroke-width="1.2"/>
    <rect x="34" y="45" width="20" height="11" rx="2" fill="#c92f32"/><rect x="60" y="45" width="20" height="11" rx="2" fill="#c92f32"/><rect x="98" y="45" width="24" height="11" rx="2" fill="#c92f32"/>
    <path d="M26 61 H168" stroke="#fff" stroke-width="3"/>
    <circle cx="166" cy="65" r="2.4" fill="#ffe27a"/>`, [[48, 10], [86, 10], [148, 10]], 24);
  const schoolBus = vehicleArt(`
    <path d="M24 70 V36 Q24 30 30 30 H146 Q156 30 160 38 L166 52 Q168 56 168 60 V70 Z" fill="#f6c026" stroke="#b07d00" stroke-width="2.4"/>
    <g fill="${WIN}" stroke="#b07d00" stroke-width="1.6"><rect x="31" y="36" width="16" height="13" rx="2"/><rect x="51" y="36" width="16" height="13" rx="2"/>
    <rect x="71" y="36" width="16" height="13" rx="2"/><rect x="91" y="36" width="16" height="13" rx="2"/><rect x="111" y="36" width="16" height="13" rx="2"/></g>
    <path d="M134 36 H148 Q153 36 156 42 L160 50 H134 Z" fill="${WIN}" stroke="#b07d00" stroke-width="1.6"/>
    <path d="M24 56 H168 M24 62 H168" stroke="#2b2f36" stroke-width="2"/>
    <circle cx="164" cy="65" r="2.4" fill="#fff4b8"/>`, [[50, 10], [142, 10]], 24);
  const monsterTruck = vehicleArt(`
    <path d="M42 44 L52 64 M62 44 L52 64 M122 44 L132 64 M142 44 L132 64" stroke="#7d8796" stroke-width="3.4"/>
    <g transform="translate(0 -12)"><path d="M36 58 L36 51 L64 46 L84 30 Q87 28 92 28 L116 28 Q122 28 126 33 L134 44 L156 47 Q166 49 166 55 L164 58 Z" fill="#8b5cf6" stroke="#5b3db0" stroke-width="2.4"/>
    <path d="M90 33 H115 L124 44 H84 Z" fill="${WIN}" stroke="#5b3db0" stroke-width="1.8"/>
    <path d="M42 54 q8 -8 14 -2 q4 -8 11 -4 q6 -6 13 0" fill="none" stroke="#ff9f1c" stroke-width="2.6"/>
    <circle cx="163" cy="52" r="2.4" fill="#ffe27a"/></g>`, [[52, 16], [132, 16]], 10);
  const iceCreamTruck = vehicleArt(`
    <path d="M69 19 L83 19 L76 32 Z" fill="#e8b273" stroke="#a8743a" stroke-width="1.6"/>
    <circle cx="76" cy="14" r="7.5" fill="#ff9fc4" stroke="#c2547d" stroke-width="1.6"/>
    <path d="M73 11 l2 1 M78 10 l1 2 M79 15 l-2 1" stroke="#fff" stroke-width="1.4"/>
    <rect x="24" y="32" width="100" height="38" rx="4" fill="#fff" stroke="#c2547d" stroke-width="2.4"/>
    <path d="M124 70 V44 H144 Q148 44 151 47 L166 60 V70 Z" fill="#ff7aa8" stroke="#c2547d" stroke-width="2.4"/>
    <path d="M130 48 H143 L153 58 H130 Z" fill="${WIN}" stroke="#c2547d" stroke-width="1.8"/>
    <rect x="44" y="41" width="44" height="17" rx="2" fill="${WIN}" stroke="#c2547d" stroke-width="1.8"/>
    <path d="M40 41 h52 l-4 -5 h-44 z" fill="#ff7aa8" stroke="#c2547d" stroke-width="1.6"/>
    <path d="M24 63 H166" stroke="#ff7aa8" stroke-width="4"/>
    <circle cx="164" cy="66" r="2.4" fill="#ffe27a"/>`, [[48, 10], [144, 10]], 2);
  const carIcon = (cls = '') => `<svg ${cls ? `class="${cls}" ` : ''}viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 16 L3 12.5 Q3.5 11 5 11 L8 10.5 L10.5 7 Q11 6.5 12 6.5 H16 Q17 6.5 17.6 7.4 L19 10.5 L21 11 Q23 11.5 23 13.5 V16 Z" fill="#e63946" stroke="#a51d29" stroke-width="1"/>
    <path d="M11.4 8 H15.6 L16.8 10.5 H10 Z" fill="${WIN}"/><circle cx="7" cy="16.5" r="2.6" fill="#2b2f36"/><circle cx="18" cy="16.5" r="2.6" fill="#2b2f36"/>
    <circle cx="7" cy="16.5" r="1.1" fill="#c9d1db"/><circle cx="18" cy="16.5" r="1.1" fill="#c9d1db"/></svg>`;
  const tirePath = `<circle cx="12" cy="12" r="10" fill="#2b2f36"/><circle cx="12" cy="12" r="4.6" fill="#c9d1db"/>`;
  const conePath = `<path d="M9 3 h6 l5 17 H4 Z" fill="#ff8a1c"/><path d="M7.2 9 h9.6 l1.2 4 H6 Z" fill="#fff"/><rect x="2" y="19" width="20" height="3" rx="1" fill="#e06f0a"/>`;
  const vroom = (ctx, base, vol) => voice(ctx, [[0, base, base * 2.6, 0.55, vol]], { type: 'sawtooth', bp: [500, 1400], q: 0.8, lfo: [28, 0.35] });
  const sputter = ctx => voice(ctx, [[0, 120, 90, 0.08, 0.6], [0.14, 110, 80, 0.08, 0.6], [0.3, 95, 60, 0.25, 0.55]], { type: 'square', bp: [520, 300], q: 1.5 });
  const horn = (ctx, notes) => { voice(ctx, notes, { type: 'square', bp: [700, 700], q: 1 }); voice(ctx, notes.map(n => [n[0], n[1] * 1.19, n[2] * 1.19, n[3], n[4]]), { type: 'square', bp: [700, 700], q: 1 }); };
  const carCast = [
    { label: 'the race car', sit: raceCar.sit, peek: raceCar.peek,
      sounds: { good: ctx => vroom(ctx, 110, 0.5), bad: sputter },
      praiseNamed: ['Zoom zoom, {name}!', 'You\'re in the fast lane, {name}!', 'First place, {name}!', 'Turbo-tastic, {name}!', 'Checkered flag, {name}! You won!'],
      praise: ['Zoom zoom!', 'First place!', 'Turbo-tastic!'] },
    { label: 'the fire truck', sit: fireTruck.sit, peek: fireTruck.peek,
      sounds: { good: ctx => voice(ctx, [[0, 700, 950, 0.22, 0.4], [0.22, 950, 700, 0.22, 0.4], [0.44, 700, 950, 0.22, 0.4]], { type: 'sine', attack: 0.02 }), bad: sputter },
      praiseNamed: ['Red-hot answer, {name}!', 'Siren-sational, {name}!', 'You\'re a math hero, {name}!', 'Wee-oo! Great job, {name}!', 'You put out that problem, {name}!'],
      praise: ['Siren-sational!', 'Red-hot!', 'Wee-oo wee-oo!'] },
    { label: 'the school bus', sit: schoolBus.sit, peek: schoolBus.peek,
      sounds: { good: ctx => horn(ctx, [[0, 311, 311, 0.14, 0.33], [0.2, 311, 311, 0.2, 0.33]]), bad: sputter },
      praiseNamed: ['Honk honk, hooray, {name}!', 'Top of the class, {name}!', 'All aboard the smart bus, {name}!', 'You\'re on the right route, {name}!', 'The wheels on the bus say yes, {name}!'],
      praise: ['Honk honk!', 'Top of the class!', 'All aboard!'] },
    { label: 'the monster truck', sit: monsterTruck.sit, peek: monsterTruck.peek,
      sounds: { good: ctx => voice(ctx, [[0, 55, 140, 0.7, 0.4]], { type: 'sawtooth', bp: [300, 900], q: 0.8, lfo: [22, 0.45] }), bad: sputter },
      praiseNamed: ['Monster-ific, {name}!', 'You crushed it, {name}!', 'Big wheels, big brain, {name}!', 'Mega-tastic, {name}!', 'Rumble rumble, right answer, {name}!'],
      praise: ['You crushed it!', 'Monster-ific!', 'Mega-tastic!'] },
    { label: 'the ice cream truck', sit: iceCreamTruck.sit, peek: iceCreamTruck.peek,
      sounds: { good: ctx => voice(ctx, [[0, 1047, 1047, 0.12, 0.4], [0.13, 1319, 1319, 0.12, 0.4], [0.26, 1568, 1568, 0.12, 0.4], [0.39, 1319, 1319, 0.12, 0.4], [0.52, 2093, 2093, 0.24, 0.4]], { type: 'triangle' }), bad: sputter },
      praiseNamed: ['Sweet answer, {name}!', 'That\'s the scoop, {name}!', 'Cool as ice cream, {name}!', 'Sprinkle-tastic, {name}!', 'Ding ding! Delicious, {name}!'],
      praise: ['Sweet!', 'Sprinkle-tastic!', 'Ding ding!'] },
  ];
  const carsParty = ctx => {
    horn(ctx, [[0, 392, 392, 0.12, 0.3], [0.18, 392, 392, 0.12, 0.3], [0.36, 523, 523, 0.4, 0.3]]);
    setTimeout(() => vroom(ctx, 90, 0.4), 800);
  };
  const carsExtraCss = `
  html.theme-cars .peek svg { animation: car-idle .5s ease-in-out infinite; }
  html.theme-cars .peek.swap svg { animation: car-in .55s ease-out, car-idle .5s ease-in-out .55s infinite; }
  html.theme-cars .card.good .peek svg { animation: car-zoom 1.1s ease-in-out; }
  html.theme-cars .card.bad .peek svg { animation: car-bump .55s ease-in-out; }
  html.theme-cars .card.good .peek .wheel { transform-box: fill-box; transform-origin: center; animation: wheel-spin .3s linear 4; }
  @keyframes car-idle { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-1.2px); } }
  @keyframes car-in { from { transform: translateX(-150px); opacity: 0; } 50% { opacity: 1; } to { transform: none; } }
  @keyframes car-zoom { 0% { transform: none; } 30% { transform: translateX(46px); } 50% { transform: translateX(60px) rotate(-5deg); } 75% { transform: translateX(-8px); } 100% { transform: none; } }
  @keyframes car-bump { 0%,100% { transform: none; } 20% { transform: translate(-5px,-2px) rotate(-3deg); } 40% { transform: translate(5px,0) rotate(2deg); } 60% { transform: translate(-3px,-1px); } 80% { transform: translate(2px,0); } }
  @keyframes wheel-spin { to { transform: rotate(360deg); } }
  html.theme-cars .hero { width: 430px; display: flex; gap: 10px; align-items: flex-end; padding-bottom: 14px;
    background: repeating-linear-gradient(90deg, #f6c026 0 18px, transparent 18px 34px) 0 calc(100% - 4px) / 100% 4px no-repeat,
                linear-gradient(#5b6573, #5b6573) bottom / 100% 12px no-repeat; border-radius: 4px; }
  html.theme-cars .hero.small { width: 340px; }
  html.theme-cars .hero .dancer { flex: 1; animation: car-cruise 1.4s ease-in-out infinite; }
  html.theme-cars .hero .dancer:nth-child(2) { animation-delay: .45s; }
  html.theme-cars .hero .dancer:nth-child(3) { animation-delay: .9s; }
  @keyframes car-cruise { 0%,100% { transform: translateX(0); } 50% { transform: translateX(8px) translateY(-2px); } }
  @media (max-width: 600px) { html.theme-cars .hero { width: 310px; } html.theme-cars .hero.small { width: 260px; } }
  html.theme-cars .party .stage div { width: 110px; animation: car-cruise .6s ease-in-out infinite; }
  html.theme-cars .party .stage div:nth-child(even) { animation-delay: .3s; }
  html.theme-cars .party .stage { border-bottom-color: #5b6573; }
  html.theme-cars .party { background: radial-gradient(circle at 50% 40%, rgba(255,255,255,.97) 0, rgba(234,247,249,.95) 45%, rgba(214,232,240,.95) 100%); }
  html.theme-cars .party .ptitle { color: #0a7480; }
  @media (max-width: 600px) { html.theme-cars .party .stage div { width: 62px; } }
  html.theme-cars .hdr-cat { width: 1.15in; }
  html.theme-cars .hdr-cat.small { width: 0.75in; }
  `;

  const themes = {
    classic: { id: 'classic', label: 'Classic' },
    cats: {
      id: 'cats', label: 'Cats',
      icon: catFace, iconSmall: paw('#f08a2c', 'mini-star'), art: { sit: catSit, peek: catPeek, face: catFace, paw },
      sounds: {
        good: ctx => meow(ctx, { pitch: 1.18, dur: 0.42, vol: 0.6 }),
        bad: ctx => meow(ctx, { sad: true, pitch: 0.85, dur: 0.6, vol: 0.55 }),
        goodDelay: 480, badDelay: 750,
      },
      audio: {
        intro: 'Meow! Hi {name}! Let\'s do some math. Here\'s your first one. {fact}?',
        praiseNamed: [
          'Purr-fect, {name}!', 'Paw-some job, {name}!', 'You\'re the cat\'s meow, {name}!', 'Meow-velous, {name}!',
          'Fur-tastic, {name}!', 'High paw, {name}!', '{name}, you\'re one smart kitty!', 'Claw-some, {name}!',
          'Purr-fectly right, {name}!', 'Meow-nificent, {name}!', 'Cat-tastic, {name}!', '{name}, you\'re the top cat!',
          'Paws-itively amazing, {name}!', 'You pounced on it, {name}!', 'Great job, {name}! Meow!', 'Yes, {name}! Purr-fect!',
        ],
        praise: ['Purr-fect!', 'Paw-some!', 'Meow-velous!', 'Fur-tastic!', 'High paw!', 'Claw-some!', 'Cat-tastic!', 'Meow! You got it!', 'Top cat!', 'Pounced on it!'],
        ask: ['{name}, what\'s {fact}?', 'Here, kitty kitty! {fact}?', 'Okay {name}, pounce on this one. {fact}?', '{name}, try this one. {fact}?'],
        faster: ['Quick as a cat, {name}! You got faster!', 'Speedy kitty, {name}! Way faster!', 'Zoom! Faster than a cat after a mouse, {name}!', 'Way faster, {name}! Purr-fect!'],
        streak: ['{n} in a row, {name}! You\'re one cool cat!', 'Meow! That\'s {n} in a row, {name}!', '{n} in a row! You\'re the top cat, {name}!'],
        oops: [
          'Nice try, {name}! Even cats miss a jump sometimes. {fact} is {ans}.',
          'Almost, {name}! {fact} is {ans}.',
          'Good try, {name}! {fact} is {ans}. Land on your feet next time!',
          'Oops! {fact} is {ans}. You\'ve got this, {name}!',
        ],
        levels: ['Tiny Kitten', 'Curious Kitten', 'Playful Kitten', 'Clever Cat', 'Cool Cat', 'Smart Cat', 'Super Cat', 'Top Cat', 'Mighty Lion', 'Legendary Lion'],
        levelUp: 'Meow! Level up, {name}! You\'re now a {level}!',
        levelBadge: '😺',
        doneGreat: 'Purr-fect work, {name}!', doneGood: 'Paw-some work, {name}!', doneNone: 'See you next time, {name}! Meow!',
        doneSpokenGreat: 'You\'re the cat\'s meow, {name}!', doneSpokenGood: 'Paw-some job, {name}!',
      },
      print: {
        cheers: [
          "you're purr-fectly ready to pounce on these problems!",
          "you're one smart kitty — let's get clawing!",
          "time to show these numbers who's the top cat!",
          "you're the cat's meow at math!",
          "paws up if you're ready to rock this page!",
          "your brain is purr-fectly amazing!",
          "every answer makes you a smarter kitty!",
          "you're fur-tastic — go get 'em, tiger!",
          "pounce on every problem — you've got this!",
          "curious cats learn the most — and you're so curious!",
          "you're a paw-some math star!",
          "nine lives, zero worries — you've got this!",
          "whiskers up, pencil ready — let's go!",
          "you're meow-velous at math!",
          "land on your feet with every answer!",
          "you're the coolest cat in the class!",
          "one problem at a time, little lion!",
          "purr-fect practice makes a purr-fect brain!",
          "you make math look claw-some!",
          "you're as clever as a cat with a ball of yarn!",
        ],
        side2: 'keep pouncing!',          // small text after the title on the back side
        turn: 'Turn over — more to pounce on &rarr;',
        finish: 'Check your work, smart kitty!',
        footPaws: paw('#f08a2c') + paw('#e8628a'),
      },
      css: catsCss,
    },
    chickens: {
      id: 'chickens', label: 'Chickens',
      icon: henFace, iconSmall: egg('#fffaf0', '#c9a77a', 'mini-star'), art: { sit: henSit, peek: henPeek, face: henFace },
      sounds: {
        good: ctx => clucks(ctx, [[0, 430, 330, 0.07, 0.95], [0.11, 450, 340, 0.07, 0.95], [0.24, 520, 780, 0.22, 1.0]]),
        bad: ctx => clucks(ctx, [[0, 360, 300, 0.13, 0.8], [0.22, 310, 220, 0.3, 0.8]]),
        goodDelay: 560, badDelay: 750,
      },
      audio: {
        intro: 'Cock-a-doodle-doo! Hi {name}! Let\'s do some math. Here\'s your first one. {fact}?',
        praiseNamed: [
          'Egg-cellent, {name}!', 'You cracked it, {name}!', 'Cluck-tastic, {name}!', 'Eggs-actly right, {name}!',
          '{name}, you\'re one smart chick!', 'Hen-tastic, {name}!', 'Wing-credible, {name}!', 'You rule the roost, {name}!',
          'Bawk bawk! Great job, {name}!', 'Egg-straordinary, {name}!', '{name}, you\'re the top chick!', 'Feather-ific, {name}!',
          'Cheep cheep hooray, {name}!', 'Nailed it, {name}! Cock-a-doodle-doo!', 'Egg-cellent work, {name}!', 'Yes, {name}! You cracked it!',
        ],
        praise: ['Egg-cellent!', 'You cracked it!', 'Cluck-tastic!', 'Eggs-actly!', 'Hen-tastic!', 'Wing-credible!', 'Cock-a-doodle-doo!', 'Feather-ific!', 'Bawk! You got it!', 'Top chick!'],
        ask: ['{name}, what\'s {fact}?', 'Here, chick chick! {fact}?', 'Okay {name}, peck at this one. {fact}?', '{name}, try this one. {fact}?'],
        faster: ['Speedy chick, {name}! You got faster!', 'Zoom! Faster than a chicken crossing the road, {name}!', 'Way faster, {name}! Egg-cellent!', 'Quick as a chick, {name}!'],
        streak: ['{n} in a row, {name}! You rule the roost!', 'Cock-a-doodle-doo! That\'s {n} in a row, {name}!', '{n} in a row! You\'re one smart chick, {name}!'],
        oops: [
          'Nice try, {name}! Even hens drop an egg sometimes. {fact} is {ans}.',
          'Almost, {name}! {fact} is {ans}.',
          'Good try, {name}! {fact} is {ans}. You\'ll crack it next time!',
          'Oops! {fact} is {ans}. You\'ve got this, {name}!',
        ],
        levels: ['Little Egg', 'Wobbly Egg', 'Peeping Chick', 'Fluffy Chick', 'Busy Hen', 'Clever Hen', 'Super Hen', 'Top Chicken', 'Rooster of the Roost', 'Legendary Rooster'],
        levelUp: 'Cock-a-doodle-doo! Level up, {name}! You\'re now a {level}!',
        levelBadge: '🐣',
        doneGreat: 'Egg-cellent work, {name}!', doneGood: 'Cluck-tastic work, {name}!', doneNone: 'See you next time, {name}! Bawk!',
        doneSpokenGreat: 'You rule the roost, {name}!', doneSpokenGood: 'Egg-cellent job, {name}!',
      },
      print: {
        cheers: [
          "you're egg-cellent — let's crack these problems!",
          "time to rule the roost — you've got this!",
          "you're one smart chick!",
          "cluck cluck — let's get pecking!",
          "you're egg-stra smart today!",
          "crack every problem like a pro!",
          "you're hen-tastic at math!",
          "wing it with confidence — you know this!",
          "cock-a-doodle-doo, a math star is you!",
          "every answer makes you a smarter chick!",
          "you're the top chick in the coop!",
          "peck away, one problem at a time!",
          "you're feather-ific — keep going!",
          "your brain is egg-ceptional!",
          "no egg-scuses — you've totally got this!",
          "you're as clever as a hen with a plan!",
          "bawk bawk — these problems are no match for you!",
          "you're cluck-tastic at math!",
          "hatch a great score today!",
          "scratch, peck, solve — let's go!",
        ],
        side2: 'keep pecking!',
        turn: 'Turn over — more to peck at &rarr;',
        finish: 'Check your work, smart chick!',
        footPaws: egg('#fffaf0', '#c9a77a') + egg('#e9b98b', '#b5845a'),
      },
      css: chickensCss,
    },
    animals: {
      id: 'animals', label: 'Animals',
      icon: paw('#7c5cd6'), iconSmall: paw('#7c5cd6', 'mini-star'),
      art: { sit: catSit, peek: catPeek },
      // A different animal peeks over each new problem, with its own sound and cheers
      animals: animalCast,
      sounds: { goodDelay: 560, badDelay: 750 },
      audio: {
        intro: 'Hi {name}! The animals came to do math with you! Here\'s your first one. {fact}?',
        ask: ['{name}, what\'s {fact}?', 'Here\'s one from {animal}, {name}. {fact}?', '{name}, {animal} wants to know: {fact}?', 'Okay {name}, {fact}?'],
        faster: ['Zoom! You got faster, {name}!', 'Speedy as a bunny, {name}!', 'Way faster, {name}! The animals are cheering!', 'Quick as a cheetah, {name}!'],
        streak: ['{n} in a row, {name}! The animals are cheering!', 'Wow, {name}! {n} in a row! You\'re wild!', '{n} in a row! You\'re a math superstar, {name}!'],
        oops: [
          'Nice try, {name}! {fact} is {ans}.',
          'Almost, {name}! {fact} is {ans}. The animals believe in you!',
          'Good try, {name}! {fact} is {ans}.',
          'Oops! {fact} is {ans}. You\'ve got this, {name}!',
        ],
        levels: ['Baby Animal', 'Little Explorer', 'Zoo Helper', 'Farm Friend', 'Pet Trainer', 'Zoo Keeper', 'Wildlife Hero', 'Jungle Champ', 'Zoo Superstar', 'King of the Zoo'],
        levelUp: 'Woo-hoo! Level up, {name}! You\'re now a {level}!',
        levelBadge: '🐾',
        doneGreat: 'Wild-ly good work, {name}!', doneGood: 'The animals are proud of you, {name}!', doneNone: 'See you next time, {name}!',
        doneSpokenGreat: 'The whole zoo is cheering for you, {name}!', doneSpokenGood: 'The animals are proud of you, {name}!',
      },
      print: {
        cheers: [
          "the animals think you're super smart!",
          "you're roar-some — let's do this!",
          "hop to it — you've got this!",
          "you're owl-standing at math!",
          "you're toad-ally ready for these problems!",
          "you're paw-some — go get 'em!",
          "show these numbers who's king of the jungle!",
          "you're the smartest critter around!",
          "be brave like a lion — you've got this!",
          "you're egg-cellent at math!",
          "wise as an owl, quick as a bunny — let's go!",
          "you're un-bear-ably good at math!",
          "whooo's ready for math? You are!",
          "you're purr-fectly ready to pounce!",
          "you're a wild math star!",
          "one problem at a time, little tiger!",
          "the whole zoo is cheering for you!",
          "you're hop-tastic — keep going!",
          "you're doggone good at this!",
          "leap into every problem like a frog!",
        ],
        side2: 'keep going!',
        turn: 'Turn over — more animal friends &rarr;',
        finish: 'Check your work, animal expert!',
        footPaws: paw('#7c5cd6') + paw('#f08a2c'),
      },
      css: petCss('animals', {
        ink: '#1f2d3a', muted: '#667788', bg: '#f1f6fb', line: '#d6e3ee', band: '#e7f0f8', box: '#8aa3b5',
        accent: '#7c5cd6', accentDark: '#5b41a8',
        pattern: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
          <g opacity=".08"><g transform="translate(14 18) rotate(-22 12 12) scale(1.1)">${pawPath('#5b6f8a')}</g>
          <g transform="translate(86 80) rotate(24 12 12) scale(1.1)">${pawPath('#5b6f8a')}</g></g></svg>`),
        dotA: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${pawPath('#7c5cd6')}</svg>`), dotB: pawOrange,
        soft: '#cbbdf2', featureTint: '#f1ecff',
      }),
    },
    dance: {
      id: 'dance', label: 'Dance Party',
      icon: note('#e0457b'), iconSmall: note('#e0457b', 'mini-star'),
      art: { sit: catSit, peek: catPeek },
      animals: danceCast,
      heroGroup: 3,                                      // three animals dance on the start and end screens
      party: { title: 'Dance party! 🎉', sound: partyBeat }, // every 5 in a row and every level-up
      sounds: { goodDelay: 640, badDelay: 750 },
      audio: {
        intro: 'Hi {name}! It\'s a math dance party! Here\'s your first one. {fact}?',
        praiseNamed: [
          'Dance-tastic, {name}!', 'You\'ve got the moves, {name}!', 'Groovy, {name}!', 'Let\'s boogie, {name}!',
          'Shake it, {name}! That\'s right!', 'Twirl-iffic, {name}!', 'That answer has rhythm, {name}!', 'Disco math star, {name}!',
          'Bust a move, {name}! You got it!', 'Wiggle wiggle, woo-hoo, {name}!', 'Toe-tapping good, {name}!', 'You rock, {name}!',
        ],
        praise: ['Dance-tastic!', 'Groovy!', 'Let\'s boogie!', 'You\'ve got the moves!', 'Woo-hoo!', 'Twirl-iffic!', 'You rock!'],
        ask: ['{name}, what\'s {fact}?', '{animal} is dancing! {name}, {fact}?', 'Ready to groove, {name}? {fact}?', 'Here\'s one from {animal}, {name}. {fact}?'],
        faster: ['Zoom! Faster moves, {name}!', 'Speedy feet, {name}! You got faster!', 'Way faster, {name}! Let\'s dance!'],
        streak: ['Dance party! {n} in a row, {name}!', '{n} in a row! Everybody dance for {name}!', 'Party time! {n} in a row, {name}!'],
        oops: [
          'Nice try, {name}! {fact} is {ans}. Keep dancing!',
          'Almost, {name}! {fact} is {ans}.',
          'Oops! {fact} is {ans}. Shake it off, {name}!',
          'Good try, {name}! {fact} is {ans}.',
        ],
        levels: ['Toe Tapper', 'Head Bopper', 'Hip Shaker', 'Groove Maker', 'Spin Master', 'Dance Captain', 'Disco Star', 'Party Leader', 'Dance Superstar', 'Legend of the Dance Floor'],
        levelUp: 'Dance party! Level up, {name}! You\'re now a {level}!',
        levelBadge: '🎶',
        doneGreat: 'What a dance party, {name}!', doneGood: 'Great dancing and math, {name}!', doneNone: 'See you on the dance floor, {name}!',
        doneSpokenGreat: 'You\'ve got the moves, {name}!', doneSpokenGood: 'Great job, {name}! Keep on dancing!',
      },
      print: {
        cheers: [
          "dance your way through these problems!",
          "you've got the moves — and the math!",
          "put on your dancing shoes — let's go!",
          "shake it, solve it, rock it!",
          "every right answer is a happy dance!",
          "you're a math superstar on the dance floor!",
          "groove through every problem!",
          "step, spin, solve — you've got this!",
          "the animals are dancing for you!",
          "boogie down with your brainpower!",
          "you make math look groovy!",
          "one, two, three — solve with me!",
          "twirl through this page like a pro!",
          "hip hip hooray, it's math dance day!",
          "wiggle your brain and get it right!",
          "you're the star of the math dance party!",
          "keep the rhythm — one problem at a time!",
          "dance like nobody's watching, solve like a champ!",
          "turn up the music and the math!",
          "your brain has got rhythm!",
        ],
        side2: 'keep dancing!',
        turn: 'Turn over — the party keeps going &rarr;',
        finish: 'Take a bow, dance star!',
        footPaws: note('#e0457b') + note('#7c5cd6'),
      },
      css: petCss('dance', {
        ink: '#2d1f33', muted: '#7a6585', bg: '#fdf3fb', line: '#f1d9ec', band: '#fbe9f6', box: '#b48aa8',
        accent: '#e0457b', accentDark: '#b02e5c',
        pattern: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><g opacity=".1">
          <g transform="translate(14 16) rotate(-12 12 12)">${notePath('#e0457b')}</g><g transform="translate(84 74) rotate(10 12 12)">${notePath('#7c5cd6')}</g>
          <circle cx="104" cy="22" r="3" fill="#ee8a0f"/><circle cx="40" cy="100" r="3" fill="#1f9d55"/><circle cx="70" cy="48" r="2.4" fill="#3b7be0"/>
          <rect x="22" y="70" width="5" height="8" rx="1" transform="rotate(25 24 74)" fill="#f5b301"/><rect x="118" y="116" width="5" height="8" rx="1" transform="rotate(-20 120 120)" fill="#e0457b"/></g></svg>`),
        dotA: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${notePath('#e0457b')}</svg>`),
        dotB: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${notePath('#7c5cd6')}</svg>`),
        soft: '#f0c2da', featureTint: '#fdeaf4',
      }) + danceExtraCss,
    },
    cars: {
      id: 'cars', label: 'Cars',
      icon: carIcon(), iconSmall: carIcon('mini-star'),
      art: { sit: raceCar.sit, peek: raceCar.peek },
      animals: carCast,                                  // a different vehicle drives up to each problem
      heroGroup: 3,
      party: { title: 'Victory lap! 🏁', sound: carsParty },
      sounds: { goodDelay: 650, badDelay: 750 },
      audio: {
        intro: 'Start your engines, {name}! Here\'s your first one. {fact}?',
        praiseNamed: ['Zoom zoom, {name}!', 'Full speed ahead, {name}!', 'You\'re in the fast lane, {name}!', 'Vroom vroom, {name}!'],
        praise: ['Zoom zoom!', 'Vroom vroom!', 'Full speed ahead!'],
        ask: ['{name}, what\'s {fact}?', 'Here comes {animal}! {name}, {fact}?', '{name}, {animal} wants to know: {fact}?', 'Start your engines, {name}! {fact}?'],
        faster: ['Zoom! You got faster, {name}!', 'Turbo speed, {name}!', 'Faster than a race car, {name}!'],
        streak: ['{n} in a row, {name}! You\'re in the fast lane!', 'Vroom vroom! {n} in a row, {name}!', '{n} in a row! Full speed ahead, {name}!'],
        oops: [
          'Nice try, {name}! {fact} is {ans}.',
          'Oops, a little bump! {fact} is {ans}. Keep driving, {name}!',
          'Almost, {name}! {fact} is {ans}.',
          'Good try, {name}! {fact} is {ans}. Back on the road!',
        ],
        levels: ['Tricycle Rider', 'Scooter Rider', 'Go-Kart Driver', 'Taxi Driver', 'Bus Driver', 'Truck Driver', 'Race Car Driver', 'Speed Champion', 'Turbo Superstar', 'Grand Prix Legend'],
        levelUp: 'Vroom! Level up, {name}! You\'re now a {level}!',
        levelBadge: '🏁',
        doneGreat: 'You won the race, {name}!', doneGood: 'Great driving, {name}!', doneNone: 'See you at the starting line, {name}!',
        doneSpokenGreat: 'You crossed the finish line, {name}! Vroom vroom!', doneSpokenGood: 'Great driving, {name}!',
      },
      print: {
        cheers: [
          "start your engines — let's go!",
          "you're in the fast lane today!",
          "zoom through these problems!",
          "full speed ahead, math champ!",
          "you're the driver of your smart brain!",
          "race to the finish line — you've got this!",
          "beep beep! Smart kid coming through!",
          "honk if you love math!",
          "you're turbo-charged and ready!",
          "shift into high gear!",
          "every answer gets you closer to the checkered flag!",
          "you're a math race car — vroom!",
          "buckle up for a brainy ride!",
          "you're on the road to math greatness!",
          "green light — go, go, go!",
          "you drive these numbers like a pro!",
          "no speed bumps can stop you!",
          "pit stop? No way — keep going!",
          "you're number one on the math track!",
          "you make math go zoom!",
        ],
        side2: 'keep zooming!',
        turn: 'Turn over — next lap &rarr;',
        finish: 'Checkered flag — check your work!',
        footPaws: carIcon() + carIcon(),
      },
      css: petCss('cars', {
        ink: '#1d2633', muted: '#64707f', bg: '#f3f6fa', line: '#d9e1ea', band: '#e9eff6', box: '#8794a6',
        accent: '#0e9aa7', accentDark: '#0a7480',
        pattern: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><g opacity=".09">
          <g transform="translate(16 18)"><rect width="18" height="12" fill="#fff" stroke="#2b2f36"/><rect width="6" height="4" fill="#2b2f36"/><rect x="12" width="6" height="4" fill="#2b2f36"/>
          <rect x="6" y="4" width="6" height="4" fill="#2b2f36"/><rect y="8" width="6" height="4" fill="#2b2f36"/><rect x="12" y="8" width="6" height="4" fill="#2b2f36"/><path d="M0 0 v22" stroke="#2b2f36" stroke-width="2"/></g>
          <path d="M60 100 h14 M84 100 h14 M108 100 h14" stroke="#2b2f36" stroke-width="4" stroke-linecap="round"/>
          <g transform="translate(92 26) scale(1.4)">${tirePath}</g></g></svg>`),
        dotA: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${tirePath}</svg>`),
        dotB: dataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${conePath}</svg>`),
        soft: '#a9dde2', featureTint: '#e6f6f8',
      }) + carsExtraCss,
    },
  };

  // ---------------- Pick the active theme ----------------
  let name = 'classic';
  try { name = localStorage.getItem(KEY) || 'classic'; } catch (e) {}
  try { const q = new URLSearchParams(location.search).get('theme'); if (q) name = q; } catch (e) {}
  if (!themes[name]) name = 'classic';
  const active = themes[name];
  document.documentElement.classList.add('theme-' + name);
  if (active.css) {
    const st = document.createElement('style');
    st.id = 'theme-css';
    st.textContent = active.css;
    (document.head || document.documentElement).appendChild(st);
  }

  window.WorksheetThemes = {
    name,
    active: () => active,
    list: () => Object.values(themes).map(t => ({ id: t.id, label: t.label, icon: t.icon || null })),
    set(id) { try { if (id === 'classic') localStorage.removeItem(KEY); else localStorage.setItem(KEY, id); } catch (e) {} },
    meow,
  };
})();
