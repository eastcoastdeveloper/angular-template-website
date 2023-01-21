import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarInterface } from 'src/app/interfaces/dynamic-sidebar.interface';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './dynamic-sidebar.component.html',
  styleUrls: ['./dynamic-sidebar.component.scss']
})
export class DynamicSidebarComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'Angular Dynamic Sidebar',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-dynamic-sidebar',
    repoLink: 'https://github.com/eastcoastdeveloper/Angular-Dynamic-Sidebar',
    category: '',
    views: 4782,
    forks: 124,
    threeColumnLayout: true,
    cornerStone: false
  };

  result: SidebarInterface[] = [];
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
    result: SidebarModel[] = [];
    expandAll: boolean = false;
    constructor(private _http: HttpClient) {
      this._http.get<SidebarModel[]>(
        'assets/sidebar.json').subscribe((res) => {
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
    private _http: HttpClient,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    // GET Data or Get From Cache
    this.fetchDataOrGetCache();
  }

  fetchDataOrGetCache() {
    this._projectListService.individualProjectCacheCheck('dynamic-sidebar');
    this._http
      .get<SidebarInterface[]>(`/api/dynamic-sidebar-component`)
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
}
