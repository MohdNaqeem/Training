const toggles = document.querySelectorAll(".toggle");
const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");
toggles.forEach((el, i) => {
  el.addEventListener("click", () => {
    // TOGGLE THE ANSWER
    answers[i].classList.toggle("show");
    // ROTATE ARROWS
    if (answers[i].classList.contains("show")) {
      arrows[i].style.rotate = "180deg";
      questions[i].style.fontWeight = "700";
    }
    if (!answers[i].classList.contains("show")) {
      arrows[i].style.rotate = "0deg";
      questions[i].style.fontWeight = "400";
    }
  });
});
