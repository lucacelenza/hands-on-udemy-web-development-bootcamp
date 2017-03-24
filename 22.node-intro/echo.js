/* 
 * Write a function named "echo" that takes 2 arguments: a
 * string and a number. It should print out the string number 
 * of times.
 *
 * i.e. echo("Echo!!!", 10) should print "Echo!!!" 10 times
 * i.e. echo("Tater Tots", 3) should print "Tater Tots" 3 times
 *
 * Add the above 2 examples to the end of your file
 * lastly, run the contents of "echo.js" using node
 */
 
function echo(stringToPrint, numberOfTimes) {
    for (var i = 0; i < numberOfTimes; i++) {
        console.log(stringToPrint);
    }
}

echo("Echo!!!", 10);
echo("Tater Tots", 3);