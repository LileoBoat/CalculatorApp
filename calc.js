let display = document.getElementById('display');

// Function to append a character to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last digit
function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        const expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate the square root
function calculateSquareRoot(){
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = 'Error';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate the square
function calculateSquare() {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = 'Error';
        } else {
            display.value = value * value;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
