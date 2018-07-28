search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: placeholder || 'Search by topic, speaker or any sentence',
    poweredBy: false,
    wrapInput: false,
    loadingIndicator: false,
  })
);
