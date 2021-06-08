/* 

Implementing: Rock-Paper-Scissor-Game

Pseudocode:

computerPlay()

computer chooses randomly between Rock, Paper Scissor
safe in variable computerSelection

playerSelection(Rock,Paper,Scissor)
ask player for input
wandel input in Rock/ Paper/ Scissor um, case sensitive
speichere input in variable playerSelection




function which compares both return of computerSelection and playerSelection and sees who won
whoWon(computerSelection, playerSelection){


if playerSelection == Rock and computerSelection == Paper
    return computer won
if playerSelection == Paper and computerSelection == Rock
    return player won
if playerSelection == Rock and computerSelection == Scissor
    return player won
if computerSelection == Scissor and 

}



*/

function playRound(playerSelection,computerSelection){
    playerSelection = capitalize(playerSelection);

    if(playerSelection === computerSelection){
        return "Tie";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissor"){
        return "You Win! Rock beats Scissor" ;
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Loose! Rock beats Paper";

    }
    else if(playerSelection === "Paper" && computerSelection === "Scissor"){
        return "You Loose! Scissor beats Paper";

    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "Scissor" && computerSelection === "Paper"){
        return "You Win! Scissor beats Paper" ;

    }
    else if(playerSelection === "Scissor" && computerSelection === "Rock"){
        return "You Loose! Rock beats Scissor";

    }
    else{
        return "Error. Please Choose between Rock, Paper, Scissor";
        
    }

}

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissor"];
  let min = 0;
  let max = 2;
  let x = Math.round(Math.random() * (max - min)) + min;
  //console.log("Stelle des Arrays" + x);
  return choices[x];
};

function capitalize(string) {
  string = string.toLowerCase();
  let first_letter = string.slice(0, 1);
  return string.replace(first_letter, first_letter.toUpperCase());
};

//let playerSelection = prompt("Choose: Rock, Paper, Scissor","");
//let computerSelection = computerPlay();


//console.log(playRound(playerSelection,computerSelection));

function game(num = 5){
    
    for(let i = 1; i <= num;i++){
        let playerSelection = prompt("Choose: Rock, Paper, Scissor","");
        let computerSelection = computerPlay();
        //playRound(playerSelection,computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
 
}

console.log(game(2));