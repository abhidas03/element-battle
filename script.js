function getComputerChoice() {
    choice = Math.trunc((Math.random() * 3));
    console.log(weapons[choice])
    return weapons[choice];
}

function playRound(playerSelection, computerSelection) {
    let returnMessage;
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") returnMessage = "Tie" 
        else if (computerSelection.toLowerCase() == "paper") returnMessage = "Lose" 
        else if (computerSelection.toLowerCase() == "scissors") returnMessage = "Win"
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") returnMessage = "Win" 
        else if (computerSelection.toLowerCase() == "paper") returnMessage = "Tie" 
        else if (computerSelection.toLowerCase() == "scissors") returnMessage = "Lose"
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") returnMessage = "Lose" 
        else if (computerSelection.toLowerCase() == "paper") returnMessage = "Win" 
        else if (computerSelection.toLowerCase() == "scissors") returnMessage = "Tie"
    }

    return returnMessage;
    
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let userSelection = prompt("Enter Rock, Paper, or Scissors");
//         console.log(userSelection);
//         console.log(playRound(userSelection, getComputerChoice()))
//     }
// }
const weaponButtons = document.querySelectorAll(".weapon");
weaponButtons.forEach( (weaponButton) => {
    weaponButton.addEventListener("click", () => {
        playerSelection = weaponButton.getAttribute("data-type");
    })
});

playerSelection = "";
weapons = ["rock", "paper", "scissors"];
game();