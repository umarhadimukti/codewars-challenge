//! You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//! If it is a square, return its area. If it is a rectangle, return its perimeter.

//! Example(Input1, Input2 --> Output):

//! 6, 10 --> 32
//! 3, 3 --> 9

//* brute force! :v
// function areaOrParimeter(l, w) {
//   let squareArea = l * w;
//   let rectangleArea = 2 * (l + w);
//   let square = l === w ? squareArea : false;
//   let rectangle = l !== w ? rectangleArea : false;

//   if (square) {
//     return square;
//   }
//   if (rectangle) {
//     return rectangle;
//   }
// }
// console.log(areaOrParimeter(3, 3))

//* one line code!
const areaOrParimeter = (l, w) => (l !== w) ? 2*(l+w) : l*w;
console.log(areaOrParimeter(3, 3))