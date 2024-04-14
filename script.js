// Get the button element
const colorButton = document.getElementById('colorButton');

// Add event listener for click
colorButton.addEventListener('click', function() {
    // Generate a random rainbow color
    const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']; // Rainbow colors: Red, Orange, Yellow, Green, Blue, Indigo, Violet
    const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
