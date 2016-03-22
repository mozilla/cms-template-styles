"use strict";

var shell = require(`shelljs`);
var sass = require(`node-sass`);
var fs = require(`fs`);
var autoprefixer = require(`autoprefixer`);
var postcss = require(`postcss`);

// Include any template specific CSS
var sourceFiles = shell.ls(`src/templates`).map(name => {
  return `templates/${name}/style.scss`;
});

// Include any partial specific CSS (TODO: Remove this once partials have no CSS)
sourceFiles = sourceFiles.concat(shell.ls(`src/partials`).map(name => {
  return `partials/${name}/style.scss`;
}));

// Include CSS for all templates and partials
sourceFiles.push(`main.scss`);

// Filter out any missing SCSS files
var filteredFiles = [];

sourceFiles.forEach((file) => {
  if (shell.test(`-e`, `src/${file}`)) {
    filteredFiles.push(file);
  }
});

// Add vendor prefixes to unprefixed CSS
var autoprefix = (unprefixedCSS, callback) => {
  postcss([autoprefixer]).process(unprefixedCSS).then((prefixedCSS) => {
    prefixedCSS.warnings().forEach((warn) => {
      console.warn(warn.toString());
    });

    callback(prefixedCSS);
  });
};

sourceFiles.forEach((template) => {
  sass.render({
    file: `src/${template}`
  }, (error, result) => {
    if (!error) {
      autoprefix(result.css, (autoprefixed) => {
        let targetFile = `demo/${template}`.replace(`scss`, `css`);

        fs.writeFile(targetFile, autoprefixed, (error2) => {
          if (error2) {
            console.error(error2);
          } else {
            console.log(`Generated CSS: ${targetFile}`);
          }
        });
      });
    } else {
      console.error(error);
    }
  });
});
