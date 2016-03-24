[![Build Status](https://travis-ci.org/mozilla/mozmaker-templates.svg?branch=master)](https://travis-ci.org/mozilla/mozmaker-templates)

# Mozmaker Templates

Partials and templates for the Mozilla Foundation's CMS driven projects.

[http://mozilla.github.io/mozmaker-templates/demo/](http://mozilla.github.io/mozmaker-templates/demo/)

## Definitions & Best Practices

**Partials** should be very small snippets of HTML. They should rely extensively on [Mozmaker](https://github.com/mozilla/mozmaker) for styling (ideally, completely). Partials are pulled into our fork of [Calypso](https://github.com/mozilla/wp-calypso) via a REST API and are available to users as a boilerplate for new simple pages or parts of more complex pages.

**Templates** are more complex arrangements of partials. They are intended as boilerplate for stand-alone pages and can contain regions not intended for content management. It's ok to have custom JavaScript and CSS accompany a template!

## Setup for Development

- `git clone https://github.com/mozilla/mozmaker-templates.git && cd mozmaker-templates`
- `npm i`
- `npm start`

## File Structure

```
├── api <- Contains compiled code for the static REST API.
├── demo <- Contains compiled code for a live demo page.
├── dist <- More compiled code provided as a convenience for dependents.
├── scripts <- Code used by npm scripts.
└── src
    ├── app.js <- Code for running the template previewer.
    ├── index.html <- Shell for template previews.
    ├── style.css <- Style for template previews.
    └── partials
        ├── sample-partial
        │   ├── index.html <- Partial HTML
    └── templates
        ├── sample-template
        │   ├── images <- Any images used by the template
        │   ├── index.html <- Template HTML
        │   └── style.scss <- Template-specific SCSS
```

## File Naming Conventions

- All files should be named in `hyphenated-lowercase`

## Relationship To Mozmaker

[Mozmaker](http://github.com/mozilla/mozmaker) is a core dependency of these templates and partials, and is intended to be developed in tandem with them. When many templates need a common **component**, it's recommended that it be placed upstream in Mozmaker to reduce duplicated code.

If you want to co-develop Mozmaker locally and see changes reflected in this project, you can run `npm link` in the root of your Mozmaker repo and then `npm link mozmaker` in this repo. Once you've done this you should `npm start` Mozmaker and then you'll see your edits immediately reflected in the front end here.

## REST API

This project contains a very basic REST API which is deployed as static JSON routes to GitHub Pages. This REST API is used in our fork of Calypso to retrieve partials and their associated HTML.

The service is available at:

`http://mozilla.github.io/mozmaker-templates/api`

### Routes

- `GET /partials` - Returns an array of partial IDs.
- `GET /partial/PARTIAL_ID` - Returns an object containing the complete markup for the indicated partial.
