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
