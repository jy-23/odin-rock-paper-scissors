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


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3);
    // console.log(computerChoice);
    if (computerChoice === 0) return "ROCK";
    else if (computerChoice === 1) return "PAPER";
    else return "SCISSORS";
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


/*
FUNCTION playRound(humanChoice, computerChoice)
    SET humanChoice as all uppercased version
    IF humanChoice is equal to computerChoice THEN
        PRINT Tie!
    ELSE IF humanChoice is rock and computerChoice is paper OR
            humanChoice is paper and computerChoice is scissor OR
            humanChoice is scissor and computerChoice is rock THEN
        PRINT You lose! computerChoice beats humanChoice
        INCREMENT computerScore
    ELSE 
        PRINT You win! humanChoice beats computerChoice
        INCREMENT humanScore
ENDFUNCTION
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === computerChoice) return ("Tie!")
    else if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
             humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
             humanChoice === "SCISSORS" && computerChoice === "ROCK"
            ) {
        ++computerScore; 
        return ("You lose! " + computerChoice + " beats " + humanChoice);       
    }
    else {
        ++humanScore;
        return ("You win! " + humanChoice + " beats " + computerChoice);
    }
}

/* 
FUNCTION playGame
    FOR each round
        CALL playRound
    ENDFOR
    If humanScore is greater than computerScore THEN
        PRINT You Won!
    ELSE IF humanScore is less than computerScore THEN
        PRINT You Lost!
    ELSE
        PRINT It's a Tie!
    ENDIF
    PRINT humanScore vs computerScore
ENDFUNCTION
*/

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) return "You Won!";
    else if (humanScore < computerScore) return "You lost!";
    else return "It's a Tie!"
}


console.log(playGame());
console.log(humanScore + " to " + computerScore);