console.log("You're going down!!");

let computerSelection = "";
let playerSelection = "";

let computerPlay = function () {
    let rps = ["rock", "paper", "scissors"];
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
}

let playerPlay = function () {
    playerSelection = prompt("rock, paper or scissors?").toLowerCase();    
}

let playerScore = 0;
let computerScore = 0;

function playRound (x, y) {
    computerPlay();
    //playerPlay();
    //x = playerSelection;
    y = computerSelection;
    if (x === y) {
        return;
    } else if (x === "rock" && y === "paper") {
        computerScore += 1;
        document.getElementById("scoreComputer").innerHTML = computerScore;
    } else if (x === "rock" && y === "scissors") {
        playerScore += 1;
        document.getElementById("scorePlayer").innerHTML = playerScore;
    } else if (x === "paper" && y === "rock") {
        playerScore += 1;
        document.getElementById("scorePlayer").innerHTML = playerScore;
    } else if (x === "paper" && y === "scissors") {
        computerScore += 1;
        document.getElementById("scoreComputer").innerHTML = computerScore;
    } else if (x === "scissors" && y === "rock") {
        computerScore +=1;
        document.getElementById("scoreComputer").innerHTML = computerScore;
    } else if (x === "scissors" && y === "paper") {
        playerScore += 1;
        document.getElementById("scorePlayer").innerHTML = playerScore;
    }
}
  
  
  
  
  
  
  
  
  
        /*     console.log("It's a tie!")
    } else if (x === "rock" && y === "paper") {
        console.log("You lose! paper beats rock")
        computerScore += 1;
    } else if (x === "rock" && y === "scissors") {
        console.log("You win! rock beats scissors")
        playerScore += 1;
    } else if (x === "paper" && y === "rock") {
        console.log("You win! paper beats rock")
        playerScore += 1;
    } else if (x === "paper" && y === "scissors") {
        console.log("You lose! scissors beat paper")
        computerScore += 1;
    } else if (x === "scissors" && y === "rock") {
        console.log("You lose! rock beats scissors")
        computerScore += 1;
    } else if (x === "scissors" && y === "paper") {
        console.log("You win! rock beats scissors")
        playerScore += 1;
    }
}*/

function game () {
    for (round = 0; round < 5; round++) {
    //let round = 0;
    //while (round < 5) {
    playRound();
    //round++;
    }
    if (playerScore > computerScore) {
        console.log("Congrats you've beat the machine!")
    } else if (playerScore === computerScore) {
        console.log("It's a tie!")
    } else {
        console.log("Sorry you lost, better luck next time")
    }
}

const rock = document.querySelector('#rock')
rock.onclick = () => playRound("rock");

const scissors = document.querySelector('#scissors')
scissors.onclick = () => playRound("scissors");

const paper = document.querySelector('#paper')
paper.onclick = () => playRound("paper");

//const buttons = document.querySelector('.buttons');
//buttons.onclick = () => playRound ();
