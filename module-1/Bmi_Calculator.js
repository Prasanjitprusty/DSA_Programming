// Import readline-sync
const readlineSync = require('readline-sync');

// Function to calculate BMI and return the health classification
function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine the health classification based on BMI
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Main function
function main() {
    var weight = parseInt(readlineSync.question('Enter your weight in kg: ')); // Assuming weight is an integer
    var height = parseFloat(readlineSync.question('Enter your height in meters: ')); // Height can be a floating-point number
    console.log(calculateBMI(weight, height)); // Correct function call
}

main(); 
