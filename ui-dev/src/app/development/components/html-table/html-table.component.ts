import { Component, OnInit } from '@angular/core';
import { HighlightAutoResult } from 'ngx-highlightjs';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.scss']
})
export class HtmlTableComponent implements OnInit {
  // Code
  response: HighlightAutoResult;
  typescript = `var headers = Array.from(document.querySelectorAll('.headers > div')),
  search = document.getElementById('search-field'),
  caret = document.querySelector('.caret'),
  body = document.querySelector('.body'),
  filterType = null,
  filtered = null,
  data = null,
  markup = '',
  str = '';

/* Search & Filter */
search.addEventListener('keyup', () => {
  str = search.value;
  if (str != '') {
    filtered = [];
    for (let x of data) {
      Object.values(x).filter((val) => {
        if (typeof val === 'string' && val.includes(str)) {
          filtered.push(x);
          filtered = filtered.filter((item, i) => filtered.indexOf(item) === i);
          populateTable(filtered);
        }
        if (typeof val === 'number' && val.toString().indexOf(str) > -1) {
          filtered.push(x);
          populateTable(filtered);
        }
      });
    }
  } else populateTable(data);
});

/* Populate HTML */
function populateTable(arr) {
  markup = '';
  body.innerHTML = '';
  renderData(arr);
  body.innerHTML = markup;
}

/* Render Data */
function renderData(arr) {
  for (var i = 0; i < arr.length; i++) {
    markup +=
      '<div class="tble-rows">' +
      '<div class="tble-cells">' + arr[i].id + '</div>' +
      '<div class="tble-cells">' + arr[i].brand + '</div>' +
      '<div class="tble-cells">' + arr[i].category + '</div>' +
      '<div class="tble-cells">' + arr[i].title + '</div>' +
      '<div class="tble-cells">' + arr[i].price + '</div>' +
      '</div>';
  }
}

/* Sort */
function comparison(key, order = 'ascending') {
  return (a, b) => {
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'descending' ? comparison * -1 : comparison;
  };
}

/* Filter Type & Caret Positioning */
function sortColumn(e) {
  let index = null;
  filterType = e.target.innerHTML.toLowerCase();
  data.sort(comparison(filterType));
  populateTable(data);

  caret != undefined ? caret.remove() : '';
  caret = document.createElement('span');
  caret.classList.add('caret');
  caret.innerHTML = '&#x25B2';
  index = e.target.getAttribute('data-id');
  e.target.appendChild(caret);
}

/* Import JSON */
(async () => {
  fetch('json url')
    .then((response) => response.json())
    .then((json) => {
      data = json;
      populateTable(data);
    for (var i = 0; i < headers.length; i++) {
      headers[i].addEventListener('click', sortColumn);
    }
  });
})();`;

  markup = `<div id="html-table">
  <div class="search">
    <h4>Smart Phones List</h4>
    <input id="search-field" type="text" placeholder="Search ..." />
  </div>
  <div class="headers">
    <div>ID</div>
    <div>Brand</div>
    <div>Category</div>
    <div>Title</div>
    <div>Price</div>
  </div>
  <div class="body"></div>
</div>`;

  style = `#html-table {
    min-width: 650px;
  }
  .search {
    display: flex;
    padding: 0 10px;
    margin: 10px 0;
    position: relative;
    height: 25px;
  }
  .search h4 {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .search input {
    position: absolute;
    right: 10px;
    height: 100%;
    width: 200px;
    font: normal 14px sans-serif;
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #313b3f;
    outline: none;
  }
  
  .search input::placeholder {
    font: normal 13px sans-serif;
  }
  
  main {
    overflow-x: auto;
  }
  .headers,
  .tble-rows {
    display: grid;
    grid-template-columns: repeat(5, 20%);
  }
  .tble-rows:nth-child(odd) {
    background-color: lightgrey;
  }
  .tble-cells {
    padding: 5px 10px;
  }
  .headers {
    font-weight: 600;
    cursor: pointer;
  }
  .headers > div {
    padding: 5px 10px;
  }
  .tble-cells {
    white-space: nowrap;
  }
  
  #html-table {
    font-family: sans-serif;
    font-size: 13px;
    display: table;
    width: 100%;
    max-width: 768px;
    margin: 50px auto 0 auto;
  }
  .caret {
    transform: rotate(180deg);
    display: inline-block;
    font-size: 10px;
    margin-left: 5px;
  }`;

  pageDataObject: PageDataObject = {
    title: 'Table in HTML',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 3, 2023',
    repoTitle: 'angular-date-picker',
    repoLink:
      'https://github.com/eastcoastdeveloper/datepicker-angular-component',
    category: '',
    views: 28,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: false
  };

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);
  }
}
