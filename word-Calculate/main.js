const textInput = document.querySelector("input");
const calcButton = document.querySelector(".calc");
const countPlaceholder = document.querySelector(".counter");
const popUp = document.querySelector(".pop__up");

const calculateLetters = () => {
  const textInputValue = textInput.value;
  if (!isOnlyAlphabetical(textInputValue)) {
    showPopUp("Please input alphabet characters only");
    countPlaceholder.textContent = "";
    return;
  }
  const lenghtOfWord = textInputValue.length;
  textInput.value = "";
  countPlaceholder.textContent = lenghtOfWord;
  if (textInputValue === "") {
    return showPopUp("Empty Input");
  }
};

const showPopUp = (text) => {
  popUp.textContent = text;
  popUp.classList.remove("hidden");
  setTimeout(() => {
    popUp.classList.add("hidden");
  }, 2000);
};

const isOnlyAlphabetical = (textInputValue) => {
  const letters = /^[A-Za-z]+$/;
  if (textInputValue.match(letters)) {
    return true;
  } else {
    return false;
  }
};

calcButton.addEventListener("click", calculateLetters);
