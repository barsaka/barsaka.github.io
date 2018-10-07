import { $ } from "jquery";
$(document).ready(function(){
    $("document.getElementsByClassName('rolling-head-right')").click(function(){
      $("document.getElementById('rolling')").animate({left:'+=250px'});
    });
  });
  window.onload=function(){
    $("p").hide();
  };
  
  $("#show").click(function(){
    $("p").show();
  });