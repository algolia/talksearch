---
layout: two-columns
title: Building the front-end
---

## Include libraries

You'll need to include both the underlying InstantSearch.js library, and the
TalkSearch.js helper. Both libraries come with some CSS styling, to provide
a default styling.

```html
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}/dist/instantsearch.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/talksearch@{{TalkSearchVersion}}/dist/talksearch.min.css">

  <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}"></script>
  <script src="https://cdn.jsdelivr.net/npm/talksearch@{{TalkSearchVersion}}/dist/talksearch.min.js"></script>
```

_Note that we also have a [React InstantSearch][1], [Vue InstantSearch][2] and
[Angular InstantSearch][3] if you're using one of those frameworks. The
following example will assume you're using the regular [InstantSearch.js][4],
but the exact same concept will apply to any of those three libraries._

## Initialize the search

You now need to initialize the library with your TalkSearch credentials. Those
should have been handed to you by our TalkSearch team. If you don't have them,
don't hesitate to contact community@algolia.com

```javascript
const search = instantsearch({
  appId: '{{TalkSearchAppId}}',
  apiKey: '{{PROVIDED_BY_ALGOLIA}}',
  indexName: '{{PROVIDED_BY_ALGOLIA}}'
  poweredBy: true
});

search.start();
```

## Add UI widgets

InstantSearch widgets works by using HTML placeholders. You add empty `divs` to
your page, with unique `#id` and you then create widgets bound to those HTML
elements. The library will then replace each `div` with the corresponding
widget, and all widgets will be updated in real time whenever a search is made.

The bare minimum widgets you'll need are a searchbar (to input keywords) and
a place to display the results.

```html
<!-- You can put those two placeholders wherever you want in your page -->
<div id="searchbar"></div>
<div id="results"></div>
```

Once you have the placeholders, you need to add widgets inside of it. Update the
previous JavaScript snippet, and add the widgets between the initial
`instantsearch()` call and the call to `.start()`.

```javascript
const search = instantsearch(options);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbar'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#results',
    templates: {
      item: talksearch.templates.hits.item,
    },
  })
);

search.start();
```

This will give you a working search in your videos.

## Custom template

If you want to use another template than the one provided with TalkSearch.js to
display your results, then you don't really _need_ TalkSearch.js.

TalkSearch.js is just one example of how you could display your results.
Remember that underneath, we're using the `hits` widget of InstantSearch.js. If
you want to tweak the rendering, you can directly use this widget and build any
markup you want.

You don't have to use TalkSearch.js to enjoy the benefits of your TalkSearch
index. Feel free to poke at the source code and see how we built our template,
borrow ideas and code, and roll your own :)

## More widgets and customization

Because TalkSearch.js is only a layer on top of InstantSearch.js, you can use
any widget from InstantSearch.js. Here are a few examples of widgets you could
use.

### Pagination

If you have more than one page of results, you can use the pagination widget to
allow your users to navigate all the pages.

```html
<div id="pagination"></div>

<script>
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    scrollTo: false,
    showFirstLast: false,
  })
);
```

Check the [pagination widget documentation][5] for more information about the
parameters and styling options.

### Menu

If you have had several conferences along the years, you can use the menu widget
to allow your users to filter by year.

```html
<div id="years"></div>

<script>
// When using the menu widget, you should pass facetingAfterDistinct to true
// when instanciating instantsearch, otherwise the count displayed next to each
// item of the menu will not be correct
const search = instantsearch({
  ...
  searchParameters: {
    facetingAfterDistinct: true,
  },
});

search.addWidget(
  instantsearch.widgets.menu({
    container: '#years',
    attributeName: 'conference.year',
    sortBy: ['name:desc'],
  })
);
</script>
```

The current available keys for a menu are `conference.year`, `speakers.name`

Check the [menu widget documentation][6] page for complete information about the
available parameters and styling options.
