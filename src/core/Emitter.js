export class Emitter {
  constructor() {
    this.listeners = {} // ключ - имя события = строка
    // значение - массив из функций
  }
  // Уведомляем слушателей, если они  есть
  // dispatch, fire, trigger
  // event = строка
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false // если нет функций для такого события
    }
    // проходим по массиву из функций, которые положили туда в subscribe
    this. listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // on, listen
  // Подписываемся на уведомления
  // добавляем нового слушателя
  // event = строка
  subscribe(event, fn) {
    // по умолчанию это this.listeners[event],
    // если такого ключа в об-те нет, то пустой массив
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    // возвращаем ф-ю, которая отписывается от данного события
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}
