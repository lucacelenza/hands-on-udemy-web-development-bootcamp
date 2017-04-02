var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost/yelp_camp");

var Campground = mongoose.model("Campground", new mongoose.Schema({
    name: String,
    image: String,
    description: String
}));

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("landing");
});

app.get("/campgrounds", function(request, response) {
    Campground.find({}).exec()
        .then(function(campgrounds) {
            var viewModel = {
                campgrounds: campgrounds
            };
            
            response.render("index", viewModel);
        }, function(err) {
            console.log(err);
        });
});

app.get("/campgrounds/new", function(request, response) {
    response.render("new");
});

//declare after "/campgrounds/new" to avoid route conflict
app.get("/campgrounds/:id", function(request, response) {
    Campground.findById(request.params.id)
        .exec().then(function(campground) {
            var viewModel = {
                campground: campground
            };
            
            response.render("show", viewModel);
        }, function(err) {
            console.log(err);
        });
});

app.post("/campgrounds", function(request, response) {
    var campground = {
        name: request.body.name,
        image: request.body.image,
        description: request.body.description
    };
    
    Campground
        .create(campground)
        .then(function() {
            response.redirect("/campgrounds");
        }, function(err) {
            console.log(err);
        });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server has started.");
});