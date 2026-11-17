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
