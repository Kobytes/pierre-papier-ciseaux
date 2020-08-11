const userScore = 0;
const computerScore = 0;
const spanUserScore = document.getElementById("user-score");
const spanComputerScore = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

function game(userChoice) {
  console.log("💩💩💩" + userChoice);
}

function main() 
{
  rockDiv.addEventListener('click', function() {
    game("rock");
  })

  paperDiv.addEventListener('click', function() {
    game("paper");
  })

  scissorsDiv.addEventListener('click', function() {
    game("scissors");
  })
}

main();