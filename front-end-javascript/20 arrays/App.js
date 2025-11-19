// Array:

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

for(let car of cars){
    console.log(`for of loop ${car}`)
}

for(i = 0; i<cars.length; i++){
    console.log(`for loop ${cars[i]}`)
    
}
/*------------------------------------------------------------------------------------------------------------------------------------------*/
// Array method :

// 01 Push method :

let food = ["Apple", "Banana", "Orange", "Tomato"]
console.log(food)
food.push("Potato", "Rice", "Bread")
console.log(food)

// 02 pop method :
let alpha = ["ABC", "BCD", "EFG", "HIJ"]
console.log(alpha)
alpha.pop()
console.log(alpha)

// 03 string method :
let stringData = ["Momiin", "Mohd", "NAqeem", "Raza"]
console.log(stringData)
console.log(stringData.toString())

// 04 concat method :
let setOne = ["Naqeem", "Mohd"]
let setTwo = ["Raza", "Momin"]
console.log(setOne)
console.log(setTwo)
console.log(setOne.concat(setTwo))

// 05 shift method :
let email = ["naqeem@gmail.como", "mohd@gmail.como", "raza@gmail.como"]
console.log(email)
email.shift()
console.log(email)

// 06 unshift method

let id = ["naqeem@gmail.como", "mohd@gmail.como", "raza@gmail.como"]
console.log(id)
id.unshift("raza.gmailcom")
console.log(id)

// 07 slice method :
let num = [1,2,3,4,5,6,7,8,9]
console.log(num)
console.log(num.slice(2,6)) // 3,4,5,6

// 08 splice method :
let number = [1,2,3,4,5,6,7,8,9]
console.log(number)
number.splice(1,3, 11,12,13)
console.log(number)

/*------------------------------------------------------------------------------------------------------------------------------------------*/
// Practice set :

let Practice = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// Remove the first element from given array
console.log(Practice)
Practice.shift()
console.log(Practice)

// Remove uber and add ola its place 
let values = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(values)
values.splice(2,1,"ola")
console.log(values)

// Add amazon at the end 
let addValues = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(addValues)
addValues.push("Amazon")
console.log(addValues)


