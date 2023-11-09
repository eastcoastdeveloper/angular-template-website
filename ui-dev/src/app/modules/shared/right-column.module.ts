import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnComponent } from '../../structural/right-column/right-column.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [RightColumnComponent],
  imports: [CommonModule, LeafletModule],
  exports: [RightColumnComponent]
})
export class RightColumnModule {}
