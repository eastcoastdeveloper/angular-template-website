import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularjsProjectComponent } from 'src/app/development/angularjs-project/angularjs-project.component';
import { AppsWrapperComponent } from '../../pages/wrapper-apps/apps-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AppsWrapperComponent,
    children: [
      { path: '', redirectTo: 'front-end-development', pathMatch: 'full' },
      {
        path: 'front-end-development',
        loadChildren: () =>
          import(`../cornerstone-apps/cornerstone-apps.module`).then(
            (m) => m.CornerstoneAppsModule
          )
      },
      {
        path: 'apod-nasa-gov',
        loadChildren: () =>
          import(`../nasa/nasa-pod.module`).then((m) => m.NasaPODModule)
      },
      {
        path: 'omdb-api',
        data: { title: 'OMDB API' },
        loadChildren: () =>
          import(`../omdb/movie-app.module`).then((m) => m.MovieAppModule)
      },
      {
        path: 'rest-countries',
        data: { title: 'REST Countries & Leaflet' },
        loadChildren: () =>
          import(`../rest-countries/rest-countries.module`).then(
            (m) => m.RestCountriesModule
          )
      },
      {
        path: 'angularjs-project',
        component: AngularjsProjectComponent
      },
      {
        path: 'website-examples',
        data: { title: 'Website Examples' },
        loadChildren: () =>
          import(`../website-examples/website-examples.module`).then(
            (m) => m.WebsiteExamplesModule
          )
      },
      {
        path: 'javascript-drag-and-drop',
        data: { title: 'JavaScript Drag and Drop' },
        loadChildren: () =>
          import(`../drag-drop/drag-drop.module`).then((m) => m.DragDropModule)
      },
      {
        path: '**',
        redirectTo: 'front-end-development'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HighlightModule],
  exports: [RouterModule]
})
export class AppsRoutingModule {}

export const appsComponents = [AppsWrapperComponent, AngularjsProjectComponent];
