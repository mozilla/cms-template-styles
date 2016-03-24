"use strict";

const shell = require(`shelljs`);

let partials = shell.ls(`src/partials`);

shell.echo(`Building API. Partials: ${partials}`);

shell.rm(`-rf`, `api`);
shell.mkdir(`api`);
shell.mkdir(`api/partial`);

// Create /partials route
(JSON.stringify(partials)).to(`api/partials`);

// Create individual /partial/PARTIAL routes
partials.forEach((partial) => {
  let markup = shell.cat(`src/partials/${partial}/index.html`);

  let payload = {
    html: markup
  };

  (JSON.stringify(payload)).to(`api/partial/${partial}`);
});
