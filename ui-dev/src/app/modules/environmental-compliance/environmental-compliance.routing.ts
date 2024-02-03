import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvironmentalComplianceComponent } from '../../content/environmental-compliance/environmental-compliance.component';

const routes: Routes = [
  {
    path: '',
    component: EnvironmentalComplianceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestCountriesRoutingModule {}

export const EnvironmentalComplianceComponents = [
  EnvironmentalComplianceComponent
];
