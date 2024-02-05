import { Component } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-data-privacy-security',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class DataPrivacySecurityComponent {
  imgUrl = '../../../assets/images/data_privacy_security.jpg';
  pageDataObject: PageDataObject = {
    title: 'Data Privacy & Security',
    publishedOn: 'Aug 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-data-table',
    repoLink:
      'https://github.com/eastcoastdeveloper/angular-8-table-pagination',
    category: '',
    views: 6676,
    forks: 191,
    threeColumnLayout: true,
    cornerStone: false
  };

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
