import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppsRoutingModule, appsComponents } from './leadership.routing';
import { RouterModule } from '@angular/router';
import { RightColumnModule } from '../shared/right-column.module';

@NgModule({
  declarations: [appsComponents],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppsRoutingModule,
    RightColumnModule
  ]
})
export class AppsModule {}
