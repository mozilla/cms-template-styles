"use strict";

var shell = require(`shelljs`);
var sass = require(`node-sass`);
var fs = require(`fs`);

shell.ls(`src/templates`).forEach((template) => {
  sass.render({
    file: `src/templates/${template}/style.scss`
  }, (error, result) => {
    if (!error) {
      fs.writeFile(`demo/templates/${template}/style.css`, result.css, (error2) => {
        if (error2) {
          console.error(error2);
        } else {
          console.log(`Generated CSS at: demo/templates/${template}/style.css`);
        }
      });
    }
  });
});
