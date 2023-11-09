import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePaginatedComponent } from '../../development/components/data-table/data-table.component';
import { AccordionComponent } from '../../development/components/accordion/accordion.component';
import { CountdownComponent } from '../../development/components/countdown/countdown.component';
import { DatePickerComponent } from 'src/app/development/components/date-picker/date-picker.component';
import { DynamicSidebarComponent } from '../../development/components/dynamic-sidebar/dynamic-sidebar.component';
import { SliderComponent } from 'src/app/development/components/slider/slider.component';
import { D3BarGraphComponent } from '../../development/components/d3-bar-graph/d3-bar-graph.component';
import { TableInHTMLComponent } from '../../development/components/table-in-html/table-in-html.component';
import { AppsWrapperComponent } from 'src/app/pages/wrapper-apps/apps-wrapper.component';

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
        component: AccordionComponent
      },
      {
        path: 'doing-business-globally',
        component: CountdownComponent
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
        component: SliderComponent
      },
      {
        path: 'fair-housing',
        component: TableInHTMLComponent
      },
      {
        path: 'information-security',
        component: D3BarGraphComponent
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
  AccordionComponent,
  CountdownComponent,
  DynamicSidebarComponent,
  DatePickerComponent,
  SliderComponent,
  TableInHTMLComponent,
  D3BarGraphComponent
];
