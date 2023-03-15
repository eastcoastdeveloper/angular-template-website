import { Component, AfterViewChecked } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements AfterViewChecked {
  private unsubscribe$ = new Subject<void>();
  threeColumnLayout?: boolean;
  cornerStone?: boolean;
  windowWidth?: number;

  socials: { name: string; link: string; altText: string; src: string }[] = [
    {
      name: 'Stackblitz',
      link: 'https://stackblitz.com/@eastcoastdeveloper',
      src: './../../assets/img/logo_stackblitz.png',
      altText: 'stackblitz logo'
    },
    {
      name: 'Codepen',
      link: 'https://codepen.io/eastcoastdeveloper/pens/popular?grid_type=list',
      src: '../../../assets/img/logo_codepen.png',
      altText: 'codepen logo'
    },
    {
      name: 'Flickr',
      link: 'https://flickr.com/photos/nodulldays/',
      src: '../../../assets/img/logo_flickr.png',
      altText: 'flickr logo'
    },
    {
      name: 'Git',
      link: 'https://github.com/eastcoastdeveloper?tab=repositories',
      src: '../../../assets/img/logo_git.png',
      altText: 'git logo'
    },
    {
      name: 'Blog',
      link: 'https://fredrickjaxx.is/',
      src: '../../../assets/img/logo_FJ.png',
      altText: 'fredrick jaxx blogo logo'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/nodulldayz/',
      src: '../../../assets/img/logo_instagram.png',
      altText: 'instagram logo'
    }
  ];

  constructor(private _globalFeatures: GlobalFeaturesService) {}

  ngAfterViewChecked(): void {
    this._globalFeatures.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
