//Gave variable names which will be displayed 
var win =0;
var loss =0;
var guessLeft = 9;
var guessed = [];

var computerOptions= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//options available for computer 
console.log(computerOptions.length);

//to check computer is picking random number between 26 and displaying random aplhabet from the array
var randomNumber = Math.floor(Math.random()*26);
var randomNumber1= randomNumber-1;
console.log(randomNumber);
console.log(randomNumber1);
var comGuessedAlpha = computerOptions[randomNumber1];
console.log(comGuessedAlpha);

//user guessed alphabet

document.onkeyup = function(event){
    var keyPressed =event.key;
    console.log(keyPressed);
    guessed.push(keyPressed);
    console.log(guessed);
};



// Create variables that hold references to the places in the HTML where we want to display things.
var winNumber = document.getElementById("user-win");
var lossNumber = document.getElementById("user-lose");
var guessLeftNumber = document.getElementById("user-guess");
var choosenAlphabet = document.getElementById("guessed-letter");
var computerAlphabet = document.getElementById("computer-guess");

//condition
