// for loops:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 10 ", sum);

for (i = 2; i <= 10; i += 2) {
  console.log("printing even number using for loop",i);
}

//-------------------------------------------------------------------------------------------------------------------

// while loop:
let x = 1;
while (x <= 5) {
  console.log("printing number from 1 to 5 using while loop",x);
  x++; // updating condition
}

let z = 1
while(z <= 10){
  console.log("table of 3 using while loop ",3 * z)
  z++
}

//-------------------------------------------------------------------------------------------------------------------

// do while loop:

let test = 1;
do {
  console.log(test)
  test++
}while(test<=5)

//-------------------------------------------------------------------------------------------------------------------

// for of loop:

let fruits = ['Apple', 'Mango', 'Banana', 'Pineapple']

for(let val of fruits){
  console.log(val)
}

//-------------------------------------------------------------------------------------------------------------------

// for in loop
let object = {
  name:"Momin Naqeem",
  age:23,
  email:"mominnaqeem9860@gmail.com"
}

for(let key in object){
  console.log(key,object[key])
}

//-------------------------------------------------------------------------------------------------------------------
// Practice

// 01 Print all even number from 0 to 40
for(x=0; x<=40; x++){
  if(x % 2 === 0){
    console.log(x)
  }
}

// 02 Print all odd number from 0 to 40
for(i=0; i<=40; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
}

// 03 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

let getNumber = 20;
let inputNumber = prompt("Enter the right number.")

while(inputNumber != getNumber){
   inputNumber = prompt("You have entered the wrong number.")
} 
console.log("Congratulations!!, you got right number")