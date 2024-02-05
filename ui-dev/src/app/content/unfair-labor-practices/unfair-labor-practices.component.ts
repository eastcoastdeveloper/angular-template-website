import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-unfair-labor-practices',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class UnfairLaborPracticesComponent {
  imgUrl = '../../../assets/images/unfair_labor_practices.jpg';
  pageDataObject: PageDataObject = {
    title: 'Unfair Labor Practices',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-slider',
    repoLink: 'https://github.com/eastcoastdeveloper/angular-basic-carousel',
    category: 'components',
    views: 906,
    forks: 10,
    threeColumnLayout: true,
    cornerStone: false
  };

  constructor(private _projectListService: ProjectListService) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }
}
