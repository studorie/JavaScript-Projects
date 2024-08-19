// Function using the concat() method to combine two strings
function useConcat() {
    var string1 = "Hello, ";
    var string2 = "world!";
    var concatenatedString = string1.concat(string2); // Concatenates string1 and string2

    // Display the concatenated string in the paragraph with id "concatenatedString"
    document.getElementById("concatenatedString").innerHTML = concatenatedString;
}

// Function using the slice() method to extract a portion of a string
function useSlice() {
    var concatenatedString = "Hello, world!";
    var slicedString = concatenatedString.slice(7, 12); // Extracts 'world' from the concatenatedString

    // Display the sliced string in the paragraph with id "slicedString"
    document.getElementById("slicedString").innerHTML = "Sliced string: " + slicedString;
}

// Function using the toString() method to convert a number to a string
function useToString() {
    var number = 123.45678;
    var numberAsString = number.toString(); // Converts the number to a string

    // Display the number as a string in the paragraph with id "numberString"
    document.getElementById("numberString").innerHTML = "Number as a string: " + numberAsString;
}

// Function using the toPrecision() method to format a number to a specified length
function useToPrecision() {
    var number = 123.45678;
    var preciseNumber = number.toPrecision(4); // Formats the number to 4 digits

    // Display the precise number in the paragraph with id "preciseNumber"
    document.getElementById("preciseNumber").innerHTML = "Number with precision: " + preciseNumber;
}
