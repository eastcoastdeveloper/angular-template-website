import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsiderTradingComponent } from '../../development/insider-trading/insider-trading.component';

const routes: Routes = [
  {
    path: '',
    component: InsiderTradingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteExamplesRoutingModule {}

export const insiderTradingComponents = [InsiderTradingComponent];
