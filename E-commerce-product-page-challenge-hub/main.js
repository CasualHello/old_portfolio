const product = {
  id: 1,
  name: "Autumn Limited Edition Sneakers",
  price: 250.0,
  discription: `These low-profile sneakers are your perfect casual wear companion.
 Featuring a durable rubber outer sole, they’ll withstand everything
 the weather can offer.`,
  discount: 0.5,
  images: [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ],
};

const cart = [];

const menuButton = document.getElementById("hamburger");
const closeIconButton = document.querySelector(".close-icon");
const navbarWrapper = document.querySelector(".navbar-mobile-wrapper");
const addButton = document.querySelector(".plus-icon");
const subtractButton = document.querySelector(".minus-icon");
const amountProductDisplay = document.querySelector(".amount-number");
const navbarCartIcon = document.querySelector(".cart-navbar-icon");
const cartPopUpDisplay = document.querySelector(".cart-pop-up");
const cartContainerDisplay = document.querySelector(".cart-container");
const arrowRightButton = document.getElementById("arrow-right");
const arrowLeftButton = document.getElementById("arrow-left");
const productImage = document.querySelector(".product-image");
const addToCartButton = document.getElementById("add-button");

let amountProduct = 0;
let IsCartEmpty = true;

const renderCart = () => {
  cartContainerDisplay.innerHTML = "";
 

  if (cart.length === 0) {
    const div = document.createElement("div");
    div.style.padding = `64px`;
    div.style.display = `flex`;
    div.style.justifyContent = `center`;
    div.innerHTML = `Your cart is empty`;
    cartContainerDisplay.append(div);
  } else {
    cart.forEach((product) => {
      const div = document.createElement("div");
      div.style.padding = `8px 16px 32px 16px`;
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.innerHTML = `<div class="cart__product-info">
      <img
        class="cart__image--small"
        src="images/image-product-1.jpg"
        alt="picture of shoes"
      />

      <div class="cart__product-name-container">
        <p class="cart__product-name">${product.name}</p>
        <div class="cart__product-amount">
          <span class="cart__price">${
            product.price - product.price * product.discount
          }</span
          ><span class="cart__amount">${amountProduct}</span
          ><span class="cart-total">${
            (product.price - product.price * product.discount) * amountProduct
          }</span>
        </div>
      </div>
      <div>
        <img
          class="cart__trash--icon"
          src="images/icon-delete.svg"
          alt="trash icon"
        />
      </div>
    </div>
    <button class="cart__button">Checkout</button>`;
      cartContainerDisplay.append(div);
     
    });
  }
};

renderCart();

const handleAddToCartButton = () => {
  if (amountProduct === 0) {
    return;
  }

  cart.push({
    ...product,
    amount: 1,
    price: 10,
  });

  renderCart();
};

const showNextPicture = () => {
  const indexOfPicture = product.images.indexOf(
    productImage.getAttribute("src")
  );
  productImage.src =
    product.images[(indexOfPicture + 1) % product.images.length];
};

const showPreviousPicture = () => {
  let indexOfPicture = product.images.indexOf(productImage.getAttribute("src"));
  indexOfPicture--;
  if (indexOfPicture < 0) {
    indexOfPicture = product.images.length - 1;
  }
  productImage.src = product.images[indexOfPicture];
};

const displayCart = () => {
  cartPopUpDisplay.classList.toggle("hidden");
};

const addAmountProduct = () => {
  amountProduct++;
  amountProductDisplay.textContent = amountProduct;
};

const subtractAmountProduct = () => {
  amountProduct--;
  if (amountProduct <= 0) {
    amountProduct = 0;
  }
  amountProductDisplay.textContent = amountProduct;
};

const displayNavbar = () => {
  navbarWrapper.classList.remove("hidden");
  cartPopUpDisplay.classList.add("hidden");
};

const hideNavbar = () => {
  navbarWrapper.classList.add("hidden");
};

closeIconButton.addEventListener("click", hideNavbar);
menuButton.addEventListener("click", displayNavbar);
addButton.addEventListener("click", addAmountProduct);
subtractButton.addEventListener("click", subtractAmountProduct);
navbarCartIcon.addEventListener("click", displayCart);
arrowRightButton.addEventListener("click", showNextPicture);
arrowLeftButton.addEventListener("click", showPreviousPicture);
addToCartButton.addEventListener("click", handleAddToCartButton);
