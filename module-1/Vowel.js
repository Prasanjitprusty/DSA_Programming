const readlineSync = require('readline-sync');

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) { // Changed to < instead of <=
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

function main() {
    // Prompt the user to enter a string
    const str = readlineSync.question('Enter a string to count vowels: ');

    // Count vowels in the entered string
    const vowelCount = countVowels(str);
    
    // Output the vowel count
    console.log(`Number of vowels in the string: ${vowelCount}`);
}

// Call the main function to start the program
main();
