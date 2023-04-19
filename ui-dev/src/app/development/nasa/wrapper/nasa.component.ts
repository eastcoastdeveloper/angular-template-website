import { Component, ViewChild } from '@angular/core';
import { NasaPhotoBodyComponent } from '../photo-body/photo-body.component';
import { NasaHeaderComponent } from '../header/header.component';
import { NasaSearchComponent } from '../seachbar/search.component';
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
    title: 'APOD NASA Gov',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: '',
    repoLink: '',
    category: '',
    views: 0,
    forks: 0,
    cornerStone: false,
    threeColumnLayout: true,
    meta: {
      description:
        "APOD Nasa Gov; Nasa's Photo of the Day API. Select a date from now til 1995. Access photos/ video dating back to 1995.",
      keywords: 'web development project, apod nasa, nasa api',
      title: 'APOD Nasa Gov',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  @ViewChild(NasaPhotoBodyComponent) photoBodyReference: NasaPhotoBodyComponent;
  @ViewChild(NasaHeaderComponent) headerReference: NasaHeaderComponent;
  @ViewChild(NasaSearchComponent) searchReference: NasaSearchComponent;

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

  loadDataSet(value: any) {
    this.photoBodyReference.loadHistoryItem(value);
    this.headerReference.loadHistoryItem(value);
    this.searchReference.calendarReference.currentDate = '';
    this.searchReference.calendarReference.getValue();
  }
}
