import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CornerstoneDevelopmentComponent } from "../../pages/cornerstone-development/cornerstone-development.component";

const routes: Routes = [
  {
    path: "",
    component: CornerstoneDevelopmentComponent,
    children: [{ path: "", redirectTo: "", pathMatch: "full" }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CornerstoneDevelopmentRoutingModule {}

export const cornerstoneDevelopmentCmpts = [
  CornerstoneDevelopmentComponent,
];
