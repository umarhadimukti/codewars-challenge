const isIsogram = (str) => {
    const lowStr = str.toLowerCase();
    
    for (let i = 0; i < lowStr.length; i++) {
        for (let j = i+1; j < lowStr.length; j++) {
            if (lowStr[i] === lowStr[j]) {
                return false;
            }
        }
    }
    return true;
}

isIsogram('Uamar');