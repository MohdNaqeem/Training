var n = 2;
function square(num){
    var ans = num * num
    return ans
}
var square2 = square(n)
var square4 = square(4)

/*
Notes :
- whenever js code run it creates a global execution context and it has two components memory and 
  code and it is created in two phases.   

- phase one is Memory creation phase in this phase js allocating whole program inside the global 
  space.
- in case of variable it will allocate special value undefined but in the case of function it 
  will allocate as it is function.

- in phase two code execution phase Js program is execute line by line in variable it will 
  replace undefined with value of variable and similarly it will invokes the function. and when 
  it invoke the function execution context is create. 

*/
