const signOfProduct = (arr) => {
    let negativeCount = 0;
    
    for (let num of arr) {
        if (num === 0) {
            return 0;  // If there's a zero, the product is zero
        }
        if (num < 0) {
            negativeCount++;  // Count the number of negative numbers
        }
    }
    
    // If the number of negatives is odd, the product is negative; otherwise, it's positive
    return negativeCount % 2 === 0 ? 1 : -1;
}

// Example usage
console.log(signOfProduct([2, -3, 5, 4]));  // Output: -1

