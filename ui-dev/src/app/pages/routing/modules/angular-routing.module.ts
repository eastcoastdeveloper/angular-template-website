import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AngularRoutingRoutingModule,
  angularRoutingRoutingComponents,
} from './angular-routing.routing';

@NgModule({
  declarations: [angularRoutingRoutingComponents],
  imports: [CommonModule, AngularRoutingRoutingModule],
})
export class AngularRoutingModule {}
