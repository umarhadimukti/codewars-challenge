const solution = (str, ending) => {
    return str.endsWith(ending);
}

console.log(solution('abcded', 'cded'));
console.log(solution('abcded', 'ed'));
console.log(solution('abcded', 'te'));