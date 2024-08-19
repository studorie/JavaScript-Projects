// Global variable
var globalVar = "I am a global variable";  // This variable can be accessed anywhere in this file

// Function to check if a user-entered number is positive, negative, or zero
function checkUserNumber() {
    // Local variable
    var number = document.getElementById("userNumber").value;  // This is a local variable, only accessible within this function
    var message;

    // Use an if-else statement to determine the nature of the number
    if (number > 0) {
        message = "The number is positive.";
    } else if (number < 0) {
        message = "The number is negative.";
    } else {
        message = "The number is zero.";
    }

    // Use document.getElementById to display the result in the paragraph with id "resultMessage"
    document.getElementById("resultMessage").innerHTML = message;
}

// Function with an intentional error for debugging
function buggyFunction() {
    var a = 10;
    console.log("The value of a is: " + a);

    // Intentional error: referencing a variable that doesn't exist
    console.log("The value of b is: " + b);  // b is not defined, this will cause an error
}

// Call the buggy function and use console.log() to debug
buggyFunction();

// Function to display a message based on the current time
function displayMessage() {
    // Get the current hour using the Date object
    var currentHour = new Date().getHours();
    var message;

    // Use an if statement to determine the message based on the hour
    if (currentHour < 12) {
        message = "Good morning!";
    } else if (currentHour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    // Use document.getElementById to display the message in the paragraph with id "timeMessage"
    document.getElementById("timeMessage").innerHTML = message;
}

// Function to check the time and display the appropriate message
function Time_function() {
    // Get the current hour using the Date object
    var Time = new Date().getHours();
    var Reply;

    // Check the time and set the appropriate message
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }

    // Display the message in the paragraph with id "Time_of_day"
    document.getElementById("Time_of_day").innerHTML = Reply;
}
