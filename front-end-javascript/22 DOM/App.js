// 01 Changing Text (innerText / textContent): 

document.getElementById("title").innerText = "Heading change from heading to new heading using getElmentById";
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 02 Changing HTML Structure (innerHTML):
 
document.getElementById("box").innerHTML = "<p>element created using getElementById.innerHTML</p>";
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 03 Changing CSS (style property):

document.getElementById("text").style.color = "red";
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 04 Adding New Elements (createElement + appendChild):

let item = document.createElement("li");
item.innerText = "New Item";
document.getElementById("list").appendChild(item);
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 05 Removing Elements (remove or removeChild):

document.getElementById("msg").remove();
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 06 Changing Attributes (setAttribute / getAttribute):

document.getElementById("pic").setAttribute("src", "new.png");
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 07 getAttributes

let get = document.querySelector("h4")
console.log(get.getAttribute("class"))
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 08 setAttributes

let set = document.querySelector("h4")
set.setAttribute("class", "newClass")
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 09 style

let color = document.querySelector("strong")
color.style.color = "red"
color.style.backgroundColor = "black"
color.style.fontSize = "30px"
// color.style.visibility = "hidden"
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 10 Insert Element into HTML 

// for append
let newBtn = document.createElement("button")
newBtn.innerText = "Click me"

let addBtn = document.querySelector("h5")
addBtn.append(newBtn)

// for prepend
let newPara = document.createElement("p")
newPara.innerText = "adding para using js"

let addNewBtn = document.querySelector("h6")
addNewBtn.prepend(newPara)
/*--------------------------------------------------------------------------------------------------------------------------------- */

// 11 remove element

let removeElement = document.querySelector("i")
removeElement.remove()
/*--------------------------------------------------------------------------------------------------------------------------------- */

// Practice 01

let heading = document.querySelector("h2")
heading.innerText = heading.innerText + "by Naqeem Momin"

// Practice 02 

let divs = document.querySelectorAll(".box")

let idx = 1
for(div of divs){
    div.innerText = `New Unique box number ${idx}`
    idx++; 
}







