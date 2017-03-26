var express = require("express");
var app = express();

//Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(request, response) {
    response.send("Hi there, welcome to my assignment!");
});

//Visiting "/speak/pig" should print "The pig says 'Oink'!"
//Visiting "/speak/cow" should print "The cow says 'Moo'!"
//Visiting "/speak/dog" should print "The dog says 'Woof Woof'!"
app.get("/speak/:animal", function(request, response) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        snake: "Hiss"
    };
    
    var animal = request.params.animal.toLowerCase();
    var sound = sounds[animal];

    response.send("The " + animal + " says '" + sound + "'!");
});

//Visiting "/repeat/hello/3" should print "hello hello hello"
//Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
//Visiting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:message/:times", function(request, response) {
    var message = request.params.message;
    var times = Number(request.params.times);
    
    var result = "";
    
    for (var i = 0; i < times; i++) {
        result += message + " ";
    }
    
    response.send(result);
});

//If a user visits any other route print:
//"Sorry, page not found...What are you doing with your life?"
app.use(function (request, response, next) {
  response.status(404).send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});