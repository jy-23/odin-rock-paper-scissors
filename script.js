let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");

roundResult = document.querySelector(".round-result");
scoreContainer = document.querySelector(".score");
humanScoreDisplay = document.querySelector(".human-score");
computerScoreDisplay = document.querySelector(".computer-score");
gameResult = document.querySelector(".game-result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const gameBtns = document.querySelectorAll(".player-choice");

playAgain = document.querySelector(".play-again");
playBtn = document.querySelector("#yes");
quitBtn = document.querySelector("#no");

gameBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
        humanChoice = event.target.id;
        roundResult.textContent = playRound(humanChoice, getComputerChoice());
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        if (computerScore > 4 || humanScore > 4) {
            disableButtons();
            if (humanScore > computerScore) gameResult.textContent = "You WON the Game!";
            else gameResult.textContent = "You LOST the Game";
            playAgain.style.display = "block";
            playBtn.style.display = "inline";
            quitBtn.style.display = "inline";
        }
    });
});

playBtn.addEventListener("click", playGame);
quitBtn.addEventListener("click", endGame);

function disableButtons() {
    gameBtns.forEach((button) => {
        button.disabled = true; 
    })
}

function enableButtons() {
    gameBtns.forEach((button) => {
        button.disabled = false;
    })
}

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 100) % 3);
    if (computerChoice === 0) return "ROCK";
    else if (computerChoice === 1) return "PAPER";
    else return "SCISSORS";
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === computerChoice) return `Tie! Both returned ${humanChoice}`;
    else if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
             humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
             humanChoice === "SCISSORS" && computerChoice === "ROCK"
            ) {
        ++computerScore; 
        return `You lose! ${computerChoice} beats ${humanChoice}`;       
    }
    else {
        ++humanScore;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function removePlayAgain() {
    playAgain.style.display = "none";
    playBtn.style.display = "none";
    quitBtn.style.display = "none";
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    roundResult.textContent = "";
    gameResult.textContent = "";
    removePlayAgain();
    enableButtons();
}


function endGame() {
    removePlayAgain();
    roundResult.textContent = "";;
    quit = document.createElement("p");
    quit.textContent = "Bye Bye! You pressed the quit button";
    container.appendChild(quit);
}

playGame();
