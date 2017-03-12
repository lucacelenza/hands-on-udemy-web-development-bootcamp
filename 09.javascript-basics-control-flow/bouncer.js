var age = prompt("Stop, please. How old are you?");

var bouncerReponse;

if (age < 18) {
    bouncerReponse = "I'm sorry, child, but you're too young to go in there. Try again in a couple years.";
} else if (age < 21) {
    bouncerReponse = "Ok, you can go, but be sure to drink nothing that has even the faintest smell of alcohol. You got it?";
} else {
    bouncerReponse = "All right! Come in, buddy!";
}

alert(bouncerReponse);