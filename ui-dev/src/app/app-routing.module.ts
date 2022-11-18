import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { WeatherComponent } from "./development/weather/weather.component";
import { FormConfirmationComponent } from "./pages/form-confirmation/form-confirmation.component";

const routes: Routes = [
  { path: "", redirectTo: "web-development", pathMatch: "full" },
  {
    path: "projects",
    loadChildren: () =>
      import(`./modules/apps/apps.module`).then((m) => m.AppsModule),
  },
  {
    path: "components",
    loadChildren: () =>
      import(`./modules/components/components.module`).then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: "development",
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
    path: "web-development",
    loadChildren: () =>
      import(`./modules/projects-list/projects-list.module`).then(
        (m) => m.ProjectListModule
      ),
  },
  { path: "**", redirectTo: "web-development" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const appRoutingComponents = [
  WeatherComponent,
  FormConfirmationComponent,
];
