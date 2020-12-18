import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
<date-picker></date-picker>
asdsd
      <router-outlet></router-outlet>
  
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
