'use strict';

//IMPLEMENTING GUESS MY NUMBER GAME

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Click Check function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no guess
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ⛔';
    displayMessage('No Number ⛔');

    // when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber ? '📉 Too Low!' : '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🔥 You lost!');
    }
  }
});

// Click again function

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

// Game Reset Function

document.querySelector('.reset').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  highscore = 0;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
