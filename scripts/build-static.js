"use strict";

var cpr = require(`cpr`).cpr;

cpr(`src/`, `demo/`, {
  filter: /scss/
}, () => {
  console.log(`Copied static assets.`);
});
