function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var counter = 0;
    var uniformity = true;
    var matchingElement;

    while (counter < array.length && uniformity) {
        if (!matchingElement) {
            matchingElement = array[counter];
        } else if (matchingElement !== array[counter]) {
            uniformity = false;
        }

        counter++;
    }

    return uniformity;
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