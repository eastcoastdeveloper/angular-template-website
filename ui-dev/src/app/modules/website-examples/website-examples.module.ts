import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteExamplesRoutingModule, websiteExamplesComponents} from './website-examples.routing';

@NgModule({
  declarations: [
    websiteExamplesComponents
  ],
  imports: [CommonModule, WebsiteExamplesRoutingModule],
})
export class WebsiteExamplesModule { }