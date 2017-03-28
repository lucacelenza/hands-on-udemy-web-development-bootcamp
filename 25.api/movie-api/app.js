var express = require("express");
var request = require("request");

var app = express();

app.set("view engine", "ejs");

app.get("/search", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var search = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + search + "&type=movie";
    
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var results = JSON.parse(body);
            res.render("results", { movies: results.Search });
        }        
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie app has started.");
});