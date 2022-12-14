import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import {
  CornerstoneComponentsRoutingModule,
  cornerstoneComponentsComponents,
} from "./cornerstone-components.routing";

@NgModule({
  declarations: [cornerstoneComponentsComponents],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CornerstoneComponentsRoutingModule,
  ],
})
export class CornerstoneComponentsModule {}
