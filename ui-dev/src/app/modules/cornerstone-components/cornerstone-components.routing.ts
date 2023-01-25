import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CornerstoneComponentsComponent } from '../../pages/cornerstone-components/cornerstone-components.component';

const routes: Routes = [
  {
    path: '',
    component: CornerstoneComponentsComponent,
    children: [{ path: '', redirectTo: '', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CornerstoneComponentsRoutingModule {}

export const cornerstoneComponentsComponents = [CornerstoneComponentsComponent];
