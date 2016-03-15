// Create a `dist` folder based off a subset of the `demo` folder

"use strict";

var cpr = require(`cpr`).cpr;

cpr(`demo/templates/`, `dist`, {
  filter: /scss/
}, () => {
  console.log(`Created "dist" folder.`);
});
