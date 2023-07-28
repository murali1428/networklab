let timer;
let totalSeconds = 0;
let isTimerRunning = false;

function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  stopTimer();
  totalSeconds = 180; // Change this to your desired countdown time in seconds
  document.getElementById('display').innerText = formatTime(totalSeconds);
}

function updateTimer() {
  totalSeconds--;
  if (totalSeconds < 0) {
    stopTimer();
    alert("Time's up!");
    totalSeconds = 0;
  }
  document.getElementById('display').innerText = formatTime(totalSeconds);
}

window.onload = function () {
  resetTimer(); // Call resetTimer instead of setting totalSeconds directly
};
