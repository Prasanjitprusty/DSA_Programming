function insert7(inputString) {
  let modifiedString = "";
  let count = 0;

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];
    if (currentChar !== ' ') {
      count++;
      modifiedString += currentChar;
      if (count % 6 === 0) {
        modifiedString += '7';
      }
    }
  }

  return modifiedString;
}

// Example usage
const originalString = "Hello World and Universe!";
const result = insert7(originalString);
console.log(result); // Output: "Thisisatest7stringwith7somespaces"