const readlineSync = require('readline-sync');

function CountOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
function main(){
    const str = readlineSync.question('Enter the Sentence: ');
    const char = readlineSync.question('Enter the char : ');

    console.log(CountOccurrences(str, char))
}
main();
// Do not modify the below lines
