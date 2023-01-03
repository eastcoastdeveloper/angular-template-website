import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectCategoryService } from 'src/app/services/project-category.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-cornerstone-apps',
  template: `<app-projects-list-content
    [dataArray]="appsArray"
  ></app-projects-list-content>`
})
export class CornerstoneAppsComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'Front End Development',
    cornerStone: true
  };
  appsArray: any;

  constructor(
    private _projectCategoryService: ProjectCategoryService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    new Promise((resolve) => {
      this._projectCategoryService.configureCategory('projects');
      resolve(
        this._projectCategoryService.categorySubject.subscribe((val) => {
          this.appsArray = val;
        })
      );
    });
  }
}
