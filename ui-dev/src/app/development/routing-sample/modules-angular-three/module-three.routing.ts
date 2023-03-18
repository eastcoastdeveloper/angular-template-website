import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestThreeComponent } from './test-three.component';

const routes: Routes = [
  {
    path: '',
    component: TestThreeComponent,
    children: [{ path: 'module-three', component: TestThreeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleThreeRoutingModule {}
