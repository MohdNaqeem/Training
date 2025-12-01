// 01 this in Global Scope
console.log(this)

// 02 this inside an Object Method
const user = {
  name: "Rahul",
  getName() {
    console.log(this.name);
  }
};

user.getName();

// 03 this in Arrow Functions
const obj = {
  name: "Ravi",
  func: () => {
    console.log(this.name);
  }
};
obj.func(); // Output: window (NOT obj)
// Arrow function does not bind this → it takes from outside → global.
