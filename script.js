let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const roundResultDiv = document.querySelector('#round-result');
const humanScoreSpan = document.querySelector('#human-score');
const computerScoreSpan = document.querySelector('#computer-score');
const finalWinnerH2 = document.querySelector('#final-winner');
const resetBtn = document.querySelector('#reset-btn');
const gameButtons = document.querySelectorAll('.btn');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    if (humanScore >= winningScore || computerScore >= winningScore) return;

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = `🤝 It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        message = `🔥 Point for you! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        message = `💻 Computer scores! ${computerChoice} beats ${humanChoice}.`;
    }

    updateUI(message);
    checkWinner();
}

function updateUI(message) {
    roundResultDiv.textContent = message;
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

function checkWinner() {
    if (humanScore === winningScore || computerScore === winningScore) {
        finalWinnerH2.textContent = humanScore === winningScore ? "🏆 You Won the Game!" : "🤖 Computer Wins!";
        resetBtn.style.display = "inline-block";
        gameButtons.forEach(btn => btn.style.opacity = "0.5");
    }
}

// Reset Logic
resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    updateUI("Choose your weapon to start!");
    finalWinnerH2.textContent = "";
    resetBtn.style.display = "none";
    gameButtons.forEach(btn => btn.style.opacity = "1");
});

gameButtons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id));
});