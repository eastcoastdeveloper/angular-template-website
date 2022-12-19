import { Injectable } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { ProjectsListInterface } from "../interfaces/projects-list.interface";
import { ProjectCategoryService } from "./project-category.service";

@Injectable({
  providedIn: "root",
})
export class RelatedComponentsService {
  relatedItems: ProjectsListInterface[] = [];
  relatedItemsSubject = new BehaviorSubject<ProjectsListInterface[]>([]);
  arrayIndex: ProjectsListInterface;

  constructor(
    private _router: Router,
    private _projectCategoryService: ProjectCategoryService
  ) {}

  // Fires on Category Component Wrapper Constructor
  init(categoryArray: ProjectsListInterface[], categoryName: string) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this._projectCategoryService.categorySubject.subscribe((val) => {
          if (val.length === 0) {
            this._projectCategoryService.configureCategory(categoryName);
          } else {
            categoryArray = val;
            // Populate & Shuffle Related Category Items
            this.populateRelatedItems(categoryArray);
            this.shuffleArray(categoryArray);
          }
        });
      }
    });
  }

  // Populate Related Items
  populateRelatedItems(categoryArray: ProjectsListInterface[]) {
    this.relatedItems = [];
    this.relatedItems = categoryArray.slice();
    this.shuffleArray(this.relatedItems);
    this.relatedItems;
  }

  // Shuffle Array
  shuffleArray(arr: ProjectsListInterface[]) {
    arr.forEach((obj, index) => {
      for (let i = 0; i < Object.values(obj).length; i++) {
        if (obj.path === this._router.url) {
          // this.arrayIndex = arr[index];
          arr = arr.splice(index, 1);
        }
      }
    });

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    this.relatedItems = this.relatedItems.slice(0, 4);
    this.relatedItemsSubject.next(this.relatedItems);
  }
}
