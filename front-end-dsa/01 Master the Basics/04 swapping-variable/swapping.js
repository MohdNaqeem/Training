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
