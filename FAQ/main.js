const buttons = document.querySelectorAll(".button-plus");
const card = document.querySelector(".card");


const showAnswer = (event) => {
  const target = event.target.dataset.target;
  document.getElementById(target).classList.toggle("toggle");
  if (event.target) {
    event.target.classList.toggle("fa-plus-square");
    event.target.classList.toggle("fa-minus-square");
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", showAnswer);
});
