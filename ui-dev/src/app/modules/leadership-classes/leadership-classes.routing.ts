import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadershipClassesComponent } from '../../pages/leadership-classes/leadership-classes.component';

const routes: Routes = [
  {
    path: '',
    component: LeadershipClassesComponent,
    children: [{ path: '', redirectTo: '', pathMatch: 'full' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipClassesRoutingModule {}

export const leadershipClassesComponents = [LeadershipClassesComponent];
