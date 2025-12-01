let multiply = function(x) {
    return function(y){
        console.log(x * y)
    }
}

let result = multiply(2)
result(3)

/*

Explanation :
The outer function stores the value of x in a closure, and the inner function accesses it later when y is passed, enabling currying.

It reads x from closure → 2
It reads y from the argument → 3
It multiplies → 2 * 3 = 6
*/