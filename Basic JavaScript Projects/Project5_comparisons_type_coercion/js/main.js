// Declare a variable with a number value
var myNumber = 42;

// Type coercion: Adding a number to a string will coerce the number into a string
var coercedResult = myNumber + " is the answer to life, the universe, and everything.";

// Use document.write() method to display the result of type coercion
document.write("The result of type coercion is: " + coercedResult + "<br>");

// Use typeof to show the data type after coercion
document.write("The data type after coercion is: " + typeof coercedResult);

// Display a large positive number that results in "Infinity"
var largeNumber = (2E310);  // A number too large for JavaScript to handle, resulting in Infinity
document.getElementById("positiveInfinity").innerHTML = "Large positive number: " + largeNumber;

// Display a large negative number that results in "-Infinity"
var negativeNumber = (-3E310);  // A number too large in the negative direction, resulting in -Infinity
document.getElementById("negativeInfinity").innerHTML = "Large negative number: " + negativeNumber;

// Boolean logic: greater than operator
var isGreater = 10 > 5;  // true because 10 is greater than 5
document.getElementById("trueResult").innerHTML = "Is 10 greater than 5? " + isGreater;

// Boolean logic: lesser than operator
var isLesser = 3 < 2;  // false because 3 is not lesser than 2
document.getElementById("falseResult").innerHTML = "Is 3 lesser than 2? " + isLesser;

// Perform a math operation: addition
var sum = 10 + 20;

// Log the result to the console
console.log("The result of 10 + 20 is: " + sum);

// Use == to compare two values that are equal
var isEqualTrue = (10 == 10);  // This will return true
console.log("Is 10 equal to 10? " + isEqualTrue);

// Use == to compare two values that are not equal
var isEqualFalse = (10 == 5);  // This will return false
console.log("Is 10 equal to 5? " + isEqualFalse);

// Return true by ensuring to match the data type and value
var trueResult = (10 === 10);  // Both the value and data type (number) are the same
console.log("Is 10 === 10? " + trueResult);  // This will return true

// Return false by writing a different data type and different value
var falseResultDifferentTypeAndValue = (10 === "5");  // Different data type (number vs. string) and different value
console.log("Is 10 === '5'? " + falseResultDifferentTypeAndValue);  // This will return false

// Return false by writing a different data type but the same value for both
var falseResultDifferentTypeSameValue = (10 === "10");  // Different data type (number vs. string) but the same value
console.log("Is 10 === '10'? " + falseResultDifferentTypeSameValue);  // This will return false

// Return false by writing the same data type but a different value for both
var falseResultSameTypeDifferentValue = (10 === 20);  // Same data type (number) but different values
console.log("Is 10 === 20? " + falseResultSameTypeDifferentValue);  // This will return false

// AND operator (&&)
// Both conditions need to be true for the result to be true
var andTrue = (5 > 3 && 10 > 5);  // true because both 5 > 3 and 10 > 5 are true
console.log("AND True: (5 > 3 && 10 > 5) is " + andTrue);

var andFalse = (5 > 3 && 10 < 5);  // false because 10 < 5 is false, even though 5 > 3 is true
console.log("AND False: (5 > 3 && 10 < 5) is " + andFalse);

// OR operator (||)
// Only one of the conditions needs to be true for the result to be true
var orTrue = (5 > 3 || 10 < 5);  // true because 5 > 3 is true, even though 10 < 5 is false
console.log("OR True: (5 > 3 || 10 < 5) is " + orTrue);

var orFalse = (5 < 3 || 10 < 5);  // false because both 5 < 3 and 10 < 5 are false
console.log("OR False: (5 < 3 || 10 < 5) is " + orFalse);

// NOT operator (!)
// The NOT operator inverts the Boolean value, so true becomes false, and false becomes true

// Example where the result is false but NOT operator will return true
var notTrue = !(5 > 10);  // 5 > 10 is false, so !(5 > 10) is true
console.log("NOT True: !(5 > 10) is " + notTrue);

// Example where the result is true but NOT operator will return false
var notFalse = !(5 < 10);  // 5 < 10 is true, so !(5 < 10) is false
console.log("NOT False: !(5 < 10) is " + notFalse);

