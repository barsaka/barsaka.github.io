$(document).ready(function(){
    $("getElementsByClassName('rolling-head-right')").click(function(){
      $("getElementById('rolling')").animate({left:'+=250px'});
    });
  });
  window.onload=function(){
    $("p").hide();
  });
  
  $("#show").click(function(){
    $("p").show();
  });