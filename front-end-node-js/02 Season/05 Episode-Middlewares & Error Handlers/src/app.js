const express = require("express")

const app = express()

app.get("/user", (req, res, next)=>{
    console.log("route handler 1")
    next()
    // res.send("1st Response!!")
}, 
(req, res)=>{
    console.log("route handler 2")
    res.send("2nd Response!!")
},
(req,res)=>{
    console.log("route handler 3")
    res.send("3nd Response!!")
},
(req,res)=>{
    console.log("route handler 4")
    res.send("4nd Response!!")
}
)

app.listen(3000, ()=>{
    console.log("Server is successfully lisening on port 3000...")
})