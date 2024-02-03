import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RestCountriesRoutingModule,
  EnvironmentalComplianceComponents
} from './environmental-compliance.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnvironmentalComplianceComponents],
  imports: [CommonModule, SharedModule, FormsModule, RestCountriesRoutingModule]
})
export class RestCountriesModule implements OnInit {
  ngOnInit(): void {}
}
