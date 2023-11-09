import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  currentIndex: number = 0;
  markup: string;
  productInfo: boolean = false;
  loaded: boolean = false;
  scss: string;
  typescript: string;
  interface: string;

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
