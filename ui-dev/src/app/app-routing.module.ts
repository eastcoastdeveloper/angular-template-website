import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ExternalLinkComponent } from "./development/components/external-link/external-link.component";
import { WeatherComponent } from "./development/weather/weather.component";
import { RedirectGuard } from "./guards/redirect.guard";
import { FormConfirmationComponent } from "./pages/form-confirmation/form-confirmation.component";

const routes: Routes = [
  { path: "", redirectTo: "javascript-projects", pathMatch: "full" },
  {
    path: "web-development-projects",
    loadChildren: () =>
      import(`./modules/apps/apps.module`).then((m) => m.AppsModule),
  },
  {
    path: "ui-components",
    loadChildren: () =>
      import(`./modules/components/components.module`).then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: "web-application-development",
    loadChildren: () =>
      import(`./modules/development/development.module`).then(
        (m) => m.DevelopmentModule
      ),
  },
  {
    path: "front-end-dev-resume",
    loadChildren: () =>
      import(`./modules/experience/experience.module`).then(
        (m) => m.ExperiencePageModule
      ),
  },
  {
    path: "front-end-developer",
    loadChildren: () =>
      import(`./modules/about/about.module`).then((m) => m.AboutPageModule),
  },
  {
    path: "d3-bar-chart",
    canActivate: [RedirectGuard],
    component: ExternalLinkComponent,
    data: {
      externalUrl: "https://frontenddevelopment.tech/components/d3-bar-chart/",
    },
  },
  {
    path: "table-in-html",
    canActivate: [RedirectGuard],
    component: ExternalLinkComponent,
    data: {
      externalUrl: "https://frontenddevelopment.tech/components/table-in-html/",
    },
  },
  {
    path: "inquire",
    canActivate: [RedirectGuard],
    component: ExternalLinkComponent,
    data: {
      externalUrl: "https://frontenddevelopment.tech/contact/inquire.html",
    },
  },
  {
    path: "javascript-projects",
    loadChildren: () =>
      import(`./modules/projects-list/projects-list.module`).then(
        (m) => m.ProjectListModule
      ),
  },
  { path: "**", redirectTo: "javascript-projects" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [RedirectGuard],
})
export class AppRoutingModule {}

export const appRoutingComponents = [
  WeatherComponent,
  FormConfirmationComponent,
  ExternalLinkComponent,
];
