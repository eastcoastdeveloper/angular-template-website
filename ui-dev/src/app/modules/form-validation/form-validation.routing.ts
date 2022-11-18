import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormValidationComponent } from '../../development/form-validation/form-validation.component';

const routes: Routes = [
  {
    path: '',
    component: FormValidationComponent,
    children: [
      { path: '', redirectTo: 'form-validation', pathMatch: 'full' },
      {
        path: 'form-validation',
        component: FormValidationComponent,
      },
      {
        path: '**',
        component: FormValidationComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormValidationRoutingModule {}

export const formValidationComponents = [];