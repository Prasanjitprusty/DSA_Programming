function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];
  
    // Iterate over the elements in set1
    for (let element of set1) {
      // If the element is present in set2, add it to the intersection array
      if (set2.has(element)) {
        intersection.push(element);
      }
    }
  
    return Array.from(new Set(intersection)); // Removing duplicates using Set
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const result = arrayIntersection(arr1, arr2);
  console.log(result); // Output: [3, 4, 5]