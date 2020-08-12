let userScore = 0;
let computerScore = 0;
const spanUserScore = document.getElementById("user-score");
const spanComputerScore = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

function goComputerChoice() {
  const choices = ['Pierre', 'Papier', 'Ciseaux'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function wordConverter(letter) {
  if (letter === "Pierre") return "La Pierre";
  if (letter === "Papier") return "Le Papier";
  return "Les Ciseaux"; 
}

function win(userChoice, computerChoice) {
  userScore++;
  spanUserScore.innerHTML = userScore;
  spanComputerScore.innerHTML = computerScore;
  resultP.innerHTML = `${wordConverter(userChoice)} bats ${wordConverter(computerChoice)}. Tu as gagné ! ✨`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  spanUserScore.innerHTML = userScore;
  spanComputerScore.innerHTML = computerScore;
  resultP.innerHTML = `${wordConverter(userChoice)} perd face à / au / aux ${wordConverter(computerChoice)}. Tu as perdu... 😭`;
}

function draw(userChoice, computerChoice) {
  resultP.innerHTML = `${wordConverter(userChoice)} & ${wordConverter(computerChoice)} s'entrechoquent. C'est... UNE EGALITE ! 😱 `;
}

function game(userChoice) {
  const computerChoice = goComputerChoice();
  switch (userChoice + computerChoice) {
    case 'PierreCiseaux':
    case 'PapierPierre':
    case 'CiseauxPapier':
      win(userChoice, computerChoice);
      break;
    case 'PierrePapier':
    case 'PapierCiseaux':
    case 'CiseauxPierre':
      lose(userChoice, computerChoice);
      break;
    case 'PierrePierre':
    case 'PapierPapier':
    case 'CiseauxCiseaux':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() 
{
  rockDiv.addEventListener('click', function() {
    game("Pierre");
  })

  paperDiv.addEventListener('click', function() {
    game("Papier");
  })

  scissorsDiv.addEventListener('click', function() {
    game("Ciseaux");
  })
}

main();