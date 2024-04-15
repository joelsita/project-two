//  selecting all the elements and storing the value

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const computerScores = document.getElementById('computerScores');
const playerScores = document.getElementById('playerScores');

let playerChoice;
let computerChoice;
let result;
let playerScore=0;
let computerScore=0;

// Adding an event lister to listen to when the game button are clicked
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id
  userChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
  getResult();
}));

// Generating a random computer choice 

function generateComputerChoice() {
  // mapping it to display a whole Number
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  else if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  else if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}