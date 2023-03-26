const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const stopButton = document.querySelector(".stop");
const timeText = document.querySelector("h2");
const milisecondsText = document.querySelector("h5");
let stopTimeFlag = false;
let curTime = 0;

startButton.addEventListener("click", startClick);
stopButton.addEventListener("click", stopClick);
resetButton.addEventListener("click", resetClick);

stopButton.disabled = true;
resetButton.disabled = true;

function startClick() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;

  stopTimeFlag = false;
  startTime();
}

function startTime() {
  if (stopTimeFlag) return;
  showTime(curTime);
  curTime++;
  setTimeout(() => {
    startTime();
  }, 10);
}

function showTime(curTime) {
  const miliseconds = timeToString(curTime % 100);
  curTime /= 100;
  const hours = timeToString(Math.trunc(curTime / 3600));
  curTime = curTime % 3600;
  const minutes = timeToString(Math.trunc(curTime / 60));
  const seconds = timeToString(Math.trunc(curTime % 60));
  timeText.textContent = hours + ":" + minutes + ":" + seconds;
  milisecondsText.textContent = miliseconds + "";
}

function timeToString(time) {
  return time.toString().padStart(2, "0");
}

function stopClick() {
  startButton.disabled = false;
  stopButton.disabled = true;

  stopTimeFlag = true;
}

function resetClick() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;

  timeText.textContent = "00:00:00";
  milisecondsText.textContent = "00";
  stopTimeFlag = true;
  curTime = 0;
}
