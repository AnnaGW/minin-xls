import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import './scss/index.scss';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render();
//
// function onClick() {
//   console.log('formula clicked...')
//   $testEl.removeEventListener('click', onClick)
// }
//
// const $testEl = document.querySelector('.excel__formula')
// $testEl.addEventListener('click', onClick)
