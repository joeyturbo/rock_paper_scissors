
let humanScore = 0;
let computerScore = 0;
const roundResults = document.querySelector('#round-results');
const computerScoreDisplay = document.querySelector('#computer-score');
const humanScoreDisplay = document.querySelector('#human-score');



function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);

  switch (computerChoice) {
    case 1: 
      return 'rock';
    case 2:
      return 'paper';
    case 3: 
      return 'scissors';
  }
}

function gameReset() {
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  roundResults.textContent = 'Select below to start the game'
}

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      alert(`You Won The Game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`)
      gameReset();
    } else {
      alert(`You Lose :( Final Score - Human: ${humanScore}, Computer: ${computerScore}`)
      gameReset();

    }
  }
}

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'scissors' && computerChoice === 'paper' ||
      humanChoice === 'paper' && computerChoice === 'rock'
  ) {
    humanScore++;
    humanScoreDisplay.textContent = humanScore;
    roundResults.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
  } else if (
      humanChoice === computerChoice
  ) {
    roundResults.textContent = `It's a draw! You both chose ${humanChoice}`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    roundResults.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
  }
  checkForWinner()
}


const btnList = document.querySelectorAll('.btn');


btnList.forEach((btn) => {
  btn.addEventListener('click',() => playRound(btn.id, getComputerChoice()))
})





