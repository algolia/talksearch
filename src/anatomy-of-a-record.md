---
layout: two-columns
title: Inside a record
---

All TalkSearch records follow the same schema of nested keys. Each top key
contains informations regarding a specific aspect of the result, such as the
`channel`, `playlist`, `video` or even `speakers` or `caption`. Use this page as
a reference to see what each key contains.

_Note: If you're using TalkSearch.js, you shouldn't have to worry about any of
those. It's all already handled in the template for you._

Here is an example of a full record:

```json
{
  "objectID": "11d227100f19d6d54a226221905845845f194d208a87876e60da9832f38f2ca8",
  "channel": {
    "id": "UCSRhwaM00ay0fasnsw6EXKA",
    "title": "dotconferences"
  },
  "conference": {
    "year": 2012,
    "name": "dotJS"
  },
  "playlist": {
    "description": "Our first dotConference on November 30th , 2012.",
    "id": "PLMW8Xq7bXrG77SV1VAAiAciRyq3VSC2Gq",
    "title": "dotJS 2012"
  },
  "video": {
    "description": "Filmed in Paris on Nov 30th, 2012.",
    "duration": {
      "minutes": 26,
      "seconds": 33
    },
    "hasCaptions": true,
    "hasManualCaptions": false,
    "id": "UIDb6VBO9os",
    "popularity": {
      "comments": 81,
      "dislikes": 70,
      "favorites": 0,
      "likes": 788,
      "views": 66798,
      "score": 67737
    },
    "positionInPlaylist": 15,
    "publishedDate": {
      "year": 1356994800,
      "month": 1356994800,
      "day": 1358377200,
      "timestamp": 1358460292
    },
    "thumbnails": {
      "default": {
        "height": 90,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/default.jpg",
        "width": 120
      },
      "high": {
        "height": 360,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/hqdefault.jpg",
        "width": 480
      },
      "maxres": {
        "height": 720,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/maxresdefault.jpg",
        "width": 1280
      },
      "medium": {
        "height": 180,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/mqdefault.jpg",
        "width": 320
      },
      "standard": {
        "height": 480,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/sddefault.jpg",
        "width": 640
      }
    },
    "title": "What Is Open Source & Why Do I Feel So Guilty?",
    "url": "https://www.youtube.com/watch?v=UIDb6VBO9os"
  },
  "speakers": [
    {
      "name": "Fat"
    }
  ],
  "caption": {
    "content": "asked to come and talk to you guys and I",
    "duration": 4.02,
    "start": 30,
    "position": 6,
    "url": "https://www.youtube.com/watch?v=UIDb6VBO9os&t=30s"
  }
}
```

## channel

The `channel` key contains data relative to the YouTube channel. You can think
of a channel more or less as a YouTube user.

It contains two keys, `id` and `title`. Those are extracted directly from
the YouTube API.

```json
{
  "channel": {
    "id": "UCSRhwaM00ay0fasnsw6EXKA",
    "title": "dotconferences"
  }
}
```

## playlist

The `playlist` key contains data relative to the YouTube playlist defined in the
config.

It contains a `description`, `id` and `title` key, all extracted from the YouTube API.

```json
{
  "playlist": {
    "description": "Our first dotConference on November 30th , 2012.",
    "id": "PLMW8Xq7bXrG77SV1VAAiAciRyq3VSC2Gq",
    "title": "dotJS 2012"
  }
}
```

## video

The `video` key is the one that contains the most information, so let's break it
down:

`description`, `id`, `title`, `positionInPlaylist`  and `url` are all coming
straight from YouTube.

`duration.minutes` and `duration.seconds` can be used to display the total time
of the video.

`hasCaptions` is set to `true` when YouTube had captions available for this
video. YouTube adds automatic captioning to most of the videos, but sometimes
they might not have been processed yet. `hasManualCaptions` is set to true when
some captions weren't automatic but manually added by. Those captions are of
much higher quality.

