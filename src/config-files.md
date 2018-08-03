---
layout: two-columns
title: Config files
---

When you register to TalkSearch, we'll create a config file for your conference.
A typical config file will contain the list of `playlists` ids to index as well as
the `indexName` where data will be pushed.

TalkSearch config files are JavaScript modules, so they can also contain dynamic
methods applied at run time and can import their own dependencies.

A full example of a config can look like this:

```javascript
import _ from 'lodash';
export default {
  indexName: 'awesome_conf',
  playlists: [
    'PLMW8Xq7bXrG4zEMLdfZTpS9VCKjXeD--h', // AwesomeConf 2018 London
    'PLMW8Xq7bXrG6M2Nabwt3LuBxZyHVHRZhf', // AwesomeConf 2017 Paris
    'PLMW8Xq7bXrG4OC1CZW7m-davg4p4ZCBmZ', // AwesomeConf 2016 Atlanta
  ],
  transformData: function(record) {
    const splitPlaylistName = record.playlist.name.split(' ');
    record.conference.name = splitPlaylistName[0];
    record.conference.year = splitPlaylistName[1];
    record.conference.city = splitPlaylistName[2];

    return record;
  },
  transformSettings: function(settings) {
    settings.attributesForFaceting.push('conference.city');

    return settings;
  },
  blockList: [
    '05ZvII57p_M'
  ]
};
```

## indexName

The `indexName` key contains the name of the index where the results will be
pushed.

Names should be unique across all configs, and are named the same way as the
config file.

## playlists

The `playlists` key contains an array of all playlist ids to index. We suggest
adding comments after each playlist id to identify them.

_Note that the crawler does not yet allow the indexing of channels or individual
videos._

## blockList

The `blockList` key accepts an array of video ids that you'd like to exclude
from the indexing. This can be used for example to remove some teaser or test
videos from the final set.

Those videos won't even be crawled by the API. If you want finer grain on which
video to exclude based on more data than the `id`, check the `transformData`
method below.

## transformData

If present, the `transformData` method will be called on each record, right
before pushing them to Algolia. It takes the raw record as input and expects the
modified record as output.

A typical use case for this method is to set the conference year or speakers
names by parsing the video title.

The method is called with a second argument, a `helper` object, containing
utility methods to help you in the most common parsing scenarios. See the
ConfigHelper documentation for more details.

## transformSettings

The `transformSettings` method can be used to change the settings of your index
if you need more than the default settings.

A typical use case for this method would be to change the
[attributesForFaceting][1] or the [customRanking][2] to use new fields you added
through `transformData`.

Note that the usage of `transformSettings` requires some knowledge of the
[Algolia Settings API parameters][3].


## ConfigHelper

Each call to `transformData` will take a `ConfigHelper` as a second parameter.
This helper is here to help reduce copy-pasting of boilerplate code when dealing
with the most common transformations. You don't have to use it, but it might
make your code much shorter if you do.

### helper.enrich

This method will allow you to change the record in place by specifying patterns
of information.

```javascript
let record = { 
  video: { 
    title: 'John Doe - 2018' 
  } 
};
record = helper.enrich(record, 'video.title', '{speaker.name} - {conference.year}')
// {
//   video: {
//     title: 'John Doe - 2018'
//   },
//   speaker: {
//     name: 'John Doe'
//   },
//   conference: {
//     year: '2018'
//   }
// }
```

This will look for the key `video.title` inside the `record` object and try to
match it to the `{speaker.name} - {conference.year}` pattern. If it matches, it
will save each matched part to their own keys and return the result.

You can use the custom pattern `{_}` to match something, but not save it in the
final record.

### helper.trimKey

This method will remove unneeded strings from a key of your record.

```javascript
let record = { 
  video: { 
    title: 
      'AwesomeConf 2018: My talk title, in London' 
    } 
  }
}
let record = helper.trimKey(
  record, 
  'video.title', 
  'Awesome Conf 2018:', 
  ', in London'
);
// {
//   video: {
//     title: 'My talk title'
//   },
// }
```

This will look for the specified key and recursively remove all the passed
strings and return the modified record. It will automatically trim the key of
all superfluous spaces.


[1]: https://www.algolia.com/doc/api-reference/api-parameters/attributesForFaceting/
[2]: https://www.algolia.com/doc/api-reference/api-parameters/customRanking/
[3]: https://www.algolia.com/doc/api-reference/settings-api-parameters/
