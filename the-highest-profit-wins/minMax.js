const minMax1 = (arr) => {
  const myArray = arr.sort();
  return [myArray[0], myArray[myArray.length-1]]
}
console.log(minMax1([1,3,2,5,4]))

const minMax = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return [arr[0], arr[arr.length-1]];
}
console.log(minMax([1,2,3,9,8,10,5]))