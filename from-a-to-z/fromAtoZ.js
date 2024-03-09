//! Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
//* Note that if the range is given in capital letters, return the string in capitals also!

//? Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"

const gimmeTheLetters = (sp) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let inputString = sp[0] + sp[sp.length-1];
  if (inputString === inputString.toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }
  
  let result = '';
  for (let i = alphabet.indexOf(inputString[0]); i <= alphabet.indexOf(inputString[1]); i++) {
    result += alphabet[i];
  }

  return result;
}
console.log(gimmeTheLetters('A-F'))