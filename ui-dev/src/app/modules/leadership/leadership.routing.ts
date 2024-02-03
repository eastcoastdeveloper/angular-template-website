import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CornerstoneAppsComponent } from '../../pages/cornerstone-apps/cornerstone-apps.component';

const routes: Routes = [
  {
    path: '',
    component: CornerstoneAppsComponent,
    children: [{ path: '', redirectTo: '', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CornerstoneAppsRoutingModule {}

export const cornerstoneAppsComponents = [CornerstoneAppsComponent];
