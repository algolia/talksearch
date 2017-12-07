# Talksearch website

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [What is it](#what-is-it)
- [Requirements](#requirements)
- [Initial setup](#initial-setup)
- [Local development](#local-development)
- [Publish docs to https://community.algolia.com/talksearch](#publish-docs-to-httpscommunityalgoliacomtalksearch)
- [Project structure](#project-structure)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What is it

The repository hosting the Talksearch website

## Requirements

To run this project, you will need:

- Node.js >= v9.2.0, use nvm - [install instructions](https://github.com/creationix/nvm#install-script)
- Yarn >= v1.3.2 - [install instructions](https://yarnpkg.com/en/docs/install#alternatives-tab)

## Initial setup

```sh
git clone git@github.com:algolia/talksearch.git
cd talksearch
yarn
```

## Local development

```sh
yarn start
```

Go to https://localhost:3000. There should be auto reload for almost everything, but when it fails just restart the server.

## Publish docs to https://community.algolia.com/talksearch

Every time you want to update the production website, do:

```sh
yarn docs:update
git add docs README.md CONTRIBUTING.md
git commit -m 'docs(update): something'
git push
```

## Assets and links references

To reference assets and links from any HTML page in this website, always reference them from the root of the website, without any leading "." or "/". Links from HTML pages are always relative to the root of your website, not the current file.

To ease hosting on different subpaths (https://community.algolia.com/website/ and http://localhost:3000/), we use a [`<base href>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) tag that allow us to easily achieve that.

If your image is in `assets/images/image.png` then you can reference it in your HTML page like that: `<img src="assets/images/image.png" />` and it will always work no matter how the website is hosted.

Same for linking to a particular page, if you are in `index.html` (or `index.md`), to link to `about/team.html` just do this: `<a href="about/team.html">team</a>`.

For ressources inside CSS files, always use relative paths from the CSS file itself like `background-image: url("../assets/image/image.png")`);

## Project structure

- Pages (index, about..) are in [src/talksearch/src](./src/talksearch/src)
- Layouts are in [src/talksearch/layouts](./src/talksearch/layouts)
- JS and images are in [src/talksearch/assets](./src/talksearch/assets)
- Stylesheets are in [src/talksearch/src/stylesheets](./src/talksearch/src/stylesheets)

