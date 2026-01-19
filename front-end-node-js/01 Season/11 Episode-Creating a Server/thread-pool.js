const fs = require("fs");
const crypto = require("crypto");

// Increase thread pool size
// process.env.UV_THREADPOOL_SIZE = 102;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
  console.log("1 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
  console.log("2 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
  console.log("3 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
  console.log("4 - cryptoPBKDF2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
  console.log("5 - cryptoPBKDF2 done");
});


/*

Explanation:

# Step 1️⃣: JavaScript runs the file
  - JS reads the code top to bottom
  - All crypto.pbkdf2 calls are submitted
  - JS does not wait
  - No output yet

# Step 2️⃣: Thread pool starts working
  Thread pool has 4 threads, so:
  Task	   What happens
  - 1	      Runs in thread
  - 2	      Runs in thread
  - 3	      Runs in thread
  - 4	      Runs in thread
  - 5	      Waits (no free thread)

  Note : we can increase the size of thread pool and then it will work accordingly.

# Step 3️⃣: Tasks finish one by one
  - Whichever finishes first prints first
  - Order is not guaranteed
    Example:
    2 done
    1 done
    4 done
    3 done
    5 done
    Why 5 is last? ➡ It started only after one thread became free.

# Why output order looks random?
  - CPU scheduling differs
  - Each task takes slightly different time
  - OS decides which thread finishes first

*/
