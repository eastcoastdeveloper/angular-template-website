import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class EthicalSalePracticesComponent {
  imgUrl = '../../../assets/images/ethical_sales_practices.jpg';
  pageDataObject: PageDataObject = {
    title: 'Ethical Sales Practices',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: '',
    repoLink: '',
    category: '',
    views: 0,
    forks: 0,
    cornerStone: false,
    threeColumnLayout: true
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
