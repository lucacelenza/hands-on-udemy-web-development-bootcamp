var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer");
    
//mongoose configuration
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost/blog_app");

var Blog = mongoose.model("Blog", new mongoose.Schema({
    title: String,
    imageUrl: String,
    body: String,
    createdOn: { type: Date, default: Date.now() }
}));

//app configuration
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//mandatory: after bodyParser
app.use(expressSanitizer());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

//routes
app.get("/", function(request, response) {
    response.redirect("/blogs");
});

app.get("/blogs", function(request, response) {
    Blog.find({}).exec()
        .then(function(blogs) {
            var viewModel = {
                blogs: blogs
            };
            
            response.render("index", viewModel);
        }, function(err) {
            console.log(err);
        });
});

app.get("/blogs/new", function(request, response) {
    response.render("new");
});

//declare after "/blogs/new" to avoid route conflict
app.get("/blogs/:id", function(request, response) {
    Blog.findById(request.params.id).exec().then(function(blog) {
        response.render("show", { blog: blog });
    }, function(err) {
        console.log(err);
        response.redirect("/blogs");
    });
});

app.get("/blogs/:id/edit", function(request, response) {
    Blog.findById(request.params.id).exec().then(function(blog) {
        response.render("edit", { blog: blog });
    }, function(err) {
        console.log(err);
        response.redirect("/blogs");
    });
});

app.post("/blogs", function(request, response) {
    request.body.blog.body = 
        request.sanitize(request.body.blog.body);
    
    Blog.create(request.body.blog).then(function() {
        response.redirect("/blogs");
    }, function(err) {
        console.log(err);
        response.render("new");
    });
});

app.put("/blogs/:id", function(request, response) {
    request.body.blog.body = 
        request.sanitize(request.body.blog.body);
    
    Blog.update({ _id: request.params.id }, { $set: request.body.blog })
        .then(function() {
            response.redirect("/blogs/" + request.params.id);
        }, function(err) {
            console.log(err);
            response.redirect("/blogs");
        });
});

app.delete("/blogs/:id", function(request, response) {
    Blog.findByIdAndRemove(request.params.id)
        .then(function() {
            response.redirect("/blogs");
        }, function(err) {
            console.log(err);
            response.redirect("/blogs/" + request.params.id);
        });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Blog App server has started.");
});