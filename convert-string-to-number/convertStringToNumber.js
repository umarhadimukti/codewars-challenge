const stringToNumber = (str) => {
  // if (parseInt(str)) {
  //   return parseInt(str);
  // }
  // return null;
  return parseInt(str) ? parseInt(str) : null;
}
console.log(stringToNumber("1003"))

//! one line code! :)
const stringToNumber2 = (str) => parseInt(str) ? parseInt(str) : null;
console.log(stringToNumber2("4sldkfjs"))