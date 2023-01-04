import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  pageDataObject: PageDataObject = {
    cornerStone: true,
    threeColumnLayout: false
  };

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }
}
