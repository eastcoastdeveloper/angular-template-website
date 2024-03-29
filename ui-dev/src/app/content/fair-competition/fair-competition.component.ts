import { Component } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-fair-competition',
  template: `<app-page-content [imgPlaceholder]="imgUrl"></app-page-content>`
})
export class FairCompetitionComponent {
  imgUrl = '../../../assets/images/fair_competition.jpg';
  pageDataObject: PageDataObject = {
    title: 'Fair Competition',
    publishedOn: 'Sept 29, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-accordion',
    repoLink: 'https://github.com/eastcoastdeveloper/Angular-Accordion-JSON',
    category: '',
    views: 921,
    forks: 23,
    threeColumnLayout: false,
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
