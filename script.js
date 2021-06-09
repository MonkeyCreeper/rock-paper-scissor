let playerScore = 0;
let computerScore = 0;

// playing one Round of Rock Paper Scissor
function playRound(playerSelection) {
 
  let computerSelection = computerPlay();

  console.log(computerSelection + " PC");
  console.log(playerSelection + " Player");

  if (playerSelection === computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
  } //case of Tie
  else if (
    (playerSelection === "Rock" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore += 1;
    document.getElementById("result").innerHTML = "You Win!";
    document.getElementById(
      "scoreboard"
    ).innerHTML = `Score: ${playerScore} : ${computerScore}`;
  } //case of Player won round 
  else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Rock")
  ) {
    computerScore += 1;
    document.getElementById("result").innerHTML = "You Loose!";
    document.getElementById(
      "scoreboard"
    ).innerHTML = `Score: ${playerScore} : ${computerScore}`;
  }//case of Player lost round 
}
//function to keep track of the Scoreboard, ressetting when one side reached 5 victorypoints
function trackScore() {
  console.log(playerScore);
  console.log(computerScore);
  if ((playerScore == 5)) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `Congratulations! You won the Game!`;
    playerScore = 0;
    computerScore = 0;
  } else if ((computerScore == 5)) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `Too Bad! You lost the Game!`;
    playerScore = 0;
    computerScore = 0;
  } else {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `Score: ${playerScore} : ${computerScore}`;
  }
}
//playing the Game
function playGame(e) {
  let playerSelection = this.id;
  console.log(playerSelection);
  playRound(playerSelection);
  trackScore(e);
}

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissor"];
  let min = 0;
  let max = 2;
  let x = Math.round(Math.random() * (max - min)) + min;
  return choices[x];
}

function printConsole(e) {
  console.log(e);
}

const playbuttons = document.querySelectorAll(".button");
playbuttons.forEach((button) => button.addEventListener("click", playGame));
