const CODES = {
  A: 65,
  Z: 90
} // числа - это коды букв, полуила их в консоли при помощи 'A'.charCodeAt()

function toCell(_, col) {
  return `
  <div 
    class="cell" contenteditable data-col="${col}">
  </div>`
}

function toColumn(col, index) {
  return `
  <div class="column" data-type="resizable" data-col="${index}">
    ${col}
    <div class="col-resize" data-resize="col"></div>
  </div>`
}

function createRow(index, content) {
  const resize = index ?
    '<div class="row-resize" data-resize="row"></div>' :
    ''
  return `
  <div class="row" data-type="resizable">
    <div class="row-info">
      ${index ? index : ''}
      ${resize}
    </div>
    <div class="row-data">${content}</div>
  </div>`
}

function toChar(_, index) {
  // _ значит, что первый параметр есть, но он не используется
  return String.fromCharCode(CODES.A + index)
  // из кодов получаем обратно буквы
}

export function createTable(rowsCount = 10) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  // вместо массива можно использовать циклы
  // формируем content для createRow - для первой строки - заголовки
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('') // формируем кусок верстки из массива
  rows.push(createRow('', cols)) // сформировали первую строку - заголовки

  // формируем content для createRow - для остальных строк - ячеек
  // создаю контент ВНЕ цикла, потому что он одинаковый для всех строк
  // можно создавать его внутри цикла
  const cells = new Array(colsCount)
    .fill('')
    .map(toCell)
    .join('')

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(String(i + 1), cells))
  }

  return rows.join('') // join c '' склеит все в одну строку html кода
}
