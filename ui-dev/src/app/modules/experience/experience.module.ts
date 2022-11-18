import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RightColumnModule } from "../shared/right-column.module";
import {
  ExperienceRoutingModule,
  experienceRoutingComponents,
} from "./experience.routing";

@NgModule({
  declarations: [experienceRoutingComponents],
  imports: [CommonModule, ExperienceRoutingModule, RightColumnModule],
})
export class ExperiencePageModule {}
