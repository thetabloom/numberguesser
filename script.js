
var guess = document.querySelector('.player-guess-input-field');
var buttonGuess = document.querySelector('.button-guess');
var buttonClear = document.querySelector('.button-clear');
var buttonReset = document.querySelector('.button-reset');
var buttonMin = document.querySelector('.button-min');
var buttonMax = document.querySelector('.button-max');
var lowHigh = document.querySelector( '.too-low-too-high');
var output = document.querySelector('.output');
var lastGuessText = document.querySelector('.last-guess-was')
var rangeOutput = document.querySelector('.range-output')
var randomNumber = Math.floor(Math.random() * 100 + 1);
var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');


buttonGuess.addEventListener('click', function(event) {
  event.preventDefault();
  displayGuess();
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  lastGuessText.innerText = 'Your last guess was:'
  clearInputField();
});

buttonClear.addEventListener('click', function (event) {
  event.preventDefault();
  guess.value = '';
  lastGuessText.innerText = "Keep Going!"
  output.innerText = String.fromCodePoint(0x2728);
  lowHigh.innerText = 'Guess a number:';
});

buttonMax.addEventListener('click', function (event) {
  event.preventDefault();
  minMaxGuessRange(); 
});

buttonReset.addEventListener('click', function (event) {
  output.innerText = ''
  resetRandom();
});

guess.addEventListener('keyup', enableButtons);


function displayGuess() {
  var parsedNumber = parseInt(guess.value);
  output.innerText = guess.value;
    if (parsedNumber > maxRange.value || parsedNumber < minRange.value) {
    lowHigh.innerText = 'Out of Range';
  } else if (parsedNumber > randomNumber) {
    lowHigh.innerText = 'That is too high!';
  } else if (parsedNumber < randomNumber) {
    lowHigh.innerText = 'That is too low :(';
  } else if (parsedNumber === randomNumber) {
    lowHigh.innerText = randomNumber + ' BOOM!';
    output.innerText = String.fromCodePoint(0x1F9D9);
    maxRange.value = 10 + parseInt(maxRange.value);
    minRange.value = -10 + parseInt(minRange.value);
    minMaxGuessRange();
  } 
}

function clearInputField() {
  guess.value = '';
};

function enableButtons(event) {
  event.preventDefault();
  if (guess.value === '') {
    buttonGuess.disabled = true;
    buttonClear.disabled = true;
    buttonReset.disabled = true;
  }
  else {
    buttonGuess.disabled = false;
    buttonClear.disabled = false;
    buttonReset.disabled = false;
  }
}

function minMaxGuessRange() {
  var maxGuess = parseInt(maxRange.value) || 100;
  var minGuess = parseInt(minRange.value) || 1;
  randomNumber = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
} 

function resetRandom() {
  guess.value = '';
  output.innerText = '';
  lowHigh.innerText = 'Enter a guess, above!';
  var randomNumber = Math.floor(Math.random() * 100 + 1);
}














