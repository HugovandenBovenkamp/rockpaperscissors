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

//Computer takes random element from array replaces function computerPlay.
function computerPlay() {
    var values = ["Rock", "Paper", "Scissors"];
    computerInput = values[Math.floor(Math.random() * 3)];
}


// Activate buttons.
function buttonRock() {
    playerInput = "Rock";
    console.log("You chose Rock");
    computerPlay();
    checkWin();
}

function buttonPaper() {
    playerInput = "Paper";
    console.log("You chose Paper");
    computerPlay();
    checkWin();
}

function buttonScissors() {
    playerInput = "Scissors";
    console.log("You chose Scissors");
    computerPlay();
    checkWin();
}


// Checks for Win, Lose, or tie.
function checkWin() {
   if (playerInput == computerInput) {
       console.log("It's a tie! " + playerInput + " is the same as " + computerInput);
       checkResult();
   }
   else if ((playerInput == "Rock" && computerInput == "Paper") || (playerInput == "Paper" && computerInput == "Scissors") || (playerInput == "Scissors" && computerInput == "Rock")) {
       console.log("You lose! " + playerInput + " loses from " + computerInput);
       computerWins++;
       checkResult();
       document.getElementById("computerScore").innerHTML = computerWins;
       document.getElementById("playerScore").innerHTML = playerWins;
       
   }
   else if ((playerInput == "Rock" && computerInput == "Scissors") || (playerInput == "Paper" && computerInput == "Rock") || (playerInput == "Scissors" && computerInput == "Paper")) {
       console.log("You Win! " + playerInput + " wins from " + computerInput);
       playerWins++;
       checkResult();
       document.getElementById("playerScore").innerHTML = playerWins; 
       document.getElementById("computerScore").innerHTML = computerWins;
   }
}


function checkResult() {
    if (playerWins == 5) {
        console.log("You've won the game! Computer lost!");
        computerWins = 0;
        playerWins = 0;
    }
    else if (computerWins == 5) {
        console.log("You've lost the game! Computer wins!");
        playerWins = 0;
        computerWins = 0;
    }
}

playRound();
