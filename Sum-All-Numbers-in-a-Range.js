//Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  for (i = min+1; i <= max-1; i++) {
    arr.push(i);
  }

  return arr.reduce( (previousVal, currentVal) => previousVal + currentVal);
}

// sumAll([1, 4]);

console.log(sumAll([1, 4])); //should return a number.
console.log(sumAll([1, 4])); //should return 10.
console.log(sumAll([4, 1])); //should return 10.
console.log(sumAll([5, 10])); //should return 45.
console.log(sumAll([10, 5])); //should return 45.