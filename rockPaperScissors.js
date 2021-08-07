console.log("You're going down!!");

let computerSelection = "";

let computerPlay = function () {
    let rps = ["rock", "paper", "scissors"];
    let randomRPS = rps[Math.floor(Math.random()*rps.length)];
    computerSelection = randomRPS;
}

let playerChoice = prompt("rock, paper or scissors?");
let playerSelection = playerChoice.toLowerCase();


function playRound (x, y) {
    if (x === y) {
        console.log("try again!")
    } else if (x === "rock" && y === "paper") {
        console.log("You lose! paper beats rock")
    } else if (x === "rock" && y === "scissors") {
        console.log("You win! rock beats scissors")
    } else if (x === "paper" && y === "rock") {
        console.log("You win! paper beats rock")
    } else if (x === "paper" && y === "scissors") {
        console.log("You lose! scissors beat paper")
    } else if (x === "scissors" && y === "rock") {
        console.log("You lose! rock beats scissors")
    }
}