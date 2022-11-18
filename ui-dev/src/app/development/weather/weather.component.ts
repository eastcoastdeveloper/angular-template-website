import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
// import { icon, latLng, Map, MapOptions, Marker, tileLayer } from 'leaflet';
import { Subscription } from 'rxjs';
import { WindowWidthService } from 'src/app/services/window-width.service';
// declare let L;

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  // // country: string;
  // // fahrenheit: number = null;
  // // feelsLike: number = null;
  // // humidity: number = null;
  // // baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  // // key: string = '&appid=5fa988728912c96f18d5abbb35a0a12f';
  // // pageData: any[] = [];
  // // windowWidth: number;
  // // windowWidthSubscription: Subscription;

  // // Map
  // mapOptions: MapOptions;
  // map: Map;
  // userInteraction: boolean = false;
  // longitude: any = null;
  // latitude: any = null;
  // weatherData: any;
  // error: boolean = false;

  // // @ViewChild('cityName', { static: false }) cityName: ElementRef;
  // // @ViewChild('temperature', { static: false }) temperature: ElementRef;

  // constructor(
  //   private http: HttpClient,
  //   // private _childRoutes: ChildRoutesService,
  //   private _windowWidth: WindowWidthService
  // ) {}

  // ngOnInit(): void {
  //   // this.windowWidthSubscription = this._windowWidth.currentWidth$.subscribe(
  //   //   (currentVal) => {
  //   //     this.windowWidth = currentVal;
  //   //   }
  //   // );
  //   // // this.pageData = this._childRoutes.pageDataAPI;
  //   // this.initializeMapOptions();
  // }

  // private initializeMapOptions() {
  //   this.mapOptions = {
  //     center: latLng(38, -97),
  //     zoom: 6,
  //     layers: [
  //       tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         maxZoom: 18,
  //         attribution: 'Map data © OpenStreetMap contributors',
  //       }),
  //     ],
  //   };
  // }

  // onMapReady(map: Map) {
  //   this.map = map;
  //   this.setMarker(this.weatherData);
  //   map.panTo(new L.LatLng(this.latitude, this.longitude));
  // }

  // // SINGLE DAY
  // getSingleDay() {
  //   this.http
  //     .get<any>(this.baseUrl + this.cityName.nativeElement.value + this.key)
  //     .subscribe(
  //       (weatherData) => {
  //         this.error = false;
  //         (this.country = weatherData.sys.country),
  //           (this.fahrenheit =
  //             Math.ceil((weatherData.main.temp - 273.15) * 1.8) + 32);
  //         this.humidity = weatherData.main.humidity;
  //         this.feelsLike =
  //           Math.ceil((weatherData.main.feels_like - 273.15) * 1.8) + 32;
  //         this.weatherData = weatherData;
  //         this.setMarker(this.weatherData);
  //         if (this.map != undefined) {
  //           this.map.panTo(new L.LatLng(this.latitude, this.longitude));
  //         }
  //       },
  //       (error) => {
  //         this.error = true;
  //         // this.clearData();
  //       }
  //     );
  // }

  // setMarker(data: any) {
  //   this.userInteraction = true;
  //   this.longitude = data.coord.lon;
  //   this.latitude = data.coord.lat;
  //   const marker = new Marker([this.longitude, this.latitude]).setIcon(
  //     icon({
  //       iconSize: [25, 41],
  //       iconAnchor: [13, 41],
  //       iconUrl: '/assets/leaflet/marker-icon-2x.png',
  //     })
  //   );
  //   marker.bindTooltip(this.weatherData.name).openTooltip();
  // }

  // // clearData() {
  // //   this.fahrenheit = null;
  // //   this.feelsLike = null;
  // //   this.humidity = null;
  // //   this.cityName.nativeElement.value = '';
  // // }

  // ngOnDestroy(): void {
  //   this.windowWidthSubscription.unsubscribe();
  // }
}
