import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter // у каждого наследника будет этот объекта
    // важно: это ссылка на один и тот же объект
    this.unsubscribers = []

    this.prepare() // вызываем метод сразу при создании инстанса
  }

  // настраиваем компонент до init
  prepare() {}

  // возвращает шаблон компонента
  toHTML() {
    return ''
  }
  // уведомляем слушателей о событии event = событие произошло
  // пишем здеь, чтобы не писать в каждом компоненте
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  } // паттерн = фасад, для упрощения кода при вызове emitter

  // подписываемся на событие и дополняем массив для отписки
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // инициализируем компонента
  // добавляем слушателей
  init() { // здесь все, что необходимо для инициализации компонента
    // console.log('init context', this)
    this.initDomListeners();
  }


  // удаляем компонент
  // чистим слушателей
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach(unsub => unsub())
  }
}
