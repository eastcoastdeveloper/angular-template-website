import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRoutingComponent } from '../components/angular-routing.component';

const routes: Routes = [
  {
    path: '',
    component: AngularRoutingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingRoutingModule {}

export const angularRoutingRoutingComponents = [AngularRoutingComponent];
