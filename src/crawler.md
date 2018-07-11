---
layout: two-columns
title: The Crawler
---

The crawler is a JavaScript application that will extract data from the YouTube
API and push it to Algolia.

The whole code is available on [GitHub][1] but we also have it running on our
own infrastructure periodically so you don't have to bother about running it
yourself.

## How to apply

If you'd like us to index your videos, the first thing to do is to send an email
to [talksearch@algolia.com][2] with the following information:

- The playlist url(s) you'd like to index
- A valid email address so we can get back to you
- Confirmation that you are an organizer of the conference

We'll then get back to you with the Algolia credentials that will allow you to
query your index.

## Updates

The YouTube API does not provide a way to listen to new videos being added to
playlists. To keep your content fresh, we'll then re-run the indexing on
a regular basis.

If you don't see a video in your index, don't hesitate to ping us and we'd be
happy to start a new manual indexing.


[1]: https://github.com/algolia/talksearch-scraper
[2]: mailto:talksearch@algolia.com
