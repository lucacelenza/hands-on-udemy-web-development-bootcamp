var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//set bodyParser to parse request.body into a JavaScript object
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

var friends = ["Tony", "Mirana", "Justin", "Pierre", "Lily"];

app.get("/", function(request, response) {
    response.render("home");
});

app.get("/friends", function(request, response) {
    var viewModel = {
        friends: friends
    };
    
    response.render("friends", viewModel);
});

app.post("/addfriend", function(request, response) {
    friends.push(request.body.friend);
    response.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});