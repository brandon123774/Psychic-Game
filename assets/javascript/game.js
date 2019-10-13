//created variables that are needed for game
var wins = 0;
var losses = 0;

//created alphabet array for letter choices
// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = "abcdefghijklmnopqrstuvwxyz";

//print out main statement
document.write("Guess what letter I'm thinking of");

//create variables that are to be used from the HTMl doc
var userInputText = document.getElementById("userinput-text");
var computerInputText = document.getElementById("computerinput-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

// key press input 
document.onkeyup = function (event) {

// Computer has a random choide prior to the user's input
var computerInput = computerInput[Math.floor(Math.random() * computerChoice.length)];
console.log(computerInput)
// which key was pressed is listed here
var userInput = event.key;


}

// print out the number of wins, losses, and number of guesses
// document.write("Wins: " + wins);
// document.write("Losses: " + losses);
// document.write("Your Guesses so far: ");



