import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProjectCategoryService } from 'src/app/services/project-category.service';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss']
})
export class CategoryNavigationComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  dataArray: ProjectsListInterface[] = [];
  @Input() categoryType: string;
  menuOpen: boolean = false;
  windowWidth?: number;
  item: any;

  constructor(
    private _windowWidth: WindowWidthService,
    private _projectCategoryService: ProjectCategoryService,
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.categoryType);
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });

    // Get Page Data Object & Category
    if (this.categoryType !== null || this.categoryType != undefined) {
      this.loadCategory(this.categoryType);
    }
  }

  loadCategory(category: string) {
    // Call Category fn in Service to Either Fetch or Get Cache
    this._projectCategoryService.configureCategory(category);

    // Subscribe to that value for initial value
    this._projectCategoryService.categorySubject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.dataArray = val;
      });
  }

  // Get Cached Category & Reset DataArray
  navigateToURL(dataObject: ProjectsListInterface) {
    const categoryQuery = this._localStorageService.getData('cats');
    const parsedData = JSON.parse(categoryQuery);
    this.dataArray = parsedData[this.categoryType].value;
    if (dataObject.internal) {
      this.menuOpen = false;
      this._router.navigateByUrl(dataObject.path);
    }
    if (!dataObject.internal) {
      this.menuOpen = false;
      window.open(dataObject.path, '_blank');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
