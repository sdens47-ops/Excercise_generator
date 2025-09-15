// Общие утилиты для генератора упражнений (глобальные функции)

// Перемешивает массив случайным образом (алгоритм Фишера-Йетса)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
  }
  return array;
}

// Возвращает случайный элемент из массива
function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Генерирует случайное целое число в диапазоне от min до max включительно
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Делает первую букву строки заглавной
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Создает функцию с задержкой выполнения (debounce) - полезно для ограничения частоты вызовов
function debounce(fn, ms) {
  let t; // Таймер для задержки
  return (...args) => {
    clearTimeout(t); // Отменяем предыдущий вызов
    t = setTimeout(() => fn.apply(null, args), ms); // Устанавливаем новую задержку
  };
}


