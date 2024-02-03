//! Create a function with two arguments that will return an array of the first n multiples of x.

//! Assume both the given number and the number of times to count will be positive numbers greater than 0.

//! Return the results as an array or list ( depending on language ).

//! Examples
//! countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//! countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//   // buat array kosong
//   let z = [];

//   // iterasi i=1 sebanyak n
//   for (let i = 1; i <= n; i++) {
//     // push nilai i * x kedalam array z
//     z.push(i*x);
//   }

//   // kembalikan array z
//   return z;
// }
// console.log(countBy(2,6));

function countBy(x, n) {
  return Array.from({length: n}, (k, i) => (i+1) * x)
}
console.log(countBy(2, 6))