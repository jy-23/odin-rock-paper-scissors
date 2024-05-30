let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");

roundResult = document.querySelector(".round-result");
score = document.querySelector(".score");
gameResult = document.querySelector(".game-result");

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3);
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
    const rock = document.createElement("button");
    rock.textContent = "ROCK";
    rock.classList.add("rock");
    rock.classList.add("choice");
    
    const paper = document.createElement("button");
    paper.textContent = "PAPER";
    paper.classList.add("paper");
    paper.classList.add("choice");
    
    const scissors = document.createElement("button");
    scissors.textContent = "SCISSORS";
    scissors.classList.add("scissors");
    scissors.classList.add("choice");

    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);
    
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.textContent;
            roundResult.textContent = playRound(humanChoice, getComputerChoice());
            score.textContent = humanScore + " to " + computerScore;
            if (computerScore > 2 || humanScore > 2) {
                container.removeChild(rock);
                container.removeChild(paper);
                container.removeChild(scissors);
                if (humanScore > computerScore) gameResult.textContent = "You WON the Game!";
                else gameResult.textContent = "You LOST the Game";
                endGame();
            }
        });
    });
}


function startGame() {
    startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.classList.add = "startBtn";
    container.appendChild(startButton);    
    startButton.addEventListener("click", () => {
        container.removeChild(startButton);
        playGame();
        
    })
}


function endGame() {
    quit = document.createElement("p");
    quit.textContent = "Bye Bye! Refresh to play again";
    container.appendChild(quit);
}

startGame();

