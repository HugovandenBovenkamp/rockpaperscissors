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


//Computer takes random element from array replaces function computerPlay.

function computerPlay() {
    var values = ["Rock", "Paper", "Scissors"];
    computerInput = values[Math.floor(Math.random() * 3)];
}



