var express = require("express");
var app = express();

//Define the following routes:
// "/" => "Hi there!"
// "/bye" => "Goodbye!"
// "/dog" => "Meow!"

app.get("/", function(request, response) {
    response.send("Hi there!");
});
app.get("/bye", function(request, response) {
    response.send("Goodbye!"); 
});
app.get("/dog", function(request, response) {
    console.log("Someone made a request to /dog.");
    response.send("Meow!"); 
});

//Tell Express to listen for requests (start server) 
//using c9's port and ip
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});