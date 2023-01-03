import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RestCountriesRoutingModule,
  restCountriesComponents
} from './rest-countries.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [restCountriesComponents],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RestCountriesRoutingModule,
    HighlightModule
  ]
})
export class RestCountriesModule implements OnInit {
  ngOnInit(): void {}
}
