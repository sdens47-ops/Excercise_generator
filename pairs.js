// Логика инструмента карточек Singular ↔ Plural (глобальные функции и данные)
// Отвечает за 6 пар карточек: слева единственное число, справа — сетка множественного

// Список предметов для карточек: артикль для singular, цвет и SVG
const PAIR_ITEMS = [
  { key: 'chair',  name: 'chair',  article: 'a',  color: '#10b981', svg: svgChair },
  { key: 'table',  name: 'table',  article: 'a',  color: '#f59e0b', svg: svgTable },
  { key: 'pen',    name: 'pen',    article: 'a',  color: '#3b82f6', svg: svgPen },
  { key: 'pencil', name: 'pencil', article: 'a',  color: '#ef4444', svg: svgPencil },
  { key: 'ruler',  name: 'ruler',  article: 'a',  color: '#eab308', svg: svgRuler },
  { key: 'eraser', name: 'eraser', article: 'an', color: '#ec4899', svg: svgEraser },
];

// Значения по умолчанию для правых карточек (сколько иконок рисовать)
const PAIRS_DEFAULT_COUNTS = { chair: 5, table: 2, pen: 4, pencil: 7, ruler: 3, eraser: 8 };

// Формирует подпись для левой карточки (singular)
function pairsSingularLabel(item) { return `${item.article} ${item.name}`; }
// Формирует подпись для правой карточки (plural) с простым добавлением "s"
function pairsPluralLabel(item, count) { return `${count} ${item.name}${count === 1 ? '' : 's'}`; }

// Рисует панель настроек: по инпуту на каждый предмет
function pairsRenderSettings(counts) {
  const settings = document.getElementById('pairs-settings');
  settings.innerHTML = '';
  PAIR_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cfg-item';
    const value = counts[item.key] ?? PAIRS_DEFAULT_COUNTS[item.key] ?? 1;
    el.innerHTML = `
      <span class=\"mini\" aria-hidden=\"true\">${item.svg(item.color)}</span>
      <label class=\"label\" for=\"pairs-count-${item.key}\">${capitalize(item.name)}</label>
      <input id=\"pairs-count-${item.key}\" type=\"number\" min=\"0\" max=\"99\" value=\"${value}\" />
    `;
    settings.appendChild(el);
  });
}

// Считывает текущие количества из панели настроек
function pairsGetCountsFromSettings() {
  const map = {};
  for (const item of PAIR_ITEMS) {
    const input = document.getElementById(`pairs-count-${item.key}`);
    if (!input) return null;
    const v = parseInt(input.value, 10);
    map[item.key] = Number.isFinite(v) && v >= 0 ? v : 0;
  }
  return map;
}

// Главный рендер: синхронизирует настройки и рисует 6 пар карточек
function renderPairs(counts) {
  const pairsContainer = document.getElementById('pairs');
  const settings = document.getElementById('pairs-settings');
  if (!counts) counts = pairsGetCountsFromSettings() || { ...PAIRS_DEFAULT_COUNTS };
  if (!settings.children.length) pairsRenderSettings(counts);
  else {
    PAIR_ITEMS.forEach(it => {
      const input = document.getElementById(`pairs-count-${it.key}`);
      if (input) input.value = String(counts[it.key] ?? 0);
    });
  }
  pairsContainer.innerHTML = '';
  for (const p of PAIR_ITEMS) {
    const count = counts[p.key] ?? 0;
    const row = document.createElement('div');
    row.className = 'pair';
    const left = document.createElement('article');
    left.className = 'card';
    left.innerHTML = `
      <div class=\"visual single\" aria-hidden=\"true\">${p.svg(p.color)}</div>
      <div class=\"label\">${pairsSingularLabel(p)}</div>
    `;
    const right = document.createElement('article');
    right.className = 'card';
    const grid = document.createElement('div'); // сетка мини-иконок (plural)
    grid.className = 'visual grid';
    for (let i = 0; i < count; i++) {
      const cell = document.createElement('div');
      cell.className = 'mini';
      cell.innerHTML = p.svg(p.color);
      grid.appendChild(cell);
    }
    const rightLabel = document.createElement('div');
    rightLabel.className = 'label';
    rightLabel.textContent = pairsPluralLabel(p, count);
    right.appendChild(grid);
    right.appendChild(rightLabel);
    row.appendChild(left);
    row.appendChild(right);
    pairsContainer.appendChild(row);
  }
}


