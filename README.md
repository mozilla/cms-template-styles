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

## Foxlight

Foxlight is a core dependency of these templates and is intended to be developed in tandem with them. When many templates use a common component, it's recommended that it be pushed upstream to Foxlight for wider usage.

If you want to co-develop Foxlight locally and see changes reflected in this project, you can run `npm link` in the root of your Foxlight repo and then `npm link foxlight` in this repo. Once you've done this you should `npm start` Foxlight and then you'll see your edits immediately reflected in the front end here.

You can also import Foxlight code, such as color variables, a la carte into your templates here since it's a dependency. For an example see `src/templates/3-boxes/style.scss`.
