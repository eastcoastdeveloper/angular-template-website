import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieAppComponent } from '../../development/movie-app/movie-app.component';

const routes: Routes = [
  {
    path: '',
    component: MovieAppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieAppRoutingModule {}

export const movieAppComponents = [MovieAppComponent];
