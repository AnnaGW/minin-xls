import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  // возвращает шаблон компонента
  toHTML() {
    return ''
  }

  init() { // здесь все, что необходимо для инициализации компонента
    // console.log('init context', this)
    this.initDomListeners();
  }

  destroy() {
    // console.log('destroy context', this)
    this.removeDomListeners();
  }
}
