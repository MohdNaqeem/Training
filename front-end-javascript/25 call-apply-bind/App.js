let name = {
    firstName : "Naqeem",
    lastName : "Momin"
}

let name2 = {
    firstName : "Raza",
    lastName : "Momin"
}

let printFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state)
}

// call and apply (function borrowing)
printFullName.call(name, "Mumbai","Maharashtra");
printFullName.call(name2, "Bhiwandi","Maharashtra");
printFullName.apply(name2, ["Bhiwandi","Maharashtra"]);

// bind method
let printMyName = printFullName.bind(name2, "Pune", "Maharashtra")
console.log(printMyName)
printMyName()
