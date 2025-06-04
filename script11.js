function rockPaperScissors() {
  const player1 = prompt("Player 1, enter rock, paper, or scissors:").toLowerCase();
  const player2 = prompt("Player 2, enter rock, paper, or scissors:").toLowerCase();

  if (player1 === player2) {
    alert("It's a tie!");
  } else {
    if (player1 === "rock") {
      if (player2 === "scissors") {
        alert("Player 1 wins! Rock beats Scissors.");
      } else if (player2 === "paper") {
        alert("Player 2 wins! Paper beats Rock.");
      } else {
        alert("Invalid input from Player 2.");
      }
    } else if (player1 === "paper") {
      if (player2 === "rock") {
        alert("Player 1 wins! Paper beats Rock.");
      } else if (player2 === "scissors") {
        alert("Player 2 wins! Scissors beats Paper.");
      } else {
        alert("Invalid input from Player 2.");
      }
    } else if (player1 === "scissors") {
      if (player2 === "paper") {
        alert("Player 1 wins! Scissors beats Paper.");
      } else if (player2 === "rock") {
        alert("Player 2 wins! Rock beats Scissors.");
      } else {
        alert("Invalid input from Player 2.");
      }
    } else {
      alert("Invalid input from Player 1.");
    }
  }
}
