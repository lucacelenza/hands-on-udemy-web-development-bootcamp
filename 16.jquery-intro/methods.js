//log h1 text
console.log($("h1").text());

//same for ul
console.log($("ul").text());

//all li tags text
console.log($("li").text());

//change h1 text
$("h1").text("New text!");

//change all li tags text
$("li").text("I'm a brand-new li");

//log ul html
console.log($("ul").html());

//change html content of ul
$("ul").html("<li>I hacked your ul!</li><li>Yes, it's true</li>");

//select the image brand and change width to 200px
$("img").css("width", "200px");

//change only the first img src
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

//change input value and log it
$("input").val("I put some value inside your textbox");
console.log($("input").val());

//log selected option
console.log($("select").val());

//make li have correct class
$("li").addClass("correct");
//then toggle done class for the first
$("li:first-of-type").toggleClass("done");