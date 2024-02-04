import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectsListInterface } from 'src/app/interfaces/projects-list.interface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'countdown',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class DoingBusinessGloballyComponent {
  imgUrl = '../../../assets/images/doing_business_globally.jpg';
  pageDataObject: PageDataObject = {
    title: 'Doing Business Globally',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-countdown-timer',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-countdown-timer-component',
    category: '',
    views: 16752,
    forks: 1103,
    threeColumnLayout: true,
    cornerStone: false
  };

  projectDetails?: ProjectsListInterface;
  publishedOn?: string;
  updatedOn?: string;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }
  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
