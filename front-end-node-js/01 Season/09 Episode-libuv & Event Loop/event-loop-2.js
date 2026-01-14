const fs = require("fs")
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", "utf8", () => {

  setTimeout(() => console.log("2nd timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");

/*

Explanation:

# STEP 1️⃣: Synchronous code runs first (Call Stack)
  Node.js always runs synchronous code first, top to bottom.

  Code : console.log("Last line of the file.");
  Output : Last line of the file.

# STEP 2️⃣: Microtasks after sync code
  After sync code finishes, Node runs microtasks:
  Priority:
  process.nextTick → Promise.then

  Code: 
  - process.nextTick(() => console.log("nextTick"));
  - Promise.resolve().then(() => console.log("Promise"));

  Output:
  - nextTick
  - Promise

# STEP 3️⃣: Timers phase : Now the event loop starts.
  Runs in Timers phase. -> setTimeout(() => console.log("Timer expired"), 0);

  Output:
  - Timer expired

# STEP 4️⃣: CHECK phase (IMPORTANT PART)
  At this moment:
  - setImmediate is already queued
  - fs.readFile may not yet be ready
  So Node moves directly to CHECK phase.

  Note : If the poll queue is empty, Node.js may move to the check phase and execute setImmediate before fs.readFile callbacks.

  Code : setImmediate(() => console.log("setImmediate"));
  Output : setImmediate

# STEP 5️⃣: POLL phase (File I/O callback)
  Now the file read finishes and enters the poll phase.
  Code : console.log("File Reading CB");
  Ouput : File Reading CB

# STEP 6️⃣: Microtasks inside fs callback
  Runs immediately after the poll callback.
  Code : process.nextTick(() => console.log("2nd nextTick"));
  Output : 2nd nextTick

# STEP 7️⃣: CHECK phase again
  Code : setImmediate(() => console.log("2nd setImmediate"));
  Output : 2nd setImmediate

# STEP 8️⃣: TIMERS phase (next cycle)
  Code : setTimeout(() => console.log("2nd timer"), 0);
  Output : 2nd timer

# FINAL CORRECT OUTPUT ORDER
  Last line of the file.
  nextTick
  Promise
  Timer expired
  setImmediate
  File Reading CB
  2nd nextTick
  2nd setImmediate
  2nd timer
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Sync code
↓
process.nextTick (drain completely, even nested)
↓
Promise callbacks
↓
Timers phase
↓
Poll phase
   ├─ if empty → Check phase
   └─ if not empty → run I/O
↓
Check phase (setImmediate)
↓
Next cycle

  

*/
