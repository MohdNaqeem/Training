// => Type Corecian

console.log(1+"1") // Ans (11)
// because here one is string so it will concatenate 

console.log("1"*3) // Ans (0)

/*
here we will get 0 because minus(-) operator use for substract and here one is string and one is number so minus operator only 
use for number so Js engine will convert from string to number so that's why we got 0. this process known as Type coercian 

1) + (plus) operator it use for addition and as well as concatenation, when both value will be number so it will work for addition otherwise 
it will concatenate

2) - (minus) operator it use only for substract 

3) * (multiply) operator also use only for multiply 

so if one value would be string and one would be number so js engine will convert string into number in the case of minus and 
multiply 
*/