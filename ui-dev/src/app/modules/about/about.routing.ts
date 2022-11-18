import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutPageComponent } from "../../pages/about/about-page.component";

const routes: Routes = [
  {
    path: "",
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}

export const aboutRoutingComponents = [AboutPageComponent];
