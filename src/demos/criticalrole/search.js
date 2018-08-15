/* eslint-disable no-unused-vars */
const indexName = 'criticalrole';
const apiKey = 'd56bff2e05293531bd61ff859eabd339';
const placeholder =
  'Search for anything Vox Machina or the Mighty Nein ever said';
const searchParameters = {
  facetingAfterDistinct: false,
};
/* eslint-enable no-unused-vars */

// include: instanciate.js
// include: searchbox.js
search.addWidget(
  instantsearch.widgets.menu({
    container: '#years',
    attributeName: 'playlist.title',
    sortBy: ['count:desc'],
  })
);
// include: hits.js
// include: pagination.js

search.start();
