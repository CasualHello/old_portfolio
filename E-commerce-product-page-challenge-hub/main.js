const menuButton = document.getElementById("hamburger");
const closeIconButton = document.querySelector(".close-icon");
const navbarWrapper = document.querySelector(".navbar-mobile-wrapper");
const addButton = document.querySelector(".plus-icon");
const subtractButton = document.querySelector(".minus-icon");

const displayNavbar = () => {
  navbarWrapper.classList.remove("hidden");
};

const hideNavbar = () => {
  navbarWrapper.classList.add("hidden");
};

closeIconButton.addEventListener("click", hideNavbar);
menuButton.addEventListener("click", displayNavbar);
