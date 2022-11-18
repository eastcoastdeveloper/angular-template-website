import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {
  CornerstoneAppsRoutingModule,
  cornerstoneAppsComponents,
} from './cornerstone-apps.routing';

@NgModule({
  declarations: [cornerstoneAppsComponents],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CornerstoneAppsRoutingModule
  ],
})
export class CornerstoneAppsModule {}
