$(document).ready(function() {
  // action that will submit the input information
  $(".cost").on("click", function() { 

    var start = $(".start").val();
    var end = $(".end").val();
    var bed = $(".bed").val();
    var afterTwelve = end - 24;
    var afterTwelveCost = "";
// makes sure the times are entered 
    if(start === "0" || end === "0" || bed ==="0"){
      alert("pick a valid time")
      console.log(1)
      return
    }
// if someone isn't working past twelve we wont it to be calculated correctly
    if (afterTwelve <= 0) {
      var afterTwelveCost = 0;
    }
    else {
      var afterTwelveCost = afterTwelve * 16;
    }
// gives the user easy access to cost values
    var beforeBed = bed - start;
    var beforeBedCost = beforeBed * 12;
    var sleepingHours = 24 - bed;
// can't charge if you don't work a single hour
    if (start-bed === 0 ){
      beforeBed = 0;
    }
    
// making sure no one enters an unrealistic time frame
    if(beforeBed < 0){
      alert("pick a valid time");
      return
    }
    if(sleepingHours<0){
      sleepingHours = 0;
    }
    var duringBedTimeCost = sleepingHours * 8;
// calculates the total cost of the night and removes the input
    var total = beforeBedCost + duringBedTimeCost + afterTwelveCost;
    $(".entertime").css("display", "none");
    

// displays the cost and a break down of the cost
    $("#costoftime").append("<p class='result'> Before Bed Cost: $ "+ beforeBedCost + "</p>" 
      + "<p class='result'> During Bed-time Cost: $ "+ duringBedTimeCost + "</p>" +
      "<p class='result'> After 12PM Cost: $ "+ afterTwelveCost + "</p>" +
      "<p class='result'> Total for the night: $ "+ total + "</p>" + "<button class='result'>Enter New Time</button>" );
    $(".result").on("click", function() {
    $(".entertime").fadeIn("slow").css("display", "grid");
    $("html, body").animate({ scrollTop: 0 }, 'fast');
    $(".start, .bed, .end").val("0");
  });
    });


});

