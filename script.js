function getComputerChoice() {
    choice = Math.trunc((Math.random() * 3));
    return weapons[choice];
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() == "fire") {
        if (computerSelection.toLowerCase() == "fire") {
            result = "tie" 
        }
        else if (computerSelection.toLowerCase() == "grass") {
            result = "loss" 
            computerHealth--;
        }
        else if (computerSelection.toLowerCase() == "water") {
            result = "win"
            playerHealth--;
        }
    }
    else if (playerSelection.toLowerCase() == "grass") {
        if (computerSelection.toLowerCase() == "fire") {
            result = "win" 
            playerHealth--;
        }
        else if (computerSelection.toLowerCase() == "grass") {
            result = "tie" 
        }
        else if (computerSelection.toLowerCase() == "water") {
            result = "loss"
            computerHealth--;
        }
    }
    else if (playerSelection.toLowerCase() == "water") {
        if (computerSelection.toLowerCase() == "fire") {
            result = "loss" 
            computerHealth--;
        }
        else if (computerSelection.toLowerCase() == "grass") {
            result = "win"
            playerHealth--; 
        }
        else if (computerSelection.toLowerCase() == "water") {
            result = "tie"
        }
    }
    updateScreen(playerSelection, computerSelection);
    if (result == "win") return "PLAYER wins this round!";
    else if (result == "loss") return "COMPUTER wins this round!";
    else return "It's a tie..."
    
}

function updateScreen(playerSelection, computerSelection, result) {
    const playerText = document.querySelector(".player-selection");
    const computerText = document.querySelector(".computer-selection");
    playerText.innerText = `PLAYER attacks with ${playerSelection}!`;
    computerText.innerText = `COMPUTER fights back with ${computerSelection}!`;
    playerHealthText.innerText = `PLAYER: ${"❤️".repeat(playerHealth)}`;
    computerHealthText.innerText = `COMPUTER: ${"❤️".repeat(computerHealth)}`;
}

function game() {
    resultText.innerText = (playRound(playerSelection, getComputerChoice()));
}

const resultText = document.getElementById("result-text")
const weaponButtons = document.querySelectorAll(".weapon");
const playerHealthText = document.getElementById("player-health");
const computerHealthText = document.getElementById("computer-health");
weaponButtons.forEach( (weaponButton) => {
    weaponButton.addEventListener("click", () => {
        playerSelection = weaponButton.getAttribute("data-type");
        game();
    })
});

let playerHealth = 5;
let computerHealth = 5;
let playerSelection = "";
let weapons = ["fire", "grass", "water"];

