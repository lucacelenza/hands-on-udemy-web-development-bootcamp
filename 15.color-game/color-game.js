var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var feedback = document.getElementById("feedback");
var pickedColorDisplay = document.getElementById("picked-color");
var title = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.getElementById("reset");

init();

function init() {

    function setUpModeButtons() {
        for (var i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener("click", function () {
                var gameModeMultiplier;

                for (var j = 0; j < modeButtons.length; j++) {
                    if (modeButtons[j] !== this) {
                        modeButtons[j].classList.remove("selected");
                    } else {
                        gameModeMultiplier = j + 1;
                    }
                }

                this.classList.add("selected");
                setGame(gameModeMultiplier * 3);
            });
        }
    }

    function setUpSquares() {
        for (var i = 0; i < squares.length; i++) {
            //add click listeners to squares
            squares[i].addEventListener("click", function () {

                //grab color of clicked square
                var clickedSquareColor = this.style.background;
                var message = "";

                //compare color of the clicked square to picked color
                if (clickedSquareColor === pickedColor) {
                    message = "Correct!";

                    //change all squares color to match the picked color
                    changeColors(pickedColor);

                    //change the title background to match the picked color
                    title.style.background = pickedColor;

                    //change text on reset button to ask the user whether
                    //to start a new game
                    resetButton.textContent = "Play again?";
                } else {
                    message = "Try Again";

                    //fade the square
                    this.style.background = "#232323";
                }

                //feedback to the user
                feedback.textContent = message;
            });
        }
    }

    //mode buttons event listeners
    setUpModeButtons();

    //squares click listeners
    setUpSquares();

    //reset button click listener
    resetButton.addEventListener("click", function () {
        setGame();
    });

    setGame(6);
}

function changeColors(color) {
    //change all the squares background to the color passed as argument
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function setGame(colorsCount) {

    function generateRandomColors(colorsCount) {

        function randomColor() {
            //pick a red from 0 to 255
            var red = Math.floor(Math.random() * 256);

            //pick a green from 0 to 255
            var green = Math.floor(Math.random() * 256);

            //pick a blue from 0 to 255
            var blue = Math.floor(Math.random() * 256);

            //return the color
            return "rgb(" + red + ", " + green + ", " + blue + ")";
        }

        //make an array
        var colors = [];

        //add as much random colors as colorsCount to the array
        for (var i = 0; i < colorsCount; i++) {
            colors[i] = randomColor();
        }

        //return the array
        return colors;
    }

    function pickColor() {
        //pick a random number from 0 to colors.length
        var randomIndex = Math.floor(Math.random() * colors.length);

        //access the array of colors and returns the picked color
        return colors[randomIndex];
    }

    //if colorsCount is undefined (reset game), then I just
    //get the actual length of the colors array
    if (typeof colorsCount === "undefined") {
        colorsCount = colors.length;
    }

    //generate all new colors
    colors = generateRandomColors(colorsCount);

    //pick a new random color from the array
    pickedColor = pickColor();

    //change pickedColorDisplay to match pickedColor
    pickedColorDisplay.textContent = pickedColor;

    //change colors of the squares on the page
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].classList.remove("hidden");
            squares[i].style.background = colors[i];
        } else if (!squares[i].classList.contains("hidden")) {
            squares[i].classList.add("hidden");
        }
    }

    //reset button text to "New colors"
    resetButton.textContent = "New colors";
    //reset feedback
    feedback.textContent = "";

    //reset title background
    title.style.background = "steelblue";
}