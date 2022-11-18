import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RightColumnModule } from "../shared/right-column.module";
import { AboutRoutingModule, aboutRoutingComponents } from "./about.routing";

@NgModule({
  declarations: [aboutRoutingComponents],
  imports: [CommonModule, AboutRoutingModule, RightColumnModule],
})
export class AboutPageModule {}
