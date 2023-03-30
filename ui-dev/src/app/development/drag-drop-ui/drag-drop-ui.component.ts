import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-drag-drop-ui',
  templateUrl: './drag-drop-ui.component.html'
})
export class DragDropUiComponent {
  dragDropImage = 'assets/projects-grid/js-drag-drop.jpg';
  urlStackblitz =
    'https://stackblitz.com/edit/drag-and-drop-javascript?file=src%2Fapp%2Fapp.component.ts';

  pageDataObject: PageDataObject = {
    title: 'JavaScript Drag and Drop',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'javascript-drag-and-drop',
    repoLink: 'https://github.com/eastcoastdeveloper/drag-and-drop-javascript',
    category: 'projects',
    views: 271,
    forks: 3,
    cornerStone: true,
    threeColumnLayout: true,
    meta: {
      description:
        'JavaScript drag and drop app w/ code/ explanation. Indicative of a cloud storage UI. Add new named groups/ content.',
      keywords:
        'web development project, angular drag and drop, drag and drop angular',
      title: 'JavaScript Drag and Drop',
      dateCreated: '2022-10-15',
      dateModified: '2023-10-25'
    }
  };

  protected markup: string;
  protected typescript: string;
  protected snippetOne: string;
  protected snippetTwo: string;
  protected snippetThree: string;
  protected snippetFour: string;
  protected snippetFive: string;

  @ViewChild('newDirectory', { static: false }) newDirectory: ElementRef;
  @ViewChild('newGroup', { static: false }) newGroup: ElementRef;
  @ViewChildren('typeName') typeName: QueryList<any>;

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  ngOnInit() {
    this.renderCode();
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }

