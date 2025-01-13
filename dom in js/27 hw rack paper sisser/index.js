// script.js

let playerScore = 0;
let computerScore = 0;

// Choices for Rock-Paper-Scissors
const choices = ['Rock', 'Paper', 'Scissors'];

// Function to get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        playerScore++;
        return "Player Wins";
    } else {
        computerScore++;
        return "Computer Wins";
    }
}

// Event listener for player choices
const choicesButtons = document.querySelectorAll('.choice');
choicesButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const playerChoice = event.target.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = checkWinner(playerChoice, computerChoice);

        // Update DOM
        document.getElementById('playerChoice').innerHTML = `Player: ${playerChoice}`;
        document.getElementById('computerChoice').innerHTML = `Computer: ${computerChoice}`;
        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
    });
});

// Restart button logic
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerChoice').innerHTML = 'Player: ';
    document.getElementById('computerChoice').innerHTML = 'Computer: ';
    document.getElementById('result').innerHTML = '';
    document.getElementById('score').innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
});