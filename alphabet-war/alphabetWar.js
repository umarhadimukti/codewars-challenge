//! soal
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!


const alphabetWar = (fight) => {
  const leftSide = {w: 4, p: 3, b: 2, s: 1};
  const rightSide = {m: 4, q: 3, d: 2, z: 1};

  // ubah fight ke array dulu
  const arrFight = fight.split('');

  // 1. cari item fight yang cocok dengan wpbs
  // 2. looping setiap item yang cocok, kemudian return side[fight]
  // 3. jumlahkan setiap item
  const leftMatching = arrFight.filter(fight => fight.match(/[wpbs]/gi)).map(fight => leftSide[fight]).reduce((a, b) => a + b, 0);
  const rightMatching = arrFight.filter(fight => fight.match(/[mqdz]/gi)).map(fight => rightSide[fight]).reduce((a, b) => a + b, 0);

  return leftMatching > rightMatching ? 'Left side wins!' : leftMatching < rightMatching ? 'Right side wins!' : "Let's fight again!";
}
console.log(alphabetWar('pqwwwdzzz'));