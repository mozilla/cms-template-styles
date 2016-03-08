"use strict";

(function () {
  var preview = {
    init: function () {
      var hash = window.location.hash;

      if(hash.length > 0) {
        hash = hash.replace(`#`,``);
        this.loadTemplate(hash);
      } else {
        this.loadTemplate(`3-boxes`);
      }

      $(`#template-menu`).on(`click`, `a`, (event) => {
        this.loadTemplate($(event.target).attr(`template`));
      });
    },
    loadTemplate: function (name) {
      // Get style overrides
      $.ajax({
        url: `templates/${name}/style.css`,
        success: (resp) => {
          this.injectCSS(resp);
        }
      });

      // Get html
      $.ajax({
        url: `templates/${name}/index.html`,
        success: (resp) => {
          this.buildContent(resp);
        }
      });
    },
    injectCSS: function (css) {
      var style = $(`<style class='dynamic' />`);

      $(`style.dynamic`).remove();
      $(`head`).append(style);

      style.html(css);
    },
    buildContent: function (content) {
      $(`body > *:not(#template-menu)`).remove();
      $(`body`).append(content);
    }
  };

  preview.init();

})();
