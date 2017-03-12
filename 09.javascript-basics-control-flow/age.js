var age = prompt("How old are you?");

if (!age) {
    alert("Error!");
}

if (age == 21) {
    alert("Happy 21st birthday!");
}

if ((age % 2) > 0) {
    alert("Your age is odd!");
} 

if (age > 0 && Math.sqrt(age) % 1 == 0) {
    alert("Perfect square!");
}