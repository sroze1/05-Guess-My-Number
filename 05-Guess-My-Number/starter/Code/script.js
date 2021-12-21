'use strict';
console.log(document.querySelector('.message').textContent);

// Variables set outside the functions
console.log(document.querySelector('.guess').value);
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let guess;

let highscore = 0;
let score = 20;

document.querySelector('.number').textContent = '?';

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    // When invalid Number
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    }
    
    // When correct guess
    else if (guess === randomNumber) {
      document.querySelector('.message').textContent =
        'Correct number, you win!';
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    // When guess is not equal to the number.. perform ternary operator. 
    else if(guess !== randomNumber) { 
       if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
       guess < randomNumber ? 'The hidden number is higher g' : 'The hidden number is lower g';
      document.querySelector('.score').textContent = score;
    }
    }
    
    // else if (guess > randomNumber) {
    //   score--;
    //   document.querySelector('.message').textContent =
    //     'The hidden number is lower g';
    //   document.querySelector('.score').textContent = score;
    // }
    // // When guess is lower than number
    // else if (guess < randomNumber) {
    //   score--;
    //   document.querySelector('.message').textContent =
    //     'The hidden number is higher g';
    //   document.querySelector('.score').textContent = score;
    // }

    // When the score hits 0
  } else {
    document.querySelector('.message').textContent = 'Bounce G You lost!';
    document.querySelector('.score').textContent = 0;
  }
});



///////////////////////////////////////////
///////////////////////////////////////////
// When the user clicks 'Again!' button..
// Reset everything
document.querySelector('.again').addEventListener('click', function () {
  // Reset the message
  document.querySelector('.message').textContent = 'Start guessing...';

  // Reset the random number
  randomNumber = randomNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset the box with the number:
  document.querySelector('.number').textContent = '?';

  // Reset the width of the number:
  document.querySelector('.number').style.width = '15rem';

  // Reset the guess of the user:
  document.querySelector('.guess').value = "";

  // Reset the score
  score = 20;
  document.querySelector('.score').textContent = score;

  // Reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
});
