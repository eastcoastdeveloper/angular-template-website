import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataPrivacySecurityComponent } from '../../content/data-privacy-security/data-privacy-security.component';
import { FairCompetitionComponent } from '../../content/fair-competition/fair-competition.component';
import { DoingBusinessGloballyComponent } from '../../content/doing-business-globally/doing-business-globally.component';
import { AccurateBookRecordsComponent } from 'src/app/content/accurate-book-records/accurate-book-records.component';
import { DynamicSidebarComponent } from '../../content/building-trust/building-trust.component';
import { UnfairLaborPracticesComponent } from 'src/app/content/unfair-labor-practices/unfair-labor-practices.component';
import { InformationSecurityComponent } from '../../content/information-security/information-security.component';
import { AppsWrapperComponent } from 'src/app/pages/wrapper-apps/apps-wrapper.component';
import { FairHousingComponent } from 'src/app/content/fair-housing/table-in-html.component';

const routes: Routes = [
  {
    path: '',
    component: AppsWrapperComponent,
    children: [
      { path: '', redirectTo: 'standards-classes', pathMatch: 'full' },
      {
        path: 'standards-classes',
        loadChildren: () =>
          import(
            `../cornerstone-components/cornerstone-components.module`
          ).then((m) => m.CornerstoneComponentsModule)
      },
      {
        path: 'data-privacy-security',
        component: DataPrivacySecurityComponent
      },
      {
        path: 'fair-competition',
        component: FairCompetitionComponent
      },
      {
        path: 'doing-business-globally',
        component: DoingBusinessGloballyComponent
      },
      {
        path: 'accurate-book-records',
        component: AccurateBookRecordsComponent
      },
      {
        path: 'building-trust',
        component: DynamicSidebarComponent
      },
      {
        path: 'unfair-labor-practices',
        component: UnfairLaborPracticesComponent
      },
      {
        path: 'fair-housing',
        component: FairHousingComponent
      },
      {
        path: 'information-security',
        component: InformationSecurityComponent
      },
      { path: '**', redirectTo: 'standards-classes' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardsRoutingModule {}

export const standardsComponents = [
  DataPrivacySecurityComponent,
  FairCompetitionComponent,
  DoingBusinessGloballyComponent,
  DynamicSidebarComponent,
  AccurateBookRecordsComponent,
  UnfairLaborPracticesComponent,
  FairHousingComponent,
  InformationSecurityComponent
];
