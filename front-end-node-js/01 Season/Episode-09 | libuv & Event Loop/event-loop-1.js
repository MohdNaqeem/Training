const fs = require("fs")
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a =", a);
}

printA();
console.log("Last line of the file.");

/*

Explanation:

=> How Node.js Code Runs (Simple Explanation)
   Node.js runs JavaScript using V8 and handles asynchronous work using libuv and the Event Loop.

   # Step 01 : Synchronous Code
     - Runs first
     - Executes line by line
     - Uses the Call Stack
     - Blocks nothing

   # Step 02 : Asynchronous Code (Registration only)
     When Node sees async functions, it does not execute them immediately.

     Function	           What Node Does
     - setTimeout	       Registers callback in Timers Queue
     - fs.readFile	       Sends work to OS / thread pool
     - setImmediate	       Registers callback in Check Queue

     At this stage:
     - No callback runs
     - Only registration happens

   # Step 03 : Callback Queues
     Node.js has multiple callback queues, not one:
     - Timers Queue → setTimeout, setInterval
     - Poll Queue → File I/O, network I/O
     - Check Queue → setImmediate
     - Close Queue → Cleanup callbacks
     Callbacks wait in these queues after async work is done.

   # Step 04 : Event Loop
     The Event Loop:
     - Runs continuously
     - Checks if the call stack is empty
     - Moves callbacks from queues to the call stack

   # Step 05 : Execution Flow
     - Run all synchronous code
     - Start Event Loop
     - Execute callbacks one by one based on phase order
     - Repeat until no work remains

   # Important Rule:
     - Callbacks do NOT run when async work finishes.
     - They run only when the event loop picks them.
*/
