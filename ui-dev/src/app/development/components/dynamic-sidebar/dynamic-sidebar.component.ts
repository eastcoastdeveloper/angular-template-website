import { Component } from '@angular/core';
import { SidebarInterface } from 'src/app/interfaces/dynamic-sidebar.interface';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './dynamic-sidebar.component.html',
  styleUrls: ['./dynamic-sidebar.component.scss']
})
export class DynamicSidebarComponent {
  pageDataObject: PageDataObject = {
    title: 'Angular Dynamic Sidebar',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-dynamic-sidebar',
    repoLink: 'https://github.com/eastcoastdeveloper/Angular-Dynamic-Sidebar',
    category: '',
    views: 5856,
    forks: 149,
    threeColumnLayout: true,
    cornerStone: false,
    meta: {
      description:
        'Angular dynamic sidebar with an expand all button. Plug it into your app and populate an unlimited amount of sub menus.',
      keywords: 'angular component, styled components typescript, angular json',
      title: 'Angular Dynamic Sidebar',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  urlStackblitz: string =
    'https://stackblitz.com/edit/angular-dynamic-sidebar?file=src%2Fapp%2Fcomponents%2Fsidebar%2Fsidebar.component.ts';

  result: readonly SidebarInterface[] = [
    {
      linkText: 'About',
      parentLink: '',
      menu: false,
      submenu: []
    },
    {
      linkText: 'Projects',
      parentLink: '',
      menu: false,
      submenu: [
        {
          childtext: 'Angular JS SPA',
          link: ''
        },
        {
          childtext: 'NASA Photo of the Day',
          link: ''
        },
        {
          childtext: 'Countries-Leaflet Map',
          link: ''
        },
        {
          childtext: 'React Hacker News API',
          link: ''
        },
        {
          childtext: 'OMDB API UI',
          link: ''
        },
        {
          childtext: 'React To Do List',
          link: ''
        }
      ]
    },
    {
      linkText: 'Navigation',
      parentLink: '',
      menu: false,
      submenu: [
        {
          childtext: 'Angular Module Routing',
          link: ''
        },
        {
          childtext: 'Angular Nested Routing',
          link: ''
        },
        {
          childtext: 'TS In Page Navigation',
          link: ''
        },
        {
          childtext: 'Pure CSS Menu',
          link: ''
        },
        {
          childtext: 'User Selection',
          link: ''
        },
        {
          childtext: 'In Page Navigation',
          link: ''
        },
        {
          childtext: 'Angular Wizard',
          link: ''
        },
        {
          childtext: 'Progress Bar Navigation',
          link: ''
        }
      ]
    },
    {
      linkText: 'Metrics',
      parentLink: '',
      menu: false,
      submenu: [
        {
          childtext: 'D3 Bar Chart',
          link: ''
        },
        {
          childtext: 'Angular ChartJS Area Chart',
          link: 'https://stackblitz.com/edit/angular-8-area-chart'
        },
        {
          childtext: 'ChartJS Bar Chart UI',
          link: 'https://stackblitz.com/edit/chartjs-bar-chart'
        },
        {
          childtext: 'ChartJS Multi Line Chart',
          link: 'https://stackblitz.com/edit/chartjs-multi-line-chart'
        },
        {
          childtext: 'ChartJS Doughnut Chart UI',
          link: 'https://stackblitz.com/edit/doughnut-chart-component'
        },
        {
          childtext: 'Angular ChartJS Line Chart',
          link: 'https://stackblitz.com/edit/chart-with-js'
        },
        {
          childtext: 'D3 Bar w/ Labels',
          link: 'https://codepen.io/eastcoastdeveloper/pen/MWbwPzm'
        }
      ]
    },
    {
      linkText: 'UI',
      parentLink: '',
      menu: false,
      submenu: [
        {
          childtext: 'Profile Panel Toggle',
          link: 'https://stackblitz.com/edit/angular-profile-panel-toggle'
        },
        {
          childtext: 'JavaScript Drag/Drop',
          link: 'https://stackblitz.com/edit/drag-and-drop-javascript'
        },
        {
          childtext: 'JSON Accordion',
          link: 'https://stackblitz.com/edit/angular-accordion-json'
        },
        {
          childtext: 'Window Width',
          link: 'https://stackblitz.com/edit/angular-8-window-width'
        },
        {
          childtext: 'Mock Login',
          link: 'https://stackblitz.com/edit/angular-mock-login'
        },
        {
          childtext: 'TypeScript Slider',
          link: 'https://stackblitz.com/edit/javascript-slider'
        },
        {
          childtext: 'TypeScript Media Querie',
          link: 'https://stackblitz.com/edit/angular-8-media-querie'
        },
        {
          childtext: 'JavaScript Quiz',
          link: 'https://codepen.io/eastcoastdeveloper/pen/xoLQrY'
        }
      ]
    },
    {
      linkText: 'Angular Components',
      parentLink: '',
      menu: false,
      submenu: [
        {
          childtext: 'TypeScript Countdown',
          link: 'https://stackblitz.com/edit/angular-countdown-timer-component'
        },
        {
          childtext: 'JS Expandable Table Rows',
          link: 'https://stackblitz.com/edit/expandable-table-rows-js'
        },
        {
          childtext: 'Angular Date Picker',
          link: 'https://stackblitz.com/edit/angular-datepicker-component'
        },
        {
          childtext: 'Table Pagination',
          link: 'https://stackblitz.com/edit/angular-8-table-pagination'
        },
        {
          childtext: 'TypeScript Tabs',
          link: 'https://stackblitz.com/edit/typescript-tabs-example'
        },
        {
          childtext: 'Dropdown Menu',
          link: 'https://stackblitz.com/edit/angular-dropdown-menu-component'
        },
        {
          childtext: 'JSON Accordion',
          link: 'https://stackblitz.com/edit/angular-accordion-json'
        }
      ]
    },
    {
      linkText: 'Angular Core',
      parentLink: '',
      menu: false,
      submenu: [
        {
          childtext: 'Angular Services',
          link: 'https://stackblitz.com/edit/services-in-angular'
        },
        {
          childtext: 'Angular Http Get Req',
          link: 'https://stackblitz.com/edit/angular-http-get-request'
        },
        {
          childtext: 'Angular Share Data',
          link: 'https://stackblitz.com/edit/angular-share-component-data'
        },
        {
          childtext: ' Angular Env. Variables',
          link: 'https://stackblitz.com/edit/angular-environment-variables'
        }
      ]
    },
    {
      linkText: 'Other',
      parentLink: '',
      menu: false,
      submenu: []
    }
  ];

  expandAll: boolean = false;
  markup: string = `<div id="dynamic-sidebar">
  <span class="expand-all" (click)="toggleAll()">{{
    !expandAll ? 'Expand All' : 'Close All'
  }}</span>
  <div class="wrapper element-shadow">
    <div class="group" *ngFor="let item of result; let i = index">
      <a
        *ngIf="item.submenu.length"
        (click)="ddToggle(i)"
        class="light-blue-bg"
        >{{ item.linkText }}</a
      >
      <a
        *ngIf="!item.submenu.length"
        (click)="ddToggle(i)"
        class="light-blue-bg"
        >{{ item.linkText }}</a
      >
      <div
        *ngIf="item.submenu.length"
        class="caret"
        [ngClass]="{ 'rotate-caret': item.menu }"
      >
        &#x25B6;
      </div>
      <div class="sub-menu" [ngClass]="{ 'show-menu': item.menu }">
        <ul *ngFor="let menu of result[i].submenu">
          <li>
            <a>{{ menu.childtext }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>`;

  scss: string = ` #dynamic-sidebar {
    font: normal 11pt sans-serif;
    box-sizing: border-box;
    position: relative;
  
    .expand-all {
      font-size: 12px;
      text-align: right;
      display: block;
      margin-bottom: 5px;
      margin-right: 15px;
      cursor: pointer;
    }
  
    .wrapper {
      border-radius: 6px;
      > div:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
  
      > div:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
  
      .group {
        border-bottom: 1px solid $greyBlack;
        overflow: hidden;
        position: relative;
  
        > a {
          color: $white;
          padding: 7px 0 6px 20px;
          display: block;
          cursor: pointer;
          background-color: $oceanBlue;
        }
  
        .caret {
          position: absolute;
          transition: transform ease-out 0.2s;
          top: 15px;
          right: 10px;
          color: white;
          font-size: 10px;
          transform: translateY(-50%);
        }
      }
  
      .sub-menu {
        transition: max-height 0.2s;
        max-height: 0;
  
        ul {
          margin: 0;
          padding: 0;
        }
  
        li {
          list-style-type: none;
          background-color: $greyBlack;
          font: normal 10pt sans-serif;
          line-height: 19px;
          letter-spacing: 0.1pt;
  
          a {
            color: $white;
            padding: 7px 0 6px 20px;
            text-decoration: none;
            cursor: pointer;
            display: block;
          }
  
          &:hover {
            background-color: $oceanBlue;
            color: $white;
          }
        }
      }
    }
  }
  
  .show-menu {
    max-height: 1000px !important;
  }
  
  .rotate-caret {
    transform: translateY(-50%) rotate(90deg) !important;
  }`;

  model: string = `export class SidebarModel {
    linkText: string;
    parentLink: string;
    menu: boolean;
    submenu: { childtext: string; link: string }[];
  }`;

  typescript: string = `  import { HttpClient } from '@angular/common/http';
  import { Component } from '@angular/core';
  import { SidebarModel } from './sidebar.model';
  
  @Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
  })
  export class SidebarComponent {
    private unsubscribe$ = new Subject<void>();
    result: SidebarModel[] = [];
    expandAll: boolean = false;
    
    constructor(private _http: HttpClient) {
      this._http.get<SidebarModel[]>(
        'path-to-json')
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
        this.result = res;
      });
    }
  
    ddToggle(i: number) {
      this.result[i].menu = !this.result[i].menu;
    }

    toggleAll() {
      this.expandAll = !this.expandAll;
      for (var i = 0; i < this.result.length; i++) {
        this.result[i].menu = this.expandAll;
      }
    }

    ngOnDestroy(){
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }`;

  json: string = `[
  { "linkText": "About", "parentLink": "/about", "menu": false, "submenu": [] },
  { linkText": "AngularJS SPA", "parentLink": "/angularjs-spa", "menu": false, "submenu": [] },
  { "linkText": "Codepens", "parentLink": "", "menu": false,
      "submenu": [
        { "childtext": "Link 1",
          "link": "https://codepen.io/UX_Dev/live/5c88e99d0e9a03834dc2d113c24f9daa" },
        { "childtext": "Link 2",
          "link": "https://codepen.io/UX_Dev/pen/LmxqKa" },
        { "childtext": "Link 3",
          "link": "https://codepen.io/UX_Dev/pen/yzejjQ" },
        { "childtext": "Link 4",
          "link": "https://codepen.io/UX_Dev/pen/xoLQrY" },
        { "childtext": "Link 5",
          "link": "https://codepen.io/UX_Dev/pen/2788684ea795e215e9dff54bd5abc66b" }
      ]
  },
  { "linkText": "Navigation", "parentLink": "", "menu": false,
      "submenu": [
        { "childtext": "Pure CSS Menu",
          "link": "https://codepen.io/UX_Dev/pen/VMwxmQ" },
        { "childtext": "User Selection",
          "link": "https://codepen.io/UX_Dev/live/ZXYLyV" },
        { "childtext": "In Page Navigation",
          "link": "https://codepen.io/UX_Dev/pen/JjogojN" },
        { "childtext": "Progress Navigation Bar",
          "link": "https://codepen.io/UX_Dev/pen/xXOapm" }
      ]
  },
  { "linkText": "Angular 8", "parentLink": "", "menu": false,
      "submenu": [
        { "childtext": "Nested Routing",
          "link": "https://stackblitz.com/edit/angular-8-nested-routing" },
        { "childtext": "Modular Routing",
          "link": "https://stackblitz.com/edit/module-to-module-routing" },
        { "childtext": "JSON Line Chart",
          "link": "https://stackblitz.com/edit/line-chart-component-json" }
      ]
  }
]`;

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  ddToggle(i: number) {
    this.result[i].menu = !this.result[i].menu;
  }

  toggleAll() {
    this.expandAll = !this.expandAll;
    for (var i = 0; i < this.result.length; i++) {
      this.result[i].menu = this.expandAll;
    }
  }
}
