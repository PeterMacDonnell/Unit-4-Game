var wins = 0;
var losses = 0;

$("#theWins").text(wins);
$("#theLosses").text(losses);

//random number generation for my target number

var randomlyGeneratedNumber = Math.floor(Math.random() * (213 - 53 + 1)) + 53;
var targetNumber = randomlyGeneratedNumber;
$("#numberToGuess").text(targetNumber);



var counter = 0;


var ballRandom = [4, 10, 20, 8]

for (var i = 0; i < ballRandom.length; i++) {
// var numberOptions = ballRandom;
  // var increment = numberOptions[Math.round(Math.random())];

  

  ball.attr("data-ballValue", ballRandom[i]);

  // $(".ball").append(ball);
}
var increment = ballRandom;
 
$(".ball").on("click", function(){
  counter += increment;

  var ballValue = ($(this).attr("data-ballValue"));
  ballValue = parseInt(ballValue);

alert("New Score: " + counter);

if (counter === targetNumber) {

    wins++;
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    losses++;
   
    alert("You lose!!");
  }


});



