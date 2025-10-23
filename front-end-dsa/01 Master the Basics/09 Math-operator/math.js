// Math operator 
console.log("Thia is Math.round " + Math.round(4.7))
console.log("Thia is Math.ceil " + Math.ceil(4.1))
console.log("Thia is Math.floor " + Math.floor(4.8))
console.log("Thia is Math.trunc " + Math.trunc(4.8))
console.log("Thia is Math.pow " + Math.pow(4.8))
console.log("Thia is Math.sqrt " + Math.sqrt(4.8))
console.log("Thia is Math.cbrt " + Math.cbrt(4.8))
console.log("Thia is Math.abs " + Math.abs(4.8))
console.log("Thia is Math.max " + Math.max(48,55,76,36,86))
console.log("Thia is Math.min " + Math.min(48,55,76,36,86))
console.log(Math.random())

/*

Math.round()
Rounds a number to the nearest integer.
Math.round(4.6) → 5

Math.ceil()
Rounds a number up to the next integer.
Math.ceil(4.2) → 5

Math.floor()
Rounds a number down to the previous integer.
Math.floor(4.8) → 4

Math.trunc()
Removes the decimal part and keeps only the integer.
Math.trunc(4.9) → 4

Math.pow(a, b)
Returns a raised to the power of b.
Math.pow(2, 3) → 8

Math.sqrt()
Returns the square root of a number.
Math.sqrt(16) → 4

Math.cbrt()
Returns the cube root of a number.
Math.cbrt(27) → 3

Math.abs()
Returns the absolute (positive) value of a number.
Math.abs(-5) → 5

Math.max()
Returns the largest number from a list.
Math.max(2, 5, 8) → 8

Math.min()
Returns the smallest number from a list.
Math.min(2, 5, 8) → 2

Math.random()
Returns a random number between 0 to 1.
Math.random() → e.g. 0.57

toFixed()
Rounds a number to a fixed number of decimal places.
(4.567).toFixed(2) → "4.57"

*/

// Math Problems

// 01 OTP generate 
console.log(Math.trunc(Math.random()*9000 + 1000))

// 02 Calculate area and perimeter of rectangle

let area = 4;
let breadth = 6;
console.log("Calculation of area is " + area * breadth)

let area2 = 4;
let breadth2 = 6;
console.log("Calculation of perimeter is " + 2 * (area2 + breadth2))

/*

Area of Rectangle:

Definition:
The area of a rectangle is the amount of space it covers.

Formula:
Area = Length × Breadth

Example:
If length = 8 and breadth = 5
Area = 8 × 5 = 40

Perimeter of Rectangle:

Definition:
The perimeter of a rectangle is the total distance around the rectangle.

Formula:
Perimeter = 2 × (Length + Breadth)

Example:
If length = 8 and breadth = 5
Perimeter = 2 × (8 + 5) =26

*/

// 03 Area of triagle by heron's formula
let w = 5
let x = 4
let y = 3

let z = (w+x+y)/2
console.log(z)

console.log(Math.sqrt(z * (z-w) * (z-x) * (z-y)))


// 04 Circumference of circle
let radius = 12
console.log(Number((2*Math.PI*radius).toFixed(3)))












