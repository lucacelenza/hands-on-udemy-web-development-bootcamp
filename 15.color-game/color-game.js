var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

var pickedColorDisplay = document.querySelector("h1 span");
pickedColorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedSquareColor = this.style.background;

        //compare color of the clicked square to picked color
        if (clickedSquareColor === pickedColor) {
            alert("yeah!");
        } else {
            alert("nay!");
        }
    });
}