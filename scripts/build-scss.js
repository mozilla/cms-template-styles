"use strict";

var shell = require(`shelljs`);
var sass = require(`node-sass`);
var fs = require(`fs`);
var autoprefixer = require(`autoprefixer`);
var postcss = require(`postcss`);

var sourceFiles = shell.ls(`src/templates`).map(name => {
  return `templates/${name}`;
});

sourceFiles = sourceFiles.concat(shell.ls(`src/partials`).map(name => {
  return `partials/${name}`;
}));

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
    file: `src/${template}/style.scss`
  }, (error, result) => {
    if (!error) {
      autoprefix(result.css, (autoprefixed) => {
        fs.writeFile(`demo/${template}/style.css`, autoprefixed, (error2) => {
          if (error2) {
            console.error(error2);
          } else {
            console.log(`Generated CSS at: demo/${template}/style.css`);
          }
        });
      });
    } else {
      console.error(error);
    }
  });
});