The `popularity` key contains a breakdown of the number of views, likes,
dislikes, comments and favorites this video had. A (naive) `score` is computed
by adding all those values together and is used in the ranking.

The `publishedDate` contains the publishing date of the video in various
formats, for your convenience. The `.timestamp` subkey contains the exact
second, while `day`, `month` and `year` contains rounded values. All those
values can be used for filtering.

Finally, the `thumbnails` key contains the video thumbnail at different
resolutions, along with the dimensions.

```
{
  "video": {
    "description": "Filmed in Paris on Nov 30th, 2012.",
    "duration": {
      "minutes": 26,
      "seconds": 33
    },
    "hasCaptions": true,
    "hasManualCaptions": false,
    "id": "UIDb6VBO9os",
    "popularity": {
      "comments": 81,
      "dislikes": 70,
      "favorites": 0,
      "likes": 788,
      "views": 66798,
      "score": 67737
    },
    "positionInPlaylist": 15,
    "publishedDate": {
      "year": 1356994800,
      "month": 1356994800,
      "day": 1358377200,
      "timestamp": 1358460292
    },
    "thumbnails": {
      "default": {
        "height": 90,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/default.jpg",
        "width": 120
      },
      "high": {
        "height": 360,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/hqdefault.jpg",
        "width": 480
      },
      "maxres": {
        "height": 720,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/maxresdefault.jpg",
        "width": 1280
      },
      "medium": {
        "height": 180,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/mqdefault.jpg",
        "width": 320
      },
      "standard": {
        "height": 480,
        "url": "https://i.ytimg.com/vi/UIDb6VBO9os/sddefault.jpg",
        "width": 640
      }
    },
    "title": "What Is Open Source & Why Do I Feel So Guilty?",
    "url": "https://www.youtube.com/watch?v=UIDb6VBO9os"
  }
}
```

## caption

The `caption` contains information about the current matching line of caption.
If no caption is actually matching (for example if you're doing an empty query),
then the first caption of the video will be used.

The `.content` key contains the actual caption and the `url` will give a direct
link to the moment in the video matching this caption.

`position` contains the index of the caption (first caption of the video will
have a value of `0`). `start` and `duration` will give you more context about
the caption itself.

```json
{
  "caption": {
    "content": "asked to come and talk to you guys and I",
    "duration": 4.02,
    "start": 30,
    "position": 6,
    "url": "https://www.youtube.com/watch?v=UIDb6VBO9os&t=30s"
  }
}
```

## conference

The `conference` key contains data relative to the conference event itself. This
data is guessed from the playlist name, but can be overwritten in each
individual config if needed.

It contains a `year` and `name` key. Both those keys can be used for
faceting.

```json
{
  "conference": {
    "year": 2012,
    "name": "dotJS"
  }
}
```

## speakers

The `speakers` key contains the list of identified speakers in the video. Note
that YouTube does not provide this information so we fallback to some NLP on the
video titles, but this might not be 100% accurate.

If your video titles contain the speaker name, it can be extracted from there
instead, which yields much better results (but requires all your titles to
follow the same pattern).

```json
{
  "speakers": [
    {
      "name": "Fat"
    }
  ]
}
```

## objectId

The `objectID` contains a unique identifier for each record, used internally for
indexing. You shouldn't have to worry about this one.


## Dynamic highlighting

All search results are returned with a key called [\_highlightResult][1]. This
key is dynamic and based on the input search keyword.

It will contain highlighted versions of the matching elements in the response.
For example, when searching for `source` in the above record, you can have the
highlighted version of the title through `_highlightResult.video.title.value`.

The matching words will be wrapped in `<em>` tags by default, but you can use
any HTML tag through the use of [highlightPreTag][2] and [highlightPostTag][3]
options.

[1]: https://www.algolia.com/doc/guides/searching/highlighting-snippeting/?language=php#response-information
[2]: https://www.algolia.com/doc/api-reference/api-parameters/highlightPreTag/
[3]: https://www.algolia.com/doc/api-reference/api-parameters/highlightPostTag/
