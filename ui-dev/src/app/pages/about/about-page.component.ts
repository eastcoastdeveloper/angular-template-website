import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  pageDataObject: PageDataObject = {
    cornerStone: true,
    threeColumnLayout: false
  };

  aboutPicture: string = '../../../../../assets/img/about-photo.jpg';
  constructor(private _projectListService: ProjectListService) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }
}
