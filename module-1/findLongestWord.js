const readlineSync = require('readline-sync');

// Define the function to find the length of the longest word
function findLongestWord(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');
    let maxLength = 0;

    // Iterate over each word to find the maximum length
    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Prompt the user for a sentence
const sentence = readlineSync.question('Please enter a sentence: ');

// Find and print the length of the longest word
const longestWordLength = findLongestWord(sentence);
console.log(`The length of the longest word is: ${longestWordLength}`);

// Do not modify the below lines
module.exports = { findLongestWord };
