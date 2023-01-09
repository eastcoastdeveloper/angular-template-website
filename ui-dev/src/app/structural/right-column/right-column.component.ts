import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CodeSamplesInterface } from 'src/app/interfaces/code-samples.interface';
import { WindowWidthService } from 'src/app/services/window-width.service';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements OnInit, AfterViewChecked {
  @ViewChild('accordionParent') accordionParent!: ElementRef;
  private unsubscribe$ = new Subject<boolean>();
  accordionData: CodeSamplesInterface[] = [];
  threeColumnLayout?: boolean;
  cornerStone?: boolean;
  windowWidth?: number;

  stackblitz: string = '../../../assets/img/logo_stackblitz.png';
  flickr: string = '../../../assets/img/logo_flickr.png';
  git: string = '../../../assets/img/logo_git.png';
  codepen: string = '../../../assets/img/logo_codepen.png';
  instagram: string = '../../../assets/img/logo_instagram.png';
  fredrickJaxx: string = '../../../assets/img/logo_FJ.png';

  constructor(
    private _http: HttpClient,
    private _windowWidthService: WindowWidthService
  ) {}

  ngOnInit(): void {
    this._http.get('./assets/json/code-samples.json').subscribe((res) => {
      let arr = Object.values(res)[0];
      for (let i = 0; i < arr.length; i++) {
        this.accordionData.push(arr[i]);
      }
    });
  }

  ngAfterViewChecked(): void {
    this._windowWidthService.currentWidth$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val) => {
        this.windowWidth = val;
      });
  }
}
