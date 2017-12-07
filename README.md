# Talksearch website

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [What is it](#what-is-it)
- [Requirements](#requirements)
- [Initial setup](#initial-setup)
- [Publish docs to https://community.algolia.com/a-super-project](#publish-docs-to-httpscommunityalgoliacoma-super-project)
- [Local development](#local-development)
- [Changes to be done before going live](#changes-to-be-done-before-going-live)
- [Project structure](#project-structure)
- [Contributing](#contributing)

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

## Project structure

- Pages (index, about..) are in [src/talksearch/src](./src/talksearch/src)
- Layouts are in [src/talksearch/layouts](./src/talksearch/layouts)
- JS and images are in [src/talksearch/assets](./src/talksearch/assets)
- Stylesheets are in [src/talksearch/src/stylesheets](./src/talksearch/src/stylesheets)

