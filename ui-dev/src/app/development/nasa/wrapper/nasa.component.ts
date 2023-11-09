import { Component } from '@angular/core';
import { NasaSearchService } from '../nasa.service';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent {
  history!: any[];
  pageDataObject: PageDataObject = {
    title: 'Ensuring Positive Workplace',
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
    private _nasaSearchService: NasaSearchService,
    private _projectListService: ProjectListService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  externalClick() {
    this._nasaSearchService.changeDatePickerVal(false);
  }

  searchResults(e: any) {
    this.history = e;
  }
}
