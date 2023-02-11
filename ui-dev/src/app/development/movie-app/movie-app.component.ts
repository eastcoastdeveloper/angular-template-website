import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.scss']
})
export class MovieAppComponent implements OnInit {
  @ViewChild('title', { static: false }) title: ElementRef;
  @ViewChild('year', { static: false }) year: ElementRef;

  private baseUrl: string = 'https://www.omdbapi.com/?t=';
  private key: string = '&apikey=2a8aca86';
  protected dataArr: any = [];
  layout: string = 'inline';
  currentMovie: number = 0;
  lightbox: boolean = false;

  pageDataObject: PageDataObject = {
    title: 'OMDB API — Movie & TV Search',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: '',
    repoLink: '',
    category: '',
    views: 0,
    forks: 0,
    cornerStone: true,
    threeColumnLayout: true
  };

  constructor(
    private _http: HttpClient,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  // Return all episodes by using just the "Season" parameter:
  // http://www.omdbapi.com/?t=Game of Thrones&Season=1
  queryOne: string = '?t=Game of Thrones&Season=1';

  // Season+Episode search parameters added:
  // http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1
  queryTwo: string = '?t=Game of Thrones&Season=1&Episode=2';

  titleQuery: string = '?t=The Godfather';
  yearQuery: string;
  // //queryThree:string = '?t=The Godfather&plot=short';
  // //queryThree:string = '?t=The Godfather&y=1974';

  fetchResults() {
    this.titleQuery = this.title.nativeElement.value;
    this.yearQuery = this.year.nativeElement.value;

    this._http
      .get(this.baseUrl + this.titleQuery + '&y=' + this.yearQuery + this.key)
      .subscribe((data: any) => {
        this.dataArr.unshift(data);
      });

    this.title.nativeElement.value = '';
    this.year.nativeElement.value = '';
  }

  previousFlick() {
    this.currentMovie > 0 ? this.currentMovie-- : '';
  }

  nextFlick() {
    this.dataArr.length > this.currentMovie ? this.currentMovie++ : '';
  }

  setLayout(val: string) {
    this.layout = val;
  }

  openLightbox(i: number) {
    this.currentMovie = i;
    this.lightbox = true;
  }

  closeLightbox() {
    this.lightbox = false;
  }
}
