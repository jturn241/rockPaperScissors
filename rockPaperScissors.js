let computerSelection = "";
let playerSelection = "";

let computerPlay = function () {
    let rps = ["rock", "paper", "scissors"];
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
}

let playerPlay = function () {
    playerSelection = prompt("rock, paper or scissors?").toLowerCase();    
}

const rock = document.querySelector('#rock')
rock.onclick = () => playRound("rock");

const scissors = document.querySelector('#scissors')
scissors.onclick = () => playRound("scissors");

const paper = document.querySelector('#paper')
paper.onclick = () => playRound("paper");

function gameOver() {
    if (computerScore >= 5) {
        alert("Sorry you lost :( better luck next time");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("scoreComputer").innerHTML = computerScore;
        document.getElementById("scorePlayer").innerHTML = playerScore;
    } else if (playerScore >= 5) {
        alert("Congrats you've beat the machine!!");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("scoreComputer").innerHTML = computerScore;
        document.getElementById("scorePlayer").innerHTML = playerScore;
    }
}

let playerScore = 0;
let computerScore = 0;
document.getElementById("scoreComputer").innerHTML = computerScore; 
document.getElementById("scorePlayer").innerHTML = playerScore;

function playRound (x, y) {
    computerPlay();
    y = computerSelection;
    if (x === y) {
        document.getElementById("roundWinner").innerHTML = "It's a tie!"
        return;
    } else if (x === "rock" && y === "paper") {
        computerScore += 1;
        document.getElementById("roundWinner").innerHTML = "Sorry, paper beats rock!"
        document.getElementById("scoreComputer").innerHTML = computerScore;
        if (playerScore || computerScore === 5) {
            gameOver();
        };
    } else if (x === "rock" && y === "scissors") {
        playerScore += 1;
        document.getElementById("roundWinner").innerHTML = "Good job! Rock beats scissors!"
        document.getElementById("scorePlayer").innerHTML = playerScore;
        if (playerScore || computerScore === 5) {
            gameOver();
        };
    } else if (x === "paper" && y === "rock") {
        playerScore += 1;
        document.getElementById("roundWinner").innerHTML = "Good job! Paper beats rock!"
        document.getElementById("scorePlayer").innerHTML = playerScore;
        if (playerScore || computerScore === 5) {
            gameOver();
        };
    } else if (x === "paper" && y === "scissors") {
        computerScore += 1;
        document.getElementById("roundWinner").innerHTML = "Better luck next time. Scissors beat paper"
        document.getElementById("scoreComputer").innerHTML = computerScore;
        if (playerScore || computerScore === 5) {
            gameOver();
        };
    } else if (x === "scissors" && y === "rock") {
        computerScore +=1;
        document.getElementById("roundWinner").innerHTML = "Better luck next time. Rocks are better than paper"
        document.getElementById("scoreComputer").innerHTML = computerScore;
        if (playerScore || computerScore === 5) {
            gameOver();
        };
    } else if (x === "scissors" && y === "paper") {
        playerScore += 1;
        document.getElementById("roundWinner").innerHTML = "Cut that paper!"
        document.getElementById("scorePlayer").innerHTML = playerScore;
        if (playerScore || computerScore === 5) {
            gameOver();
        };
    }
}
/*
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
*/
