
var guess = document.querySelector('.player-guess-input-field');
var minRange = document.querySelector('.min-range');
var maxRange = document.querySelector('.max-range');
var buttonGuess = document.querySelector('.button-guess');
var buttonClear = document.querySelector('.button-clear');
var buttonReset = document.querySelector('.button-reset');
var buttonMin = document.querySelector('.button-min');
var buttonMax = document.querySelector('.button-max');
var lowHigh = document.querySelector( '.too-low-too-high');
var output = document.querySelector('.output');
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)


buttonGuess.addEventListener('click', function(event) {
  event.preventDefault();
  displayGuess();
});

buttonClear.addEventListener('click', function (event) {
  event.preventDefault();
  guess.value = '';
  output.innerText = '';
  lowHigh.innerText = '';
});

buttonMin.addEventListener('click', function (event) {
  event.preventDefault();
  minRange.value = '';
  minGuessRange();
});

buttonMax.addEventListener('click', function (event) {
  event.preventDefault();
  maxRange.value = '';
  maxGuessRange();
});

buttonReset.addEventListener('click', function (event) {
  location.reload();
});

guess.addEventListener('keyup', enableButtons);



function displayGuess() {
  var parsedNumber = parseInt(guess.value);
  output.innerText = guess.value;
    if (parsedNumber > 100 || parsedNumber < 1) {
    lowHigh.innerText = 'Out of Range';
  } else if (parsedNumber > randomNumber) {
    lowHigh.innerText = 'That is too high!';
  } else if (parsedNumber < randomNumber) {
    lowHigh.innerText = 'That is too low :(';
  } else if (parsedNumber === randomNumber) {
    lowHigh.innerText = 'BOOM!';
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

// function minGuessRange() {
// var parsedNumber = parseInt(minRange.value);
 
//  if (parsedNumber === randomNumber) {
//   parsedNumber.value + 10;

// }
// }

// console.log(parsedNumber.value)

// Phase 3
// Add additional inputs that allow the user to specify the minimum/maximum range.
// Upon successful win, user’s range is updated:
// Every time the user wins a round increase the maximum number by 10.
// Every time the user wins a round decrease the minimum number by 10.
// Appropriate UI is incorporated such that user understands what is happening.
// (Pro-tip: You’ll need to adjust the input fields to accept the new minimum and maximum numbers.)
















