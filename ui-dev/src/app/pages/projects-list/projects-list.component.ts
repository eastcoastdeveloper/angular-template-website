import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subscription } from "rxjs";
import { ProjectListService } from "src/app/services/current-route.service";
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
  windowWidthSubscription: Subscription;
  activeCategory: string = "";
  filteredArray: any = [];
  projectsArray: ProjectsListInterface[] = [];
  masterArray: ProjectsListInterface[] = [];
  windowWidth: number;

  constructor(
    private _windowWidth: WindowWidthService,
    private _scrollToTop: ScrollToTopService,
    private _projectListService: ProjectListService
  ) {}

  ngOnInit(): void {
    this.projectsArray = this._projectListService.projectList;
    this.projectsArray = this.projectsArray.slice(
      0,
      this.projectsArray.length - 3
    );
    this.masterArray = this.projectsArray.slice();

    this.windowWidthSubscription = this._windowWidth.currentWidth$.subscribe(
      (value) => {
        this.windowWidth = value;
      }
    );
  }

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

  navigateToExternalPage(url: string) {
    window.location.href = url;
  }

  ngOnDestroy(): void {
    this.windowWidthSubscription.unsubscribe();
  }
}
