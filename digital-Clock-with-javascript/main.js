const clockDisplay = document.querySelector(".clock-display");
const switchButton = document.querySelector(".switch");
const daysDisplay = document.querySelector(".days-container");

const clock = () => {
  let today = new Date();
  let day = today.getDay();

  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  daysDisplay.innerHTML = `${dayList[day]}`;
  daysDisplay.style.fontFamily = "Ubuntu";

  let time = new Date();
  let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  let min =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let sec =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  let currentTime = `${hour}:${min}:${sec}`;

  clockDisplay.innerHTML = currentTime;
};

setInterval(clock, 1000);

const changeTheme = () => {
  document.body.classList.toggle("dark-mode");
};

switchButton.addEventListener("click", changeTheme);
