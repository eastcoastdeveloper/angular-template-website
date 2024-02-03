import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePaginatedComponent } from '../../development/components/data-table/data-table.component';
import { FairCompetitionComponent } from '../../development/components/fair-competition/fair-competition.component';
import { DoingBusinessGloballyComponent } from '../../development/components/doing-business-globally/doing-business-globally.component';
import { DatePickerComponent } from 'src/app/development/components/date-picker/date-picker.component';
import { DynamicSidebarComponent } from '../../development/components/dynamic-sidebar/dynamic-sidebar.component';
import { UnfairLaborPracticesComponent } from 'src/app/development/components/unfair-labor-practices/unfair-labor-practices.component';
import { InformationSecurityComponent } from '../../development/components/information-security/information-security.component';
import { AppsWrapperComponent } from 'src/app/pages/wrapper-apps/apps-wrapper.component';
import { FairHousingComponent } from 'src/app/development/components/fair-housing/table-in-html.component';

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
        component: TablePaginatedComponent
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
        component: DatePickerComponent
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
export class ComponentsRoutingModule {}

export const componentsComponents = [
  TablePaginatedComponent,
  FairCompetitionComponent,
  DoingBusinessGloballyComponent,
  DynamicSidebarComponent,
  DatePickerComponent,
  UnfairLaborPracticesComponent,
  FairHousingComponent,
  InformationSecurityComponent
];
