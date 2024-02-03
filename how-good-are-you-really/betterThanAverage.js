//! brute force! :v
function betterThanAverage(classPoints, yourPoints) {
  let result = 0;
  for (let i = 0; i < classPoints.length; i++) {
    result += classPoints[i];
  }
  result += yourPoints;
  result /= classPoints.length;
  
  if (result > yourPoints) {
    return false;
  }
  return true;
}
console.log(betterThanAverage([2,7], 9));

//! one line code
// function betterThanAverage(classPoints, yourPoints) {
//   return classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;
// }
// console.log(betterThanAverage([2,8], 9));