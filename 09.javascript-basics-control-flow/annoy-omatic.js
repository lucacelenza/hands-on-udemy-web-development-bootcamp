var userResponse = "";

while (!userResponse || 
    (userResponse.indexOf("yes") === -1 && userResponse.indexOf("yeah") === -1)) {
    userResponse = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");