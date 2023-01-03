import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DragDropRoutingModule,
  dragdropRoutingComponents
} from './drag-drop.routing';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [dragdropRoutingComponents],
  imports: [CommonModule, DragDropRoutingModule, FormsModule, HighlightModule]
})
export class DragDropModule {}
