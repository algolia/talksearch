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
/* eslint-enable no-unused-vars */
