const choices = ["rock", "paper", "scissors"];

// create a function named getComputerChoice
function getComputerChoice() {
    // create a var named random and randomly assign it a value in choices
    let random = Math.floor(Math.random() * choices.length);
    // return the random value in choices
    return choices[random];
};