// Логика инструмента I Spy (глобальные функции и данные)

const SPY_ITEMS = [
  { key: 'table',   name: 'table',   color: '#f59e0b', svg: svgTable },
  { key: 'chair',   name: 'chair',   color: '#10b981', svg: svgChair },
  { key: 'pencil',  name: 'pencil',  color: '#ef4444', svg: svgPencil },
  { key: 'eraser',  name: 'eraser',  color: '#ec4899', svg: svgEraser },
  { key: 'pen',     name: 'pen',     color: '#3b82f6', svg: svgPen },
  { key: 'ruler',   name: 'ruler',   color: '#eab308', svg: svgRuler },
];

const COUNT_RANGE = { min: 4, max: 10 };

function spyRandomCounts() {
  const map = {};
  SPY_ITEMS.forEach(it => { map[it.key] = randomInt(COUNT_RANGE.min, COUNT_RANGE.max); });
  return map;
}

function spyRenderSettings(counts) {
  const settings = document.getElementById('spy-settings');
  settings.innerHTML = '';
  SPY_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cfg-item';
    const value = counts[item.key] ?? COUNT_RANGE.min;
    el.innerHTML = `
      <span class="mini" aria-hidden="true">${item.svg(item.color)}</span>
      <label class="label" for="count-${item.key}">${capitalize(item.name)}</label>
      <input id="count-${item.key}" type="number" min="0" max="99" value="${value}" />
    `;
    settings.appendChild(el);
  });
}

function spyGetCountsFromSettings() {
  const map = {};
  for (const item of SPY_ITEMS) {
    const input = document.getElementById(`count-${item.key}`);
    if (!input) return null;
    const v = parseInt(input.value, 10);
    map[item.key] = Number.isFinite(v) && v >= 0 ? v : 0;
  }
  return map;
}

function spyBuildFooter(counts) {
  const footer = document.getElementById('spy-footer');
  footer.innerHTML = '';
  SPY_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'count-item';
    el.innerHTML = `
      <span class="mini" aria-hidden="true">${item.svg(item.color)}</span>
      <span class="label">${capitalize(item.name)}</span>
      <span class="line" aria-label="Write the number here"></span>
    `;
    footer.appendChild(el);
  });
}

function renderSpy(counts) {
  const playfield = document.getElementById('spy-playfield');
  playfield.innerHTML = '';

  if (!counts) counts = spyGetCountsFromSettings() || spyRandomCounts();

  const settings = document.getElementById('spy-settings');
  if (!settings.children.length) spyRenderSettings(counts);
  else {
    SPY_ITEMS.forEach(it => {
      const input = document.getElementById(`count-${it.key}`);
      if (input) input.value = String(counts[it.key] ?? 0);
    });
  }

  spyBuildFooter(counts);

  const instances = SPY_ITEMS.flatMap(item => Array.from({ length: counts[item.key] || 0 }, () => ({ item })));
  shuffle(instances);

  const total = instances.length;
  const cols = Math.max(1, Math.ceil(Math.sqrt(total)));
  const rows = Math.max(1, Math.ceil(total / cols));

  const table = document.createElement('table');
  table.className = 'play-table';
  const tbody = document.createElement('tbody');
  let index = 0;
  for (let r = 0; r < rows; r++) {
    const tr = document.createElement('tr');
    for (let c = 0; c < cols; c++) {
      const td = document.createElement('td');
      if (index < total) {
        const { item } = instances[index++];
        const wrapper = document.createElement('div');
        wrapper.className = 'cell-icon';
        const deg = choice([0, 0, 0, 5, -5]);
        wrapper.style.transform = `rotate(${deg}deg)`;
        wrapper.innerHTML = item.svg(item.color);
        td.appendChild(wrapper);
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  playfield.appendChild(table);
}


