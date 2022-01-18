import {$} from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector) // куда положить
    this.components = options.components || [] // что положить, классы
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className)
      // $el = div.excel__formula -> Dom
      const component = new Component($el)
      $el.html(component.toHTML()) // toHTML просто возвращает кусок верстки
      $root.append($el) // $root = div.excel с версткой очередного компонента
      return component // инстанс класса Component (= Formula)
    })
    return $root // = div.excel с версткой всех компонентов -> Dom
  }

  render() {
    this.$el.append(this.getRoot()) // сформировали и вывели верстку
    // важно вызывать init после append,
    // иначе прослушка на элементах работать не будет
    // this.components - это уже набор инстансов? после getRoot()
    this.components.forEach((component) => component.init());
    // this.components.forEach((component) => component.destroy());
  }
}
