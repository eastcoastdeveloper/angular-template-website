import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styles: `.feature-img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: transparent}`
})
export class PageContentComponent {
  @Input() imgPlaceholder: string;

  getImgUrl() {
    return this.imgPlaceholder;
  }
}
