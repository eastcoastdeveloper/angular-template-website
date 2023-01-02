import { Component, OnInit, ViewChild } from '@angular/core';
import { NasaPhotoBodyComponent } from '../photo-body/photo-body.component';
import { NasaHeaderComponent } from '../header/header.component';
import { NasaSearchComponent } from '../seachbar/search.component';
import { NasaSearchService } from '../nasa.service';
import { Meta } from '@angular/platform-browser';
import { ProjectListService } from 'src/app/services/project-list.service';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'APOD NASA Gov',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 3, 2023',
    repoTitle: '',
    repoLink: '',
    category: '',
    views: 0,
    forks: 0
  };

  history!: any[];

  @ViewChild(NasaPhotoBodyComponent) photoBodyReference: NasaPhotoBodyComponent;
  @ViewChild(NasaHeaderComponent) headerReference: NasaHeaderComponent;
  @ViewChild(NasaSearchComponent) searchReference: NasaSearchComponent;

  constructor(
    private _nasaSearchService: NasaSearchService,
    private _projectListService: ProjectListService,
    private _metaTagService: Meta
  ) {}

  ngOnInit(): void {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this._metaTagService.addTags([
      {
        name: 'nasa-api, apod nasa gov',
        content: 'APOD Nasa Gov, Nasa Photo of the Day API'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Eric Scott' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2022-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
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
