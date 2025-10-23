// Logical operators

// && , || 

console.log(10>5 && 5<10 && 7>2)

console.log(10<1 || 20<15 || 10>5)

/* 

We use && operators for multiple conditon and every conditon should be true then code will work.

We use ||(or) operators for multiple conditon and atleast one condition should be true.

*/

// => Unary operators

let inc = 30;
console.log(inc++) // 30
console.log(inc) // 31

let i = 11

i = i++ + ++i
console.log(i) // 24

let increament = 11
let increament2 = 22

let final = increament + increament2 + increament++ + increament2++ + ++increament + ++increament2;
console.log(increament)
console.log(increament2)
console.log(final)