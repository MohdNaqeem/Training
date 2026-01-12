console.log("Hello world!")

var a = 5;
var b = 20;

// this callback will only be pushed to call stack in v8 once the call stack is empty.
setTimeout(()=>{
    console.log("Set time out will execute as soon as possible")
},0)

setTimeout(()=>{
    console.log("Set time out executed after 3 sec")
},3000)

function multiplyFn(a,b){
    const result = a * b
    return result
}

const c = multiplyFn(a,b)

console.log("Multiplication is :", c)

/*
=> How it works internally:
   - JavaScript executes code on a single main thread (Call Stack)
   - When setTimeout is called, the callback is moved to the Web APIs / timer system
   - After the delay expires (0ms or 3000ms), the callback goes into the Callback Queue

   # The Event Loop keeps checking:
     - Is the Call Stack empty?
     - If YES → move the queued callback onto the stack
     Only then the callback executes.

   # So even with 0ms, the callback MUST WAIT until:
     - all synchronous code finishes
     - the stack is empty

   # That’s why:
     - multiplyFn runs first
     - result logs first
     - then the 0ms timeout runs
     - then the 3000ms timeout runs

*/