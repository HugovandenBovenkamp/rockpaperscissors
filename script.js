// Global variables
let playerInput;
let computerWins = 0;
let playerWins = 0;
let computerInput;

// Waits for the button to be pressed.
function playRound() {
    document.getElementById("Rock").addEventListener("click", buttonRock);
    document.getElementById("Paper").addEventListener("click", buttonPaper);
    document.getElementById("Scissors").addEventListener("click", buttonScissors);
}

function checkWin() {
   if (playerInput == computerInput) {
       console.log("It's a tie! " + playerInput + " Is the same as " + computerInput);
   }
   else if ((playerInput == "Rock" && computerInput == "Paper") || (playerInput == "Paper" && computerInput == "Scissors") || (playerInput == "Scissors" && computerInput == "Rock")) {
       console.log("You lose! " + playerInput + " Loses from " + computerInput);
   }
   else if ((playerInput == "Rock" && computerInput == "Scissors") || (playerInput == "Paper" && computerInput == "Rock") || (playerInput == "Scissors" && computerInput == "Paper")) {
       console.log("You Win! " + playerInput + " Wins from " + computerInput);
   }
}

playRound();
