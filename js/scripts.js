$(function(){
  $("#heightButton").click(function() {
    var height = parseInt(prompt("Enter your height in inches"));
    $(".ride").removeClass("highlightOn");
    if (height > 60) {
      $(".tall").addClass("highlightOn");
    } else if (height < 60) {
      $(".short").addClass("highlightOn");
    } else {
      $(".short, .tall").addClass("highlightOn");
    }
  });

});
