console.log(a)
var a = 10
// so in var variable we can access it before initialization and we will get undefined

// console.log(b)
// let b = 10
// // but in let Variable we can't access it before initialization and we will get error (Cannot access 'b' before initialization)

let c = 10 
let d = 30
console.log(a+d)
// here we will get the addition value between these two variables (40)

let e = 10
let f = "30"
console.log(e+f)
console.log(typeof (e+f))
// and now it will concatenate these two variables because one is number and one is strig so in this case it will concatenate
// these two value and we wil get and 1030 and its type would be string

let g = 10 
let h = 30 
console.log("sum of 10 and 30 is " + g + h) // ANS (sum of 10 and 30 is 1030)
/* 
so here we got this "sum of 10 and 30 is 1030" because in console it will need one operator and two operant then it will 
solve and here we have 3 operant and two operators so at first we have string so that's why variable g converted into string
and it became "10" and then it concatenate with variable h so that's why ans is 1030  
*/
console.log("sum of 10 and 30 is " + (g + h)) // ANS (sum of 10 and 30 is 40)
// here it will give priority the brackets the whole equatiion so that's why here we got 40


// => Type Corecian

console.log(1+"1") // Ans (11)
// because here one is string wo it will concatenate 

console.log("1"*3) // Ans (0)

/*
here we will get 0 because minus(-) operator use for substract and here one is string and one is number so minus operator only 
use for number so Js engine will convert from string to number sp that's why we got 0. this process known as Type coercian 

1) + (plus) operator it use for addition and as well as concatenation, when both value will be number so it will work for addition otherwise 
it will concatenate

2) - (minus) operator it use only for substract 

3) * (multiply) operator also use only for multiply 

so if one value would be string and one would be number so js engine will convert string into number in the case of minus and 
multiply 
*/

// => Accept and print the answer

// let age = prompt("Type your age")
// console .log("This is user age " + age)

// // Prompt always pick value in string so type would be string 

// let ageNumber = Number(prompt("Type your age in number type"))
// console.log(ageNumber)

/*
so here we are using number function to convert data type from string to number. and here prompt used as a paranthesis and we 
called this method type casting or type conversion, so basically when we change type from one to another that is called type
casting

Example :

Number => string
string => number
boolean => string
.... so on for ever type
*/

// => Swapping variable via 3 methods 

// method 01 

let swap = 20
let swap2 = 30 
let result;

result = swap;
swap = swap2
swap2 = result

console.log("This is variable one value was 20 " + swap)
console.log("This is variable two value was 30 " + swap2)

/*
Expalnation
so we have to swap two variable value, and to achieve this task we are using extra variable 

so in extra variable we are putting the value of first variable, so now this empty variable got the value of first variable 
and in first variable after first equation its became empty so now we are putting varaible two value into varaible first
and then in second variable we are putting the value of extra variable because it has first variable value
*/

// Method 02 without extra variable 

let k = 10
let l = 20
console.log(k,l)
k = k + l // 30
l = k - l // 30 - 20 = 10
k = k - l // 30 - 10 = 10

console.log("K value was 10 and became 20 after swapping " + k)
console.log("L value was 20 and became 10 after swapping " + l)

// Method 03 via Destructuring-based swapping

let demo = 40;
let demo2= 50;

[demo,demo2] = [demo2,demo];

console.log(demo,demo2)

// let demo = 40;
// let demo2 = 50;

// [demo, demo2] = [demo2, demo]; // ✅ works now
// console.log(demo, demo2);


/*

This program swaps the values of two variables using destructuring assignment in JavaScript.
The line [demo, demo2] = [demo2, demo]; swaps their values.
The left hand side value was [40,50]
The right side [demo2, demo] means [50, 40].
Then, demo becomes 50 and demo2 becomes 40.

*/

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


// => Relational operators 

// > , < , >= , <= , !=(not strict) , !==(Strict)

console.log(10>5) // true
console.log(10>29) // false

console.log(10<29) // True
console.log(20<10) // false

console.log(10 == 10) // true 
console.log(10 === '10') // false

// Logical operators

// && , || 

console.log(10>5 && 5<10 && 7>2)

console.log(10<1 || 20<15 || 10>5)

/* 

We use && operators for multiple conditon and every conditon should be true then code will work.

We use ||(or) operators for multiple conditon and atleast one condition should be true.

*/

// => Unary operators











