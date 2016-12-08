

var box = document.querySelector('.box');
var numberInput = document.getElementById('guessInput');
var guessButton = document.querySelector('.guess');
var answer = document.querySelector('.result');
var randomNum = randomNumberGen();
var clearButton = document.querySelector('.clearInput');
var resetButton = document.querySelector('.reset');
var rangeButton = document.querySelector('.range');


//loads number to compare and disables the clear and reset buttons//
window.onload = function (){
  console.log(randomNum);
  clearButton.disabled = true;
  resetButton.disabled = true;
};


//guess button displays guess and compares to random number
guessButton.addEventListener('click', function () {
  var userNumber = parseInt(numberInput.value);
  if (userNumber < 1 || userNumber > 100) {
    return alert("Must be a Number between 1 and 100");
  } else if (isNaN(userNumber)) {
    return alert("Must be a Numerical Value");

  }
  resetButton.disabled = false;
  box.innerText = userNumber;
  //this if statement says that if the user guess and random guess are equal then call the increaseMax function (which increase the guess range by 10, then it calls the decreaseMin function to decrease the minimum range by 10)
  if(userNumber === randomNum) {
    document.getElementById('entMax').value = increaseMax();
    document.getElementById('entMin').value = decreaseMin();
  //this calls the randomNumberGen function to regenerate the random number
    randomNum = randomNumberGen();
  //this gets the guessInput placeholder to read Enter a ...
    document.getElementById('guessInput').placeholder = "Range increased enter a number between " + getMinimum() + " - " + getMaximum();
  //this resets the guessInput value to nothing
    document.getElementById('guessInput').value = "";
  //this logs the new random generated number
    console.log(randomNum);
    answer.innerText = "BOOM";
  } else if(userNumber > randomNum) {
    answer.innerText = ("Your Guess is Too High");
  } else {
    answer.innerText = ("Your Guess is Too Low");
  }
});

rangeButton.addEventListener('click', function () {
  randomNum=randomNumberGen();
  document.getElementById('guessInput').placeholder = "Range increased enter a number between " + getMinimum() + " - " + getMaximum();
  console.log(randomNum);
})

//clears the guessed input//
clearButton.addEventListener('click', function () {
  guessInput.value = "";
  box.innerText = "";
  clearButton.disabled = true;
});
//disables clear button//
guessInput.addEventListener('keyup', function () {
  if(guessInput.value === "") {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
});

// resets the form
resetButton.addEventListener('click', function () {
  randomNum = randomNumberGen();
  console.log(randomNum);
  box.innerText = "";
  guessInput.value = "";
  answer.innerText = "";
  entMax.value = "";
  entMin.value = "";
  document.getElementById('guessInput').placeholder = ("Enter your guess");
  if (guessInput.value === "") {
    resetButton.disabled = true;
  } else {
     resetButton.disabled = false;

  }

});

//function that generates our random number
function randomNumberGen () {
  minimum = getMinimum();
  maximum = getMaximum();
  return Math.floor(Math.random() * (maximum-minimum)) + minimum;
}

//function that establishes the minimum value to be compared
function getMinimum () {
  if ((document.getElementById('entMin').value)==="") {
    return 1;
    }
    else {
    return Number(document.getElementById('entMin').value)}
}
//function that establishes the maximum value to be compared
function getMaximum () {
  if ((document.getElementById('entMax').value)==="") {
    return 100;
  }
  else {
    return Number(document.getElementById('entMax').value) }
  }
  //function to increase our minimum guess range by 10
  function decreaseMin () {
    newMin = getMinimum()-10;
    min = newMin;
    return min;
  }

  //function to increase our maximum guess range by 10
  function increaseMax() {
    newMax = getMaximum()+10;
    max = newMax;
    return max;
  }
