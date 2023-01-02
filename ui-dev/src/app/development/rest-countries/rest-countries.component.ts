import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.scss']
})
export class RestCountriesComponent implements OnInit {
  pageDataObject: PageDataObject = {
    title: 'REST Countries',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 3, 2023',
    repoTitle: 'rest-countries',
    repoLink:
      'https://github.com/eastcoastdeveloper/rest-countries-leaflet-map',
    category: '',
    views: 388,
    forks: 3
  };

  windowWidthSubscription: Subscription;
  markup: string;
  typescript: string;
  scss: string;
  model: string;
  module: string;

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.markup = `
    <div id="countries">
        <div class="content">
            <div class="grid" [ngClass]="{ 'no-interaction': !userInteraction }">
                <div class="countries-wrapper">
                    <div class="scroller">
                        <ul>
                            <li *ngFor="let item of countriesData; let i = index" (click)="selectItem(i, $event)" class="country-list-item">
                                {{ item.name.common }}
                            </li>
                        </ul>
                    </div>
                </div>
                
                <!-- MAP -->
                <div id="map" leaflet (leafletMapReady)="onMapReady($event)" [leafletOptions]="mapOptions"></div>
                
                <div class="country-popup" *ngIf="countryName != null">
                    <div class="country-name">
                        <p>{{ countryName }}</p>
                        <div class="flag">
                            <img src="{{ flag }}" />
                        </div>
                    </div>
                    <div class="details-body">
                        <div class="capitalCity">
                            <p>Capital City:</p>
                            <p>{{ capitalCity }}</p>
                        </div>
                        <div class="nativeName">
                            <p>Native Name:</p>
                            <p>{{ nativeName }}</p>
                        </div>
                        <div class="population">
                            <p>Population:</p>
                            <p>{{ formatNumber(population) }}</p>
                        </div>
                        <div class="region">
                            <p>Region:<br /></p>
                            <p>{{ geo }}</p>
                        </div>
                        <div class="un-member">
                            <p>UN Member:</p>
                            <p>{{ unMember === true ? 'Yes' : 'No' }}</p>
                        </div>
                        <div class="continents">
                            <p>Continents:</p>
                            <p>{{ continents[0] }}</p>
                        </div>
                        <div class="alternateMaps">
                            <p>Alternate Maps:</p>
                            <div *ngIf="alternateMaps != null">
                                <a href="{{ alternateMaps.googleMaps }}" target="_blank">Google Maps</a>
                                <a href="{{ alternateMaps.openStreetMaps }}" target="_blank">Open Street Maps</a>
                            </div>
                        </div>
                        <div class="alternateSpellings">
                            <p>Alternate Spellings:</p>
                            <div>
                                <span *ngFor="let alt of alternateSpellings; let i = index">{{i + 1 + ') ' + alt}}</span>
                            </div>
                        </div>
                        <div class="languages">
                        <p>Languages:</p>
                        <div>
                            <span *ngFor="let alt of languages; let i = index">{{i + 1 + ') ' + alt}}</span>
                        </div>
                        </div>
                        <div class="coatOfArms" *ngIf="coatOfArms != undefined">
                            <p>Coat of Arms:</p>
                            <div>
                                <img src="{{ coatOfArms }}" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div *ngIf="countriesError" class="countries-error">
                <p>REST Countries API seems to be non responsive.</p>
            </div>
        </div>
    </div>`;

