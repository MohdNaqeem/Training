// objects, property and method
const student = {
  name: "Naqeem Momin",
  age: 23,
  greet: function() {
        console.log("This is a method inside an object");
    }
};

const funcName = {
    func(){
        console.log("function name")
    }
}

funcName.__proto__ = student

// class 

class ToyotaCar{
    constructor(brand,color){
        console.log("This is constructor")
        this.brand = brand
        this.color = color
    }
    start(){
        console.log("Start")
    }
    stop(){
        console.log("Stop")
    }
}

let fortuner = new ToyotaCar("Fortuner", "Black") 
console.log(fortuner)
let lexus = new ToyotaCar("Lexus", "Black")
console.log(lexus)

// inheritance 

class person {
    eat(){
        console.log("Eat food")
    }
    sleep(){
        console.log("sleep early")
    }
}

class engineer extends person {
    work(){
        console.log("Problem solve")
    }
}

let naqeemEngineer = new engineer()


