const submitButton = document.querySelector("#submit");
const ratingState = document.querySelector(".ratingState__container");
const thankyouState = document.querySelector(".thankyouState__container");
var userRating = document.querySelector("#givenRating");
buttons = document.querySelectorAll(".ratingButton");

buttons.forEach((element) => {
  element.addEventListener("click", takeRating);
});

function takeRating() {
  userRating.innerText = this.innerText;
}
submitButton.addEventListener("click", submit);

function submit() {
  ratingState.classList.add("hide");
  thankyouState.classList.remove("hide");
}
