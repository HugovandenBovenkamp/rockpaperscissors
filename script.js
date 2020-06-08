function computerplay(random) {
    const hand = ["Rock", "Paper", "Scissors"];
    const randomHand = hand[Math.floor(Math.random() * hand.length)];
    console.log("=>" , randomHand);
}

computerplay();

function playRound(playerSelection, computerSelection) {
    
}