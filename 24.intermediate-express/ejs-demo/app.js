var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(request, response) {
    var viewModel = {
        thing: request.params.thing
    };
   
    response.render("love.ejs", viewModel);
});

app.get("/posts", function(request, response) {
    var viewModel = { 
        posts: [
            { title: "Post 1", author: "Luca" },
            { title: "My adorable pet bunny", author: "Charlie" },
            { title: "Can you believe this pomsky?", author: "Colt" },
        ]
    };
   
    response.render("posts.ejs", viewModel)
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Sever has started.");
});