function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var firstElement = array[0];

    for (var i = 0; i < array.length; i++) {
        if (firstElement !== array[i]) {
            return false;
        }
    }

    return true;
}

function sumArray(arrayOfNumbers) {
    var sum = 0;

    arrayOfNumbers.forEach(function(number) {
        sum += number;
    });

    return sum;
}

function max(arrayOfNumbers) {
    var maxNumber;

    arrayOfNumbers.forEach(function(number) {
        if (!maxNumber) {
            maxNumber = number;
        } else if (number > maxNumber) {
            maxNumber = number;
        }
    });

    return maxNumber;
}