const readlineSync = require('readline-sync');

// Function to calculate the total amount including tip
function calculateTip(billAmount, tipPercentage) {
    // Convert inputs to numbers, if necessary
    const bill = Number(billAmount);
    const tipPercent = Number(tipPercentage);

    // Validate inputs
    if (isNaN(bill) || isNaN(tipPercent) || bill < 0 || tipPercent < 0 || tipPercent > 1) {
        return "Invalid input. Please provide a positive bill amount and a tip percentage between 0 and 1.";
    }

    // Calculate the tip amount
    const tipAmount = bill * tipPercent;

    // Calculate the total amount to be paid
    const totalAmount = bill + tipAmount;

    // Return the total amount, rounded to two decimal places
    return Number(totalAmount.toFixed(2));
}

// Main function to interact with the user
function main() {
    // Prompt the user for the bill amount
    const billAmount = readlineSync.question('Enter the total bill amount: ');

    // Prompt the user for the tip percentage (input as a decimal, e.g., 0.15 for 15%)
    const tipPercentage = readlineSync.question('Enter the tip percentage (as a decimal, e.g., 0.15 for 15%): ');

    // Calculate the total amount to be paid
    const totalAmount = calculateTip(billAmount, tipPercentage);

    // Display the total amount to the user
    console.log(`The total amount to be paid is: ₹${totalAmount}`);
}

// Run the main function
main();
