const CODES = {
  A: 65,
  Z: 90
} // числа - это коды букв, полуила их в консоли при помощи 'A'.charCodeAt()

// function toCell(_, col) {
//   return `
//   <div
//     class="cell" contenteditable data-col="${col}">
//   </div>`
// }

function toCell(row) {
  return function(_, col) {
    return `
    <div 
      class="cell" 
      contenteditable 
      data-col="${col}"
      data-type="cell"
      data-id="${row}:${col}">
    </div>
    `
  }
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
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('')
    // toCell вызывается и возвр-т функцию,
    // т.о. остается callback и передается аргумент row
    rows.push(createRow(String(row + 1), cells))
  }

  return rows.join('') // join c '' склеит все в одну строку html кода
}
