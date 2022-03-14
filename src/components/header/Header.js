import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      // listeners: ['mouseup'] // виды событий для этого компонента
      ...options,
    })
  }

  toHTML() {
    return '<input type="text" class="input" value="Новая таблица" />\n' +
      '            <div>\n' +
      '                <div class="button">\n' +
      '                    <span class="material-icons">exit_to_app</span>\n' +
      '                </div>\n' +
      '                <div class="button">\n' +
      '                    <span class="material-icons">delete</span>\n' +
      '                </div>\n' +
      '            </div>'
  }
}
