
let numberButtons = document.querySelectorAll('.number'); // Select all number buttons
let display = document.getElementById('next_one'); // Select the display element

let currentValues = ''; // Store current number input
let previousValues = ''; // Store previous number input
let operation = null; // Store selected operator

// Number button event listener
numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        currentValues += button.textContent; // Append number to the input
        updateDisplay();
    });
});

// Function to update the display
function updateDisplay() {
    display.textContent = currentValues; // Show the current number
}
