function myForEach(array, callback) {

    //loop through the array
    for (var i = 0; i < array.length; i++) {

        //runs callback for each item in the array, 
        //passing item and index as arguments
        callback(array[i], i);
    }
}

Array.prototype.myForEach = function(callback) {
    myForEach(this, callback);
};