import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExperiencePageComponent } from "../../pages/experience/experience-page.component";

const routes: Routes = [
  {
    path: "",
    component: ExperiencePageComponent,
    children: [{ path: "", redirectTo: "", pathMatch: "full" }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}

export const experienceRoutingComponents = [ExperiencePageComponent];
