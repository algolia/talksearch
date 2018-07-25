---
layout: two-columns
title: Talksearch.js
---

TalkSearch.js is a JavaScript front-end library to help you build a search
interface around your records. If you don't yet have a TalkSearch index for your
conference, feel free to [apply for one][1].

With TalkSearch, you have access to an Algolia index containing all your videos
data. As with any other Algolia index, you can build your own search UI on top
of it by using our InstantSearch.js library. This library contains a set of
widgets (searchbar, results, filters, pagination, etc) that you can combine and
configure to build your unique UI.

To make things easier, we packaged some default templating into TalkSearch.js.
This will give you a headstart and make the initial integration much faster;
you should be able to have a working search in your website in a matter of
minutes.

_Note that you __don't have to__ use TalkSearch.js, you can just as well
directly use InstantSearch.js. Actually, if you want your own template or add
more widgets, check the [InstantSearch.js section][2]._

## Include libraries

You'll need to include both the InstantSearch.js library, and the TalkSearch.js
helper. Both libraries come with some CSS styling, to provide a default styling.

```html
<script
src="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}/dist/instantsearch.min.css">

<script src="https://cdn.jsdelivr.net/npm/talksearch@{{TalkSearchVersion}}/dist/talksearch.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/talksearch@{{TalkSearchVersion}}/dist/talksearch.min.css">
```

## Initialize the search

You now need to initialize the library with your TalkSearch credentials. Those
should have been handed to you by our TalkSearch team. If you don't have them,
don't hesitate to contact [talksearch@algolia.com][3]

```javascript
const search = instantsearch({
  appId: '{{TalkSearchAppId}}',
  apiKey: '{{PROVIDED_BY_ALGOLIA}}',
  indexName: '{{PROVIDED_BY_ALGOLIA}}'
});

search.start();
```

This will instanciate the library and connect it to the index. Nothing will be
displayed yet, though.

## Add UI widgets

InstantSearch widgets works by using HTML placeholders. You add empty `divs` to
your page, with unique `#id` and you then create widgets bound to those HTML
elements. The library will replace each placeholder with the corresponding
widget, and all widgets will be updated in real time whenever a search is made.

The two widgets you'll need are a searchbar (to input keywords) and
a place to display the results.

```html
<!-- You can put those two placeholders wherever you want in your page -->
<div id="searchbar"></div>
<div id="results"></div>
```

Once you have the placeholders, you'll be able to bind widgets to them. Update
the previous JavaScript snippet, and add the widgets between the initial
`instantsearch()` call and the call to `search.start()`.

```javascript
const search = instantsearch(options);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbar',
    poweredBy: true // This is mandatory if we're doing the crawling for you
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

The `searchBox` widget will create an input field to type your keywords and the
`hits` widget will display all results matching those keywords using the default
TalkSearch template.

If you'd like to use a different template or add other widgets (such as filters
or pagination), check the [InstantSearch.js][2] section.


[1]: ./crawler.html#how-to-apply
[2]: ./instantsearch-js.html
[3]: mailto:talksearch@algolia.com
