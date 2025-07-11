let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{ 

const rock = 0;
const paper = 1;
const scissors =2;
let getValue = Math.floor(Math.random() *3)

if (getValue ===0)
{return"rock"}
else if (getValue ===1){return"paper"}
else {return "scissors"}

}

console.log(getComputerChoice())

function getHumanChoice() {
    let userInput = prompt(`Choose one of the following:
      "rock", "paper", or "scissors"`);
  
    if (!userInput) return "Invalid: No input given";
  
    userInput = userInput.toLowerCase();
  
    if (userInput === "rock") {
      return "rock";
    } else if (userInput === "paper") {
      return "paper";
    } else if (userInput === "scissors") {
      return "scissors";
    } else {
      return "Invalid: Choice must be rock, paper, or scissors";
    }
  }
  
  console.log(getHumanChoice());
  
