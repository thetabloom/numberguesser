
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
var rangeOutput = document.querySelector('.range-output')
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
  minRange.value = guess.value -10;
  minMaxGuessRange();
});

buttonMax.addEventListener('click', function (event) {
  event.preventDefault();
  maxRange.value = guess.value +10;
  minMaxGuessRange(); 
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

// function minMaxGuessRange() {
// var minMaxGuess = parseInt(minRange.value && maxRange.value);
//   if (output = randomNumber)
//   randomNumber = Math.floor(Math.random() - 10);
//   // output - 10;
//   lowHigh.innerText = 'Min and Max Range increased by 10';
// }

function minMaxGuessRange() {
  var minMaxGuess = parseInt(maxRange.value || minRange.value);
  console.log(minMaxGuess)
  rangeOutput.innerText = maxRange.value && minRange.value
  if (guess.value = randomNumber) {
    randomNumber = Math.floor(Math.random(minRange, maxRange) * 10)
    console.log(maxRange.value);
    console.log(minRange.value)
  }
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














