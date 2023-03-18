// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
// import * as data from "./categories-menu.json";

// @Component({
//   selector: "app-category-menu",
//   templateUrl: "./category-menu.component.html",
//   styleUrls: ["./category-menu.component.scss"],
// })
// export class CategoryMenuComponent implements OnInit {
//   dataArray: any[] = [];
//   activeCategory: string;
//   defaultRoute: string;
//   currentRoute: string;

//   constructor(private _router: Router) {}

//   ngOnInit(): void {
//     for (let key in data) {
//       this.dataArray.push(data[key]);
//       this.currentRoute = this._router.url;
//     }

//     if (this._router.url.includes("apps")) this.activeCategory = "Apps";
//     if (this._router.url.includes("components"))
//       this.activeCategory = "Components";
//     if (this._router.url.includes("development"))
//       this.activeCategory = "Development";
//   }

//   navigateToCategory(category: string) {
//     if (category === "Apps") this.defaultRoute = "apps/apod-nasa-gov";
//     if (category === "Development")
//       this.defaultRoute = "development/routing-in-angular/home";
//     if (category === "Components")
//       this.defaultRoute = "components/angular-data-table";
//     this._router.navigateByUrl(this.defaultRoute);
//   }

//   navigateToProject(url: string) {
//     this._router.navigateByUrl(url);
//   }
// }
