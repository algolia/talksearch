const search = instantsearch({
  appId: '{{TalkSearchAppId}}',
  apiKey: '{{apiKey}}',
  indexName: '{{indexName}}',
  routing: true,
  searchParameters: {
    hitsPerPage: 21,
    facetingAfterDistinct: true,
  },
});
