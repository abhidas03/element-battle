function game() {
    playRound(playerSelection, getComputerChoice())
}

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
            result = "win" 
            computerHealth--;
        }
        else if (computerSelection.toLowerCase() == "water") {
            result = "loss"
            playerHealth--;
        }
    }
    else if (playerSelection.toLowerCase() == "grass") {
        if (computerSelection.toLowerCase() == "fire") {
            result = "loss" 
            playerHealth--;
        }
        else if (computerSelection.toLowerCase() == "grass") {
            result = "tie" 
        }
        else if (computerSelection.toLowerCase() == "water") {
            result = "win"
            computerHealth--;
        }
    }
    else if (playerSelection.toLowerCase() == "water") {
        if (computerSelection.toLowerCase() == "fire") {
            result = "win" 
            computerHealth--;
        }
        else if (computerSelection.toLowerCase() == "grass") {
            result = "loss"
            playerHealth--; 
        }
        else if (computerSelection.toLowerCase() == "water") {
            result = "tie"
        }
    }
    updateScreen(playerSelection, computerSelection, result);
}

function updateScreen(playerSelection, computerSelection, result) {
    playerText.innerText = `PLAYER attacks with ${playerSelection}!`;
    computerText.innerText = `COMPUTER fights back with ${computerSelection}!`;
    console.log("health change");
    playerHealthText.innerText = `PLAYER: ${"❤️".repeat(playerHealth)}`;
    computerHealthText.innerText = `COMPUTER: ${"❤️".repeat(computerHealth)}`;
    if (result == "win") resultText.innerText = `${playerName} wins!`
    else if (result == "loss") resultText.innerText = `${computerName} wins!`
    else if (result == "tie") resultText.innerText = "It's a tie..."
    if(isGameOver()) endScreenContainer.classList.toggle("end-screen")
}

function isGameOver() {
    if(!playerHealth || !computerHealth) return true;
    return false;
}

function getWinner() {
    if (!playerHealth) return computerName;
    else if (!computerHealth) return playerName;
}

function endScreen() {
    alert(`${getWinner()} won the fight!`);
}

const playerText = document.querySelector(".player-selection");
const computerText = document.querySelector(".computer-selection");
const resultText = document.getElementById("result-text")
const weaponButtons = document.querySelectorAll(".weapon");
const playerHealthText = document.getElementById("player-health");
const computerHealthText = document.getElementById("computer-health");
const endScreenContainer = document.getElementById("end-screen-container");
weaponButtons.forEach( (weaponButton) => {
    weaponButton.addEventListener("click", () => {
        playerSelection = weaponButton.getAttribute("data-type");
        game();
    })
});

let playerName = "PLAYER";
let computerName = "COMPUTER";
let playerHealth = 5;
let computerHealth = 5;
let playerSelection = "";
let weapons = ["fire", "grass", "water"];

