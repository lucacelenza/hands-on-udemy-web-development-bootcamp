var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://lexklein.files.wordpress.com/2014/12/unnamed28.jpg" },
    { name: "Granite Hill", image: "https://www.grampiansparadise.com.au/jpg/home-gp/20131016-072--l3--wedding-guests-camping-on-lakeside-sites--at-grampians-paradise-camping-and-caravan-parkland--cropped-939px.jpg" },
    { name: "Mountain Goat's Rest", image: "https://az616578.vo.msecnd.net/files/2016/06/24/636023873603263069-1952901041_daddy-daughter-camping.jpg" }
];

app.get("/", function(request, response) {
    response.render("landing");
});

app.get("/campgrounds", function(request, response) {
    var viewModel = {
        campgrounds: campgrounds
    };

    response.render("campgrounds", viewModel);
});

app.get("/campgrounds/new", function(request, response) {
    response.render("new");
});

app.post("/campgrounds", function(request, response) {
    campgrounds.push({
        name: request.body.name,
        image: request.body.image
    });
    
    response.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server has started.");
});