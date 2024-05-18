console.log("Hello World")

/*
INIT const variable rock as 0
INIT const variable paper as 1
INIT const variable scissor as 2

FUNCTION getComputerChoice
    SET computerChoice to number between 0 and 2 inclusive
    IF computerChoice is 0 THEN
        PRINT rock
    ELSE IF computerChoice is 1 THEN
        PRINT paper
    ELSE 
        PRINT scissor
    ENDIF
ENDFUNCTION
*/

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3);
    // console.log(computerChoice);
    if (computerChoice === ROCK) return ROCK;
    else if (computerChoice === PAPER) return PAPER;
    else return SCISSORS;
}

// console.log(getComputerChoice());
/*
FUNCTION getHumanChoice
    INIT humanChoice and READ user input into humanChoice
    RETURN humanChoice
ENDFUNCTION
*/

function getHumanChoice() {
    let humanChoice = prompt("Enter one of the following: Rock, Paper, or Scissors");
    return humanChoice;
}

// console.log(getHumanChoice());

/*
FUNCTION playRound
    
*/