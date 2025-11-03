const choices = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDisplay = document.querySelector("#resultsDisplay");

// create a function named getComputerChoice
function getComputerChoice() {
    // create a var named random and randomly assign it a value in choices
    let random = Math.floor(Math.random() * choices.length);
    // return the random value in choices
    return choices[random];
};

// create a function named getHumanChoice
function getHumanChoice() {
    // create a var named choice and assign the user's input using the prompt method
    let choice = prompt("What do you choose?\n(Rock, Paper, Scissors)");
    // return user's choice
    return choice;
};

// create a function named playGame
function playGame() {
    // move humanScore and computerScore inside this function
    let humanScore = 0;
    let computerScore = 0;
    let results = document.createElement("p");
    let humanScoreDisplay = document.createElement("h3");
    let computerScoreDisplay = document.createElement("h3");

    // move playRound function inside this function
    function playRound(humanChoice, computerChoice) {
        // make humanChoice case insensitive
        humanChoice = humanChoice.toLowerCase();

        // if humanChoice and computerChoice is the same:
        if (humanChoice === computerChoice) {
            // show a message saying "Draw! you both chose {choice}"
            results.textContent = `Draw! You both chose ${humanChoice}`;
        }

        // else
        else {
            // if humanChoice beats computerChoice:
            if (humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper") {
                // show a message saying: "You win! {humanChoice} beats {computerChoice}."
                results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                // increment humanScore
                humanScore++;
            }
            
            // if computerChoice beats humanChoice:
            if (computerChoice === "rock" && humanChoice === "scissors" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissors" && humanChoice === "paper"
            ) {
                // show a message saying: "You lose! {computerChoice} beats {humanChoice}."
                results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                // increment computerScore
                computerScore++;
            }
        };
        // set the textContents for the humanScore and computerScore displays
        humanScoreDisplay.textContent = "Your score: " + humanScore;
        computerScoreDisplay.textContent = "Computer score: " + computerScore;
        
        resultsDisplay.appendChild(results);
        resultsDisplay.appendChild(humanScoreDisplay);
        resultsDisplay.appendChild(computerScoreDisplay);
    };

    // if player clicks the rock button
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    
    // if player clicks the paper button
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    // if player clicks scissors button
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
    
    // check who wins the game
    if (humanScore === computerScore) {
        console.log("Draw!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }

    // show player and computer points
    console.log("PLAYER POINTS: " + humanScore);
    console.log("COMPUTER POINTS: " + computerScore);
};

playGame();