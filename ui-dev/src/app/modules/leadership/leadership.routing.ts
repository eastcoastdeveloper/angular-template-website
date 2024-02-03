import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularjsProjectComponent } from 'src/app/content/records-managememt/records-managememt.component';
import { LibraryComponent } from '../../pages/library/library.component';
import { LeadershipComponent } from 'src/app/pages/leadership/leadership.component';
import { EthicalSalePracticesComponent } from 'src/app/content/ethical-sales-practices/ethical-sales-practices.component';
import { EnvironmentalComplianceComponent } from 'src/app/content/environmental-compliance/environmental-compliance.component';
import { InsiderTradingComponent } from 'src/app/content/insider-trading/insider-trading.component';
import { CharitableSolicitations } from 'src/app/content/charitable-solicitations/charitable-solicitations.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      { path: '', redirectTo: 'leadership-classes', pathMatch: 'full' },
      {
        path: 'leadership-classes',
        component: LeadershipComponent
      },
      {
        path: 'ethical-sales-practices',
        component: EthicalSalePracticesComponent
      },
      {
        path: 'environmental-compliance',
        component: EnvironmentalComplianceComponent
      },
      {
        path: 'records-management',
        component: AngularjsProjectComponent
      },
      {
        path: 'insider-trading',
        component: InsiderTradingComponent
      },
      {
        path: 'charitable-solicitations',
        component: CharitableSolicitations
      },
      {
        path: '**',
        redirectTo: 'leadership-classes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipWrapperModule {}

export const appsComponents = [
  AngularjsProjectComponent,
  LeadershipComponent,
  EthicalSalePracticesComponent,
  EnvironmentalComplianceComponent,
  InsiderTradingComponent,
  CharitableSolicitations
];
