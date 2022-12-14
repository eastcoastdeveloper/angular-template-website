var headers = Array.from(document.querySelectorAll('.headers > div')),
  search = document.getElementById('search-field'),
  caret = document.querySelector('.caret'),
  body = document.querySelector('.body'),
  filterType = null,
  javascript = null,
  filtered = null,
  markup = null,
  table = null,
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
      `<div class="tble-rows">` +
      `<div class="tble-cells">${arr[i].id}</div>` +
      `<div class="tble-cells">${arr[i].brand}</div>` +
      `<div class="tble-cells">${arr[i].category}</div>` +
      `<div class="tble-cells">${arr[i].title}</div>` +
      `<div class="tble-cells">${arr[i].price}</div>` +
      `</div>`;
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

  table = document.getElementById('html-table');
  caret != undefined ? caret.remove() : '';
  caret = document.createElement('span');
  caret.classList.add('caret');
  caret.innerHTML = '&#x25B2';
  index = e.target.getAttribute('data-id');
  e.target.appendChild(caret);
}

/* Import JSON */
(async () => {
  fetch('html-table.json')
    .then((response) => response.json())
    .then((json) => {
      data = json;
      populateTable(data);
      for (var i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', sortColumn);
      }
    });
})();

markup = `
<div>
  <div id="html-table">
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
  </div>
</div>

`;

javascript = `
var headers = Array.from(document.querySelectorAll('.headers > div')),
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
})();

`

var markupElem = document.querySelector('.markup pre code');
var javascriptElem = document.querySelector('.javascript pre code');

markupElem.innerText = markup;
javascriptElem.innerText = javascript;