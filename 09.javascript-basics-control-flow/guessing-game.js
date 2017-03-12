//Create secret number for the user to guess
var secretNumber = 4;

//Ask the user for a guess number
var guess = prompt("Guess a number!");
guess = Number(guess);

//Check guess and get back to the user
var response;

if (guess === secretNumber) {
    response = "You got it right!";
} else {
    var lowOrHigh;

    if (guess < secretNumber) {
        lowOrHigh = "low";
    } else {
        lowOrHigh = "high";
    }

    response = "Too " + lowOrHigh + ", buddy...guess again!";
}

alert(response);