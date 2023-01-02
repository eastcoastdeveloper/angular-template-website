import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTwoComponent } from './test-two.component';

const routes: Routes = [
  {
    path: '',
    component: TestTwoComponent,
    children: [{ path: 'module-two', component: TestTwoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule {}
