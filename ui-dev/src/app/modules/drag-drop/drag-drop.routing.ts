import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropUiComponent } from '../../development/drag-drop-ui/drag-drop-ui.component';

const routes: Routes = [
  {
    path: '',
    component: DragDropUiComponent,
    children: [{ path: '', redirectTo: '', pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragDropRoutingModule {}

export const dragdropRoutingComponents = [DragDropUiComponent];
