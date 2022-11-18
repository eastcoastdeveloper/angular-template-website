import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteExamplesComponent } from '../../development/website-examples/website-examples.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteExamplesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteExamplesRoutingModule {}

export const websiteExamplesComponents = [WebsiteExamplesComponent];