    this.scss = `
    ::ng-deep img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive {
      width: 35px !important;
      height: 40px !important;
    }

    .dev-link {
      color: #d9a74a;
      background-color: #313b3f;
      text-decoration: none;
      font: normal 13px sans-serif;
      padding: 4px 5px;
      border-radius: 3px;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    #countries {
      height: 100%;
      overflow: hidden;
      border-radius: 6px;
    }

    .tabs {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 999;

      button:first-child {
        margin-right: 10px;
      }

      button {
        border: none;
        cursor: pointer;
      }
    }

    .content {
      position: relative;
      height: 100%;
    }

    .countries-wrapper {
      background-color: $white;
      color: #313b3f;
      position: relative;
      height: calc(100% - 10px);
      z-index: 999;
      overflow-y: auto;
    }

    .countries-error {
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      top: 0;
      z-index: 9999;
      width: 100%;
      height: 100%;
      color: white;
      font: normal 16px sans-serif;
      display: flex;

      p {
        margin: auto;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: 300px auto;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    .btn-group {
      position: absolute;
      left: 50px;
      z-index: 999;
      top: 10px;
    }

    .map {
      height: 100%;
      position: relative;
    }

    .country-popup {
      background-color: rgba(255, 255, 255, 0.7);
      border: 2px solid $oceanBlue;
      position: absolute;
      right: 20px;
      z-index: 999;
      bottom: 10px;
      border-radius: 5px;
      box-shadow: -2px 2px 8px 1px rgb(0 0 0 / 40%);
      transform: translateX(10px);
      width: 325px;
      max-height: 540px;
      overflow: auto;
    }

    .country-name {
      display: grid;
      grid-template-columns: calc(100% - 70px) 60px;
      align-items: center;
      width: 100%;
      font: bold 14px/21px sans-serif;
      padding: 5px;
      color: $oceanBlue;
      background-color: $white;
      margin: 0;
    }

    .details-body {
      background-color: $white;
      display: grid;
      padding: 5px;
      grid-template-columns: 100%;
      grid-row-gap: 2px;
    }

    .data-imagery {
      display: grid;
      grid-template-columns: repeat(2, 50%);
    }

    .coatOfArms {
      font: normal 13px/21px sans-serif;
      margin-top: 5px;

      p {
        margin: 0;
      }

      p + div {
        max-width: 140px;
        margin: 0 auto;
      }

      div {
        max-width: 175px;
        margin: 0 auto;
        img { width: 100%; }
      }
    }

    .flag {
      max-width: 60px;
      font: normal 13px sans-serif;
      display: flex;
      img {
        margin: auto;
        width: 100%;
      }
    }

    .capitalCity,
    .nativeName,
    .population,
    .region {
      font: normal 13px/21px sans-serif;
      display: flex;

      p { margin: 0; }

      p:first-child { margin-right: 5px; }
    }

    .un-member,
    .continents {
      font: normal 13px/21px sans-serif;
      display: flex;
      grid-column-gap: 5px;
      p { margin: 0; }
    }

    .alternateMaps {
      font: normal 13px/21px sans-serif;
      overflow: auto;

      > p {
        float: left;
        margin: 0;
      }

      > div {
        display: flex;
        margin-left: 5px;
        float: left;
        grid-column-gap: 10px;

        a {
          color: #313b3f;
          text-decoration: underline;
        }
      }
    }

    .alternateSpellings,
    .languages {
      font: normal 13px/21px sans-serif;
      p {
        margin: 0;
      }

      div {
        span {
          display: block;
          margin-left: 15px;
        }
      }
    }

    .scroller {
      overflow: auto;
      height: 100%;

      ul {
        list-style-type: none;
        font: normal 14px sans-serif;
        padding: 0;
        margin: 0;

        .country-list-item {
          padding: 7px 0 7px 12px;
          cursor: pointer;
          color: #313b3f;

          &:hover {
            background-color: #313b3f;
            color: #d9a74a;
          }
        }
      }
    }

    #map {
      height: auto;
      position: relative;
    }`;

