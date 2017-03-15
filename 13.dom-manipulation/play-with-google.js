//get Google logo
var logo = document.getElementById("hplogo");
//change image
logo.style.backgroundImage = "url(http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg)";
//change image size
logo.style.backgroundSize = "200px 100px";
//set a purple border
logo.style.border = "2px solid purple";

//select all a tags
var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    //play with style
    links[i].style.background = "pink";
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "orange";

    //change href to http://www.bing.com/
    links[i].setAttribute("href", "http://www.bing.com/");
}