// Function to perform the addition operation
function performAddition() {
    var additionResult = 5 + 3;
    document.getElementById("AdditionResult").innerHTML = "The result of 5 + 3 is: " + additionResult;
}

// Function to perform the subtraction operation
function performSubtraction() {
    var subtractionResult = 10 - 4;
    document.getElementById("SubtractionResult").innerHTML = "The result of 10 - 4 is: " + subtractionResult;
}

// Function to perform the multiplication operation
function performMultiplication() {
    var multiplicationResult = 6 * 7;
    document.getElementById("MultiplicationResult").innerHTML = "The result of 6 * 7 is: " + multiplicationResult;
}

// Function to perform the division operation
function performDivision() {
    var divisionResult = 20 / 5;
    document.getElementById("DivisionResult").innerHTML = "The result of 20 / 5 is: " + divisionResult;
}

// Function to perform the modulus operation
function performModulus() {
    var modulusResult = 10 % 3; // Modulus gives the remainder of division
    document.getElementById("ModulusResult").innerHTML = "The result of 10 % 3 is: " + modulusResult;
}

// Function to demonstrate the increment operator
function performIncrement() {
    var number = 10;
    number++; // Increment operator increases the value by 1
    document.getElementById("IncrementResult").innerHTML = "The result after incrementing 10 is: " + number;
}

// Function to demonstrate the decrement operator
function performDecrement() {
    var number = 10;
    number--; // Decrement operator decreases the value by 1
    document.getElementById("DecrementResult").innerHTML = "The result after decrementing 10 is: " + number;
}

// Function to demonstrate Math.random()
function performRandom() {
    var randomResult = Math.random(); // Generates a random number between 0 and 1
    document.getElementById("RandomResult").innerHTML = "The random number generated is: " + randomResult;
}
