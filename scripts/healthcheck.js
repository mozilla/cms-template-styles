"use strict";

var manifest = require(`../package.json`);

console.log(`Version: ${manifest.version}`);
console.log(`Last built: ${new Date()}`);
