// Create a `dist` folder based off a subset of the `demo` folder

"use strict";

var cpr = require(`cpr`).cpr;

cpr(`demo/templates/`, `dist`, {
  filter: /scss/,
  overwrite: true
}, () => {
  console.log(`Created "dist" folder.`);
});
