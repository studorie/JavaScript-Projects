// Function to execute the while loop
function Call_Loop() {
    let count = 1; // Initialize the counter using let
    let result = ""; // Initialize the result string using let

    // While loop to concatenate numbers 1 to 10
    while (count <= 10) {
        result += count + " "; // Append the current number to the result string
        count++; // Increment the counter
    }

    // Display the result in the paragraph with id "Loop"
    document.getElementById("Loop").innerHTML = result;
}

// Function to execute the for loop
function Call_For_Loop() {
    let result = ""; // Initialize the result string using let

    // For loop to concatenate numbers 1 to 10
    for (let i = 1; i <= 10; i++) {
        result += i + " "; // Append the current number to the result string
    }

    // Display the result in the paragraph with id "For_Loop_Result"
    document.getElementById("For_Loop_Result").innerHTML = result;
}

// Function to display a value from an array
function array_Function() {
    // Create an array with several elements using let
    let carBrands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];

    // Access a specific element of the array (e.g., the third element, "Ford")
    let selectedBrand = carBrands[2];

    // Display the selected brand in the paragraph with id "Array"
    document.getElementById("Array").innerHTML = "The selected car brand is: " + selectedBrand;
}

// Create an object using the const keyword
const car = {
    brand: "Toyota",
    model: "Corolla",
    color: "blue"
};

// Function to display the properties of the object
function constant_function() {
    // Initial display of the car object properties
    document.getElementById("Constant").innerHTML = "The car is a " + car.color + " " + car.brand + " " + car.model + ".";

    // Change a property’s value
    car.color = "red";

    // Add a property with a value
    car.year = 2022;

    // Display the updated properties of the car object
    document.getElementById("Constant").innerHTML = "The car is a " + car.color + " " + car.brand + " " + car.model + " from " + car.year + ".";
}

// Create an object using the let keyword
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getDetails: function() {
        return "Name: " + this.fullName() + ", Age: " + this.age;
    }
};

// Function to display the person's details
function displayPersonDetails() {
    // Display the details of the person object
    document.getElementById("PersonDetails").innerHTML = person.getDetails();
}