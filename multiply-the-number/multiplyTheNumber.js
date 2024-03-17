const multiply = (number) => {
  if (number < 0) {
    number = -Math.abs(number);
    let pow = Math.pow(5, number.toString().length-1);
    return number * pow;
  }
  return number * Math.pow(5, number.toString().length);
}
console.log(multiply(-2))