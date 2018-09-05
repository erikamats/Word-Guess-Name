var products = [
  "diapers",
  "wipes",
  "rash cream",
  "formula",
  "bottles",
  "balm",
  "powder",
  "shampoo",
  "conditioner",
  "lotion",
  "pacifier"
];
//ScoreBoard
var wins = "";
var losses = "";
var GuessesLeft = 5;

var guessInput = [];
var chosenProduct = "";

var lettersInWord = [];
var chosenProductLetterCount = "";

var correctGuess = [];
var wrongGuess = [];

//Start game by setting up random word and defaults
function start() {
  //clear the scoreboard

  wins = 0;
  losses = 0;

  //assign a new word
  chosenProduct = products[Math.floor(Math.random() * products.length)];
  console.log("Chosen word is .... " + chosenProduct);
  lettersInWord = chosenProduct.split("");
  console.log("Letters in word : " + lettersInWord);

  chosenProductLetterCount = chosenProduct.length;
  correctGuess = [];
  wrongGuess = [];

  for (var i = 0; i < chosenProductLetterCount; i++) {
    correctGuess.push("_");
   
  }
  console.log(correctGuess);

  GuessesLeft = 5;
  console.log(GuessesLeft);

  document.querySelector("#guessesleft").innerHTML = GuessesLeft;

  // document.querySelector("#wordguess").innerHTML = correctGuess.join(" ");

document.querySelector("#correctguesses").innerHTML = correctGuess.join(" ");
  //clear guesses from previous game

  document.querySelector("#wrongguesses").innerHTML = wrongGuess.join(" ");
}

function letterCheck(keyPressed) {
  var lInWord = false;

  for (var k = 0; k < chosenProductLetterCount; k++) {
    if (keyPressed === chosenProduct[k]) {
      lInWord = true;
    }
}
    if (lInWord) {
      for (var j = 0; j < chosenProductLetterCount; j++) {
        if (chosenProduct[j] === keyPressed) {
            correctGuess[j] = keyPressed;
            
        }
      }
      console.log(correctGuess);
    } else {
      wrongGuess.push(keyPressed);
      GuessesLeft--;
   
    }
  }


function completing() {
  console.log(
    "WinCount: " +
      wins +
      " | LossCount: " +
      losses +
      " | GuessesLeft: " +
      GuessesLeft
  );

  document.querySelector("#guessesleft").innerHTML = GuessesLeft;
  document.querySelector("#correctguesses").innerHTML = correctGuess.join(" ");
  document.querySelector("#wrongguesses").innerHTML = wrongGuess.join(" ");

  //check if all letters in the word have been guessed
  if (lettersInWord.toString() === correctGuess.toString()) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    alert("Congrats you won that round!");
    start();
   
   
  }

  //if Guessesleft = 0
  else if (GuessesLeft === 0) {
    losses++;
    alert("Sorry - you lost! Better luck next time!");
    document.querySelector("#losses").innerHTML = losses;
    start();
  }
}

start();

document.onkeyup = function(event) {
  var lala = String.fromCharCode(event.which).toLowerCase();
  letterCheck(lala);
  completing();
};

