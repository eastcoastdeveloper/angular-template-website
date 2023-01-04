import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InPageNavigationComponent } from 'src/app/development/components/in-page-navigation/in-page-navigation.component';
import { ServicesComponent } from 'src/app/development/components/services/services.component';
import { DevelopmentWrapper } from 'src/app/pages/wrapper-development/development-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentWrapper,
    children: [
      { path: '', redirectTo: 'learn-to-code', pathMatch: 'full' },
      {
        path: 'learn-to-code',
        loadChildren: () =>
          import(
            `../../modules/cornerstone-development/cornerstone-development.module`
          ).then((m) => m.CornerstoneDevelopmentModule)
      },
      {
        path: 'modules-in-angular',
        loadChildren: () =>
          import(`../modules-in-angular/modules-in-angular.module`).then(
            (m) => m.ModulesInAngularModule
          )
      },
      {
        path: 'in-page-navigation',
        component: InPageNavigationComponent
      },
      {
        path: 'services-in-angular',
        component: ServicesComponent
      },
      { path: '**', redirectTo: 'learn-to-code' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentRoutingModule {}

export const developmentComponents = [
  DevelopmentWrapper,
  ServicesComponent,
  InPageNavigationComponent
];
