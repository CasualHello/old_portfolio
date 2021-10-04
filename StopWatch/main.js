const StartButton = document.getElementById("button-start");
const StopButton = document.getElementById("button-stop");
const ResetButton = document.getElementById("button-reset");
const appendMilsec = document.getElementById("milsec");
const appendSec = document.getElementById("sec");

let sec = 0;
let milsec = 0;
let intervalId;
let active = false;

const startTimer = () => {
  milsec++;
  appendMilsec.innerHTML = milsec;

  if (milsec < 10) {
    appendMilsec.innerHTML = "0" + milsec;
  }
  if (milsec >= 99) {
    sec += 1;
    appendSec.innerHTML = sec;
    milsec = 0;
  }

  if (sec < 10) {
    appendSec.innerHTML = "0" + sec;
  }
};

const stopTimer = () => {
  clearInterval(intervalId);
};

const resetTimer = () => {
  sec = 0;
  milsec = 0;
  appendMilsec.innerHTML = "0" + milsec;
  appendSec.innerHTML = "0" + sec;
  clearInterval(intervalId);
};

StartButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTimer, 10);
});

ResetButton.addEventListener("click", resetTimer);
StopButton.addEventListener("click", stopTimer);
