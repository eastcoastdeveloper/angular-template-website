import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafetySecurityComponent } from 'src/app/content/safety-security/safety-security.component';
import { AppsWrapperComponent } from 'src/app/pages/wrapper-apps/apps-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AppsWrapperComponent,
    children: [
      { path: '', redirectTo: 'security-classes', pathMatch: 'full' },
      {
        path: 'security-classes',
        loadChildren: () =>
          import(
            `../../modules/cornerstone-development/cornerstone-development.module`
          ).then((m) => m.CornerstoneDevelopmentModule)
      },
      {
        path: 'regulatory-environment',
        loadChildren: () =>
          import(`../routing-in-angular/routing-in-angular.module`).then(
            (m) => m.ModulesInAngularModule
          )
      },
      {
        path: 'safety-security',
        component: SafetySecurityComponent
      },
      { path: '**', redirectTo: 'security-classes' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentRoutingModule {}

export const developmentComponents = [SafetySecurityComponent];
