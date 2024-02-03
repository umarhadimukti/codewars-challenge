// function grow(x) {
//   let resultMultiply = 1;
//   for (let i = 0; i < x.length; i++) {
//     resultMultiply *= x[i]; 
//   }
//   return resultMultiply;
// }
// console.log(grow([2,2,2,2,2]));

function grow(x) {
  let resultMultiply = x.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
  return resultMultiply;
}
console.log(grow([2,2,2,2,2]));