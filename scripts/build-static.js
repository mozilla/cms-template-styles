"use strict";

var cpr = require(`cpr`).cpr;

cpr(`src/`, `demo/`, {
  filter: /scss/,
  overwrite: true
}, () => {
  console.log(`Copied static assets.`);
});
