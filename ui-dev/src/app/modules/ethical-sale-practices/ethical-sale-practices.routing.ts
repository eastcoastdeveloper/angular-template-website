import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EthicalSalePracticesComponent } from '../../content/ethical-sales-practices/ethical-sales-practices.component';

const routes: Routes = [
  {
    path: '',
    component: EthicalSalePracticesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieAppRoutingModule {}

export const movieAppComponents = [EthicalSalePracticesComponent];
