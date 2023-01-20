import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { ProjectCategoryService } from 'src/app/services/project-category.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-development-components',
  template: `<app-projects-list-content
    [dataArray]="developmentArray"
  ></app-projects-list-content>`
})
export class CornerstoneDevelopmentComponent implements OnDestroy {
  developmentArray: ProjectsListInterface[] = [];
  private unsubscribe$ = new Subject<boolean>();
  pageDataObject: PageDataObject = {
    title: 'Learn to Code',
    cornerStone: true
  };

  constructor(
    private _projectCategoryService: ProjectCategoryService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    new Promise((resolve) => {
      this._projectCategoryService.configureCategory('development');
      resolve(
        this._projectCategoryService.categorySubject
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((val) => {
            this.developmentArray = val;
          })
      );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
