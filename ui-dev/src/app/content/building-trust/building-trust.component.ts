import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class DynamicSidebarComponent {
  imgUrl = '../../../assets/images/building_trust.jpg';
  pageDataObject: PageDataObject = {
    title: 'Building Trust',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-dynamic-sidebar',
    repoLink: 'https://github.com/eastcoastdeveloper/Angular-Dynamic-Sidebar',
    category: '',
    views: 5856,
    forks: 149,
    threeColumnLayout: true,
    cornerStone: false
  };

  constructor(
    private _globalFeatures: GlobalFeaturesService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
