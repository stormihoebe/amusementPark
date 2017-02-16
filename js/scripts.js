$(function(){
  $("#heightButton").click(function() {
    var height = parseInt(prompt("Enter your height in inches"));
    $(".ride").removeClass("highlightOn crossOut");
    if (height > 60) {
      $(".tall").addClass("highlightOn");
      $(".short").addClass("crossOut");
    } else if (height < 60) {
      $(".short").addClass("highlightOn");
      $(".tall").addClass("crossOut");
    } else {
      $(".short, .tall").addClass("highlightOn");
    }
  });

});
