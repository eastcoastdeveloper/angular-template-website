import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularjsProjectComponent } from 'src/app/content/records-managememt/records-managememt.component';
import { AppsWrapperComponent } from '../../pages/wrapper-apps/apps-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AppsWrapperComponent,
    children: [
      { path: '', redirectTo: 'leadership-classes', pathMatch: 'full' },
      {
        path: 'leadership-classes',
        loadChildren: () =>
          import(`../leadership/leadership.module`).then(
            (m) => m.CornerstoneAppsModule
          )
      },
      {
        path: 'ethical-sales-practices',
        loadChildren: () =>
          import(
            `../ethical-sale-practices/ethical-sale-practices.module`
          ).then((m) => m.MovieAppModule)
      },
      {
        path: 'environmental-compliance',
        loadChildren: () =>
          import(
            `../environmental-compliance/environmental-compliance.module`
          ).then((m) => m.RestCountriesModule)
      },
      {
        path: 'records-management',
        component: AngularjsProjectComponent
      },
      {
        path: 'insider-trading',
        loadChildren: () =>
          import(`../insider-trading/insider-trading.module`).then(
            (m) => m.WebsiteExamplesModule
          )
      },
      {
        path: 'charitable-solicitations',
        loadChildren: () =>
          import(
            `../charitable-solicitations/charitable-solicitations.module`
          ).then((m) => m.CharitableSolicitationsModule)
      },
      {
        path: '**',
        redirectTo: 'leadership-classes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {}

export const appsComponents = [AngularjsProjectComponent];
