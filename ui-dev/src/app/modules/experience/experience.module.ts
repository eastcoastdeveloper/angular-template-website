import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RightColumnModule } from '../shared/right-column.module';
import { SharedModule } from '../shared/shared.module';
import {
  ExperienceRoutingModule,
  experienceRoutingComponents
} from './experience.routing';

@NgModule({
  declarations: [experienceRoutingComponents],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule,
    RightColumnModule
  ]
})
export class ExperiencePageModule {}
