import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-rest-countries',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class EnvironmentalComplianceComponent {
  imgUrl = '../../../assets/images/environmental_compliance.jpg';
  pageDataObject: PageDataObject = {
    title: 'Environmental Compliance',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'rest-countries',
    category: '',
    views: 501,
    forks: 3,
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
