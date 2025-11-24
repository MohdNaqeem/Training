// Accessing the html div and button
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let newGameBtn  = document.querySelector("#newBtn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")

//
let playerTurn = true

// condition for winning patter
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

// for each box when click event will happen 
boxes.forEach((box) => {
   box.addEventListener("click", () =>{
    console.log("Box was cliked")
    if(playerTurn){
        box.innerText = "X"
        playerTurn = false
        box.disabled = true
    }else{
        box.innerText = "O"
        playerTurn = true
        box.disabled = true
    }
    checkWinner();
   })
})

// to check the winner 
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val)
                showWinner(pos1Val)
            }
        }
    }
}

// to show the winner on diplay 
const showWinner = (winner) => {
    msg.innerHTML = `Congrats!, winner is ${winner} `
    msgContainer.classList.remove("hide")
    disableBoxes()
}

// to disabled all the boxes after get winner
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true
    }
}
// to enable all the boxes after winner
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

// to reset the game 
let resetGame = () => {
    playerTurn = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

// to reset and start new game on button click 
newGameBtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)




