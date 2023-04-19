import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html'
})
export class RestCountriesComponent {
  restCountriesProjectImage = 'assets/projects-grid/rest-countries-L.jpg';
  urlStackblitz = 'https://rest-countries-leaflet-map.stackblitz.io/';
  urlEndpoint = 'https://restcountries.com/';
  urlLeaflet = 'https://leafletjs.com/';
  urlRestCountries =
    'https://stackblitz.com/edit/rest-countries-leaflet-map?file=src%2Fapp%2Fapp.component.ts';

  pageDataObject: PageDataObject = {
    title: 'REST Countries',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'rest-countries',
    repoLink:
      'https://github.com/eastcoastdeveloper/rest-countries-leaflet-map',
    category: '',
    views: 501,
    forks: 3,
    threeColumnLayout: true,
    cornerStone: false,
    meta: {
      description:
        "REST Countries is a TypeScript powered app using Leaflet's mapping abilities in conjunction w/ REST Countries' data.",
      keywords: 'web development project, rest coutries api, free api',
      title: 'REST Countries API',
      dateCreated: '',
      dateModified: ''
    }
  };

  model = `export class RESTCountryModel {
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

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
