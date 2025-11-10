let age = prompt("Enter your age")

if (isNaN(age)){
    console.log('Invalid Iput')
}else if(age >= 18){
    console.log("You can vote")
}else{
    console.log("you can't vote")
}

/*
Explaination :

isNaN() automatically tries to convert the value to a number before checking. if it will true then will print.

Example : 

➡️ "18" is a string, not a number.
But JavaScript converts "18" → 18 (a number).
Now it checks: “Is 18 Not a Number?” → No, it’s a number.
✅ So isNaN("18") returns false

"abc" can’t be turned into any number.
So the conversion fails and JavaScript says,
“Yep, that’s Not a Number.”
✅ So isNaN("abc") returns true.

*/