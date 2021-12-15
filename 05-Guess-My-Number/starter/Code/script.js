'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Tatta!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

function divisibleCheck(integer1) {
  let i = 1;

  while (i < integer1) {
      i++;
    if (integer1 % i === 0) {
      return `${integer1} is not a prime number mcgregoc am comin 4 your fkwn ass`
    } else return `${integer1} is a prime`
  }
}


