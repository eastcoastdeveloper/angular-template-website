import { Component } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { GlobalFeaturesService } from 'src/app/services/global-features.service';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-table-in-html',
  templateUrl: './table-in-html.component.html'
})
export class TableInHTMLComponent {
  typescript = `var headers = Array.from(document.querySelectorAll('.headers > div')),
  search = document.getElementById('search-field'),
  clear = document.querySelector('.clear'),
  caret = document.querySelector('.caret'),
  body = document.querySelector('.body'),
  filterType = null,
  filtered = null,
  data = null,
  markup = '',
  str = '';

clear.addEventListener('click', () => {
  search.value = '';
  populateTable(data);
  clear.classList.remove('enable-clear');
});

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
        clear.classList.add('enable-clear');
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

(async () => {
  const { default: json } = await import('path-to-json', {
    assert: { type: 'json' },
  });
  data = json.products;
  populateTable(data);
  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', sortColumn);
  }
})();`;

  markup = `<main>
  <div id="html-table">
    <div class="masthead">
      <h4>Smart Phones List</h4>
      <div class="search">
        <input id="search-field" type="text" placeholder="Search ..." />
        <span class="clear">&#x2715</span>
      </div>
    </div>
    <div class="headers">
      <div>ID</div>
      <div>Brand</div>
      <div>Category</div>
      <div>Title</div>
      <div>Price</div>
    </div>
    <div class="body"></div>
  </div>
  </main>`;

  style = `html,
  body {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  #html-table {
    min-width: 650px;
  }
  .masthead {
    display: grid;
    padding: 0 10px;
    margin: 10px 0;
    grid-template-columns: calc(100% - 200px) 200px;
    height: 25px;
  }
  .masthead h4 {
    margin: 0;
    line-height: 25px;
  }
  .masthead input {
    height: 100%;
    width: 100%;
    font: normal 14px sans-serif;
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #313b3f;
    outline: none;
  }
  
  .masthead .search {
    width: 200px;
    position: relative;
  }
  
  .masthead .clear {
    border: 1px solid black;
    display: none;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    padding: 1px 3px;
    font-size: 10px;
    cursor: pointer;
  }
  
  .enable-clear {
    display: block !important;
  }
  
  .masthead input::placeholder {
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
  }
  footer {
    position: absolute;
    background-color: #313b3f;
    color: #d9a74a;
    width: 100%;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    font: normal 14px sans-serif;
    bottom: 0;
  }
  .website {
    font: normal 14px sans-serif;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    top: 0;
    letter-spacing: 0.5px;
    display: block;
    cursor: pointer;
    background-color: #313b3f;
    padding: 10px;
    overflow: auto;
  }
  .website a {
    text-decoration: none;
    color: #d9a74a;
    float: right;
  }
  .website span {
    color: #d9a74a;
  }
  `;

  urlStackblitz: string =
    'https://stackblitz.com/edit/table-in-html?file=index.js';

  htmlTableProjectImage: string =
    '../../../../assets/projects-grid/table-html-js.png';
  pageDataObject: PageDataObject = {
    title: 'Table in HTML',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 10, 2023',
    repoTitle: 'angular-date-picker',
    repoLink: 'https://github.com/eastcoastdeveloper/Dynamic-HTML-Table',
    category: 'components',
    views: 74,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: false,
    meta: {
      description:
        'Table in HTML written in basic HTML, straightforward style, w/ numerous lean JavaScript features including JSON import.',
      keywords: 'web development project, html table css, website features',
      title: 'Table in HTML',
      dateCreated: '2022-10-15',
      dateModified: '2023-04-05'
    }
  };

  constructor(
    private _projectListService: ProjectListService,
    private _globalFeatures: GlobalFeaturesService
  ) {
    this._projectListService.changePageDataObject(this.pageDataObject);
  }

  navigateToPage(url: string) {
    this._globalFeatures.externalLink(url);
  }
}
