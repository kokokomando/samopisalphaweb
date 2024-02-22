$(document).ready(function(){
  $(".box").click(function(){
    $(".box span").animate({
      left: '320px',
      opacity: 0
    },500);
    $(".doc").animate({
      left: '70%',
      opacity: 0
    },500);
    $(".box").html($(".downloading").html());
    $(".box").css("text-align","center");
    $(".loader").animate({width: '100%'},2500,function(){setTimeout("reset()",500);});
  });
});

function reset(){
  $(".box").html("<span>Word Document</span><br><span>Download</span>");
  $(".box span").css("left","360px");
  $(".box span").animate({
      left: '80px',
      opacity: 1
    },500);
    var left = ($(document).innerWidth()/2)-141;
    $(".doc").animate({
      left: left+"px",
      opacity: 1
    },500);
    
    $(".box").css("text-align","left");
    $(".loader").css("width","0px");
}

