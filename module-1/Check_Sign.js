const checkSign = (a, b, c) => {
    let result = '';
    
    result += a >= 0 ? '+' : '-';
    result += b >= 0 ? '+' : '-';
    result += c >= 0 ? '+' : '-';
    
    return result;
}


console.log(checkSign(2, 5, 7));    

