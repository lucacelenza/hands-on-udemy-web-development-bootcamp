var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

//connect to the local mongodb server, cat_app db
mongoose.connect("mongodb://localhost/cat_app");

//define a minimum pattern for our cat schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//define a collection named Cats using catSchema
var Cat = mongoose.model("Cat", catSchema); //auto-pluralization

//adding a new cat to the db
var newCat = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

newCat.save().then(function(cat) {
    console.log("We just saved a cat into the db.");
    console.log(cat);
}, function(err) {
    console.log("Something went wrong.");
    console.log(err);
});

//OR

Cat.create({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
}).then(function(cat) {
    console.log("We just saved a cat into the db.");
    console.log(cat);
}, function(err) {
    console.log("Something went wrong.");
    console.log(err);
});

//retrieve all cats from the db and console.log them
Cat.find({}).then(function(cats) {
    console.log("All the cats.");
    console.log(cats);
}, function(err) {
    console.log("Something went wrong.");
    console.log(err);
});