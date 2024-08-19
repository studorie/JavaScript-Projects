// Create a JavaScript object (dictionary) with key-value pairs (KVPs)
var myDictionary = {
    "Name": "Alice",         // The "Name" key with value "Alice"
    "Age": 30,               // The "Age" key with value 30
    "Occupation": "Engineer",// The "Occupation" key with value "Engineer"
    "Country": "Canada"      // The "Country" key with value "Canada"
};

// Function to display a value from the dictionary
function displayDictionaryValue() {
    // Delete the key "Occupation" from the dictionary
    delete myDictionary["Occupation"];
    
    // Check if "Occupation" still exists in the dictionary
    if ("Occupation" in myDictionary) {
        // If it exists, display its value
        document.getElementById("Dictionary").innerHTML = "Occupation: " + myDictionary["Occupation"];
    } else {
        // If it has been deleted, display a message confirming its deletion
        document.getElementById("Dictionary").innerHTML = "The key 'Occupation' has been deleted.";
    }
}
