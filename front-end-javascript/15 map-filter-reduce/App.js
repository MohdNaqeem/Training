/*
=> map function
   The map function is used to transform each element of an array using a provided function and 
   create a new array with the transformed elements.

=> filter function
   The filter function is used to create a new array containing only elements that satisfy a 
   specified condition or criteria.

=> The reduce function is used to iterate through an array and accumulate its elements into a 
   single value, using a provided accumulator function.
*/

// var demo = [1,2,3,4,5,6]
// var res = demo.filter((num)=>{
//   return num > 3;
// })
// console.log(res)

var demo = [1,2,3,4,5]

// var res = demo.reduce((acc,curr)=>{
//    return acc + curr
// })
// console.log(res)

// find maximum value
var res2 = demo.reduce((acc,curr)=>{
   if(curr>acc){
      acc = curr
   }
   return acc
})
console.log(res2)

var res2 = demo.reduce((acc,curr)=>{
   if(curr<acc){
      acc = curr
   }
   return acc
})
console.log(res2)