/* 
 * Define a function named "average".
 * It should take a single parameter: an array of test scores
 * (all numbers) and return the average score in the array, 
 * rounded to the nearest whole number.
 *
 * average([90, 98, 89, 100, 100, 86, 94]); should return 94
 * average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]);
 * should return 68
 */

function average(scores) {
    var scoresSum = 0;
    
    scores.forEach(function(score) {
       scoresSum += score;
    });
    
    return Math.round(scoresSum / scores.length);
}

console.log(average([90, 98, 89, 100, 100, 86, 94]));
console.log(average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]));