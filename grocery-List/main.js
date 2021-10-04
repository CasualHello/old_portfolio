const sumbitButton = document.querySelector(".sumbit-button");
const productInput = document.querySelector("input");
const list = document.querySelector(".list");
const clearButton = document.querySelector(".clear-button");
const popUp = document.querySelector(".info-pop-up");

const makeElementOfList = (productName) => {
  const listElement = document.createElement("li");
  listElement.classList.add("list-element");
  listElement.innerHTML = `${productName}<div class="icon-container">
  <i class="fas fa-edit edit--green"></i>
  <i class="fas fa-trash trash--red"></i>`;
  return listElement;
};

const addToList = () => {
  clearButton.classList.remove("clear-button-hide");
  const productInputValue = productInput.value;
  if (productInputValue === "") {
    return showPopUp("Please Enter Something", "pop_up--red");
  }
  productInput.value = "";
  const productElement = makeElementOfList(productInputValue);
  list.appendChild(productElement);
  showPopUp("Item Added To The List", "pop_up--green");
  const removeButton = productElement.querySelector(".trash--red");
  removeButton.addEventListener("click", removeElementFromList(productElement));
  const editButton = productElement.querySelector(".edit--green");
  editButton.addEventListener("click", changeElementOfList);
};

const changeElementOfList = (productInputValue, productElement) => {
  sumbitButton.textContent = "Edit";
  productInput.textContent = productInputValue.value;
  console.log(productElement.value);
};

const showPopUp = (text, type) => {
  popUp.classList.remove("hidden", "pop_up--green", "pop_up--red");
  popUp.textContent = text;
  popUp.classList.add(type);
  setTimeout(() => {
    popUp.classList.add("hidden");
  }, 1500);
};

const removeElementFromList = (productElement) => () => {
  productElement.remove();
  showPopUp("Item Removed From List", "pop_up--red");
};

const clearList = () => {
  list.textContent = "";
  showPopUp("Empty List", "pop_up--red");
};

sumbitButton.addEventListener("click", addToList);
clearButton.addEventListener("click", clearList);
