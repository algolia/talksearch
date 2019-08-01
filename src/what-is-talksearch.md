---
layout: two-columns
title: What is TalkSearch?
---

The TalkSearch project is made of two main parts: a back-end scraper and
a front-end library called TalkSearch.js. The scraper will extract data from
YouTube while TalkSearch.js will help you build a front-end for it.

## The scraper

The scraper is the main beast here. Its responsibility is to extract data from
YouTube playlists and push records to an Algolia index. We run it on our own
infrastructure at regular intervals, to keep content fresh.

The scraper is piloted through a set of config files. Each conference has its
own config file containing the list of playlists to crawl. Config files also
contains other hooks that can be used to enrich the records.

For each playlist, we get the list of videos, and for each video we get the
textual transcript. We clean, enrich and reorganise this data to convert it to
JSON objects that we push to Algolia. Each config results are pushed to
a different index, that can then be queried directly from the front-end,
directly into your website. That's where TalkSearch.js comes into play.

_Note that the [scraper code][1] is entirely open-source. You can run it on your
own if you'd like._

## TalkSearch.js

TalkSearch.js is the front-end counterpart of the scraper. Now that all the data
is in an Algolia index, the job of TalkSearch.js is to help you display it in
your website.

Note that the use of TalkSearch.js is **entirely optional**. The index created
by TalkSearch is a regular Algolia index and thus can be used with
[InstantSearch.js][2], our front-end library. 

TalkSearch.js is nothing more than a set of templates compatible with
InstantSearch to help you integrate a battle-tested UI with your data in
no time.

_Note that [InstantSearch.js][3] also has comes with [React][4], [Vue][5],
[Angular][6], [iOS][7] and [Android][8].  TalkSearch.js itself is only
compatible with the Vanilla JavaScript version, though._











[1]: https://github.com/algolia/talksearch-scraper
[2]: https://community.algolia.com/instantsearch.js/
[3]: https://community.algolia.com/instantsearch.js/
[4]: https://community.algolia.com/react-instantsearch/
[5]: https://community.algolia.com/vue-instantsearch/
[6]: https://community.algolia.com/angular-instantsearch/
[7]: https://community.algolia.com/instantsearch-ios/
[8]: https://community.algolia.com/instantsearch-android/
