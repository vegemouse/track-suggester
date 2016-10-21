$(function() {
  $("#startButton").click(function() {
    $("#intro").hide();
    $("#questionOne").fadeIn(500);
  })

  $("#buttonOne").click(function() {
    $("#questionOne").hide();
    $("#questionTwo").fadeIn(500);
  })

  $("#buttonTwo").click(function() {
    $("#questionTwo").hide();
    $("#questionThree").fadeIn(500);
  })

  $("#buttonThree").click(function() {
    $("#questionThree").hide();
    $("#questionFour").fadeIn(500);
  })

  $("#buttonFour").click(function() {
    $("#questionFour").hide();
    $("#questionFive").fadeIn(500);
  })

  $("#buttonFive").click(function() {
    $("#questionFour").hide();
    //if statement for results
  })

})
