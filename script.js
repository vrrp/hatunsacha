// Array of image paths
const images = [
    'images/image1.png',
    'images/image2.png',
    'images/image3.png'
];

let currentIndex = 0;
let intervalId = null;

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slider-image').src = images[currentIndex];
}

// Function to start the slideshow
function playSlideshow() {
    if (!intervalId) {
        intervalId = setInterval(changeImage, 500); // 3000 time in miliseconds
    }
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
}

// Attach event listeners to the buttons
document.getElementById('playButton').addEventListener('click', playSlideshow);
document.getElementById('stopButton').addEventListener('click', stopSlideshow);

// Start the slideshow by default
playSlideshow();

