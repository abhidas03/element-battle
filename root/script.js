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
    updateHealth();
}

function updateScreen(playerSelection, computerSelection, result) {
    playerText.innerText = `PLAYER attacks with ${playerSelection}!`;
    computerText.innerText = `ENEMY fights back with ${computerSelection}!`;
    if (result == "win") resultText.innerText = `${playerName} wins this round!`
    else if (result == "loss") resultText.innerText = `${computerName} wins this round!`
    else if (result == "tie") resultText.innerText = "It's a tie..."
    if(isGameOver()) endScreen();
}

function updateHealth() {
    playerHealthText.innerText = `PLAYER: ${"❤️".repeat(playerHealth)}`;
    computerHealthText.innerText = `ENEMY: ${"❤️".repeat(computerHealth)}`;
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
    (getWinner() == playerName) ? endScreenText.innerText = `${playerName} won! You preserved your honor!` : 
                                  endScreenText.innerText = `${computerName} won! Can you reclaim your honor in a rematch?`
    
    endScreenElements.forEach( (item) => item.classList.toggle("end-screen"))
}

function restartGame() {
    endScreenElements.forEach( (item) => item.classList.toggle("end-screen"))
    playerHealth = 5;
    computerHealth = 5;
    updateHealth();
    resetText();
}

function resetText() {
    playerText.innerText = "You were having a great day training at the dojo, when your arch-nemesis enters and challenges you to a duel.";
    computerText.innerText = "In order to appear strong to your pupil, you accept. Can you defeat the enemy?";
    resultText.innerText = "";
}

const playerText = document.getElementById("player-selection");
const computerText = document.getElementById("computer-selection");
const resultText = document.getElementById("result-text")
const weaponButtons = document.querySelectorAll(".weapon");
const playerHealthText = document.getElementById("player-health");
const computerHealthText = document.getElementById("computer-health");
const endScreenElements = document.querySelectorAll(".end-screen");
const restartButton = document.getElementById("restart-button");
const endScreenText = document.getElementById("end-screen-text");

weaponButtons.forEach( (weaponButton) => {
    weaponButton.addEventListener("click", () => {
        playerSelection = weaponButton.getAttribute("data-type");
        game();
    })
});

restartButton.addEventListener("click", ()=> {
    restartGame();
});

let playerName = "PLAYER";
let computerName = "ENEMY";
let playerHealth = 5;
let computerHealth = 5;
let playerSelection = "";
let weapons = ["fire", "grass", "water"];

resetText();
