"use strict";

const indexName = 'chatbot_summit';
const apiKey = 'e33ecb589d8b876eba84e12af6dce2de';
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
  placeholder: placeholder || 'Search by topic, speaker or any sentence',
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