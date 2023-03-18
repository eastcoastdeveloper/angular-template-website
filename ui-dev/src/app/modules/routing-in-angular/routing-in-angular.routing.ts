import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingInAngularComponent } from '../../pages/routing-in-angular/routing-in-angular.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingInAngularComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import(
            `../../development/routing-sample/modules-angular-one/module-one.module`
          ).then((m) => m.ModuleOneModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import(
            `../../development/routing-sample/modules-angular-two/module-two.module`
          ).then((m) => m.ModuleTwoModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import(
            `../../development/routing-sample/modules-angular-three/module-three.module`
          ).then((m) => m.ModuleThreeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesInAngularRoutingModule {}

export const modulesInAngularRoutingComponents = [RoutingInAngularComponent];
