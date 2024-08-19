// Constructor function using new and this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Function to display the results of the constructor function within an HTML element
function displayPerson() {
    var person = new Person("John Doe", 30);  // Create a new Person object
    document.getElementById("PersonInfo").innerHTML = "Name: " + person.name + ", Age: " + person.age;
}

function Ride_Function() {
    var Height, Can_ride;

    // Get the height value from the input element
    Height = document.getElementById("Height").value;

    // Nested function to determine if the rider can ride
    function Check_Height() {
        return (Height < 52) ? "You are too short" : "You are tall enough";
    }

    // Call the nested function and assign the result to Can_ride
    Can_ride = Check_Height();

    // Display the result in the <p> element with id "New_and_This"
    document.getElementById("New_and_This").innerHTML = Can_ride + " to ride.";
}
