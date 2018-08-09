search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: placeholder || 'Search inside all videos',
    poweredBy: false,
    wrapInput: false,
    loadingIndicator: false,
  })
);
