weapons = ["rock", "paper", "scissors"];

function getComputerChoice() {
    choice = Math.trunc((Math.random() * 3));
    return weapons[choice];
}

console.log(getComputerChoice());