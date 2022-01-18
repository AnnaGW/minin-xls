import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  toHTML() {
    return '<div class="button">\n' +
      '       <span class="material-icons">format_bold</span>\n' +
      '     </div>\n' +
      '     <div class="button">\n' +
      '       <span class="material-icons">format_italic</span>\n' +
      '     </div>\n' +
      '     <div class="button">\n' +
      '       <span class="material-icons">format_underlined</span>\n' +
      '     </div>\n' +
      '     <div class="button">\n' +
      '       <span class="material-icons">format_align_justify</span>\n' +
      '     </div>\n' +
      '     <div class="button">\n' +
      '       <span class="material-icons">format_align_left</span>\n' +
      '     </div>\n' +
      '     <div class="button">\n' +
      '       <span class="material-icons">format_align_center</span>\n' +
      '     </div>\n' +
      '     <div class="button">\n' +
      '       <span class="material-icons">format_align_right</span>\n' +
      '     </div>'
  }

  onClick(event) {
    console.log('Toolbar onClick', event.target);
  }
}
