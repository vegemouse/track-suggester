$(function() {
  var railsCount = 0;
  var drupalCount = 0;
  var androidCount = 0;
  var designCount = 0;
  var netCount = 0;

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
      railsCount++;
    } else if ($("input:radio[name=question5]:checked").val() === "drupal") {
      drupalCount++;
    } else if ($("input:radio[name=question5]:checked").val() === "android") {
      androidCount++;
    } else if ($("input:radio[name=question5]:checked").val() === "design") {
      designCount++;
    } else if ($("input:radio[name=question5]:checked").val() === "net") {
      netCount++;
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

  // Front end
  $("#startButton").click(function() {
    $("#intro").hide();
    $("#questionOne").fadeIn(750);
  })

  $("#questionOneForm").submit(function(event) {
    $("#questionOne").hide();
    $("#questionTwo").fadeIn(750);
    questionOneCount();
    event.preventDefault();
  })

  $("#questionTwoForm").submit(function(event) {
    $("#questionTwo").hide();
    $("#questionThree").fadeIn(750);
    questionTwoCount();
    event.preventDefault();
  })

  $("#questionThreeForm").submit(function(event) {
    $("#questionThree").hide();
    $("#questionFour").fadeIn(750);
    questionThreeCount();
    event.preventDefault();
  })

  $("#questionFourForm").submit(function(event) {
    $("#questionFour").hide();
    $("#questionFive").fadeIn(750);
    questionFourCount();
    event.preventDefault();
  })

  $("#questionFiveForm").submit(function(event) {
    $("#questionFive").hide();
    $("#questionSix").fadeIn(750);
    questionFourCount();
    event.preventDefault();
  })

  $("#questionSixForm").submit(function(event) {
    $("#questionSix").hide();
    questionSixCount();
    countAnswer();
    event.preventDefault();
  })

})
