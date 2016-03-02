# cms-template-styles

Templates for the Mozilla Foundation CMS.

[http://mozilla.github.io/cms-template-styles/](http://mozilla.github.io/cms-template-styles/)

## Templates

* 3-boxes across CTA
* Scrolling Guide
* Resources list

## Setup for Development

- `git clone https://github.com/mozilla/cms-template-styles.git && cd cms-template-styles`
- `npm i`
- `npm start`

## File Structure

```
├── demo <- Contains compiled code. Don't edit anything in this folder!
└── src
    ├── app.js <- Code for running the template previewer.
    ├── index.html <- Shell for template previews.
    ├── style.css <- Style for template previews.
    └── templates
        ├── sample-template
        │   ├── images <- Any images used by the template
        │   ├── index.html <- Template HTML
        │   └── style.scss <- Template-specific SCSS
```

## File Naming Conventions

- All files should be named in `hyphenated-lowercase`
