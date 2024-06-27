let seconds = 0;
let milliseconds = 0;
let timerInterval;
let running = false;

var startStop = document.getElementById("startStop");
var reset = document.getElementById("reset");
var timerCircle = document.getElementById("timerCircle");

function startStopWatch() {
  if (running) {
    stopWatch();
  } else {
    startWatch();
  }
}

function startWatch() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 10);
  running = true;
  startStop.textContent = "Stop";
  reset.disabled = false;
  timerCircle.classList.add("glow");
}

function updateTimer() {
  milliseconds += 10;

  if (milliseconds >= 1000) {
    seconds++;
    milliseconds = 0;
  }

  document.getElementById("seconds").textContent = formatTime(seconds) + ":";
  document.getElementById("mili-seconds").textContent = formatTime(
    milliseconds / 10
  );
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function stopWatch() {
  clearInterval(timerInterval);
  running = false;
  startStop.textContent = "Start";
  timerCircle.classList.remove("glow");
}

function resetWatch() {
  clearInterval(timerInterval);
  seconds = 0;
  milliseconds = 0;
  document.getElementById("seconds").textContent = "00:";
  document.getElementById("mili-seconds").textContent = "00";
  running = false;
  startStop.textContent = "Start";
  reset.disabled = true;
  timerCircle.classList.remove("glow");
}
