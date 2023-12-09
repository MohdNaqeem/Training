// document.querySelector("#mon").style.height = `${data[0].amount}px`;
// document.querySelector("#tue").style.height = `${data[1].amount}px`;

var chart = document.querySelector("ul").children;

for (let i = 0; i < chart.length; i++) {
  chart[i].children[0].style.height = `${data[i].amount}%`;
  console.log(chart[i].children[1].style.height);
}
