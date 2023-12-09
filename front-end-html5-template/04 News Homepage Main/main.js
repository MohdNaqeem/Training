document.querySelector("#open").addEventListener("click", () => {
  document.querySelector("ul").style.display = "flex";
  document.querySelector("#open").style.display = "none";
});

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("ul").style.display = "none";
  document.querySelector("#open").style.display = "block";
});
