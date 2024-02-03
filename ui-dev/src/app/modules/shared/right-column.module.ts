import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnComponent } from '../../components/right-column/right-column.component';

@NgModule({
  declarations: [RightColumnComponent],
  imports: [CommonModule],
  exports: [RightColumnComponent]
})
export class RightColumnModule {}
