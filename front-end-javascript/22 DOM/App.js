// 01 Changing Text (innerText / textContent): 

document.getElementById("title").innerText = "Heading change from heading to new heading using getElmentById";
     
// 02 Changing HTML Structure (innerHTML):
 
document.getElementById("box").innerHTML = "<p>element created using getElementById.innerHTML</p>";

// 03 Changing CSS (style property):

document.getElementById("text").style.color = "red";

// 04 Adding New Elements (createElement + appendChild):

let item = document.createElement("li");
item.innerText = "New Item";
document.getElementById("list").appendChild(item);

// 05 Removing Elements (remove or removeChild):

document.getElementById("msg").remove();

// 06 Changing Attributes (setAttribute / getAttribute):

document.getElementById("pic").setAttribute("src", "new.png");

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





