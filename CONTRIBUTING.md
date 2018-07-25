So you want to help with TalkSearch? Great!

TalkSearch is made of several moving parts.

- If you want to help on the quality of the data extracted, you should head to
  the [talksearch-scraper][1] repository.
- If you want to help on the default display widgets, you should head to the
  [talksearch.js][2] repository.

This repository holds the highlevel documentation website for TalkSearch. It
includes explanation about how it works, who can use it and how to use the
front-end libraries.

## Development

To run the website locally, run `yarn serve`. All the content is in `./src` and
will be compiled into `./dist`.

The website is built using custom scripts transforming markdown to html, and
wrapping them in a pug layouts. All CSS is processed through Postcss and
JavaScript through Babel. You can run `yarn build` to build a new website in
`./dist`.

## Animated gif

Demo gifs are recorded with a screen capture tool, then manually optimized
through [https://ezgif.com/resize/](https://ezgif.com/resize/) (resized to 280px
in width), and optimized by removing every 2nd frame.


[1]: https://github.com/algolia/talksearch-scraper
[2]: https://github.com/algolia/talksearch.js
