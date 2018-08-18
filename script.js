
var guess = document.querySelector('.player-guess-input-field');
var buttonGuess = document.querySelector('.button-guess');
var buttonClear = document.querySelector('.button-clear');
var buttonReset = document.querySelector('.button-reset');
var lowHigh = document.querySelector( '.too-low-too-high');
var clear = document.querySelector('#clear-answer');
var output = document.querySelector('.output');
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)



buttonGuess.addEventListener('click', function(event){
  event.preventDefault();
  displayGuess();
});

buttonClear.addEventListener('click', function (event) {
  event.preventDefault();
  guess.value = '';
  lowHigh.innerText = 'Guess a number';
});

function displayGuess() {
  var parsedNumber = parseInt(guess.value);
  output.innerText = guess.value;
  if (parsedNumber > randomNumber) {
    lowHigh.innerText = 'That is too high';
  } else if (parsedNumber < randomNumber) {
    lowHigh.innerText = 'That is too low';
  } else if (parsedNumber === randomNumber) {
    lowHigh.innerText = 'BOOM!';
  }
}





// Display results and feedback:
// If their guess is too high, it should display: “That is too high”
// If their guess is too low, it should display: “That is too low”
// If the guess is correct, it should display: “BOOM!”