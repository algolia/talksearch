/* eslint-disable no-unused-vars */
const search = instantsearch({
  appId: '{{TalkSearchAppId}}',
  apiKey,
  indexName,
  routing: true,
  searchParameters: {
    hitsPerPage: 21,
    facetingAfterDistinct: true,
  },
});
// Add a div to the page after the first render. This will be used to take
// screenshots once the page is loaded
search.on('render', () => {
  const pageLoadElement = document.getElementById('firstRender');
  if (!pageLoadElement) {
    // We delay the addition to give the first images time to load
    setTimeout(() => {
      const span = document.createElement('span');
      span.setAttribute('id', 'firstRender');
      document.body.appendChild(span);
    }, 1000);
  }
});
/* eslint-enable no-unused-vars */
