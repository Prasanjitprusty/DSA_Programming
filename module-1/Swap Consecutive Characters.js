function swapConsecutiveCharacters(inputString) {
    let swappedString = '';
  
    for (let i = 0; i < inputString.length; i += 2) {
      if (i + 1 < inputString.length) {
        // Swap consecutive characters
        swappedString += inputString[i + 1] + inputString[i];
      } else {
        // Append the last character if the length is odd
        swappedString += inputString[i];
      }
    }
  
    return swappedString;
  }
  
  // Example usage
  const originalString = "hello";
  const result = swapConsecutiveCharacters(originalString);
  console.log(result); // Output: "ehlol"