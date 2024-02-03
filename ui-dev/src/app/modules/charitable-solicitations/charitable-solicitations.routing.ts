import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharitableSolicitations } from '../../content/charitable-solicitations/charitable-solicitations.component';

const routes: Routes = [
  {
    path: '',
    component: CharitableSolicitations,
    children: [{ path: '', redirectTo: '', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharitableSolicitationsRoutingModule {}

export const dragdropRoutingComponents = [CharitableSolicitations];
