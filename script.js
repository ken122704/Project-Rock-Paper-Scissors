let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.random();

    if (random < 0.34) {
        return 'rock';
    } else if (random <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice () {
    let choice = window.prompt("Do you choose rock, paper or scissors?");
    choice = choice.toLowerCase();
    return choice;
}
        

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    console.log('Final Scores:');
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You are the overall winner!');
    } else if (computerScore > humanScore) {
        console.log('The computer is the overall winner!');
    } else {
        console.log("It's an overall tie!");
    }
}

playGame();