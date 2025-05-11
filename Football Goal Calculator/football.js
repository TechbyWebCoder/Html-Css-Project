let score = 0;
const scoreDisplay = document.getElementById('score');
const logList = document.getElementById('log-list');

document.getElementById('goal-button').addEventListener('click', () => {
  score += 1;
  updateScore('Goal');
});

document.getElementById('foul-button').addEventListener('click', () => {
  updateLog('Foul');
});

document.getElementById('penalty-button').addEventListener('click', () => {
  score += 1;
  updateScore('Penalty Goal');
});

document.getElementById('reset-button').addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  logList.innerHTML = '';
});

function updateScore(event) {
  scoreDisplay.textContent = score;
  updateLog(event);
}

function updateLog(event) {
  const listItem = document.createElement('li');
  listItem.textContent = event;
  logList.appendChild(listItem);
}
