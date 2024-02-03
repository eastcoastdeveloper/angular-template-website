import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CharitableSolicitationsRoutingModule,
  dragdropRoutingComponents
} from './charitable-solicitations.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [dragdropRoutingComponents],
  imports: [CommonModule, CharitableSolicitationsRoutingModule, FormsModule]
})
export class CharitableSolicitationsModule {}
