const buttons = document.querySelectorAll("button");
const textContainers = document.querySelectorAll(".text-container");

const showInfo = (event) => {
  textContainers.forEach((textContainer) => {
    textContainer.classList.add("hide");
  });

  const target = event.target.dataset.target;
  buttons.forEach((button) => {
    button.classList.remove("button-active");
  });
  event.target.classList.add("button-active");
  if (target) {
    document.getElementById(target).classList.toggle("hide");
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", showInfo);
});
