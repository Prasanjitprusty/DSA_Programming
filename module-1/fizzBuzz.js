function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 4 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());function findMove(s) {
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
            
            
        }
    }

    return result;
}


console.log(fizzBuzz(5)); 
