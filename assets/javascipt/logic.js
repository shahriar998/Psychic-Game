//Gave variable names which will be displayed 
var win = 0;
var loss = 0;
var guessLeft = 9;
var guessed = [];

var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//options available for computer 
console.log(computerOptions.length);


//to check computer is picking random number betweencomputerOptions.length and displaying random aplhabet from the array
var randomNumber = Math.floor(Math.random() *computerOptions.length);

console.log(randomNumber);

var comGuessedAlpha = computerOptions[randomNumber];
console.log(comGuessedAlpha);

//user guessed alphabet

document.onkeyup = function (event) {
    var keyPressed = event.key;
    console.log(keyPressed);
    
    //guessLeftNumber.textContent = guessLeft;
    //guessed.push(keyPressed);
    console.log(guessed);




    // Create variables that hold references to the places in the HTML where we want to display things.
    var winNumber = document.getElementById("user-win");
    var lossNumber = document.getElementById("user-lose");
    var guessLeftNumber = document.getElementById("user-guess");
    var choosenAlphabet = document.getElementById("guessed-letter");
    // var computerAlphabet = document.getElementById("computer-guess");

    //condition

    if (keyPressed === comGuessedAlpha) {

        win++;
        guessed.push(keyPressed);
        choosenAlphabet.textContent=guessed;

        randomNumber = Math.floor(Math.random() *computerOptions.length);
        
        comGuessedAlpha = computerOptions[randomNumber];
        console.log(comGuessedAlpha);
        guessed = [];
        guessLeft = 9;
        guessLeftNumber.textContent = guessLeft;
        
        // computerAlphabet.textContent = comGuessedAlpha;


    }
    else if

        
         (keyPressed !== comGuessedAlpha) {

            guessed.push(keyPressed);
            guessLeft--;
            guessLeftNumber.textContent = guessLeft;
            // console.log(guessLeft);
            choosenAlphabet.textContent = guessed;
            // computerAlphabet.textContent = comGuessedAlpha;
            console.log(comGuessedAlpha);
            if (guessLeft === 0) {
                loss++
                // console.log(guessLeft);
                randomNumber = Math.floor(Math.random() *computerOptions.length);
                
                comGuessedAlpha = computerOptions[randomNumber];
                lossNumber.textContent = loss;
                guessLeft = 9;
                guessLeftNumber.textContent = guessLeft;
                guessed = [];
                choosenAlphabet.textContent = guessed;
                // computerAlphabet.textContent = comGuessedAlpha;
                console.log(comGuessedAlpha);
            }
            
         
            // computerAlphabet.textContent=comGuessedAlpha;
            //  choosenAlphabet.textContent=guessed;
            

        }
        
        winNumber.textContent = win;
    }



    // winNumber.textContent = win;

