let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");





roundResult = document.querySelector(".round-result");
score = document.querySelector(".score");
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
    const rock = document.createElement("button");
    rock.textContent = "ROCK";
    rock.classList.add("rock");
    rock.classList.add("choice");
    container.appendChild(rock);
    
    const paper = document.createElement("button");
    paper.textContent = "PAPER";
    paper.classList.add("paper");
    paper.classList.add("choice");
    container.appendChild(paper);
    
    const scissors = document.createElement("button");
    scissors.textContent = "SCISSORS";
    scissors.classList.add("scissors");
    scissors.classList.add("choice");
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
            }
        });
    });
}

startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.classList.add = "startBtn";

function startGame() {
    container.appendChild(startButton);
    startButton.addEventListener("click", () => {
        container.removeChild(startButton);
        playGame();
        endGame();
    })
}

function endGame() {
    computerScore = 0;
    humanScore = 0;

    playAgain = document.createElement("p");
    playAgain.textContent = "Play Again?"
    container.appendChild(playAgain);
    startButton.textContent = "Yes";
    container.appendChild(startButton);
    

    quitButton = document.createElement("button");
    quitButton.textContent = "No";
    container.appendChild(quitButton);

    startButton.addEventListener("click", () => {
        roundResult.textContent = "";
        gameResult.textContent = "";
        score.textContent = "";

        startGame();
    });
}

startGame();

