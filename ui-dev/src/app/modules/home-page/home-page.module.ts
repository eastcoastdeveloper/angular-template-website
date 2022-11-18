import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule, homeRoutingComponents} from './home-page.routing';

@NgModule({
  declarations: [homeRoutingComponents],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomePageModule {}
