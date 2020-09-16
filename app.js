//getting window input - stretch
let userInput = prompt('choose rock, paper, scissor');

//converting userInput string to lowercase
userInput = userInput.toLowerCase();

console.log(`You chose: ${userInput}`) //seeing input from userInput

//using window input => players choice (pChoice)
function pChoice () {
  if (userInput == null || userInput == undefined) {
    return 'error pChoice'
  } else {
    return userInput
  }
}


//Random Number Generator for CPU logic 0-3
const cpuLogic =  (Math.floor(Math.random() * 3)) 


//random whole number between 0-2 for random logic
function cpuChoice  () {
  if (cpuLogic === 0) {
    return 'rock';
  } else if (cpuLogic === 1) {
    return 'paper';
  } else if (cpuLogic === 2) {
    return 'scissor';
  } else {
    return 'Error cpuChoice'
  };
}
console.log(`Computer Chose: ${cpuChoice()}`) 

//establish if/else statements to determine winner
function decision() {
  if (pChoice() == 'rock' && cpuChoice() == 'rock') {
    return 'You and the Computer Tied'
  } else if (pChoice() == 'paper' && cpuChoice() == 'paper'){
    return 'You and the Computer Tied'
  } else if (pChoice() == 'scissor' && cpuChoice() == 'scissor') {
    return 'You and the Computer Tied'
  } else if (pChoice() == 'rock' && cpuChoice() == 'paper') {
    return 'The computer won'
  } else if (pChoice() == 'rock' && cpuChoice() == 'scissor') {
    return 'You Won!'
  } else if (pChoice() == 'paper' && cpuChoice() == 'scissor') {
    return 'The computer won!'
  } else if (pChoice() == 'paper' && cpuChoice() == 'rock') {
    return 'You Won!'
  } else if (pChoice() == 'scissor' && cpuChoice() == 'rock') {
    return 'The computer won!'
  } else if (pChoice() == 'scissor' && cpuChoice() == 'paper') {
    return 'You Won!'
  } else {
    return `error ${pChoice} ${cpuChoice}`
  } 
}


console.log(decision()) //error logging for the decision function