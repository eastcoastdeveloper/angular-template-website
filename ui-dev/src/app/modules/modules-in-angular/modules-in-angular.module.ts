import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleOneModule } from 'src/app/development/modules-angular-one/module-one.module';
import { ModuleThreeModule } from 'src/app/development/modules-angular-three/module-three.module';
import { ModuleTwoModule } from 'src/app/development/modules-angular-two/module-two.module';
import {
  ModulesInAngularRoutingModule,
  modulesInAngularRoutingComponents,
} from './modules-in-angular.routing';

@NgModule({
  declarations: [modulesInAngularRoutingComponents],
  imports: [
    CommonModule,
    ModulesInAngularRoutingModule,
    ModuleOneModule,
    ModuleTwoModule,
    ModuleThreeModule
  ],
})
export class ModulesInAngularModule {}
