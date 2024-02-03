import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RightColumnModule } from '../shared/right-column.module';
import { SharedModule } from '../shared/shared.module';

import {
  LibraryRoutingModule,
  libraryRoutingComponents
} from './library.routing';

@NgModule({
  declarations: [libraryRoutingComponents],
  imports: [CommonModule, LibraryRoutingModule, RightColumnModule, SharedModule]
})
export class LibraryModule {}
