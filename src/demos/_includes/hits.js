search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: talksearch.templates.hits.item,
      empty: 'Sorry, no results found',
    },
  })
);
