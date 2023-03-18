import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
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
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ComponentsRoutingModule,
    RightColumnModule
  ],
  exports: [NgxPaginationModule]
})
export class ComponentsModule {}
