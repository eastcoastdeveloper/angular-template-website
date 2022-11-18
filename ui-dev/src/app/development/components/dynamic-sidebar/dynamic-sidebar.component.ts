import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SidebarInterface } from "src/app/interfaces/dynamic-sidebar.interface";

@Component({
  selector: "app-sidebar",
  templateUrl: "./dynamic-sidebar.component.html",
  styleUrls: ["./dynamic-sidebar.component.scss"],
})
export class DynamicSidebarComponent implements OnInit {
  result: SidebarInterface[] = [];
  markup: string = `
  <div id="sidebar" class="dark-blue-bg">
  <div class="group" *ngFor="let item of result; let i = index">
    <a *ngIf="item.submenu.length" (click)="ddToggle(i)" class="light-blue-bg">
        {{ item.linkText }}
      </a>
    <a *ngIf="!item.submenu.length" (click)="ddToggle(i)" routerLink="{{ item.parentLink }}" class="light-blue-bg">
      {{ item.linkText }}
    </a>
    <div class="sub-menu" [ngClass]="{ 'show-menu': item.menu }">
      <ul *ngFor="let menu of result[i].submenu">
        <li>
          <a href="{{ menu.link }}" target="_blank">{{ menu.childtext }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="right-border"></div>
</div>`;

  scss: string = `
  #sidebar {
    height: 100%;
    font: normal 11pt sans-serif;
    padding-top: 50px;
    box-sizing: border-box;
    position: relative;
    .group {
      border-bottom: 1px solid black;
      overflow: hidden;
      > a {
        color: white;
        padding: 7px 0 6px 20px;
        display: block;
        cursor: pointer;
      }
    }
    .sub-menu {
      transition: max-height 0.5s;
      max-height: 0;
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style-type: none;
        background-color: #161a26;
        font: normal 10pt sans-serif;
        line-height: 19px;
        letter-spacing: 0.1pt;
        a {
          color: white;
          padding: 7px 0 6px 20px;
          text-decoration: none;
          cursor: pointer;
          display: block;
        }
        &:hover {
          background-color: #03658c;
          color: #ffffff;
        }
      }
    }
  }
  
  .show-menu { max-height: 1000px !important; }
  .right-border {
    background-color: #03658c;
    position: absolute;
    width: 1px;
    height: calc(100% - 50px);
    right: 0;
    top: 50px;
  }`;

  model: string = `
  export class SidebarModel {
    linkText: string;
    parentLink: string;
    menu: boolean;
    submenu: { childtext: string; link: string }[];
  }`;

  typescript: string = `
  import { HttpClient } from '@angular/common/http';
  import { Component } from '@angular/core';
  import { SidebarModel } from './sidebar.model';
  
  @Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
  })
  export class SidebarComponent {
    result: SidebarModel[] = [];
  
    constructor(private _http: HttpClient) {
      this._http.get<SidebarModel[]>('assets/sidebar.json').subscribe((res) => {
        this.result = res;
      });
    }
  
    ddToggle(i: number) {
      this.result[i].menu = !this.result[i].menu;
    }
  }`;

  json: string = `
  [
    {
      "linkText": "About",
      "parentLink": "/about",
      "menu": false,
      "submenu": []
    },
    {
      "linkText": "AngularJS SPA",
      "parentLink": "/angularjs-spa",
      "menu": false,
      "submenu": []
    },
    {
      "linkText": "Codepens",
      "parentLink": "",
      "menu": false,
      "submenu": [
        {
          "childtext": "Link 1",
          "link": "https://codepen.io/UX_Dev/live/5c88e99d0e9a03834dc2d113c24f9daa"
        },
        {
          "childtext": "Link 2",
          "link": "https://codepen.io/UX_Dev/pen/LmxqKa"
        },
        {
          "childtext": "Link 3",
          "link": "https://codepen.io/UX_Dev/pen/yzejjQ"
        },
        {
          "childtext": "Link 4",
          "link": "https://codepen.io/UX_Dev/pen/xoLQrY"
        },
        {
          "childtext": "Link 5",
          "link": "https://codepen.io/UX_Dev/pen/2788684ea795e215e9dff54bd5abc66b"
        }
      ]
    },
    {
      "linkText": "Navigation",
      "parentLink": "",
      "menu": false,
      "submenu": [
        {
          "childtext": "Pure CSS Menu",
          "link": "https://codepen.io/UX_Dev/pen/VMwxmQ"
        },
        {
          "childtext": "User Selection",
          "link": "https://codepen.io/UX_Dev/live/ZXYLyV"
        },
        {
          "childtext": "In Page Navigation",
          "link": "https://codepen.io/UX_Dev/pen/JjogojN"
        },
        {
          "childtext": "Progress Navigation Bar",
          "link": "https://codepen.io/UX_Dev/pen/xXOapm"
        }
      ]
    },
    {
      "linkText": "Angular 8",
      "parentLink": "",
      "menu": false,
      "submenu": [
        {
          "childtext": "Nested Routing",
          "link": "https://stackblitz.com/edit/angular-8-nested-routing"
        },
        {
          "childtext": "Modular Routing",
          "link": "https://stackblitz.com/edit/module-to-module-routing"
        },
        {
          "childtext": "JSON Line Chart",
          "link": "https://stackblitz.com/edit/line-chart-component-json"
        }
      ]
    }
  ]`;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get<SidebarInterface[]>("assets/json/sidebar.json")
      .subscribe((res) => {
        this.result = res;
      });
  }

  ddToggle(i: number) {
    this.result[i].menu = !this.result[i].menu;
  }
}
