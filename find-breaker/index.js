const orderBreaker = (input) => {
    for (let i = 0; i < input.length; i++) {
        const newArr = input.slice(0, i).concat(input.slice(i + 1));
        if (isSorted(newArr)) {
          return input[i];
        }
      }

    return null;
}

const isSorted = (array) => {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i-1]) {
            return false;
        }
    }
    return true;
}

console.log(orderBreaker([1,2,5,3,4]));