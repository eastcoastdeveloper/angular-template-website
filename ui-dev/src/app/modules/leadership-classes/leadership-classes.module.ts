import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {
  LeadershipClassesRoutingModule,
  leadershipClassesComponents
} from './leadership-classes.routing';

@NgModule({
  declarations: [leadershipClassesComponents],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    LeadershipClassesRoutingModule
  ]
})
export class CornerstoneAppsModule {}
