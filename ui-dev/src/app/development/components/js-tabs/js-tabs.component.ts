import { Component } from '@angular/core';

@Component({
  selector: 'js-tabs',
  templateUrl: './js-tabs.component.html',
  styleUrls: ['./js-tabs.component.scss'],
})
export class JsTabsComponent {
  getId(e: any, whichTab: any) {
    let activeClass = document.querySelector('.active');
    let activeTab = document.querySelector('.showTab');

    activeClass.classList.remove('active');
    activeTab.classList.remove('showTab');

    let id = e.target.id;
    let x;
    x = document.getElementById(id);
    x.classList.add('active');

    let myTab = whichTab;
    let y;
    y = document.getElementById(myTab);
    y.classList.add('showTab');
  }
}
