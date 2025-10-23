// => Operators and their question 

let num = 7;
let num2 = 2;

console.log(num/num2) // Ans 3.5
console.log(Math.floor(num/num2)) // Ans 3 , we use math floor method to get value in digit not in point 

/* 

And most imp thing when we divide two digit so after that we get two parts, 01 Quotient and 02 Remainder

01 Quotient : The main result of the division (how many times one number fits into another).
02 Remainder : What is left over after dividing.

Division sign(/) always gives Quotient.

Example:
console.log(Math.floor(7/2)) 
Output: 3 , because 2 can divide 7, 3 times and rest of numbers would be remainder so here remainder is 1

mod sign(%) always gives Remainder. 
console.log(7%2) Ans 1

*/

let remainder = 10
let remainder2 = 20
console.log(remainder%remainder2) // Ans 10
console.log(Math.floor(remainder/remainder2)) // Ans 0

/*

For modulus sign(%)
So left side value known as dividend and right side value is division. 10/20 , 10 is dividend and 20 is division.
so when we are using mod sign and our dividend is smaller than division then actual dividend number would be Ans

For division sign(/)
If dividend is smaller than division then ans would be 0.

*/

// For mod
let sum = 4569;
console.log(sum%10) // Ans 9, 

// For divide
let sum2 = 7023
let sum3 = 10
console.log(Math.floor(sum2/sum3))

/* 

For the modulus sign (%): 
whenever we mod a number by 10, the last digit will be the remainder; for 100, the last two digits will be the remainder; 
and for 1000, the last three digits will be the remainder.

And basically we use this trick to get last digit value.

For division sign(/):
When we divide a number by 10, the last digit is removed from the number.

*/


