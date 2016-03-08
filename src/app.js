$(document).ready(function(){
  var hash = window.location.hash;

  if(hash.length > 0) {
    hash = hash.replace("#","");
    console.log(hash);
    loadTemplate(hash);
  } else {
    loadTemplate("3-boxes");
  }

  $("#template-menu").on("click","a",function(){
    loadTemplate($(this).attr("template"));
  });
});

var less;
function loadTemplate(name){

  // Get style overrides
  $.ajax({
    url: "templates/"+ name+"/style.css",
    success: function (resp) {
      injectCSS(resp);
    }
  });

  // Get html
  $.ajax({
    url: "templates/"+ name+"/index.html",
    success: function (resp) {
      buildContent(resp);
    }
  });
}

function injectCSS(css) {
  $("style.dynamic").remove();
  var style = $("<style class='dynamic' />");
  $("head").append(style);
  style.html(css);
}

function buildContent(content){
  $("body > *:not(#template-menu)").remove();
  $("body").append(content)
}
