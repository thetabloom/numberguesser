
var guess = document.querySelector('.player-guess-input-field');
var buttonGuess = document.querySelector('.button-guess');
var buttonClear = document.querySelector('.button-clear');
var buttonReset = document.querySelector('.button-reset');
var buttonMin = document.querySelector('.button-min');
var buttonMax = document.querySelector('.button-max');
var lowHigh = document.querySelector( '.too-low-too-high');
var output = document.querySelector('.output');
var rangeOutput = document.querySelector('.range-output')
var randomNumber = Math.floor(Math.random() * 100 + 1);
var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');


buttonGuess.addEventListener('click', function(event) {
  event.preventDefault();
  displayGuess();
  var randomNumber = Math.floor(Math.random() * 100 + 1);
});

buttonClear.addEventListener('click', function (event) {
  event.preventDefault();
  guess.value = '';
  output.innerText = '';
  lowHigh.innerText = '';
});

buttonMax.addEventListener('click', function (event) {
  event.preventDefault();
  minMaxGuessRange(); 
});

buttonReset.addEventListener('click', function (event) {
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
    lowHigh.innerText = 'BOOM!';
    maxRange.value = 10 + parseInt(maxRange.value);
    minRange.value = -10 + parseInt(minRange.value);
    minMaxGuessRange();
  } 
}

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
  lowHigh.innerText = '';
  var randomNumber = Math.floor(Math.random() * 100 + 1);
}

// Phase 3
// Add additional inputs that allow the user to specify the minimum/maximum range.
// Upon successful win, user’s range is updated:
// Every time the user wins a round increase the maximum number by 10.
// Every time the user wins a round decrease the minimum number by 10.
// Appropriate UI is incorporated such that user understands what is happening.
// (Pro-tip: You’ll need to adjust the input fields to accept the new minimum and maximum numbers.)

// you could make your min-max function 1 function, where you are basically parsing the user input from both min input and max input and assigning them to a variable called minGuess or maxGuess 

// then you could reassign your get random number function and pass the minGuess and maxGuess as parameters














