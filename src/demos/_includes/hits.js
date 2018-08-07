search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: talksearch.hit,
      empty: 'Sorry, no results found',
    },
  })
);