    this.typescript = `
    import { Component, OnInit } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import * as L from 'leaflet';
    import { icon, latLng, Map, MapOptions, Marker, tileLayer, map } from 'leaflet';
    import { RESTCountryModel } from './rest-countries.model';

    @Component({
      selector: 'my-app',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
    })
    export class AppComponent implements OnInit {
      alternateSpellings: Array<{ index: string }>;
      countriesData: RESTCountryModel[] = [];
      userInteraction: boolean = false;
      countriesError: boolean = false;
      borderingCountries: any;
      mapOptions: MapOptions;
      languages: string[] = [];
      continents: string[] = [];
      countryName: string;
      capitalCity: string;
      unMember: boolean;
      coatOfArms: any;
      nativeName: string;
      official: string;
      population: number;
      longitude: number;
      latitude: number;
      alternateMaps: any;
      flag: any;
      map: Map;
      geo: any;

      constructor(private http: HttpClient) {}

      ngOnInit() {
        this.http
          .get<RESTCountryModel[]>('https://restcountries.com/v3.1/all')
          .subscribe(
            (data: any) => {
              this.countriesData = data;
              this.countriesData.sort(function (a, b) {
                if (a.name.common < b.name.common) { return -1; }
                if (a.name.common > b.name.common) { return 1;  }
                return 0;
              });
            },
            (error) => { this.countriesError = true; }
          );
        this.initializeMapOptions();
      }

      onMapReady(map: Map) { this.map = map; }

      private initializeMapOptions() {
        this.mapOptions = {
          center: latLng(38, -97),
          zoom: 4,
          layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
            }),
          ],
        };
      }

      selectItem(i: any, e: any) {
        var name = e.target.innerHTML;
        Object.keys(this.countriesData).map(function (index: any, val: any) {
          if (index.name === name) { i = val; }
        });

        this.setMarker(i);
        this.setDetails(i);
      }

      setMarker(i: any) {
        this.userInteraction = true;
        this.longitude = this.countriesData[i].latlng[0];
        this.latitude = this.countriesData[i].latlng[1];

        const marker = L.marker([this.longitude, this.latitude]).setIcon(
          icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: './assets/icon.png',
          })
        );

        this.map.setView([this.longitude, this.latitude], 5);
        this.map.invalidateSize();
        this.markerHandler(marker);
      }

      markerHandler(pin: any) {
        pin.addTo(this.map).addEventListener('click', function (event: any) {});
      }

      setDetails(i: number) {
        this.countryName = this.countriesData[i].name.official;
        this.countriesData[i].hasOwnProperty('capital')
          ? (this.capitalCity = this.countriesData[i].capital[0])
          : (this.capitalCity = 'Not Listed');
        this.flag = this.countriesData[i].flags.png;
        this.nativeName = this.countriesData[i].name.common;
        this.alternateSpellings = this.countriesData[i].altSpellings;
        this.population = this.countriesData[i].population;
        this.alternateMaps = this.countriesData[i].maps;
        this.geo = this.countriesData[i].region;
        this.unMember = this.countriesData[i].unMember;
        this.coatOfArms = this.countriesData[i].coatOfArms.png;
        this.continents = this.countriesData[i].continents;

        this.languages = [];
        for (let val in this.countriesData[i].languages) {
          this.languages.push(this.countriesData[i].languages[val]);
        }
      }

      formatNumber(i: number) {
        var nf = Intl.NumberFormat(),
          x = this.population,
          result = nf.format(x);
        return result;
      }
    }`;

    this.model = `
    export class RESTCountryModel {
        public altSpellings?: Array<{ index: string }>;
        public area?: number;
        public capital?: string;
        public coatOfArms?: { png: string };
        public continents?: string[];
        public flags?: { png: string };
        public landlocked?: boolean;
        public languages?: { index: string };
        public latlng?: number;
        public maps?: { googleMaps: string; openStreetMaps: string };
        public name?: { common: string; official: string };
        public population?: number;
        public region?: string;
        public unMember?: true;
      
        constructor(
          altSpellings: Array<{ index: string }>,
          area: number,
          coatOfArms: { png: string },
          continents: string[],
          flags: { png: string },
          landlocked: boolean,
          languages: { index: string },
          latlng: number,
          maps: { googleMaps: string; openStreetMaps: string },
          name: { common: string; official: string },
          population: number,
          region: string,
          unMember: true
        ) {
          (this.altSpellings = altSpellings),
            (this.area = area),
            (this.capital = this.capital),
            (this.coatOfArms = coatOfArms),
            (this.continents = this.continents),
            ((this.flags = flags),
            (this.landlocked = landlocked),
            (this.languages = languages),
            (this.latlng = this.latlng),
            (this.maps = maps),
            (this.name = name),
            (this.population = population),
            (this.region = region),
            (this.unMember = unMember));
        }
      }`;

    this.module = `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms';
    import { AppComponent } from './app.component';
    import { HttpClientModule } from '@angular/common/http';
    import { LeafletModule } from '@asymmetrik/ngx-leaflet';

    @NgModule({
      imports: [BrowserModule, HttpClientModule, FormsModule, LeafletModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
    })
    export class AppModule {}`;
  }
}
