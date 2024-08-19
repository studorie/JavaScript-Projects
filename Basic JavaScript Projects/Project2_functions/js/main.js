function updateContent() {
    // Assign two variables with string values
    var firstPart = "This is the first part of the message, ";
    var secondPart = "and this is the second part.";

    // Concatenate the two variables using the += operator
    var fullMessage = firstPart;
    fullMessage += secondPart;  // Using += to add the second part to the first

    // Use document.getElementById to update the content of an HTML element
    document.getElementById("message").innerHTML = fullMessage;
}
