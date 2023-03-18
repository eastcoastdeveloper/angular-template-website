import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ModuleOneRoutingModule,
  moduleOneRouterComponents
} from './module-one.routing';

@NgModule({
  declarations: [moduleOneRouterComponents],
  imports: [CommonModule, ModuleOneRoutingModule]
})
export class ModuleOneModule {}
