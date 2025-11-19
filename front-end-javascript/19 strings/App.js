// String:

let str = "Hello world!"
let data = 'Hello world!'

console.log(str)
console.log(data)

// Template strings:

let quotes = `String with 'single' andd "double" quotes`
console.log(quotes)

// Template literals

let num = 20
let val = 20
console.log(`"This is num" ${num} "and its" ${val}`)

/* 
Practice 

01 Prompt the user to enter their full name. Generate a username for them based on the input. 
Start username with @, followed by their full name and ending with the full name length.

*/

let userName = prompt("Enter your Full Nam without spacee")
console.log(`@${userName}${userName.length}`)