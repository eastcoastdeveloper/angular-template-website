import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-drag-drop-ui',
  templateUrl: './drag-drop-ui.component.html',
  styleUrls: ['./drag-drop-ui.component.scss']
})
export class DragDropUiComponent {
  pageDataObject: PageDataObject = {
    title: 'JavaScript Drag and Drop',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 3, 2023',
    repoTitle: 'javascript-drag-and-drop',
    repoLink: 'https://github.com/eastcoastdeveloper/drag-and-drop-javascript',
    category: 'projects',
    views: 219,
    forks: 3
  };

  protected markup: string;
  protected typescript: string;
  protected interface: string;
  protected snippetOne: string;
  protected snippetTwo: string;
  protected snippetThree: string;
  protected snippetFour: string;
  protected snippetFive: string;
  protected scss: string;
  protected json: string;

  @ViewChildren('typeName') typeName: QueryList<any>;
  @ViewChild('newDirectory', { static: false }) newDirectory: ElementRef;
  @ViewChild('newGroup', { static: false }) newGroup: ElementRef;

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.renderCode();
  }

  private renderCode() {
    this.snippetOne = `items.push({ title: this.itemTitle })`;
    this.snippetTwo = `{title: 'colors'}, {title: 'cities'}`;
    this.snippetThree = `{title: itemTitle}, {title: itemTitle}. itemAdded()`;
    this.snippetFour = `[{active: false}, {active: false}, {active: false}, {active: false}, ...]`;
    this.snippetFive = `{active: true}`;

    this.json = `
    {
      "unsortedItems": [
        {
          "items": [
            { "name": "Orange"     },
            { "name": "Apple"      },
            { "name": "Pear"       },
            { "name": "Watermelon" },
            { "name": "Kiwi"       },
            { "name": "Banana"     },
            { "name": "Papya"      }
          ]
        },
        {
          "items": [
            { "name": "Ford"   },
            { "name": "Honda"  },
            { "name": "Chevy"  },
            { "name": "Nissan" },
            { "name": "Tesla"  },
            { "name": "Toyota" },
            { "name": "Opel"   }
          ]
        },
        {
          "items": [
            { "name": "Los Angeles"  },
            { "name": "Chicago"      },
            { "name": "New York"     },
            { "name": "Indianapolis" },
            { "name": "Miami"        },
            { "name": "Phoenix"      },
            { "name": "Boise"        }
          ]
        },
        {
          "items": [
            { "name": "blue"      },
            { "name": "red"       },
            { "name": "purple"    },
            { "name": "turquoise" },
            { "name": "green"     },
            { "name": "pink"      },
            { "name": "maroon"    }
          ]
        },
        {
          "items": [
            { "name": "dog"     },
            { "name": "cat"     },
            { "name": "monkey"  },
            { "name": "lizard"  },
            { "name": "bear"    },
            { "name": "wolf"    },
            { "name": "giraffe" }
          ]
        },
        {
          "items": [
            { "name": "sunday"    },
            { "name": "monday"    },
            { "name": "tuesday"   },
            { "name": "wednesday" },
            { "name": "thursday"  },
            { "name": "friday"    },
            { "name": "saturday"  }
          ]
        }
      ]
    }`;

    this.interface = `
    export class ItemResponse {
      [index: number]: { items: { name: string }[] };
    }`;

    this.typescript = `
    items: { title: string }[] = [];
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
      this._http.get<Response[]>('assets/unsorted.json').subscribe(val => {
        this.result = val;
        this.setInputBooleans();
      });
    }
  
    // Array's same length as JSON...Hides Add New Name Field
    setInputBooleans() {
      this.addNewItem.push({ active: false });
    }
  
    // Add Dragstart Evt to All
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

          elem.innerHTML = '<p>' + this.draggedItem + "</p><div class='named-elem'><span>&#x293A;</span></div>";
          val.parentElement.querySelector('.dragged-items').appendChild(elem);
          this.namedElements = Array.from(document.querySelectorAll('.named-elem'));

          this.namedElements.forEach((elem: any, indice: number) => {
            elem.addEventListener('click', (e: any) => {
              this.uploadedCount[i] = Array.from(val.parentElement.querySelectorAll('.dragged-items li'));
              e.target.parentElement.parentElement.remove();
              e.stopImmediatePropagation();
              let groupI = e.target.parentElement.parentElement.dataset.groupindex;
              this.result[groupI].items.push({name: e.target.parentElement.parentElement.querySelector('p').innerText});
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
  
    // Delete Directory/Dropzone
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
  
    // Delete Dragable
    deleteName(i: number, j: number) {
      this.result[i].items.splice(j, 1);
      this.typeName.length - 1;
      this.removeInputs();
    }
  
    // Add New Dragable Group
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
  
    // Add New Drop Zone on Enter
    getKeyCode(e: any) {
      e.code === 'Enter' ? this.itemAdded() : '';
    }
  
    // Add New Group on Enter
    addGroupKeyCode(e: any) {
      e.code === 'Enter' ? this.addGroup() : '';
    }
  
    // Add New Item on Enter
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
  }`;

    this.markup = `
    <div class="wrapper">
    <header [ngClass]="{ 'border-btm': items.length > 0 }">
      <p>Drag-Drop UI</p>
      <small>&mdash;&nbsp;&nbsp;No Libraries or Packages&nbsp;&nbsp;&mdash;</small>
      <div class="add-btn">Add Directory</div>
      <div class="add-new">
        <input placeholder="Add directory name" #newDirectory [(ngModel)]="itemTitle" (keydown)="getKeyCode($event)"/>
        <button (click)="itemAdded()">Add</button>
      </div>
    </header>
    <div class="selected-content" [ngClass]="{ hasDirectories: items.length > 0 }">
      <div class="child-container" *ngFor="let item of items; let i = index" id="{{ 'group' + i }}">
        <hr />
        <p class="group-index">{{ items[i].title }}</p>
        <div class="delete" (click)="deleteItem(i)">
          <i>&times;</i>
          <div class="faux-btn"></div>
        </div>
        <div class="drop-zone">
          <p class="ddText">Drag & Drop</p>
        </div>
        <div class="toggle-block">
          <p *ngIf="uploadedCount[i] != undefined && uploadedCount[i].length > 0">
            {{ uploadedCount[i].length }} Items
          </p>
          <ul class="dragged-items"></ul>
          <span (click)="toggleBlock(i)" class="arrow" *ngIf="uploadedCount[i] != undefined && uploadedCount[i].length > 0">
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
            <input placeholder="Add new item" [(ngModel)]="groupItem" (keydown)="addNewItemField($event, i)"/>
            <button (click)="pushNamedItem(i)">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    this.scss = `
  .wrapper {
    font-family: Lato;
    background-color: lightgrey;
    max-width: 1000px;
    margin: 0 auto;
    .add-btn {
      float: left;
      color: #fff;
      font-size: 17px;
      padding: 3px 10px 4px 10px;
      border-radius: 4px;
      margin-left: 10px;
      background-color: #333;
      width: 150px;
      text-align: center;
    }
    .group {
      margin-left: 20px;
      margin-top: 10px;
    }
    header {
      background-color: lightgray;
      overflow: auto;
      padding: 10px;
      position: relative;
      p {
        line-height: 36px;
        color: #333;
        font-size: 20px;
        text-align: center;
        margin: 20px 0 0 10px;
      }
      small {
        margin-bottom: 20px;
        display: block;
        text-align: center;
        font-style: italic;
        font-family: inherit;
      }
    }
    .selected-content {
      background-color: lightgray;
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 5px));
      grid-gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
      .child-container {
        min-height: 50px;
        background-color: #333;
        border-radius: 4px;
        color: #fff;
        padding-top: 25px;
        position: relative;
        max-width: 500px;
        padding-bottom: 10px;
        hr {
          margin-top: 22px;
        }
        .group-index {
          text-transform: uppercase;
          font-size: 14px;
          margin: 0;
          padding-left: 10px;
          padding-bottom: 5px;
          position: absolute;
          top: 15px;
        }
        .dragged-items {
          list-style-type: none;
          line-height: 25px;
          padding: 0 0 0 30px;
          ::ng-deep {
            li {
              overflow: auto;
              padding-right: 15px;
              margin: 5px 0;
              p {
                margin: 0;
                float: left;
              }
              div {
                float: right;
                position: relative;
                border: 1px solid white;
                width: 25px;
                height: 25px;
                border-radius: 4px;
                cursor: pointer;
                span {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -60%);
                  font-weight: bold;
                  font-size: 20px;
                  transition: transform 0.25s;
                }
              }
            }
          }
        }
        .rotate-arrow {
          transform: rotate(-90deg) !important;
        }
        .toggle-block {
          position: relative;
          transition: all 0.2s;
          max-height: 500px;
          overflow: hidden;
          p {
            margin: 0 0 0 10px;
            transform: translateY(5px);
          }
          span {
            position: absolute;
            top: 0;
            right: 15px;
            border-radius: 3px;
            border: 1px solid white;
            padding: 4px;
            cursor: pointer;
          }
        }
        .close-block {
          max-height: 30px;
        }
      }
      .drop-zone {
        height: 50px;
        margin-top: 20px;
        border: 3px dashed;
        margin: 30px 10px 20px 10px;
        border-radius: 4px;
        display: flex;
        .ddText {
          margin: auto;
          font-size: 14px;
          text-transform: uppercase;
        }
      }
    }
    .hasDirectories {
      padding: 20px 20px 10px 20px;
    }
    .border-btm {
      border-bottom: 1px solid #333;
    }
    .delete {
      background-color: lightgray;
      position: absolute;
      width: 25px;
      height: 25px;
      top: 10px;
      right: 10px;
      display: flex;
      border: 1px solid white;
      border-radius: 2px;
      i {
        margin: auto;
        font-size: 25px;
        color: #333;
        transform: translate(-1px, -4px);
      }
      .faux-btn {
        position: absolute;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }
    }
    .unsorted {
      display: flex;
      clear: left;
      position: relative;
      flex-wrap: wrap;
      max-width: 1000px;
      margin: 50px auto 0 auto;
      padding: 0 0 20px 10px;
      text-transform: capitalize;
      > div {
        margin-bottom: 30px;
      }
      [data-group] {
        position: relative;
        margin: 10px;
        span {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 14px;
          color: white;
          cursor: pointer;
        }
      }
      .add-new-name {
        background-color: #1b9e61;
        position: absolute;
        width: 30px;
        border-radius: 4px;
        margin-left: 10px;
        display: flex;
        cursor: pointer;
        span {
          color: white;
          margin: auto;
          font-size: 20px;
        }
        .add-new {
          position: absolute;
          top: 30px;
          left: 0;
          z-index: 1;
          background-color: lightgrey;
          border: 1px solid #333;
          padding: 10px;
          border-radius: 4px;
          box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.4);
        }
      }
      .delete-item {
        width: 16px;
        height: 17px;
        position: absolute;
        top: 10.5px;
        right: 10px;
        border-radius: 2px;
        border: 1px solid white;
        cursor: pointer;
      }
      p {
        background-color: #333;
        padding: 10px;
        color: white;
        border-radius: 4px;
        cursor: move;
        width: 125px;
        transition: all 0.25s;
      }
    }
    .dragging p {
      opacity: 0.5;
      transform: scale(1.1);
    }
    .add-new {
      display: flex;
      float: right;
      margin-right: 10px;
      input {
        border: none;
        height: 26px;
        outline: none;
        font-size: 14px;
        width: 200px;
        padding-left: 5px;
        border-top-left-radius: 4px;
        padding: 0 0 0 5px;
        border-bottom-left-radius: 4px;
        margin-right: 5px;
      }
      button {
        height: 28px;
        border: none;
        outline: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .drag-zone-active {
      background-color: mediumturquoise;
      color: #333;
      border-color: lightgrey !important;
    }
    .required-field {
      background-color: #b33a3a;
      color: white;
    }
    .required-field::placeholder {
      color: white;
    }
  }`;
  } // renderCode end
}
