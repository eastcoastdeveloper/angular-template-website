import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: '[app-date-picker]',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class AccurateBookRecordsComponent {
  imgUrl = '../../../assets/images/accurate_books_records.jpg';
  pageDataObject: PageDataObject = {
    title: 'Accurate Book Records',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-date-picker',
    repoLink:
      'https://github.com/eastcoastdeveloper/datepicker-angular-component',
    category: '',
    views: 63,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: false
  };

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  getImg() {}

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
