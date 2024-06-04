
humanScore = 0;
computerScore = 0;

function getHumanChoice() {
  const humanChoice = prompt('rock, paper or scissors?').toLowerCase();
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    console.log('please enter rock, paper or scissors');
    getHumanChoice();
  }
}

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ) {
      humanScore++;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        humanChoice === 'scissors' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'rock' && computerChoice === 'paper'
    ) {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    } else {
      console.log("It's a Tie!")
    }
}

function playGame() {
  let rounds = 1;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ) {
      humanScore++;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        humanChoice === 'scissors' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'rock' && computerChoice === 'paper'
    ) {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    } else {
      console.log("It's a Tie!")
    }
    rounds++;
}

  while (rounds <= 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(`Game Over! Score --- Human: ${humanScore}, Computer: ${computerScore}`)
}

// console.log(getComputerChoice());

playGame();
