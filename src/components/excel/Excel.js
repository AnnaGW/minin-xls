import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector) // куда положить
    this.components = options.components || [] // что положить, классы
    this.emitter = new Emitter()
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    const componentOptions = {
      emitter: this.emitter
    }

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className)
      // $el = div.excel__formula -> Dom
      const component = new Component($el, componentOptions)
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

  destroy() {
    this.components.forEach(component => component.destroy())
  }
}
