import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaComponent } from '../../development/nasa/wrapper/nasa.component';

const routes: Routes = [
  {
    path: '',
    component: NasaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasaPODRoutingModule {}

export const nasaPODComponents = [NasaComponent];
