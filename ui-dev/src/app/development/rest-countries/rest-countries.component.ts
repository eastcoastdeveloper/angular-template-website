import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html'
})
export class RestCountriesComponent implements OnInit {
  urlRestCountries: string =
    'https://stackblitz.com/edit/rest-countries-leaflet-map?file=src%2Fapp%2Fapp.component.ts';
  urlLeaflet: string = 'https://leafletjs.com/';
  urlStackblitz: string = 'https://rest-countries-leaflet-map.stackblitz.io/';
  pageDataObject: PageDataObject = {
    title: 'REST Countries',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'rest-countries',
    repoLink:
      'https://github.com/eastcoastdeveloper/rest-countries-leaflet-map',
    category: '',
    views: 445,
    forks: 3,
    threeColumnLayout: true,
    cornerStone: true
  };

  windowWidthSubscription: Subscription;
  restCountriesProjectImage: string =
    'assets/projects-grid/rest-countries-L.jpg';
  model: string;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this.model = `export class RESTCountryModel {
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
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
