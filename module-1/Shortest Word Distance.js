const shortestDistance = (wordsDict, word1, word2) => {
    let index1 = -1; 
    let index2 = -1;  
    let minDistance = wordsDict.length;  
    
    
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i;  
        }
        if (wordsDict[i] === word2) {
            index2 = i;  
        }
        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }
    
    return minDistance;
}

const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict, "coding", "makes"));  // Output: 1
