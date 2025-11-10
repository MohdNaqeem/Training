console.log(c)
console.log(b)
console.log(a)

let a = 10

const b = 100

var c = 20

/* 
Notes : 

=> Are let and const hoisted?
   let and const are hoisted but its memory is allocated at other place than window(global) 
   which cannot be accessed before initialisation.

=> Difference between var, let and const
   - level of strictness
     var << let << const

   - var (no temporal dead zone) can redeclare and re-initialize of var. It is store in GEC.
   - let (use temporal dead zone) can't re-declare, can re-initialize, It is store in separate memory.
   - const (use temporal dead zone) can't re-declare, can't re-initialize, It is store in separate memory
     
=> There are three types of error
   syntaxError
   referenceError
   typeError

   - syntaxError
     when proper syntax(way of writing a statement) is not used then browser will throw syntaxError.
 
   - typeError
     when we change type that is not supposed to be changed for example when we try to re-initialize
     const variable then it will throw typeError.

   - referenceError
     When we try to access variable which is not available in global memory then it will throw error.

*/