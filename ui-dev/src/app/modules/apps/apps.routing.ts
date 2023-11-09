import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularjsProjectComponent } from 'src/app/development/angularjs-project/angularjs-project.component';
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
          import(`../cornerstone-apps/cornerstone-apps.module`).then(
            (m) => m.CornerstoneAppsModule
          )
      },
      {
        path: 'ensuring-positive-workplace',
        loadChildren: () =>
          import(`../nasa/nasa-pod.module`).then((m) => m.NasaPODModule)
      },
      {
        path: 'ethical-sales-practices',
        loadChildren: () =>
          import(`../omdb/movie-app.module`).then((m) => m.MovieAppModule)
      },
      {
        path: 'environmental-compliance',
        loadChildren: () =>
          import(`../rest-countries/rest-countries.module`).then(
            (m) => m.RestCountriesModule
          )
      },
      {
        path: 'records-management',
        component: AngularjsProjectComponent
      },
      {
        path: 'insider-trading',
        loadChildren: () =>
          import(`../website-examples/website-examples.module`).then(
            (m) => m.WebsiteExamplesModule
          )
      },
      {
        path: 'charitable-solicitations',
        data: { title: 'JavaScript Drag and Drop' },
        loadChildren: () =>
          import(`../drag-drop/drag-drop.module`).then((m) => m.DragDropModule)
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
