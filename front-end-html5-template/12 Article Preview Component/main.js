document.querySelectorAll(".share").forEach((el) => {
  el.addEventListener("click", () => {
    if (window.innerWidth < 671) {
      document.querySelector(".author__bar").classList.toggle("hide");
      document.querySelector(".share__bar").classList.toggle("hide");
    } else {
      document.querySelector(".share__popup").classList.toggle("hide");
    }
  });
});
