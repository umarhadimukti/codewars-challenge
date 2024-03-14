// one line code!
const enough = (cap, on, wait) => ((cap-on) - wait) > 0 ? 0 : Math.abs((cap-on) - wait)

// const enough = (cap, on, wait) => {
//   let result = (cap-on) - wait;

//   return result > 0 ? 0 : Math.abs(result);
// }
console.log(enough(20, 5, 5));