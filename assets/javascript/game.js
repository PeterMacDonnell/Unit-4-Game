var wins = 0;
var losses = 0;



//random number generation for my target number

var randomlyGeneratedNumber = Math.floor(Math.random() * (213 - 53 + 1)) + 53;
var targetNumber = randomlyGeneratedNumber;
$("#numberToGuess").text(targetNumber);

var picArray = ["assets/images/greatball.png", "assets/images/Masterball.png", "assets/images/Pokeball.png", "assets/images/ultraball.png" ]

var counter = 0;


var ballRandom = [4, 10, 20, 8]

for (var i = 0; i < ballRandom.length; i++) {
// var numberOptions = ballRandom;
  // var increment = numberOptions[Math.round(Math.random())];

  var PBall = $("<img>");
  PBall.addClass("Pokeballs");

  PBall.attr("src", picArray[i]);

  PBall.attr("data-ballvalue", ballRandom[i]);

  $("#PBalls").append(PBall);

  // $(".ball").append(ball);
}
var increment = ballRandom;
 
$(document).on("click", ".Pokeballs",  function(){
  

  var ballValue = ($(this).attr("data-ballvalue"));
  ballValue = parseInt(ballValue);
  counter += ballValue;
  $('#counter').text(counter)
// alert("New Score: " + counter);

if (counter === targetNumber) {

    wins++;
    // alert("You win!");
    $("#theWins").text(wins);
    counter = 0;

  }

  else if (counter > targetNumber) {
    losses++;
    $("#theLosses").text(losses);
    // alert("You lose!!");
    counter = 0;
  }


});



