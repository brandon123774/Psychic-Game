//created variables that are needed for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersClicked = []

//created alphabet array for letter choices
var computerChoice = "abcdefghijklmnopqrstuvwxyz";

//create variables that are to be used from the HTMl doc
var userInputText = document.getElementById("userinput-text");
var computerInputText = document.getElementById("computerinput-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");


// Computer has a random choice prior to the user's input
var computerInput = ""

// key press input 
document.onkeyup = function (event) {

  // which key was pressed is listed here
  var userInput = event.key;
  console.log(userInput, computerInput)
  lettersClicked.push(userInput)
  guessesLeft--;
  if (userInput === computerInput) {
    wins++;
    console.log("WIN")
    restart()
  }
  else if (guessesLeft === 0) {
    losses++;
    console.log("LOST")
    restart()
  }
  else {
    console.log(wins, losses)
    console.log(lettersClicked)
    console.log(guessesLeft)
    guessesLeftText.innerHTML = guessesLeft;
    guessesText.innerHTML = lettersClicked;
  }
}



// loop through the array to see if user guess is correct



// Display the user's guesses left, wins/losses.

// document.getElementById("wins-text").innerHTML = "Wins: " + wins;
// document.getElementById("losses-text").innerHTML = "Losses: " + losses;
// document.getElementById("triesMax-text").innerHTML = "Guesses Left: " + guessesLeft;

function restart() {
  console.log("RESTART")
  winsText.innerHTML = wins;
  lossesText.innerHTML = losses;

  computerInput = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerInput)
  guessesLeft = 9;
  lettersClicked = []
  guessesLeftText.innerHTML = guessesLeft;
  guessesText.innerHTML = lettersClicked;
}


restart()


