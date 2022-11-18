import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestCountriesComponent } from '../../development/rest-countries/rest-countries.component';

const routes: Routes = [
  {
    path: '',
    component: RestCountriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestCountriesRoutingModule {}

export const restCountriesComponents = [RestCountriesComponent];
