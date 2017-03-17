//change color of h1
$("h1").css("color", "yellow");

//multiple css properties setting
var styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple"
};

$("h1").css(styles);

//change all li tags color
$("li").css("color", "blue");

//change all anchor tags font-size
$("a").css("font-size", "40px");

$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgba(89, 45, 20, .5)"
});