import { Component, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-related-components',
  templateUrl: './related-components.component.html'
})
export class RelatedComponentsComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  relatedItems: ProjectsListInterface[] = [];
  pageDataObject: PageDataObject;
  @Input() type: string;

  constructor(
    private _categoriesService: CategoriesService,
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService,
    private _router: Router
  ) {
    this._router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this._projectListService.pageDataObject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.pageDataObject = value;
      });
    this._categoriesService.isCategoryCached(this.type);
    if (this.relatedItems.length === 0) {
      this.fetchItems();
    } else {
      let arr = this._categoriesService.dataSubject$.getValue();
      this.scrambleContents(arr);
    }
  }

  async fetchItems() {
    await new Promise((resolve) => {
      this._projectListService.getAllProjects(this.type, 1, 10);
      resolve(
        this._projectListService.allProjects$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((d) => {
            this.scrambleContents(d);
          })
      );
    });
  }

  scrambleContents(arr: ProjectsListInterface[]) {
    let currentPage: ProjectsListInterface;
    arr.sort((a, b) => 0.5 - Math.random());
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        if (arr[i].title === this.pageDataObject.title) {
          currentPage = arr[i];
          arr.splice(i, 1);
        }
      }
    }
    this.relatedItems = arr;
    this.relatedItems.push(currentPage!);
  }

  navigateToPage(path: string) {
    this._globalFeatures.externalLink(path);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
