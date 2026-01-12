console.log("hello from sum.js");
var x = "sum module got executed";

function calculate(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x,
  calculate,
};
