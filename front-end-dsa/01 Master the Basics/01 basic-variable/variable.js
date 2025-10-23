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
