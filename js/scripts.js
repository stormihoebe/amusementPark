$(function(){
  $("#heightButton").click(function() {
    var height = parseInt(prompt("Enter your height in inches"));
    $(".ride").hide();
    if (height > 60) {
      $(".tall").show();
    } else if (height < 60) {
      $(".short").show();
    } else {
      $(".short, .tall").show();
    }
  });

});
