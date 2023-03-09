import { Component, AfterViewChecked } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements AfterViewChecked {
  private unsubscribe$ = new Subject<boolean>();
  threeColumnLayout?: boolean;
  cornerStone?: boolean;
  windowWidth?: number;

  stackblitz: string = '../../../assets/img/logo_stackblitz.png';
  flickr: string = '../../../assets/img/logo_flickr.png';
  git: string = '../../../assets/img/logo_git.png';
  codepen: string = '../../../assets/img/logo_codepen.png';
  instagram: string = '../../../assets/img/logo_instagram.png';
  fredrickJaxx: string = '../../../assets/img/logo_FJ.png';

  constructor(private _globalFeaturesService: GlobalFeaturesService) {}

  ngAfterViewChecked(): void {
    this._globalFeaturesService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }
}
