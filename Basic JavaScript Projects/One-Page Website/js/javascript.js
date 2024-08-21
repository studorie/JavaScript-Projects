let currentImageIndex = 0;
let images = [];

window.onload = function() {
    images = document.querySelectorAll('.gallery img');
    console.log('Images NodeList:', images);  // This should log the images
};

function openModal(src, index) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = src;
    currentImageIndex = index;
    console.log('Modal opened with image index:', currentImageIndex);  // Debugging
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function showNextImage() {
    if (images.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById("img01").src = images[currentImageIndex].src;
        console.log('Next Image Index:', currentImageIndex);  // Debugging
    } else {
        console.error('No images available.');
    }
}

function showPrevImage() {
    if (images.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        document.getElementById("img01").src = images[currentImageIndex].src;
        console.log('Previous Image Index:', currentImageIndex);  // Debugging
    } else {
        console.error('No images available.');
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}
