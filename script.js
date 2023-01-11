function getComputerChoice() {
    choice = Math.trunc((Math.random() * 3));
    return weapons[choice];
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            result = "tie" 
        }
        else if (computerSelection.toLowerCase() == "paper") {
            result = "loss" 
            computerScore++;
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            result = "win"
            playerScore++;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            result = "win" 
            playerScore++;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            result = "tie" 
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            result = "loss"
            computerScore++;
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            result = "loss" 
            computerScore++;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            result = "win"
            playerScore++; 
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            result = "tie"
        }
    }
    updateScreen(playerSelection, computerSelection);
    if (result == "win") return "You won I guess...";
    else if (result == "loss") return "You lost bozo :)";
    else return "It's a tie..."
    
}

function updateScreen(playerSelection, computerSelection, result) {
    const playerText = document.querySelector(".player-selection");
    const computerText = document.querySelector(".computer-selection");
    playerText.innerText = `Player chose ${playerSelection}!`;
    computerText.innerText = `Computer chose ${computerSelection}!`;
    score.innerText = `Player: ${playerScore} Computer: ${computerScore}`;
}

function game() {
    heading.innerText = (playRound(playerSelection, getComputerChoice()));
}

const heading = document.querySelector(".heading");
const weaponButtons = document.querySelectorAll(".weapon");
const score = document.querySelector(".score")
weaponButtons.forEach( (weaponButton) => {
    weaponButton.addEventListener("click", () => {
        playerSelection = weaponButton.getAttribute("data-type");
        game();
    })
});

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let weapons = ["rock", "paper", "scissors"];