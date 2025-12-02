// For shallow copy

// Example 01
let obj1 = { name: "Rahul" };
let obj2 = { ...obj1 }; // shallow copy

obj2.name = "Aman";

console.log(obj1.name); // Rahul  (unchanged)
console.log(obj2.name); // Aman

// Example 02
let obj = {
  name: "Alex",
  address: {
    city: "Mumbai",
  },
};
let copy = { ...obj }; // or Object.assign({}, obj)

// for deep copy 
let person = {
    name : "Rahul",
    address : {
        city : "Pune",
        pin : 40001
    }
}

let deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Banglore"
console.log(deepCopy.address.city)
console.log(person.address.city)

