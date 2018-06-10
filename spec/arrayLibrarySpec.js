describe("map func", function() {
var a = [1, 2, 3];
var b = [2, 4, 6];

    it("should return a new array with the results of calling a function for every array element.", function() {
    expect(myMap( a, function (number) {
    return (number * 2)})).toEqual(b)
  }); 
});

describe("reduce func", function() {
var a = [1, 2, 3];

    it("should call a function for every array element and return a single(result) value.", function() {
    expect(myReduce( a, function (number) {
    return (number * 2)}, 0)).toEqual(12)
  });
});

describe("filter func", function() {
var a = [1, 2, 3, 4, 5, 6];
var b = [2, 4, 6];

    it("should return the elements of an array that meet the condition specified in a callback function.", function() {
    expect(myFilter( a, function(number) {
    return (number % 2) === 0;
})).toEqual(b)
  });
});

describe("take func", function() {
var a = [1, 2, 3, 4, 5, 6];
var b = [1, 2, 3];

    it("should return an array with length = number beginnig from firt element.", function() {
    expect(myTake( a, 3)).toEqual(b)
  });
});

describe("skip func", function() {
var a = [1, 2, 3, 4, 5, 6];
var b = [4, 5, 6];

    it("should return an array skipping n elements from beginning.", function() {
    expect(mySkip(a, 3)).toEqual(b)
  });
});

describe("forEach func", function() {
var a = [2, 4, 6];

    it("This method calls a provided function once for each element in an array, in order.", function() {
    expect(myForEach(a,function (number) {
    return (number * 2)})).toEqual(a);
  });
});

describe("chain func", function() {
var a = [1, 2, 3, 4, 5, 6];
var b = [2, 4];

    it("should return value after calling of method's chain.", function() {
    expect(chain(a).take(2).map(function (number) {
    return (number * 2)}).value).toEqual(b);
  });
});

