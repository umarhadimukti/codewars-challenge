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