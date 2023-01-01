import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { PageDataObject } from "src/app/interfaces/pageDataInterface";
import { ProjectListService } from "src/app/services/project-list.service";

@Component({
  selector: "movie-app",
  templateUrl: "./movie-app.component.html",
  styleUrls: ["./movie-app.component.scss"],
})
export class MovieAppComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: "OMDB API — Movie & TV Search",
    publishedOn: "Oct 1, 2022",
    updatedOn: "Jan 3, 2022",
    repoTitle: "",
    repoLink: "",
    category: "",
    views: 0,
    forks: 0,
  };

  @ViewChild("title", { static: false }) title: ElementRef;
  @ViewChild("year", { static: false }) year: ElementRef;
  protected typescript: string;
  protected markup: string;
  protected scss: string;

  private baseUrl: string = "https://www.omdbapi.com/?t=";
  private key: string = "&apikey=2a8aca86";
  protected dataArr: any = [];
  layout: string = "inline";
  currentMovie: number = 0;
  lightbox: boolean = false;

  constructor(
    private http: HttpClient,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.renderCode();
  }

  // //Return all episodes by using just the "Season" parameter: http://www.omdbapi.com/?t=Game of Thrones&Season=1
  queryOne: string = "?t=Game of Thrones&Season=1";

  // //Season+Episode search parameters added: http://www.omdbapi.com/?t=Game of Thrones&Season=1&Episode=1
  queryTwo: string = "?t=Game of Thrones&Season=1&Episode=2";

  titleQuery: string = "?t=The Godfather";
  yearQuery: string;
  // //queryThree:string = '?t=The Godfather&plot=short';
  // //queryThree:string = '?t=The Godfather&y=1974';

  fetchResults() {
    this.titleQuery = this.title.nativeElement.value;
    this.yearQuery = this.year.nativeElement.value;

    this.http
      .get(this.baseUrl + this.titleQuery + "&y=" + this.yearQuery + this.key)
      .subscribe((data: any) => {
        this.dataArr.unshift(data);
      });

    this.title.nativeElement.value = "";
    this.year.nativeElement.value = "";
  }

  previousFlick() {
    this.currentMovie > 0 ? this.currentMovie-- : "";
  }

  nextFlick() {
    this.dataArr.length > this.currentMovie ? this.currentMovie++ : "";
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

  private renderCode() {
    this.typescript = `
  @ViewChild("title", { static: false }) title: ElementRef;
  @ViewChild("year", { static: false }) year: ElementRef;

  private baseUrl: string = "https://www.omdbapi.com/?t=";
  private key: string = "YOUR_KEY";
  dataArr: any = [];
  layout: string = "inline";
  currentMovie: number = 0;
  lightbox: boolean = false;

  constructor( private http: HttpClient ) {}

  queryOne: string = "?t=Game of Thrones&Season=1";
  queryTwo: string = "?t=Game of Thrones&Season=1&Episode=2";
  titleQuery: string = "?t=The Godfather";
  yearQuery: string;

  fetchResults() {
    this.titleQuery = this.title.nativeElement.value;
    this.yearQuery = this.year.nativeElement.value;

    this.http
      .get(this.baseUrl + this.titleQuery + "&y=" + this.yearQuery + this.key)
      .subscribe((data: any) => {
        this.dataArr.unshift(data);
      });

    this.title.nativeElement.value = "";
    this.year.nativeElement.value = "";
  }

  previousFlick() { this.currentMovie > 0 ? this.currentMovie-- : ""; }

  nextFlick() {
    this.dataArr.length > this.currentMovie ? this.currentMovie++ : "";
  }

  setLayout(val: string) { this.layout = val; }

  openLightbox(i: number) {
    this.currentMovie = i;
    this.lightbox = true;
  }

  closeLightbox() { this.lightbox = false; }`;

    this.markup = `
<div id="movies-app" [ngClass]="{'displayBlock':dataArr.length > 0}">
  <div class="input-fields" [ngClass]="{'hasData':dataArr.length > 0}">
    <h3 [ngClass]="{'title-w-data':dataArr.length > 0}">Search Movies & TV Titles</h3>
    <input #title class="year" type="text" placeholder="Title (enter to search)" (keydown.enter)="fetchResults()" />
    <input #year class="title" type="text" placeholder="Year (optional)" />
    <button (click)="fetchResults()">search</button>
  </div>
  <div class="results" [ngClass]="{'displayBlock':dataArr.length > 0}">
    <div class="layout-options">
      <div class="in-line" (click)="setLayout('inline')">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="grid" (click)="setLayout('grid')"></div>
    </div>
    <div class="table-layout" *ngIf="layout === 'inline'">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actors</th>
            <th>Awards</th>
            <th>Box Office</th>
            <th>Country</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Year</th>
            <th>Runtime</th>
            <th>Released</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let items of dataArr; let i = index" class="cinema-group">
            <td>{{items.Title}}</td>
            <td>{{items.Actors}}</td>
            <td>{{items.Awards}}</td>
            <td>{{items.BoxOffice}}</td>
            <td>{{items.Country}}</td>
            <td>{{items.Director}}</td>
            <td>{{items.Genre}}</td>
            <td>{{items.Language}}</td>
            <td>{{items.Year}}</td>
            <td>{{items.Runtime}}</td>
            <td>{{items.Released}}</td>
            <td>
              <table>
                <tr *ngFor="let rating of items.Ratings">
                  <td>{{rating.Source}}</td>
                  <td>{{rating.Value}}</td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="footer" *ngIf="layout === 'inline'">
      <div class="table-data">
        <span *ngIf="dataArr.length > 1">{{ dataArr.length + ' Total Records'}}</span>
      </div>
    </div>
    <div class="grid-layout" *ngIf="layout === 'grid'">
      <div class="movie-data-block" *ngFor="let items of dataArr; let i = index" (click)="openLightbox(i)">
        <div class="poster">
          <img *ngIf="items.Poster != 'N/A'" [src]="items.Poster" />
          <div *ngIf="items.Poster == 'N/A'" class="movie-unavailable">
            <p>Movie Poster N/A</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div *ngIf="lightbox" class="bg"></div>
<section *ngIf="lightbox" class="lightbox">
  <div (click)="closeLightbox()" *ngIf="lightbox" class="close-lightbox">
    <span>&#x2715;</span>
  </div>
  <div class="movie-poster">
    <img *ngIf="null != dataArr[currentMovie] && dataArr[currentMovie].Poster != 'N/A'" [src]="dataArr[currentMovie].Poster" />
    <div *ngIf="dataArr[currentMovie].Poster == 'N/A'" class="movie-unavailable">
      <p>Movie Poster N/A</p>
    </div>
  </div>
  <div *ngIf="null != dataArr[currentMovie]" class="movie-details">
    <p>
      <span>Title:</span>
      <span>{{dataArr[currentMovie].Title}}</span>
    </p>
    <p>
      <span>Actors:</span>
      <span>{{dataArr[currentMovie].Actors}}</span>
    </p>
    <p>
      <span>Awards:</span>
      <span>{{dataArr[currentMovie].Awards}}</span>
    </p>
    <p>
      <span>Box Office:</span>
      <span>{{dataArr[currentMovie].BoxOffice}}</span>
    </p>
    <p>
      <span>Country</span>
      <span>{{dataArr[currentMovie].Country}}</span>
    </p>
    <p>
      <span>Director:</span>
      <span>{{dataArr[currentMovie].Director}}</span>
    </p>
    <p>
      <span>Genre:</span>
      <span>{{dataArr[currentMovie].Genre}}</span>
    </p>
    <p>
      <span>Language:</span>
      <span>{{dataArr[currentMovie].Language}}</span>
    </p>
    <p>
      <span>Year:</span>
      <span>{{dataArr[currentMovie].Year}}</span>
    </p>
    <p>
      <span>Runtime:</span>
      <span>{{dataArr[currentMovie].Runtime}}</span>
    </p>
    <p>
      <span>Released:</span>
      <span>{{dataArr[currentMovie].Released}}</span>
    </p>
  </div>
  <div class="navigation">
    <button class="previous" (click)="previousFlick()" *ngIf="currentMovie > 0">Previous</button>
    <button class="next" (click)="nextFlick()" *ngIf="dataArr.length -1 > currentMovie">Next</button>
  </div>
</section>`;

    this.scss = `
#movies-app {
  font-family: sans-serif;
  display: flex;
  position: relative;
  background-color: dark-grey;
  border-radius: 6px;
  height: calc(100vh - 205px);

  h3 {
    transform: translateY(-50px);
    position: absolute;
    color: #ffffff;
    font-size: 20px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
  }

  .title-w-data {
    transform: translateY(15px) !important;
    color: #ffffff;
    font-size: 16px;
  }

  .layout-options {
    overflow: auto;
    margin: 0 auto 15px auto;
    padding: 0 20px;

    .in-line {
      position: relative;
      width: 20px;
      float: right;
      cursor: pointer;
      height: 18px;
      border-radius: 2px;
      overflow: hidden;

      >div {
        background-color: #ffffff;
        height: 4px;
        width: 100%;
      }

      >div:nth-child(2) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
      }

      >div:last-child {
        position: absolute;
        bottom: 0;
      }
    }

    .grid {
      background-color: #ffffff;
      width: 20px;
      height: 18px;
      float: right;
      margin-right: 10px;
      cursor: pointer;
      border-radius: 2px;
    }
  }

  .results {
    height: calc(100% - 135px);
    overflow: auto;
    display: none;

    .table-layout {
      max-width: 1000px;
      width: calc(100% - 20px);
      height: calc(100% - 65px);
      overflow-x: auto;
      margin: 0 auto;

    }

    .footer {
      position: sticky;
      bottom: 0;
      box-sizing: border-box;
      background-color: $yellowGold;
      font-size: 13px;
      padding: 5px;
      max-width: 1000px;
      width: calc(100% - 20px);
      margin: 0 auto;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .cinema-group:nth-child(odd) {
      margin-bottom: 10px;
      background-color: lightgrey;
    }

    .cinema-group:nth-child(even) {
      margin-bottom: 10px;
      background-color: #ffffff;
    }

    .cinema-group:not(:first-child) td:first-child { border-top-left-radius: 4px;  }
    .cinema-group:not(:first-child) td:last-child  { border-top-right-radius: 4px; }
    .cinema-group>td { padding: 8px 8px 15px 8px; }

    .cinema-group td:first-child {
      border-bottom-left-radius: 4px;
      font-style: italic;
      font-weight: 600;
      padding-right: 15px;
    }

    .cinema-group td:last-child {
      border-bottom-right-radius: 4px;
      vertical-align: middle;
    }

    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 5px;
    }

    th {
      text-align: left;
      padding-left: 8px;
      position: sticky;
      top: 0;
      background-color: #ffffff;
      padding-bottom: 10px;
    }

    td {
      vertical-align: top;
      font-size: 13px;
      min-width: 150px;
      line-height: 20px;
    }
  }

  .input-fields {
    text-align: center;
    margin: auto;
    position: relative;

    input {
      outline: none;
      font-size: normal 14px sans-serif;
      padding: 5px;
      border-radius: 4px;
      border: 1px solid lightgray;
    }

    input:not(:last-child) { margin-right: 20px; }
    ::placeholder          { font-size: 14px;    }

    button {
      background-color: $yellowGold;
      border-radius: 4px;
      color: white;
      padding: 4px 6px 5px 6px;
      font-size: 12px;
      letter-spacing: 0.5;
      outline: none;
      border: none;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .drop-shadow { box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, .5); }

  .grid-layout {
    display: grid;
    grid-template-columns: repeat(5, calc(21% - 26px));
    grid-column-gap: 20px;
    max-width: 1000px;
    grid-row-gap: 20px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 10px;

    .movie-unavailable {
      position: relative;
      height: 100%;

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        text-align: center;
        font: normal 14px sans-serif;
      }
    }

    .poster {
      height: 250px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.hasData {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  margin-left: unset !important;
  margin-right: unset !important;
}

.displayBlock { display: block !important; }

.bg {
  position: absolute;
  top: 39px;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: calc(100% - 39px);
}

.lightbox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  height: 500px;
  border-radius: 6px;
  overflow: hidden;
  max-width: 550px;
  .movie-poster {
    width: 400px;
    background-color: #ffffff;
    padding-top: 25px;
    padding-left: 10px;
    img {
      width: 100%;
      max-width: 275px;
    }
    .movie-unavailable {
      background-color: lightgray;
      border-radius: 6px;
      padding: 20px;
      text-align: center;
      font: bold 12px sans-serif;
      max-width: 275px;
    }
  }
  .movie-details {
    background-color: #ffffff;
    font-size: 14px;
    font-family: sans-serif;
    line-height: 22px;
    padding: 30px 10px 10px 10px;
    width: 50%;
    p {
      span:first-child {
        font-weight: bold;
        margin-right: 5px;
      }
    }
    p:not(:last-child) { margin-bottom: 5px; }
  }
}

.close-lightbox {
  position: absolute;
  background-color: $yellowGold;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  top: 10px;
  right: 10px;
  cursor: pointer;

  span {
    margin: auto;
    color: white;
    transform: translateY(0px);
    font-size: 12px;
    cursor: pointer;
  }
}

.navigation {
  position: absolute;
  width: 100%;
  background-color: $oceanBlue;
  padding: 5px 10px;
  bottom: 0;
  box-sizing: border-box;

  button {
    background-color: #ffffff;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    padding-top: 5px;
    width: 80px;
    font: normal 12px sans-serif;
    outline: none;
    cursor: pointer;
    padding-bottom: 5px;
  }

  .previous { float: left;  }
  .next     { float: right; }
}

@media screen and (max-width: 1045px) {
  #movies-app {
    .results {
      margin-left: 20px;
      margin-right: 20px;
    }
    .grid-layout {
      grid-template-columns: repeat(4, calc(25% - 15px));
      .poster { height: auto;
        img {
          height: auto;
          position: unset;
        }
      }
    }
  }
}`;
  }
}
