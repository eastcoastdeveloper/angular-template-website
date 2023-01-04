import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import {
  ComponentsRoutingModule,
  componentsComponents
} from './components.routing';
import { RightColumnModule } from '../shared/right-column.module';

@NgModule({
  declarations: [componentsComponents],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    ComponentsRoutingModule,
    RightColumnModule
  ],
  exports: [NgxPaginationModule]
})
export class ComponentsModule {}
