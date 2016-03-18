"use strict";

(function () {

  var preview = {
    init: function () {
      var hash = window.location.hash;

      if(hash.length > 0) {
        hash = hash.replace(`#`,``);
        this.loadTemplate(hash);
      } else {
        this.loadTemplate(`templates/header-two-tabs`);
      }

      $(`.loader`).on(`click`, `a`, (event) => {
        this.loadTemplate($(event.target).attr(`href`).split(`#`)[1]);
      });

      $(`#color-switcher`).on(`click`, `a`, (event) => {
        this.setColor($(event.target).text());
      });
    },
    setColor: function (color) {
      $(`.theme`).attr(`class`, `theme theme--${color}`);
    },
    loadTemplate: function (name) {
      console.log(`loadTemplate ${name}`);
      // Get style overrides
      $.ajax({
        url: `${name}/style.css`,
        success: (resp) => {
          this.injectCSS(resp);
        }
      });

      // Get html
      $.ajax({
        url: `${name}/index.html`,
        success: (resp) => {
          this.injectHTML(resp);
        }
      });
    },
    injectCSS: function (css) {
      var style = $(`<style class='dynamic' />`);

      $(`style.dynamic`).remove();
      $(`head`).append(style);

      style.html(css);
    },
    injectHTML: function (content) {
      $(`#template`).html(content);
    }
  };

  preview.init();

})();
