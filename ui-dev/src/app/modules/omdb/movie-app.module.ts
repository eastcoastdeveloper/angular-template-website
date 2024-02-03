import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MovieAppRoutingModule, movieAppComponents } from './movie-app.routing';

@NgModule({
  declarations: [movieAppComponents],
  imports: [CommonModule, MovieAppRoutingModule, SharedModule]
})
export class MovieAppModule {}
