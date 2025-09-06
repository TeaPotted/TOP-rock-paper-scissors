const choices = ["rock", "paper", "scissors"];

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