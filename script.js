let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.classList.add("rock");
container.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.classList.add("paper");
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.classList.add("scissors");
container.appendChild(scissors);

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3);
    // console.log(computerChoice);
    if (computerChoice === 0) return "ROCK";
    else if (computerChoice === 1) return "PAPER";
    else return "SCISSORS";
}

function getHumanChoice() {
    let humanChoice = prompt("Enter one of the following: Rock, Paper, or Scissors");
    return humanChoice;
}


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


function playGame() {
    for (let i = 0; i < 1; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) return "You Won!";
    else if (humanScore < computerScore) return "You lost!";
    else return "It's a Tie!"
}

//console.log(playGame());
console.log(humanScore + " to " + computerScore);