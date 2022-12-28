import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ProjectListService } from "src/app/services/project-list.service";
import { ScrollToTopService } from "src/app/services/scroll-to-top.service";
import { WindowWidthService } from "src/app/services/window-width.service";
import { ProjectsListInterface } from "../../interfaces/projects-list.interface";

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"],
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  @ViewChild("leftColumn", { static: false }) leftColumn: ElementRef;
  destroy$: Subject<boolean> = new Subject<boolean>();
  projectsArray: ProjectsListInterface[] = [];
  masterArray: ProjectsListInterface[] = [];
  activeCategory: string = "";
  filteredArray: any = [];
  windowWidth: number;

  constructor(
    private _windowWidth: WindowWidthService,
    private _scrollToTop: ScrollToTopService,
    private _projectListService: ProjectListService,
    private _changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Call API or Use Cached Data
    this._projectListService.isThereCache(1, 10);

    // Window Width Service
    this._windowWidth.currentWidth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.windowWidth = value;
      });

    this._projectListService.allProjectsSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.projectsArray = val;
      });

    this._changeDetection.detectChanges();
  }

  // Most Views
  mostViews(type: string) {
    this.projectsArray = this.masterArray;
    this.filteredArray = [];
    this.projectsArray.map((val: any) => {
      val[type] > 0 ? this.filteredArray.push(val) : "";
    });
    this.filteredArray.sort(
      (a: { [x: string]: number }, b: { [x: string]: number }) => {
        return a[type] > b[type] ? -1 : 1;
      }
    );
    this.projectsArray = this.filteredArray;
    this.activeCategory = type;
    this._scrollToTop.scrollToTop();
  }

  // Filter Views
  filterItems(val: string) {
    this.filteredArray = [];
    this.projectsArray = this.masterArray;
    this.projectsArray.filter((value: any) => {
      if (value.category === val) {
        this.filteredArray.push(value);
        this.activeCategory = val;
      }
      if (val === "") {
        this.activeCategory = "";
        this.filteredArray = this.masterArray;
      }

      this.projectsArray = this.filteredArray;
    });
    this._scrollToTop.scrollToTop();
  }

  // Go to External Page
  navigateToExternalPage(url: string) {
    window.location.href = url;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
