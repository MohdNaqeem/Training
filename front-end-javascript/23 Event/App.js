// Event handling:

let btn = document.getElementById("btn1")
btn.onclick = (evt) => {
    console.log("Button clicked")
    let a = 1
    a++;
    console.log(a)
    console.log(evt)
} 

// Event listener

let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", (evt)=>{
    console.log("Event listener occured")
    console.log(evt)
})

function showMessage() {
  console.log("Button clicked!");
}
document.getElementById("btn3").addEventListener("click", showMessage);

// removeEventListener
function greet() {
  console.log("hello");
  btn3.removeEventListener('click', greet);
}

let btn3 = document.getElementById("hidebtn");
btn3.addEventListener('click', greet);

// Practice

let mode = document.getElementById("bgColor")
let currValue = "light"
mode.addEventListener("click", () =>{
    if(currValue === "light"){
        currValue = "dark"
        document.querySelector("body").style.backgroundColor = "lightgreen"; 
    }
    else{
        currValue = "light"
        document.querySelector("body").style.backgroundColor = "lightpink"; 
    }
console.log(currValue)
})

let hoverBg = document.getElementById("hover");

hoverBg.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "pink";
});

hoverBg.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "red";
});
