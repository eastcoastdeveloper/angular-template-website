import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RightColumnComponent } from '../../components/right-column/right-column.component';

@NgModule({
  declarations: [RightColumnComponent],
  imports: [CommonModule, LeafletModule],
  exports: [RightColumnComponent]
})
export class RightColumnModule {}
