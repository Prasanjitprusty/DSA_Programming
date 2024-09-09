function findMove(s) {
    const result = [];
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            const newState = s.slice(0, i) + '--' + s.slice(i + 2);
            result.push(newState);
        }
    }
    return result;
}

// Examples
console.log(findMove("++++")); 

