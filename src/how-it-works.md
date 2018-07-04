---
layout: two-columns
title: How does this work?
---

The TalkSearch project is made of two main parts: a crawler and a front-end
library called TalkSearch.js

## The crawler

The crawler is the main beast here. Its responsibility is to extract data from
YouTube playlists and videos and push it an Algolia index. We run it on our own
infrastructure at regular intervals, to keep content fresh.

The crawler is piloted through a set of config files. Each conference has its
own config file containing the list of playlists to crawl. Config files also
contains other hooks that can be used to enrich the records.

All crawls starts with a list of YouTube playlists. For each playlist, we get
the list of videos, and for each video we get the textual transcript. We clean,
enrich and reorganise this data to convert it to JSON objects that we
push to Algolia.

Each config results are pushed to a different index, that can then be queried
directly from the front-end, directly into your website. That's where
TalkSearch.js comes into play.

_Note that the [crawler code][1] is entirely open-source. You can run it on your
own if you'd like._

## TalkSearch.js

TalkSearch.js is the front-end counterpart of the crawler. The crawler extracted
all data from YouTube and pushed it to Algolia. Now the job of TalkSearch.js is
to help you display it in your website.

Note that the use of TalkSearch.js is **entirely optional**. The index created
by TalkSearch is like any other regular Algolia index and can be used our
front-end library, [InstantSearch.js][2]. TalkSearch.js is nothing more than
a set of templates compatible with InstantSearch to help you integrate
a good-looking interface with your data in no time.

_Note that [InstantSearch.js][3] also has [React][4], [Vue][5] and [Angular][6]
versions, and is also available on mobile both on [iOS][7] and [Android][8].
TalkSearch.js itself is only compatible with the Vanilla JavaScript version,
though_.


[1]: https://github.com/algolia/talksearch-scraper
[2]: https://community.algolia.com/instantsearch.js/
[3]: https://community.algolia.com/instantsearch.js/
[4]: https://community.algolia.com/react-instantsearch/
[5]: https://community.algolia.com/vue-instantsearch/
[6]: https://community.algolia.com/angular-instantsearch/
[7]: https://community.algolia.com/instantsearch-ios/
[8]: https://community.algolia.com/instantsearch-android/
