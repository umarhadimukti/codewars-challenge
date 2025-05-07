// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const splitInPairs = (str) => {
    // check if the length of the string is odd
    if (str.length % 2 === 1) {
        // if it is, add an underscore to the end of the string
        str += '_';
    }

    // create an empty array to hold the pairs
    const pairs = [];

    // loop through the string in steps of 2
    for (let i = 0; i < str.length; i += 2) {
        // substring the string from i to i+2 and push it to the pairs array
        pairs.push(str.substring(i, i+2));
    }

    return pairs;
}
