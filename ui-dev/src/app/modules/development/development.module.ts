import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  DevelopmentRoutingModule,
  developmentComponents
} from './development.routing';
import { RightColumnModule } from '../shared/right-column.module';
import { SharedModule } from '../shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [developmentComponents],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    DevelopmentRoutingModule,
    RightColumnModule,
    HighlightModule
  ],
  exports: []
})
export class DevelopmentModule {}
