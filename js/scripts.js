$(function() {

  // Set all counts at 0
  var railsCount = 0;
  var drupalCount = 0;
  var androidCount = 0;
  var designCount = 0;
  var netCount = 0;

  // Question functions
  var questionOneCount = function() {
    if($("input:radio[name=question1]:checked").val() === "rails") {
      railsCount++;
    } else if ($("input:radio[name=question1]:checked").val() === "drupal") {
      drupalCount++;
    } else if ($("input:radio[name=question1]:checked").val() === "android") {
      androidCount++;
    } else if ($("input:radio[name=question1]:checked").val() === "design") {
      designCount++;
    } else if ($("input:radio[name=question1]:checked").val() === "net") {
      netCount++;
    }
  }

  var questionTwoCount = function() {
    if($("input:radio[name=question2]:checked").val() === "rails") {
      railsCount++;
    } else if ($("input:radio[name=question2]:checked").val() === "drupal") {
      drupalCount++;
    } else if ($("input:radio[name=question2]:checked").val() === "android") {
      androidCount++;
    } else if ($("input:radio[name=question2]:checked").val() === "design") {
      designCount++;
    } else if ($("input:radio[name=question2]:checked").val() === "net") {
      netCount++;
    }
  }

  var questionThreeCount = function() {
    if($("input:radio[name=question3]:checked").val() === "rails") {
      railsCount++;
    } else if ($("input:radio[name=question3]:checked").val() === "drupal") {
      drupalCount++;
    } else if ($("input:radio[name=question3]:checked").val() === "android") {
      androidCount++;
    } else if ($("input:radio[name=question3]:checked").val() === "design") {
      designCount++;
    } else if ($("input:radio[name=question3]:checked").val() === "net") {
      netCount++;
    }
  }

  var questionFourCount = function() {
    if($("input:radio[name=question4]:checked").val() === "rails") {
      railsCount++;
    } else if ($("input:radio[name=question4]:checked").val() === "drupal") {
      drupalCount++;
    } else if ($("input:radio[name=question4]:checked").val() === "android") {
      androidCount++;
    } else if ($("input:radio[name=question4]:checked").val() === "design") {
      designCount++;
    } else if ($("input:radio[name=question4]:checked").val() === "net") {
      netCount++;
    }
  }

  var questionFiveCount = function() {
    if($("input:radio[name=question5]:checked").val() === "rails") {
      railsCount += 2;
    } else if ($("input:radio[name=question5]:checked").val() === "drupal") {
      drupalCount += 2;
    } else if ($("input:radio[name=question5]:checked").val() === "android") {
      androidCount += 2;
    } else if ($("input:radio[name=question5]:checked").val() === "design") {
      designCount += 2;
    } else if ($("input:radio[name=question5]:checked").val() === "net") {
      netCount += 2;
    }
  }

  var questionSixCount = function() {
    if($("input:radio[name=question6]:checked").val() === "rails") {
      railsCount++;
    } else if ($("input:radio[name=question6]:checked").val() === "drupal") {
      drupalCount++;
    } else if ($("input:radio[name=question6]:checked").val() === "android") {
      androidCount++;
    } else if ($("input:radio[name=question6]:checked").val() === "design") {
      designCount++;
    } else if ($("input:radio[name=question6]:checked").val() === "net") {
      netCount++;
    }
  }

  // Counts all answers
  var countAnswer = function() {
    if(railsCount > (drupalCount || androidCount || designCount || netCount)) {
      $("#rails").fadeIn(750);
    } else if (drupalCount > (railsCount || androidCount || designCount || netCount)) {
      $("#drupal").fadeIn(750);
    } else if (androidCount > (railsCount || drupalCount || designCount || netCount)) {
      $("#android").fadeIn(750);
    } else if (designCount > (railsCount || androidCount || drupalCount || netCount)) {
      $("#design").fadeIn(750);
    } else if (netCount > (railsCount || androidCount || drupalCount || designCount)) {
      $("#net").fadeIn(750);
    } else {
      $("#undecided").fadeIn(750);
    }
  }

  var refreshPage = function() {
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#questionThree").hide();
    $("#questionFour").hide();
    $("#questionFive").hide();
    $("#questionSix").hide();
    $("#rails").hide();
    $("#drupal").hide();
    $("#android").hide();
    $("#net").hide();
    $("#design").hide();
    $("#undecided").hide();
    $("#intro").fadeIn(1000);

    // Restarts answer count
    railsCount = 0;
    drupalCount = 0;
    androidCount = 0;
    designCount = 0;
    netCount = 0;
  }

  // Front end
  $("#startButton").click(function() {
    $("#intro").hide();
    $("#questionOne").fadeIn(750);
  })

  $("#questionOneForm").submit(function(event) {
    $("#questionOne").hide( "slide", {direction: "left"}, 200);
    $("#questionTwo").delay(250).show( "slide", {direction: "right"}, 200);
    questionOneCount();
    event.preventDefault();
  })

  $("#questionTwoForm").submit(function(event) {
    $("#questionTwo").hide( "slide", {direction: "left"}, 200);
    $("#questionThree").delay(250).show( "slide", {direction: "right"}, 200);
    questionTwoCount();
    event.preventDefault();
  })

  $("#questionThreeForm").submit(function(event) {
    $("#questionThree").hide( "slide", {direction: "left"}, 200);
    $("#questionFour").delay(250).show( "slide", {direction: "right"}, 200);
    questionThreeCount();
    event.preventDefault();
  })

  $("#questionFourForm").submit(function(event) {
    $("#questionFour").hide( "slide", {direction: "left"}, 200);
    $("#questionFive").delay(250).show( "slide", {direction: "right"}, 200);
    questionFourCount();
    event.preventDefault();
  })

  $("#questionFiveForm").submit(function(event) {
    $("#questionFive").hide( "slide", {direction: "left"}, 200);
    $("#questionSix").delay(250).show( "slide", {direction: "right"}, 200);
    questionFourCount();
    event.preventDefault();
  })

  $("#questionSixForm").submit(function(event) {
    $("#questionSix").hide();
    questionSixCount();
    countAnswer();
    event.preventDefault();
  })

  // "Refreshes" page rather than using 'location.reload()'
  $(".refresh").click(function() {
    refreshPage();
  })

})
