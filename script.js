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

const buttons = document.querySelectorAll("button");
roundResult = document.querySelector(".round-result");
gameResult = document.querySelector(".game-result");

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3);
    // console.log(computerChoice);
    if (computerChoice === 0) return "ROCK";
    else if (computerChoice === 1) return "PAPER";
    else return "SCISSORS";
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === computerChoice) return ("Tie! Both returned " + humanChoice);
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
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                humanChoice = button.className;

                console.log(humanChoice);
                roundResult.textContent = playRound(humanChoice, getComputerChoice());
            });
        });
        console.log(humanScore + " to " + computerScore);
    }
    if (humanScore > computerScore) return "You Won!";
    else if (humanScore < computerScore) return "You lost!";
    else return "It's a Tie!"
}

playGame();


