export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = [] // массив выделенных ячеек
    this.current = null
  }

  select($el) { // $el - инстанс Dom
    this.clear()
    $el.focus().addClass(TableSelection.className)
    // чейн возможен благодара тому, что focus() возвращает this = инстанс Dom
    this.group.push($el)
    this.current = $el
  }

  clear() {
    this.group.forEach($cell => $cell.removeClass(TableSelection.className))
    this.group = []
  }

  selectGroup($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.className))
  }
}
