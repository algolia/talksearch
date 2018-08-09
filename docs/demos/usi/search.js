"use strict";

const indexName = 'usi';
const apiKey = '34a93be83090d4d32f3e357f3f97a7f1';
const placeholder = null;
const search = instantsearch({
  appId: '8J7GPSC0XN',
  apiKey,
  indexName,
  routing: true,
  searchParameters: {
    hitsPerPage: 21,
    facetingAfterDistinct: true
  }
});
search.on('render', () => {
  const pageLoadElement = document.getElementById('firstRender');

  if (!pageLoadElement) {
    setTimeout(() => {
      const span = document.createElement('span');
      span.setAttribute('id', 'firstRender');
      document.body.appendChild(span);
    }, 1000);
  }
});
search.addWidget(instantsearch.widgets.searchBox({
  container: '#searchbox',
  placeholder: placeholder || 'Search inside all videos',
  poweredBy: false,
  wrapInput: false,
  loadingIndicator: false
}));
search.addWidget(instantsearch.widgets.menu({
  container: '#years',
  attributeName: 'conference.year',
  sortBy: ['name:desc']
}));
search.addWidget(instantsearch.widgets.hits({
  container: '#hits',
  templates: {
    item: talksearch.hit,
    empty: 'Sorry, no results found'
  }
}));
search.addWidget(instantsearch.widgets.pagination({
  container: '#pagination',
  maxPages: 20,
  scrollTo: false,
  showFirstLast: false
}));
search.start();