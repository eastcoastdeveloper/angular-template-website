import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleOneModule } from 'src/app/development/routing-sample/modules-angular-one/module-one.module';
import { ModuleThreeModule } from 'src/app/development/routing-sample/modules-angular-three/module-three.module';
import { ModuleTwoModule } from 'src/app/development/routing-sample/modules-angular-two/module-two.module';
import {
  ModulesInAngularRoutingModule,
  modulesInAngularRoutingComponents
} from './routing-in-angular.routing';

@NgModule({
  declarations: [modulesInAngularRoutingComponents],
  imports: [
    CommonModule,
    ModulesInAngularRoutingModule,
    ModuleOneModule,
    ModuleTwoModule,
    ModuleThreeModule
  ]
})
export class ModulesInAngularModule {}
