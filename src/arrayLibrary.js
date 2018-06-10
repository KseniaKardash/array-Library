
var myMap =  function (originalArray, callback) {
    var newArray = [];

    if (arguments.length < 2) {
        throw 'This function expects two parameters. The original array and a callback function.';   
    } else {
            for (var i = 0; i < originalArray.length; i++){
            newArray.push(callback(originalArray[i]));
        }
    }

    return newArray;
}

var myReduce = function (originalArray, callback, initialValue) {

    if (arguments.length < 3) {
        throw 'This function expects three parameters. The original array, a callback function and initial value.';   
    } else {
            for (var i = 0; i < originalArray.length; i++){
                initialValue+= callback(originalArray[i]);
        }
    }

    return initialValue;
}

var myFilter = function (originalArray, filteringFunction) {
    var filteredArray = [];

    if (arguments.length < 2) {
        throw 'This function expects two parameters. The original array and a filtering function.'; 
    } else {
         for (var i = 0; i < originalArray.length; i++){
            if (filteringFunction(originalArray[i]) === true) {
                filteredArray.push(originalArray[i]);
            }
        }

        return filteredArray;
    }
}

var myTake = function (originalArray, number) {
    var newArray = [];

    if (arguments.length < 2) {
        throw 'This function expects two parameters. The original array and a number.'; 
    } else {
         for (var i = 0; i < number; i++){
                newArray.push(originalArray[i]);
        }

        return newArray;
    }
}

var myForEach = function (originalArray, callback) {
    if (arguments.length < 2) {
        throw 'This function expects two parameters. The original array and a callback function.';   
    } else {
            for (let i = 0; i < originalArray.length; i++){
                originalArray[i] = callback(originalArray[i]);
        }
    }

    return originalArray;
}

var mySkip = function(originalArray, number) {
    var newArray = [];

    if (arguments.length < 2) {
        throw 'This function expects two parameters. The original array and a number.';
    } else {
        for (var i = number; i < originalArray.length; i++) {
             newArray.push(originalArray[i]);
        }
    return newArray;
    }
}

var chain = function(array){
    this.value = array;

    this.skip = function(n){
        return new chain(mySkip(this.value,n));
    }

    this.take = function(n){
        return new chain(myTake(this.value,n));
    }

    this.map = function(callback){
        return new chain(myMap(this.value,callback));
    }

    this.reduce = function(callback, initialValue){
        return myReduce(this.value,callback,initialValue);
    }

    this.filter = function(callback){
        return new chain(myFilter(this.value,callback));
    }

    this.forEach = function(callback){
        return new chain(myForEach(this.value,callback));
    }

    return this;
}

 
