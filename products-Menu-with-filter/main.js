const menu = [
  {
    name: "Egg tost",
    imgUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$10.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["breakfast"],
  },
  {
    name: "Pancakes",
    imgUrl:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$12.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["breakfast", "lunch"],
  },
  {
    name: "Oatmeal",
    imgUrl:
      "https://images.unsplash.com/photo-1581559178851-b99664da71ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$5.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["breakfast"],
  },
  {
    name: "Tuna salad",
    imgUrl:
      "https://images.unsplash.com/photo-1604497181015-76590d828b75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGx1bmNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$15.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["lunch", "dinner"],
  },
  {
    name: "Chicken sandwich",
    imgUrl:
      "https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxsdW5jaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$16.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["breakfast", "lunch", "dinner"],
  },
  {
    name: "Steak",
    imgUrl:
      "https://images.unsplash.com/photo-1576511053046-7e445c5b95af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGRpbm5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$25.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["lunch", "dinner"],
  },
  {
    name: "Oreo Shake",
    imgUrl:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$7.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["shakes"],
  },
  {
    name: "Raspberry Shake",
    imgUrl:
      "https://images.unsplash.com/photo-1586707100228-c62482fc9524?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNoYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$6.00",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga voluptas molestiae neque. Repudiandae itaque, omnis debitis voluptatibus odio fugit?",
    categories: ["shakes"],
  },
];
const allButton = document.querySelector(".all-btn");
const breakfastButton = document.querySelector(".breakfast-btn");
const lunchButton = document.querySelector(".lunch-btn");
const dinnerButton = document.querySelector(".dinner-btn");
const shakesButton = document.querySelector(".shakes-btn");

const menuItems = document.querySelector(".menu-item");

const menuList = document.querySelector(".menu-grid");

const renderItems = (items) => {
  menuList.innerHTML = "";
  items.forEach((item) => {
    const e = document.createElement("div");
    e.innerHTML = `
    <div class="menu-item">
          <img
            src="${item.imgUrl}"
            class="food-picture"
            alt="egg-tost"
          />
          <div>
            <div class="item-name-price">
              <h3>${item.name}</h3>
              <span class="price">${item.price}</span>
            </div>
            <p>
              ${item.text}
            </p>
          </div>
        </div>
        `;
    menuList.append(e);
  });
};

renderItems(menu);

const showBreakfastItems = () => {
  renderItems(menu.filter((item) => item.categories.includes("breakfast")));
};

const showLunchItems = () => {
  renderItems(menu.filter((item) => item.categories.includes("lunch")));
};

const showDinnerItems = () => {
  renderItems(menu.filter((item) => item.categories.includes("dinner")));
};

const showShakesItems = () => {
  renderItems(menu.filter((item) => item.categories.includes("shakes")));
};

const showAllItems = () => {
  renderItems(menu);
};

allButton.addEventListener("click", showAllItems);
breakfastButton.addEventListener("click", showBreakfastItems);
lunchButton.addEventListener("click", showLunchItems);
dinnerButton.addEventListener("click", showDinnerItems);
shakesButton.addEventListener("click", showShakesItems);

items
  .filter((item) => {
    return item.age > 40;
  })
  .forEach((item) => {
    console.log(item.name);
  });

items.forEach((item) => {
  if (item.age > 40) console.log(item.name);
});
