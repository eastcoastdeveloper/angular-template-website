import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NasaPODRoutingModule, nasaPODComponents } from './nasa-pod.routing';
import { NasaHeaderComponent } from '../../development/nasa/header/header.component';
import { NasaSearchComponent } from '../../development/nasa/seachbar/search.component';
import { NasaPhotoBodyComponent } from '../../development/nasa/photo-body/photo-body.component';
import { CalendarComponent } from 'src/app/development/nasa/date-picker/date-picker.component';

@NgModule({
  declarations: [
    nasaPODComponents,
    NasaHeaderComponent,
    NasaSearchComponent,
    NasaPhotoBodyComponent,
    CalendarComponent
  ],
  imports: [CommonModule, NasaPODRoutingModule, SharedModule],
})
export class NasaPODModule {}
