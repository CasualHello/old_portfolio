const reviews = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Susan Smith",
    profession: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae, dolorem itaque suscipit nemo optio incidunt alias. Rem, autem! Voluptas?",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1540206395-68808572332f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80",
    userName: "Sam Potter",
    profession: "UI designer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et arcu eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    userName: "Joe Doe",
    profession: "UX designer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et arcu eros.",
  },
];

let activeReview = 0;
const randomButton = document.querySelector(".btn-random");
const arrowLeftButton = document.querySelector(".arrow-left");
const arrowRightButton = document.querySelector(".arrow-right");
const reviewText = document.querySelector(".review");
const namePlaceHolder = document.querySelector(".name");
const professionNamePlaceHolder = document.querySelector(".profession");
const avatarPlaceHolder = document.querySelector(".avatar");

const generateRandomReview = () => {
  const filteredReviews = reviews.filter((review) => {
    return review !== reviews[activeReview];
  });
  console.table(filteredReviews);
  activeReview = Math.floor(Math.random() * filteredReviews.length);
  randomAvatar = filteredReviews[activeReview].imgUrl;
  avatarPlaceHolder.src = randomAvatar;

  randomUserName = filteredReviews[activeReview].userName;
  namePlaceHolder.textContent = randomUserName;

  randomProfession = filteredReviews[activeReview].profession;
  professionNamePlaceHolder.textContent = randomProfession;

  randomReviewText = filteredReviews[activeReview].review;
  reviewText.textContent = randomReviewText;
};

const previousReview = () => {
  activeReview--;
  if (activeReview < 0) {
    activeReview = reviews.length - 1;
  }
  reviewText.textContent = reviews[activeReview].review;
  namePlaceHolder.textContent = reviews[activeReview].userName;
  professionNamePlaceHolder.textContent = reviews[activeReview].profession;
  avatarPlaceHolder.src = reviews[activeReview].imgUrl;
};

const nextReview = () => {
  activeReview++;

  if (activeReview >= reviews.length) {
    activeReview = 0;
  }

  namePlaceHolder.textContent = reviews[activeReview].userName;
  professionNamePlaceHolder.textContent = reviews[activeReview].profession;
  avatarPlaceHolder.src = reviews[activeReview].imgUrl;
  reviewText.textContent = reviews[activeReview].review;
};

arrowLeftButton.addEventListener("click", previousReview);
arrowRightButton.addEventListener("click", nextReview);

randomButton.addEventListener("click", generateRandomReview);
