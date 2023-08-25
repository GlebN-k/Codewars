const  rps = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
        return "Draw!";
    } else if (
        (player1Choice === "scissors" && player2Choice === "paper") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "rock" && player2Choice === "scissors")
    ) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}