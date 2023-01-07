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
import { ProjectListService } from 'src/app/services/project-list.service';
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

  constructor(
    private _http: HttpClient,
    private _projectListService: ProjectListService,
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

    // this._projectListService.pageDataObjectSubject
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((val) => {
    //     this.threeColumnLayout = val.threeColumnLayout;
    //     this.cornerStone = val.cornerStone;
    //     console.log(this.threeColumnLayout);
    //     console.log(this.cornerStone);
    //   });
  }
}
