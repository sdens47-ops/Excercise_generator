// Shared SVG item generators for all pages
// Exposes: svgTable, svgChair, svgPencil, svgEraser, svgPen, svgRuler

function svgTable(color = '#f59e0b') {
  // Упрощённый прямоугольный стол: широкая столешница и толстые ножки
  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="table" role="img">
      <g stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- столешница -->
        <rect x="12" y="20" width="76" height="18" rx="4" fill="${color}"/>
        <!-- царга под столешницей -->
        <rect x="16" y="38" width="68" height="6" rx="3" fill="#8b5e34"/>
        <!-- ножки: толстые прямоугольники -->
        <rect x="20" y="44" width="8" height="36" rx="3" fill="#8b5e34"/>
        <rect x="36" y="44" width="8" height="36" rx="3" fill="#8b5e34"/>
        <rect x="56" y="44" width="8" height="36" rx="3" fill="#8b5e34"/>
        <rect x="72" y="44" width="8" height="36" rx="3" fill="#8b5e34"/>
        <!-- тень -->
        <ellipse cx="50" cy="84" rx="28" ry="5" fill="#000000" opacity="0.08"/>
      </g>
    </svg>
  `;
}

function svgChair(color = '#10b981') {
  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="chair" role="img">
      <g stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="30" y="16" width="40" height="28" rx="8" fill="${color}"/>
        <rect x="24" y="46" width="52" height="16" rx="6" fill="${color}" opacity="0.9"/>
        <line x1="30" y1="62" x2="30" y2="86"/>
        <line x1="70" y1="62" x2="70" y2="86"/>
      </g>
    </svg>
  `;
}

function svgPencil(color = '#ef4444') {
  // Карандаш увеличен, толщина границ уменьшена
  return `
    <svg viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg" aria-label="pencil" role="img">
      <g stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="14" y="52" width="14" height="18" rx="7" fill="#f472b6"/>
        <rect x="28" y="52" width="8" height="18" rx="4" fill="#d6d3d1"/>
        <rect x="36" y="56" width="80" height="12" rx="4" fill="${color}"/>
        <rect x="36" y="52" width="80" height="6" rx="3" fill="#f87171"/>
        <rect x="36" y="68" width="80" height="6" rx="3" fill="#b91c1c"/>
        <polygon points="116,52 134,62 116,72" fill="#f4a261"/>
        <line x1="116" y1="62" x2="134" y2="62" stroke="#2d2a26" stroke-width="1.5"/>
      </g>
    </svg>
  `;
}

function svgEraser(color = '#ec4899') {
  // Ластик: две части, скошенный, с тенью
  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="eraser" role="img">
      <g>
        <g transform="rotate(-22 50 50)">
          <rect x="18" y="42" width="44" height="20" rx="7" fill="${color}" stroke="#0f172a" stroke-width="2"/>
          <rect x="62" y="42" width="16" height="20" rx="7" fill="#f9a8d4" stroke="#0f172a" stroke-width="2"/>
          <rect x="18" y="42" width="60" height="20" rx="7" fill="url(#shade2)" opacity="0.13"/>
        </g>
        <ellipse cx="48" cy="68" rx="22" ry="6" fill="#000" opacity="0.08"/>
      </g>
      <defs>
        <linearGradient id="shade2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#000" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  `;
}

function svgPen(color = '#3b82f6') {
  return `
    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" aria-label="pen" role="img">
      <g stroke="#0f172a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="10" y="44" width="12" height="16" rx="6" fill="#60a5fa"/>
        <rect x="18" y="40" width="16" height="3" rx="1.5" fill="#1e3a8a"/>
        <rect x="30" y="40" width="2" height="14" rx="1" fill="#1e3a8a"/>
        <rect x="22" y="46" width="56" height="12" rx="6" fill="${color}"/>
        <rect x="78" y="46" width="10" height="12" rx="4" fill="#1d4ed8"/>
        <polygon points="88,46 104,52 88,58" fill="#f4a261"/>
        <line x1="88" y1="52" x2="104" y2="52" stroke="#2d2a26" stroke-width="1.5"/>
      </g>
    </svg>
  `;
}

function svgRuler(color = '#eab308') {
  return `
    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" aria-label="ruler" role="img">
      <rect x="14" y="44" width="92" height="12" rx="4" fill="${color}"/>
      ${Array.from({length: 11}).map((_, i) => {
        const x = 20 + i * 8;
        const h = i % 5 === 0 ? 10 : 6;
        const y = 44 - (i % 5 === 0 ? 4 : 2);
        return `<rect x="${x}" y="${y}" width="2" height="${h}" fill="#a16207"/>`;
      }).join('')}
    </svg>
  `;
}


