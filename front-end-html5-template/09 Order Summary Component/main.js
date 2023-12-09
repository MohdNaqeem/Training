const changeButton = document.querySelector("#change");
var planName = document.querySelector("#plan-name");
var planPricing = document.querySelector("#plan-pricing");

changeButton.addEventListener("click", togglePlan);

function togglePlan() {
  changeButton.classList.toggle("year");
  if (changeButton.classList.contains("year")) {
    planName.innerHTML = "Monthly Plan";
    planPricing.innerHTML = "$6.99/month";
  } else {
    planName.innerHTML = "Annual Plan";
    planPricing.innerHTML = "$59.99/year";
  }
}
