'use strict';
console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Tatta!';


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

const randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Invalid Number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  // Correct guess
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct number, you win!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;
  }
  // Guess is higher than number
  else if (guess > randomNumber) {
    document.querySelector('.message').textContent =
      'The hidden number is lower g';
    document.querySelector('.score').textContent = score--;
  }
  // Guess is lower than number
  else if (guess < randomNumber) {
    document.querySelector('.message').textContent =
      'The hidden number is higher g';
    document.querySelector('.score').textContent = score = score - 1;
  }
});

// function thisIsThisIsTheChange
// function thisIsTheLing
// function divisibleCheck(integer1) {
//   let i = 1;

//   while (i < integer1) {
//       i++;
//     if (integer1 % i === 0) {
//       return `${integer1} is not a prime number mcgregoc am comin 4 your fkwn ass`
//     } else return `${integer1} is a prime`
//   }
// }
