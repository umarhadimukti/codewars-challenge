// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (player1, player2) => {
  const finger = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
  if (player1 === player2) return 'Draw!';
  return `Player ${finger[player1] === player2 ? 1 : 2} won`
}
console.log(rps('rock', 'paper'));