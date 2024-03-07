// way 1
const highAndLow = (number) => {
  let result = number.split(' ').sort((a,b) => a-b);
  return `${result[result.length-1]} ${result[0]}`
}
console.log(highAndLow('3 4 5 2 1 -1 0'))

// way 2
const highAndLow2 = (number) => {
  let result = number.split(' ');
  return `${Math.max(...result)} ${Math.min(...result)}`;
}
console.log(highAndLow2('8 2 -3 4 2 4'))