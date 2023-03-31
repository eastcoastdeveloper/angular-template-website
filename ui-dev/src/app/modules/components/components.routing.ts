import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsWrapperComponent } from '../../pages/wrapper-components/components-wrapper.component';
import { TablePaginatedComponent } from '../../development/components/data-table/data-table.component';
import { AccordionComponent } from '../../development/components/accordion/accordion.component';
import { CountdownComponent } from '../../development/components/countdown/countdown.component';
import { DatePickerComponent } from 'src/app/development/components/date-picker/date-picker.component';
import { DynamicSidebarComponent } from '../../development/components/dynamic-sidebar/dynamic-sidebar.component';
import { SliderComponent } from 'src/app/development/components/slider/slider.component';
import { D3BarGraphComponent } from '../../development/components/d3-bar-graph/d3-bar-graph.component';
import { TableInHTMLComponent } from '../../development/components/table-in-html/table-in-html.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsWrapperComponent,
    children: [
      { path: '', redirectTo: 'website-features', pathMatch: 'full' },
      {
        path: 'website-features',
        loadChildren: () =>
          import(
            `../cornerstone-components/cornerstone-components.module`
          ).then((m) => m.CornerstoneComponentsModule)
      },
      {
        path: 'angular-data-table',
        component: TablePaginatedComponent
      },
      {
        path: 'accordion-component',
        component: AccordionComponent
      },
      {
        path: 'angular-countdown-timer',
        component: CountdownComponent
      },
      {
        path: 'angular-date-picker',
        component: DatePickerComponent
      },
      {
        path: 'angular-dynamic-sidebar',
        component: DynamicSidebarComponent
      },
      {
        path: 'angular-slider',
        component: SliderComponent
      },
      {
        path: 'table-in-html',
        component: TableInHTMLComponent
      },
      {
        path: 'd3-bar-chart',
        component: D3BarGraphComponent
      },
      { path: '**', redirectTo: 'website-features' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}

export const componentsComponents = [
  ComponentsWrapperComponent,
  TablePaginatedComponent,
  AccordionComponent,
  CountdownComponent,
  DynamicSidebarComponent,
  DatePickerComponent,
  SliderComponent,
  TableInHTMLComponent,
  D3BarGraphComponent
];
