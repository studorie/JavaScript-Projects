var slideIndex = 0; // Initialize the slide index
showSlides(); // Call the function to display slides

// Function to show slides automatically
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // Reset to the first slide if we've reached the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and highlight the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
}

// Function to manually navigate to the next/previous slide
function plusSlides(n) {
    slideIndex += n - 1; // Adjust slideIndex to account for automatic increment
    showSlides();
}

// Function to manually navigate to a specific slide
function currentSlide(n) {
    slideIndex = n - 1; // Adjust slideIndex to account for automatic increment
    showSlides();
}

// Function to start the countdown
function countdown() {
    var seconds = document.getElementById("seconds").value; // Get the number of seconds from the input field

    function tick() { // Function to handle the countdown
        seconds = seconds - 1; // Decrease the seconds by 1
        document.getElementById("timer").innerHTML = seconds; // Display the remaining seconds

        if (seconds > 0) { // If there are seconds remaining, continue the countdown
            setTimeout(tick, 1000);
        } else { // If the countdown is complete, display an alert
            alert("Time's up!");
        }
    }

    tick(); // Start the countdown
}
