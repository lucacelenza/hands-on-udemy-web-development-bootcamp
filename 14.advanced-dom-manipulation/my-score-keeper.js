function updatePlayerScore(player, score) {
    player.score = score;
    player.scoreboard.textContent = player.score;

    if (isWinner(player)) {
        player.scoreboard.style.color = "green";
    } else {
        player.scoreboard.style.color = "black";
    }
}

function isWinner(player) {
    return player.score === scoreGoal.goal;
}

function updateScoreGoal(goal) {
    scoreGoal.goal = goal;
    scoreGoal.display.textContent = goal;
    scoreGoal.input.value = goal;
}

function initScoreboard() {
    players.forEach(function(player) {
        updatePlayerScore(player, 0);
    });
}

function initScoreGoal() {
    updateScoreGoal(5);
}

var scoreGoal = {
    goal: 5,
    input: document.querySelector("input"),
    display: document.querySelector("p span")
};

var players = [
    {
        score: 0,
        scoreButton: document.querySelector(".player"),
        scoreboard: document.querySelector("h1 span")
    },
    {
        score: 0,
        scoreButton: document.querySelector(".player:nth-of-type(2)"),
        scoreboard: document.querySelector("h1 span:nth-of-type(2)")
    }
];

players.forEach(function(player) {
    player.scoreButton.addEventListener("click", function() {
        if (!players.find(isWinner)) {
            updatePlayerScore(player, player.score + 1);
        }
    });
});

scoreGoal.input.addEventListener("change", function() {
    updateScoreGoal(Number(this.value));
});

document.getElementById("reset").addEventListener("click", function() {
    initScoreboard();
});

initScoreboard();
initScoreGoal();