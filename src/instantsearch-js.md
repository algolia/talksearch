---
layout: two-columns
title: InstantSearch.js
---

If you want to use another template than the one provided with TalkSearch.js to
display your results, then you don't _need_ TalkSearch.js.

TalkSearch.js is one example of how you could display your results. Remember
that underneath, we're using the `hits` widget of InstantSearch.js. If you want
to tweak the rendering, you can directly use this widget and build any markup
you want.

This guide will give you the basics of InstantSearch.js, but you can find more
detailed information on its [dedicated website][1].

_Note that InstantSearch is also available for [React][2], [Vue][3],
[Angular][4], [Android][5] and [iOS][6]. This guide will assume you're using the
[Vanilla JavaScript][7] version, but the same concepts can be applied to other
flavors as well._

## Configuration

Start by including the JavaScript library as well as the default CSS styling.

```html
<script
src="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}/dist/instantsearch.min.css">

<!-- You can also add this theme to add a Bootstrap-like appearance to your widgets. -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.js@{{InstantSearchVersion}}/dist/instantsearch-theme-algolia.min.css">
```

## Pagination

If you have more than one page of results, you can use the pagination widget to
allow your users to navigate all the pages.

```html
<div id="pagination"></div>
```
```javascript
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20
  })
);
```

Check the [pagination widget documentation][8] for more information about the
parameters and styling options.

## Menu

Menus can be used to filter videos based on specific field. A menu on the
`conference.year` field for example would allow you to filter results to display
videos of 2018, or 2017, etc.

```html
<div id="years"></div>
```
```javascript
const search = instantsearch({
  […]
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
```

_Note that when using a menu, you need to pass
`searchParameters.facetingAfterDistinct: true` to your initial `instantsearch`
call. If you don't do this, the number of matches displayed next to each menu
item won't be accurate._

Check the [menu widget documentation][9] for more information about the
parameters and styling options.

## Refinement List

Refinement lists are menus that allow you to select more than one filter.
Instead of displaying the videos of one specific speaker, you can filter to
display all videos featuring either _Alex_ __or__ _Sam_ or even all videos
featuring both _Alex_ __and__ _Sam_.

```html
<div id="speakers"></div>
```
```javascript
const search = instantsearch({
  […]
  searchParameters: {
    facetingAfterDistinct: true,
  },
});

search.addWidget(
  instantsearch.widgets.menu({
    container: '#speakers',
    attributeName: 'speakers.name',
    sortBy: ['count:desc'],
  })
);
```

_Note that like the menu widget, you need to pass
`searchParameters.facetingAfterDistinct: true` to your initial `instantsearch`
call for the count to be accurate._

Check the [menu widget documentation][10] for more information about the
parameters and styling options.

## Other widgets

InstantSearch.js comes with a lot more widgets and you can even create your own.
Don't hesitate to refere to the [original documentation][11] for more information.


[1]: https://community.algolia.com/instantsearch.js/
[2]: https://community.algolia.com/react-instantsearch/
[3]: https://community.algolia.com/vue-instantsearch/
[4]: https://community.algolia.com/angular-instantsearch/
[5]: https://community.algolia.com/instantsearch-android/
[6]: https://community.algolia.com/instantsearch-ios/
[7]: https://community.algolia.com/instantsearch.js/
[8]: https://community.algolia.com/instantsearch.js/v2/widgets/pagination.html
[9]: https://community.algolia.com/instantsearch.js/v2/widgets/menu.html
[10]: https://community.algolia.com/instantsearch.js/v2/widgets/refinementList.html
[11]: https://community.algolia.com/instantsearch.js/v2/getting-started.html
