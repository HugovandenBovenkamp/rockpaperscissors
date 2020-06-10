// Global variables
let computerWins = 0;
let playerWins = 0;
let tie = "It's a tie!";
let win = "You win!";
let lose = "You lose";


function buttonEvents() {
    //Connect buttons to html buttons and trigger event?
}



//Function that returns RPS random.
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

computerPlay();

//Plays one round of RPS.
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = // <--buttonOnclickfunction here
    
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        return tie;
    }
}

playRound();




