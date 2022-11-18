import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProjectsListInterface } from "src/app/interfaces/projects-list.interface";
import { ProjectListService } from "src/app/services/current-route.service";
import { DevMenuService } from "src/app/services/dev-menu.service";

@Component({
  selector: "app-dev-menu",
  templateUrl: "./dev-menu.component.html",
  styleUrls: ["./dev-menu.component.scss"],
})
export class DevMenuComponent implements OnInit {
  dataArray: { category: string; pages: ProjectsListInterface[] }[] = [];
  activeCategory?: string;
  defaultRoute: string;
  projectList: ProjectsListInterface[] = [];
  projectItems: ProjectsListInterface[] = [];
  componentItems: ProjectsListInterface[] = [];
  developmentItems: ProjectsListInterface[] = [];

  constructor(
    private _router: Router,
    private _devMenu: DevMenuService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    this.projectList = this._projectListService.projectList;

    // Create Array of Objects
    this.projectList.map((val) => {
      this.dataArray[0] = { category: "Projects", pages: this.projectItems };
      this.dataArray[1] = {
        category: "Components",
        pages: this.componentItems,
      };
      this.dataArray[2] = {
        category: "Development",
        pages: this.developmentItems,
      };

      val.category === "projects" ? this.projectItems.push(val) : "";
      val.category === "components" ? this.componentItems.push(val) : "";
      val.category === "development" ? this.developmentItems.push(val) : "";
    });

    this.projectItems.pop();
    this.componentItems.pop();
    this.developmentItems.pop();

    // Set Active Category
    this._projectListService.pageData$.subscribe((val) => {
      this.activeCategory = val?.category;
      if (this.activeCategory === "projects") this.activeCategory = "Projects";
      if (this.activeCategory === "components")
        this.activeCategory = "Components";
      if (this.activeCategory === "development")
        this.activeCategory = "Development";
    });
  }

  // Set Default Category Route Evt Handler
  navigateToCategory(category: string) {
    this.activeCategory = category.toLowerCase();
    this._router.navigateByUrl(this.activeCategory);
    this._devMenu.closeMenu();
  }

  navigateToProject(url: string, index: number, childIndex: number) {
    this._router.navigateByUrl(url);
  }

  navigateToExternalPage(page: string) {
    window.location.href = page;
  }

  navigateToNewTab(page: string) {
    window.open(page, "_blank");
  }
}
