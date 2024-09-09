const readlineSync = require('readline-sync');

function titleCase(sentence) {
    // Convert the sentence to lowercase and split it into words
    const words = sentence.toLowerCase().split(' ');

    // Process each word to capitalize the first letter
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter and concatenate with the rest of the word
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    // Join the words back into a single string
    return words.join(' ');
}

const typeline = readlineSync.question('Enter the Sentence:');
const titleCasedSentence  = titleCase(typeline);
console.log(`Changed Line : ${titleCasedSentence }`);


