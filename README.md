# community-project-boilerplate

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

A simple community boilerplate to replicate Algolia websites like InstantSearch*.

## Requirements

To run this project, you will need:

- Node.js >= v9.2.0, use nvm - [install instructions](https://github.com/creationix/nvm#install-script)
- Yarn >= v1.3.2 - [install instructions](https://yarnpkg.com/en/docs/install#alternatives-tab)

## Initial setup

```sh
git clone git@github.com:algolia/community-project-boilerplate.git a-super-project
cd a-super-project
rm -rf .git
git init
git remote add origin git@github.com:algolia/a-super-project.git
yarn
yarn docs:update
git add docs README.md CONTRIBUTING.md
git commit -m 'first commit'
git push
```

## Publish docs to https://community.algolia.com/a-super-project

You need to activate GitHub pages for your repository (in settings on GitHub), choose "master branch /docs folder".

Every time you want to update your production website, do:

```sh
yarn docs:update
git add docs README.md CONTRIBUTING.md
git commit -m 'docs(update): something'
git push
```

At some point this will be moved to Netlify.

## Local development

```sh
yarn
yarn start
```

Go to https://localhost:3000. There should be auto reload for almost everything, but when it fails just restart the server.

## Changes to be done before going live

- Rename any folder and replace any occurence of `community-project-boilerplate` to `a-super-project`.
- Remove `meta(name='ROBOTS', content='NOINDEX, NOFOLLOW')` from [src/community-project-boilerplate-docgen/layouts/common/meta.pug](./src/community-project-boilerplate-docgen/layouts/common/meta.pug).

## Project structure

- Pages (index, about..) are in [src/community-project-boilerplate-docgen/src](./src/community-project-boilerplate-docgen/src)
- Layouts are in [src/community-project-boilerplate-docgen/layouts](./src/community-project-boilerplate-docgen/layouts)
- JS and images are in [src/community-project-boilerplate-docgen/assets](./src/community-project-boilerplate-docgen/assets)
- Stylesheets are in [src/community-project-boilerplate-docgen/src/stylesheets](./src/community-project-boilerplate-docgen/src/stylesheets)

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md).

