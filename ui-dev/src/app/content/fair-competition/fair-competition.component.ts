import { Component } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'accordion',
  templateUrl: './fair-competition.component.html',
  styles: `.feature-img {
    background: transparent url('../../../assets/images/fair_competition.jpg')
      scroll no-repeat center / cover;
  }`
})
export class FairCompetitionComponent {
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
