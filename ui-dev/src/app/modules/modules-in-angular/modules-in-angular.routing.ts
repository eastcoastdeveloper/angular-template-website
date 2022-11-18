import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesInAngularComponent } from '../../pages/modules-in-angular/modules-in-angular.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesInAngularComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import(
            `../../development/modules-angular-one/module-one.module`
          ).then((m) => m.ModuleOneModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import(
            `../../development/modules-angular-two/module-two.module`
          ).then((m) => m.ModuleTwoModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import(
            `../../development/modules-angular-three/module-three.module`
          ).then((m) => m.ModuleThreeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesInAngularRoutingModule {}

export const modulesInAngularRoutingComponents = [ModulesInAngularComponent];
