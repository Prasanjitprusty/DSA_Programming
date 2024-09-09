const readlineSync = require('readline-sync');

function convertTemperature(temperature, unit) {
    // Correct formula for temperature conversion
    if (unit === "C") {
        const fahrenheit = (temperature * 9 / 5) + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

function main() {
    var temperature = parseFloat(readlineSync.question('Enter temperature: ')); // Read temperature as a floating-point number
    var unit = readlineSync.question('Enter unit (C or F): '); // Read unit as a string

    console.log(convertTemperature(temperature, unit)); // Correct function call
}

main(); 
