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
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = 'paper'
  }
  else if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  else if (randomNumber === 3) {
    computerChoice = 'rock'
  }
  // to show much choices comuputer picked on screen
  computerChoiceDisplay.innerHTML = computerChoice;
}

// To display results message on screen

function getResult() {
  if (computerChoice === playerChoice) {
    result = 'its a draw!, play Again'
  }
 else  if  (computerChoice === 'rock' && playerChoice === "paper") {
    result = 'You Win'
  }
  else if (computerChoice === 'rock' && playerChoice === "scissors") {
    result = 'You Lose'
  }
 else if (computerChoice === 'paper' && playerChoice === "scissors") {
    result = 'You Lose'
  }
 else if (computerChoice === 'paper' && playerChoice === "rock") {
    result = 'You Lose'
  }
 else if (computerChoice === 'scissors' && playerChoice === "rock") {
    result = 'You Win'
  }
  else if (computerChoice === 'scissors' && playerChoice === "paper") {
    result = 'You Lose'
  }
  // showing the results on screen with the message
  resultDisplay.innerHTML = result

// Reseting the game back to zoro to clear the color messages
  resultDisplay.classList.remove("winText", "loseText");
  
  // changing a message color to display different each time comuputer or player win
  switch(result){
    case 'You Win':
      resultDisplay.classList.add("winText")
      playerScore ++;
      playerScores.textContent=playerScore;
      break;

      case 'You Lose':
        resultDisplay.classList.add("loseText")
        computerScore ++;
        computerScores.textContent=computerScore;
        break;
  }

}