// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// solution#1
const countSheeps = (sheep) => {
    let result = 0;
    sheep.forEach(s => result += s === true);
    return result;
}

console.log(countSheeps([
    true,true,false,false,
    false,true,true,true,
    true,true,true,true,
    false,false,false,false,
    true,false,true,false
]));


// solution#2
const countSheeps2 = (sheep) => {
    return sheep.filter(Boolean).length;
}
console.log(countSheeps2([
    true,true,false,false,
    false,true,true,true,
    true,true,true,true,
    false,false,false,false,
    true,false,true,false
]))