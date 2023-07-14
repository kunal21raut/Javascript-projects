let randomNumber = parseInt(Math.random()*100+1);

const submitGuess = document.querySelector('#submit-guess');
const userInput = document.querySelector('#guess-field');

const guessSlot = document.querySelector('.previous-guess');
const chanceLeft = document.querySelector('.chances');

const loworHigh = document.querySelector('.guess');
let startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 0

let playGame = true;

if(playGame){
    submitGuess.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    } else if(guess<1) alert('Please Enter a Number more than 1');
    else if(guess > 100) alert('Please Enter a Number less than 100');
    else{
        prevGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        }
        else{
             displayGuess(guess);
             checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess == randomNumber){
         displayMessage(`Congratulations! You Guessed ${guess} right`)
         endGame()
    }
    else if(guess < randomNumber) displayMessage('Number is Too low.')
    else if(guess > randomNumber) displayMessage('Number is Too High.')
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    chanceLeft.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
    loworHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" style="color:rgb(125, 255, 125)">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }

