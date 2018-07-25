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
search.addWidget(instantsearch.widgets.searchBox({
  container: '#searchbox',
  placeholder: placeholder || 'Search by topic, year, speaker or any sentence',
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
    item: talksearch.templates.hits.item,
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