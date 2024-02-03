import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WebsiteExamplesRoutingModule,
  insiderTradingComponents
} from './insider-trading.routing';

@NgModule({
  declarations: [insiderTradingComponents],
  imports: [CommonModule, WebsiteExamplesRoutingModule]
})
export class WebsiteExamplesModule {}
