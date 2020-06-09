function computerPlay() {
    let random = Math.floor(math.random() * 3);
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

computerPlay();

function playRound(playerSelection, computerSelection) {
   //if else statements here to start round.
}

