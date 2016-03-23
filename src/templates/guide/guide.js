"use strict";

({
  init: function () {
    this.elPartialTarget = document.querySelector(`#partial-1`);
    this.elSideBar = document.querySelector(`#side-nav`);

    this.injectPartial();
  },
  getHTML: function (url, callback) {
    var request = new XMLHttpRequest();

    request.open(`GET`, url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        callback(this.response);
      }
    };

    request.onerror = function() {
      console.error(`XHR Failed`);
    };

    request.send();
  },
  injectPartial: function () {
    var partialURL = this.elPartialTarget.dataset.partial;

    this.getHTML(partialURL, (HTML) => {
      this.elPartialTarget.innerHTML = HTML;
      this.createNav();
    });
  },
  createNav: function () {
    var elH1 = document.querySelector(`#partial-1 h1`);
    var elH2s = document.querySelectorAll(`#partial-1 h2`);

    var sideBarHTML = ``;

    elH1.id = `intro`;

    [].forEach.call(elH2s, (h2, index) => {
      h2.id = `header-${index}`;
      sideBarHTML += `<a href="#header-${index}">${h2.innerText}</a>`;
    });

    this.elSideBar.innerHTML = this.elSideBar.innerHTML + sideBarHTML;

    // Wire up nav items
    var elNavButtons = document.querySelectorAll(`#side-nav a`);

    [].forEach.call(elNavButtons, (btn) => {
      btn.addEventListener(`click`, () => {
        var elSelected = document.querySelector(`#side-nav .selected`);

        elSelected.setAttribute(`class`, ``);
        btn.setAttribute(`class`, `selected`);
      });
    });
  }
}).init();
