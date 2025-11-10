// Function statement
function a(){
    console.log("statement called")
}
a()

// Function Expression 
var b = function (){
    console.log("expression called")
}
b() 

// Named function expression
var fName = function nameFunction(a,b){
    console.log(nameFunction)
    return a + b
}

const result = fName(4, 3);
console.log(result)

// difference between Parameters and Arguments 
function ParametersArguments(para1, para2){
    return para1 + para2
}
console.log(ParametersArguments(2, 8))