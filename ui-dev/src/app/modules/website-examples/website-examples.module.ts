import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WebsiteExamplesRoutingModule,
  insiderTradingComponents
} from './website-examples.routing';

@NgModule({
  declarations: [insiderTradingComponents],
  imports: [CommonModule, WebsiteExamplesRoutingModule]
})
export class WebsiteExamplesModule {}
