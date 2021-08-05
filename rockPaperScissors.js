console.log("You're going down!!");

function computerPlay () {
    let rps = ["rock", "paper", "scissors"];
    let randomRPS = rps[Math.floor(Math.random()*rps.length)];
    return randomRPS;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
//let computerSelection;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("try again!")
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose, paper beats rock")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win, rock beats scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win, paper beats rock")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose, scissors beat paper")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose, rock beats scissors")
    }
}







/*function singleRound (playerSelection, computerSelection) {
    let playerSelection = parseInt(prompt("Choose your weapon: rock, paper or scissors "))
}*/