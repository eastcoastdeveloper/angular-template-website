import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {
  CornerstoneDevelopmentRoutingModule,
  cornerstoneDevelopmentCmpts,
} from './cornerstone-development.routing';

@NgModule({
  declarations: [cornerstoneDevelopmentCmpts],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CornerstoneDevelopmentRoutingModule,
  ]
})
export class CornerstoneDevelopmentModule {}
