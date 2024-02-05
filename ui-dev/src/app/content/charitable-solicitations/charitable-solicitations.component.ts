import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-charitable-solitications',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class CharitableSolicitations {
  imgUrl = '../../../assets/images/charitable_solicitations.jpg';
  pageDataObject: PageDataObject = {
    title: 'Charitable Solicitations',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'javascript-drag-and-drop',
    repoLink: 'https://github.com/eastcoastdeveloper/drag-and-drop-javascript',
    category: 'projects',
    views: 271,
    forks: 3,
    cornerStone: false,
    threeColumnLayout: true
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
