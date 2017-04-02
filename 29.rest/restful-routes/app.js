var express = require("express");

var app = express();
app.set("view engine", "ejs");

var routes = [
    { 
        name: "Index", 
        path: "/dogs", 
        httpVerb: "GET", 
        purpose: "List all dogs", 
        mongooseMethod: "Dog.find({})", 
        contextClass: "default"
    },
    { 
        name: "New", 
        path: "/dogs/new", 
        httpVerb: "GET", 
        purpose: "Show new dog form", 
        mongooseMethod: "N/A", 
        contextClass: "success"
    },
    { 
        name: "Create", 
        path: "/dogs", 
        httpVerb: "POST", 
        purpose: "Create a new dog, then redirect somewhere", 
        mongooseMethod: "Dog.create(dog)", 
        contextClass: "success"
    },
    { 
        name: "Show", 
        path: "/dogs/:id", 
        httpVerb: "GET", 
        purpose: "Show info about one specific dog", 
        mongooseMethod: "Dog.findById(id)", 
        contextClass: "info"
    },
    { 
        name: "Edit", 
        path: "/dogs/:id/edit", 
        httpVerb: "GET", 
        purpose: "Show edit form for one dog", 
        mongooseMethod: "Dog.findById(id)", 
        contextClass: "warning"
    },
    { 
        name: "Update", 
        path: "/dogs/:id", 
        httpVerb: "PUT", 
        purpose: "Update a particular dog, then redirect somewhere", 
        mongooseMethod: "Dog.update({ _id: id }, { $set: dog })", 
        contextClass: "warning"
    },
    { 
        name: "Destroy", 
        path: "/dogs/:id", 
        httpVerb: "DELETE", 
        purpose: "Delete a particular dog, then redirect somewhere", 
        mongooseMethod: "Dog.findByIdAndRemove(id)", 
        contextClass: "danger"
    }
];

app.get("/", function(request, response) {
    response.render("index", { routes: routes });
});

app.listen(process.env.PORT, process. env.IP, function() {
    console.log("Server has started.");
});