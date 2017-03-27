var express = require("express");
var app = express();

//We tell express to use the folder public
app.use(express.static("public"));

//With this line of code we can avoid typing .ejs extension to the view
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("home");
});

app.get("/fallinlovewith/:thing", function(request, response) {
    var viewModel = {
        thing: request.params.thing
    };
   
    response.render("love", viewModel);
});

app.get("/posts", function(request, response) {
    var viewModel = { 
        posts: [
            { title: "Post 1", author: "Luca" },
            { title: "My adorable pet bunny", author: "Charlie" },
            { title: "Can you believe this pomsky?", author: "Colt" },
        ]
    };
   
    response.render("posts", viewModel)
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Sever has started.");
});