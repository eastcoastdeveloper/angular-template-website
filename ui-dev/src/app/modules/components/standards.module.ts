import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {
  StandardsRoutingModule,
  standardsComponents
} from '../standards/standards.routing';
import { RightColumnModule } from '../shared/right-column.module';

@NgModule({
  declarations: [standardsComponents],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    SharedModule,
    StandardsRoutingModule,
    RightColumnModule
  ],
  exports: [NgxPaginationModule]
})
export class ComponentsModule {}
