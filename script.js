function playRound(e) {
  
  let playerSelection = this.id;
  let computerSelection = computerPlay();
  console.log(computerSelection + " PC");
  //playerSelection = capitalize(playerSelection);

  if (playerSelection === computerSelection) {
    console.log( "Tie");
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    console.log( "You Win! Rock beats Scissor");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log( "You Loose! Paper beats Rock");
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    console.log( "You Loose! Scissor beats Paper");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log( "You Win! Paper beats Rock");
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log( "You Win! Scissor beats Paper");
  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    console.log( "You Loose! Rock beats Scissor" );
  } else {
    console.log( "Error. Please Choose between Rock, Paper, Scissor");
  }
}

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissor"];
  let min = 0;
  let max = 2;
  let x = Math.round(Math.random() * (max - min)) + min;
  return choices[x];
}
//function to change rock,RoCK, RocK into Rock, standarize input
function capitalize(string) {
  string = string.toLowerCase();
  let first_letter = string.slice(0, 1);
  return string.replace(first_letter, first_letter.toUpperCase());
}

//let playerSelection = prompt("Choose: Rock, Paper, Scissor","");
//let computerSelection = computerPlay();


function printConsole(e){
    console.log(e);
}

const playbuttons = document.querySelectorAll(".button");
playbuttons.forEach(button => 
        button.addEventListener("click", playRound)
        );










