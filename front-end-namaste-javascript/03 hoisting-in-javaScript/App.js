console.log(x)
getName()
y()
var x = 5;
function getName(){
    console.log("Namaste Javascript")
}
var y = ()=>{
    console.log('This is arrow function')
}


/* 
Notes : 

=> What is hoisting ?
   Hoisting is a thing we can access variable and function before the initialise. but there are two golden rules.
   1. Variable declarations are scanned and are made undefined
   2. Function declarations are scanned and are made available 

   when we try to access function before the initialise so in the case of function we will get as it is function.
   and when we try to access let & const variable before the initialise so in this case we will get error.
   but we try access var variable before the initialise so in this case we will get undefined because in JS var 
   variable goes top of the function. 

   for examlpe if I write code like this 
   console.log(x)
   var x = 3
   but behind the browser Js work like this 
   var x 
   console.log(x) so that's why we get undefined. 
    - UNDEFINED means Variable has been declared but value is not assigned but NOT DEFINED means Variables is not
      DECLARED

   And important thing when we access arrow function then also we get error because arrow function behave like variable
   not function so that's why we get error
   

*/