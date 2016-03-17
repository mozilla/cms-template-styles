"use strict";

var shell = require(`shelljs`);
var sass = require(`node-sass`);
var fs = require(`fs`);

var sourceFiles = shell.ls(`src/templates`).map(name => {
  return `templates/${name}`;
});

sourceFiles = sourceFiles.concat(shell.ls(`src/partials`).map(name => {
  return `partials/${name}`;
}));

sourceFiles.forEach((template) => {
  sass.render({
    file: `src/${template}/style.scss`
  }, (error, result) => {
    if (!error) {
      fs.writeFile(`demo/${template}/style.css`, result.css, (error2) => {
        if (error2) {
          console.error(error2);
        } else {
          console.log(`Generated CSS at: demo/${template}/style.css`);
        }
      });
    } else {
      console.error(error);
    }
  });
});
