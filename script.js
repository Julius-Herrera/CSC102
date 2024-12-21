// Declare global variables
let meme = document.getElementById("meme");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");

let moving = false;
let interval;

// Function to move the meme around the page
function moveMeme() {
    let left = Math.floor(Math.random() * window.innerWidth - meme.width);
    let top = Math.floor(Math.random() * window.innerHeight - meme.height);
    meme.style.left = left + "px";
    meme.style.top = top + "px";
}

// Function to start meme movement
function startMovement() {
    moving = true;
    startButton.disabled = true;  // Disable Start button
    stopButton.disabled = false; // Enable Stop button
    interval = setInterval(moveMeme, 1000); // Move meme every second
}

// Function to stop meme movement
function stopMovement() {
    moving = false;
    clearInterval(interval); // Stop the interval that moves the meme
    startButton.disabled = false; // Enable Start button
    stopButton.disabled = true;  // Disable Stop button
}

// Event listener for testing button functionality
window.onload = function() {
    console.log("Page loaded, ready for testing.");
}
