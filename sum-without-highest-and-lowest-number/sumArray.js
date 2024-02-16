const sumArray = (array) => {
  if (array === null) {
    return 0;
  } else if (array.length <= 1) {
    return 0;
  } else {  
      array = array.sort((a,b) => a-b);
      let sum = 0;
      for (let i = 1; i < array.length - 1; i++) {
        sum += array[i];
      }
      return sum;
  }
}
console.log(sumArray([ -6, 29, 12, 3, 5 ]))