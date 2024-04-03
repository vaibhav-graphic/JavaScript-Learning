let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validGuess(guess)
    });
}
function validGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess < 1){
        alert("Please enter number greate then 0");
    }
    else if(guess > 100){
        alert("Please enter less the 100");
    }
    else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum} `)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if(guess < randomNum){
        displayMessage(`Number is too low`);
    }
    else if(guess > randomNum){
        displayMessage(`Number is tooo high`)
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value =  ""
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() { 
    const newGameButton = documnet.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e){
       randomNum =  parseInt(Math.random() * 100 + 1)
        preGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        
        playGame = true;
    });
}