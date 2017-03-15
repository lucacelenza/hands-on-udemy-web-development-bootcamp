var player1Score = 0;
var player1Display = document.querySelector("h1 span");
var player1Button = document.querySelector(".player");

var player2Score = 0;
var player2Display = document.querySelector("h1 span:nth-of-type(2)");
var player2Button = document.querySelector(".player:nth-of-type(2)");

var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");

player1Button.addEventListener("click", function() {
    if (!gameOver) {
        player1Score++;
        player1Display.textContent = player1Score;

        if (player1Score === winningScore) {
            gameOver = true;
            player1Display.classList.add("winner");
        }
    }
});

player2Button.addEventListener("click", function() {
    if (!gameOver) {
        player2Score++;
        player2Display.textContent = player2Score;

        if (player2Score === winningScore) {
            gameOver = true;
            player2Display.classList.add("winner");
        }
    }
});

document.getElementById("reset").addEventListener("click", reset);

function reset() {
    player1Score = 0;
    player1Display.textContent = player1Score;
    player1Display.classList.remove("winner");

    player2Score = 0;
    player2Display.textContent = player1Score;
    player2Display.classList.remove("winner");

    gameOver = false;
}

document.querySelector("input").addEventListener("change", function() {
    var score = Number(this.value);

    if (!isNaN(score)) {
        winningScore = score;
        winningScoreDisplay.textContent = winningScore;
        reset();
    }
});