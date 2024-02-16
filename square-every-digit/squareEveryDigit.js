const squareDigits = (number) => Number(number.toString().split('').map(num => parseInt(num*num)).join(''));
console.log(squareDigits(123213))