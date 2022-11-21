import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsWrapperComponent } from "../../pages/wrapper-components/components-wrapper.component";
import { TablePaginatedComponent } from "../../development/components/table-paginated/table-paginated.component";
import { AccordionComponent } from "../../development/components/accordion/accordion.component";
import { CategoryMenuComponent } from "src/app/development/components/category-menu/category-menu.component";
import { CalculatorComponent } from "../../development/components/calculator/calculator.component";
import { CountdownComponent } from "../../development/components/countdown/countdown.component";
import { DatePickerComponent } from "src/app/development/components/date-picker/date-picker.component";
import { DynamicSidebarComponent } from "../../development/components/dynamic-sidebar/dynamic-sidebar.component";
import { SliderComponent } from "src/app/development/components/slider/slider.component";

const routes: Routes = [
  {
    path: "",
    component: ComponentsWrapperComponent,
    children: [
      { path: "", redirectTo: "angular-components", pathMatch: "full" },
      {
        path: "angular-components",
        loadChildren: () =>
          import(
            `../cornerstone-components/cornerstone-components.module`
          ).then((m) => m.CornerstoneComponentsModule),
      },
      {
        path: "angular-data-table",
        component: TablePaginatedComponent,
      },
      {
        path: "accordion-component",
        component: AccordionComponent,
      },
      {
        path: "angular-countdown-timer",
        component: CountdownComponent,
      },
      {
        path: "angular-date-picker",
        component: DatePickerComponent,
      },
      {
        path: "angular-dynamic-sidebar",
        component: DynamicSidebarComponent,
      },
      {
        path: "angular-slider",
        component: SliderComponent,
      },
      { path: "**", redirectTo: "angular-components" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

export const componentsComponents = [
  ComponentsWrapperComponent,
  TablePaginatedComponent,
  AccordionComponent,
  CategoryMenuComponent,
  CalculatorComponent,
  CountdownComponent,
  DynamicSidebarComponent,
  DatePickerComponent,
  SliderComponent,
];