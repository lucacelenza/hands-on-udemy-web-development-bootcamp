function isEven(number) {
    return number % 2 === 0;
}

function factorial(number) {
    var factoredNumber = 1;
    
    for (; number > 1; number--) {
        factoredNumber *= number;
    }

    return factoredNumber;
}

function kebabToSnake(kebabCasedString) {
    return kebabCasedString.replace(/-/g, "_");
}