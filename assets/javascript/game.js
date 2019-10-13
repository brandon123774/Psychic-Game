//created variables that are needed for game
var wins = 0;
var losses = 0;
var guessesLeft = 10;

//created alphabet array for letter choices
var computerChoice = "abcdefghijklmnopqrstuvwxyz";

//create variables that are to be used from the HTMl doc
var userInputText = document.getElementById("userinput-text");
var computerInputText = document.getElementById("computerinput-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

// key press input 
document.onkeyup = function (event) {

     // which key was pressed is listed here
     var userInput = event.key;

    // Computer has a random choice prior to the user's input
    var computerInput = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerInput)
   
  // loop through the array to see if user guess is correct
  for (var i = 0; i < computerChoice.length; i++)   {
      if (userInput == computerChoice)
      wins ++;
      guessesLeft--;
     } 
     else {
        losses++;
    }
  }

    // Display the user's guesses left, wins/losses.
  
    // document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    // document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    // document.getElementById("triesMax-text").innerHTML = "Guesses Left: " + guessesLeft;


};




