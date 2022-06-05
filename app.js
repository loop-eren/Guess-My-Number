let number = (document.querySelector('.number').textContent = Math.trunc( Math.random() * 20 ));

document.querySelector('.number').textContent = number;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').style.color = '#333';
  }
});

document.querySelector('.btn.again').addEventListener('click', function () {
  window.location.reload();
});
