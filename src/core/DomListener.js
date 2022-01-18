import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root // передаем аргументы в контекст, чтобы они были
    this.listeners = listeners // доступны внутри описываемых функций.
  }

  initDomListeners() {
    // console.log('initDomListeners context ', this)
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const compName = this.name || ''
        throw new Error(
            `Method ${method} is not implemented in ${compName} Component`
        )
      }
      // this[method] - это функция
      // this[method] - это уже другая функция
      this[method] = this[method].bind(this)
      // при таком переопределении this[method] будет везде
      // одной и той же функцией
      this.$root.on(listener, this[method])
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const compName = this.name || ''
        throw new Error(
            `Method ${method} is not implemented in ${compName} Component`
        )
      }
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
