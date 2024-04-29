// this is totally valid Js code.
{
    var a = 10
    let b = 20
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}


// we can access var outside of the block because var is global variable so we can access it.
console.log(a)

// We can't access let and const outside of the block that's why it's giving error.
console.log(b)
console.log(c)


/*
Notes :

=> What is block?
   when we write code inside curly brackets it's called block. It is used to combine multiple 
   statement into one statement so that we can use it at those places where javascript expects to 
   have single statement.

=> What is scope of variable pr function?
   scope of a variable or a function is the place where these are accessible.

=> what is block scope?
   The variables and function present within the scope of a block section. And block follows the 
   lexical scope chain pattern while accessing the variable.

=> What is shadowing?
   Providing same name to the variable as of those variable which are present in outer scope.

=> Why let and const are block scope?
   Block values are stored inside separate memory than global. They are stored in block. 
   (the reason let and const are called block scope)

*/