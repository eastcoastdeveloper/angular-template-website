import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestOneComponent } from './test-one.component';

const routes: Routes = [
  {
    path: '',
    component: TestOneComponent,
    children: [{ path: 'module-one', component: TestOneComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule {}

export const moduleOneRouterComponents = [TestOneComponent];
