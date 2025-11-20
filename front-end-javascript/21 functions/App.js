// Functions:

function demoFunction(x1, x2) {
  return (x1 * x2) / 2;
}
console.log(demoFunction(4, 3));

function multiplyFunction() {
  console.log((4 * 5) / 2);
}
multiplyFunction();

// get the vowels count
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count)
}
countVowels("Momin Naqeem")


// for a given array of numbers print a value for each value using foreach loop
let arr = [1,2,3,4,5,6,7,8]

arr.forEach((arr)=>{
    console.log(arr * arr)
})