  private renderCode() {
    this.snippetOne = `items.push({ title: this.itemTitle })`;
    this.snippetTwo = `{title: 'colors'}, {title: 'cities'}`;
    this.snippetThree = `{title: itemTitle}, {title: itemTitle}. itemAdded()`;
    this.snippetFour = `[{active: false}, {active: false}, {active: false}, {active: false}, ...]`;
    this.snippetFive = `{active: true}`;

    this.typescript = `items: { title: string }[] = [];
private unsubscribe$ = new Subject<void>();
groupItem: string;
groupIndex: any;
result: any = [];
uploadedCount: any[] = [];
itemTitle: string;
itemName: string;
addNewItem: { active: boolean }[] = [];
itemIndex: string;
namedElements: any = [];
directoryElements: any;
draggedItem: any;
draggedElement: any;

@ViewChildren('typeName') typeName: QueryList<ElementRef[]>;
@ViewChild('newDirectory', { static: false }) newDirectory: ElementRef;
@ViewChild('newGroup', { static: false }) newGroup: ElementRef;

constructor(private _http: HttpClient) {
  // Get JSON
  // Import HttpClientModule to the Parent Module
  this._http.get<Response[]>('path-to-json')
  .pipe(takeUntil(this.unsubscribe$))
  .subscribe(val => {
    this.result = val;
    this.setInputBooleans();
  });
}

// Array's same length as JSON...Hides Add New Name Field
setInputBooleans() {
  this.addNewItem.push({ active: false });
}

// Add Dragstart Event to All
dragStartHandler(e: any) {
  this.groupIndex = e.target.dataset.group;
  this.itemIndex = e.target.dataset.name;
  this.draggedElement = e.target;
  this.draggedItem = this.draggedElement.querySelector('p').innerText;
  this.draggedElement.classList.add('dragging');
  this.collectDropZones();
}

dragEndHandler(e: any) {
  this.draggedElement.classList.remove('dragging');
}

// From UI to Drop Zones
collectDropZones() {
  this.directoryElements = Array.from(
    document.querySelectorAll('.child-container .drop-zone')
  );
  this.directoryElements.forEach((val: any, i: number) => {
    
    // Drag Leave Event
    val.addEventListener('dragleave', () => {
      this.removeActiveDropZone(val);
    });

    // Drag Over Event
    val.addEventListener('dragover', (e: any) => {
      e.preventDefault();
      val.classList.add('drag-zone-active');
    });

    // Drop Event
    val.addEventListener('drop', (e: any) => {

      // Kill Other Events
      e.stopImmediatePropagation();
      this.removeActiveDropZone(val);
      this.result[this.groupIndex].items.splice([this.itemIndex], 1);
      let elem = document.createElement('li');
      elem.setAttribute('data-groupIndex', this.groupIndex);

      elem.innerHTML = '<p>' + this.draggedItem +
      "</p><div class='named-elem'><span>&#x293A;</span></div>";
      val.parentElement.querySelector('.dragged-items').appendChild(elem);
      this.namedElements = Array.from(document.querySelectorAll('.named-elem'));

      this.namedElements.forEach((elem: any, indice: number) => {
        elem.addEventListener('click', (e: any) => {
          this.uploadedCount[i] =
          Array.from(val.parentElement.querySelectorAll('.dragged-items li'));
          e.target.parentElement.parentElement.remove();
          e.stopImmediatePropagation();
          let groupI = e.target.parentElement.parentElement.dataset.groupindex;
          this.result[groupI].items.push(
            {name: e.target.parentElement.parentElement.querySelector('p').innerText});
          this.namedElements = Array.from(document.querySelectorAll('.named-elem'));
          this.uploadedCount[i].pop();
        });
      });
    });
  });
}

toggleBlock(i: number) {
  this.directoryElements = Array.from(
    document.querySelectorAll('.child-container .drop-zone')
  );
  let elem = this.directoryElements[i].parentElement.querySelector('.toggle-block'),
      arrow = this.directoryElements[i].parentElement.querySelector('.toggle-block .arrow');
  
  elem.classList.toggle('close-block');
  arrow.classList.toggle('rotate-arrow');
}

// Stop Drop Active Indicator
removeActiveDropZone(elem: any) {
  elem.classList.remove('drag-zone-active');
}

// Add New Directory/Dropzone
itemAdded() {
  if (this.itemTitle != undefined) {
    this.newDirectory.nativeElement.classList.remove('required-field');
    this.items.push({ title: this.itemTitle });
    this.itemTitle = '';
    this.removeInputs();
  } else {
    this.newDirectory.nativeElement.classList.add('required-field');
  }
  this.itemTitle = undefined;
}

// Delete Directory/ Dropzone
// Return Elems to Groups
deleteItem(i: number) {
  this.items.splice(i, 1);
  this.uploadedCount.splice(i, 1);
  let cContainer = document.querySelector('.child-container .toggle-block ul');
  if (cContainer.innerHTML != '') {
    let arr = Array.from(cContainer.querySelectorAll('li'));
    for (var i = 0; i < arr.length; i++) {
      let groupI = arr[i].dataset.groupindex;
      this.result[groupI].items.push({
        name: arr[i].querySelector('p').innerText,
      });
    }
  }
}

// Delete Draggable
deleteName(i: number, j: number) {
  this.result[i].items.splice(j, 1);
  this.typeName.length - 1;
  this.removeInputs();
}

// Add New Draggable Group
addGroup() {
  if (this.itemName != undefined) {
    this.newGroup.nativeElement.classList.remove('required-field');
    this.result.push({items: [{ name: this.itemName }]});
    this.itemName = '';
    this.setInputBooleans();
    this.removeInputs();
  } else {
    this.newGroup.nativeElement.classList.add('required-field');
  }
  this.itemName = undefined;
}

// Add New Drop Zone on Keypress (Enter)
getKeyCode(e: any) {
  e.code === 'Enter' ? this.itemAdded() : '';
}

// Add New Group on Keypress (Enter)
addGroupKeyCode(e: any) {
  e.code === 'Enter' ? this.addGroup() : '';
}

// Add New Item on Keypress (Enter)
addNewItemField(e: any, i: number) {
  e.code === 'Enter' ? this.pushNamedItem(i) : '';
}

addNamedItem(i: number) {
  this.removeInputs();
  this.addNewItem[i].active = true;
}

pushNamedItem(i: number) {
  this.groupItem.length > 10 ? (this.groupItem = this.groupItem.slice(0, 10) + ' . . .') : '';
  this.result[i].items.push({ name: this.groupItem });
  this.groupItem = undefined;
  this.addNewItem[i].active = false;
}

// Hide Input Fields
removeInputs() {
  this.addNewItem.forEach((val: any) => {
    val.active = false;
  });
}

ngOnDestroy(){
  this.unsubscribe$.next;
  this.unsubscribe$.complete();
}
}`;

    this.markup = `<div class="wrapper">
  <header [ngClass]="{ 'border-btm': items.length > 0 }">
    <p>Drag-Drop UI</p>
    <small>&mdash;&nbsp;&nbsp;No Libraries or Packages&nbsp;&nbsp;&mdash;</small>
    <div class="add-btn">Add Directory</div>
    <div class="add-new">
      <input
        placeholder="Add directory name"
        #newDirectory
        [(ngModel)]="itemTitle"
        (keydown)="getKeyCode($event)"/>
      <button (click)="itemAdded()">Add</button>
    </div>
  </header>
  <div
    class="selected-content"
    [ngClass]="{ hasDirectories: items.length > 0 }">
    <div class="child-container" *ngFor="let item of items; let i = index" id="{{ 'group' + i }}">
      <hr />
      <p class="group-index">{{ items[i].title }}</p>
      <div class="delete" (click)="deleteItem(i)">
        <i>&times;</i>
        <div class="faux-btn"></div>
      </div>
      <div class="drop-zone"><p class="ddText">Drag & Drop</p></div>
      <div class="toggle-block">
        <p *ngIf="uploadedCount[i] != undefined && uploadedCount[i].length > 0">
          {{ uploadedCount[i].length }} Items
        </p>
        <ul class="dragged-items"></ul>
        <span (click)="toggleBlock(i)" class="arrow"
          *ngIf="uploadedCount[i] != undefined && uploadedCount[i].length > 0">
          &#9660;
        </span>
      </div>
    </div>
  </div>
  <div class="add-btn group">Add Group Item</div>
  <div class="add-new mr-20">
    <input placeholder="Add group item" (keydown)="addGroupKeyCode($event)" [(ngModel)]="itemName" #newGroup class="mt-10"/>
    <button (click)="addGroup()" class="mt-10">Add</button>
  </div>
  <div class="unsorted">
    <div *ngFor="let items of result; let i = index">
      <div
        *ngFor="let type of result[i].items; let j = index"
        draggable="true"
        (dragstart)="dragStartHandler($event)"
        (dragend)="dragEndHandler($event)"
        #typeName
        [attr.data-group]="i"
        [attr.data-name]="j"
      >
        <div>
          <p>{{ type.name }}</p>
          <span>&times;</span>
          <div class="delete-item" (click)="deleteName(i, j)"></div>
        </div>
      </div>
      <div class="add-new-name" *ngIf="result[i].items.length > 0">
        <span (click)="addNamedItem(i)">&#43;</span>
        <div class="add-new" *ngIf="addNewItem[i].active">
          <input
            placeholder="Add new item"
            [(ngModel)]="groupItem"
            (keydown)="addNewItemField($event, i)"/>
          <button (click)="pushNamedItem(i)">Add</button>
        </div>
      </div>
    </div>
  </div>
</div>`;
  } // renderCode end
}
