$(document).ready(function(){
  console.log("hello");
  loadTemplate("3-boxes");

  $("#template-menu").on("click","a",function(){
    loadTemplate($(this).attr("template"));
    return false;
  });

});

var less;
function loadTemplate(name){

  // Get style overrides
  $.ajax({
      url: "templates/"+ name+"/style.less",
      success: function (resp) {
        renderCSS(resp);
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


function renderCSS(css) {
  less.render(css).then(function(output) {
    $("style.dynamic").remove();
    var style = $("<style class='dynamic' />");
    $("head").append(style);
    style.html(output.css);
  });

}

function buildContent(content){
  $("body > *:not(#template-menu)").remove();
  $("body").append(content)
}