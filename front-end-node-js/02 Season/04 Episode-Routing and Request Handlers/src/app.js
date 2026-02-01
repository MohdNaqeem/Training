const express = require("express")

const app = express()

//This is only for GET method
app.get("/hello",(req,res)=>{
    res.send({firstName:"Naqeem", lastName:"Momin"})
})

//Saving data to DB
app.post("/hello",(req,res)=>{
    res.send("Data successfully save to database")
})

//Delete 
app.delete("/hello",(req,res)=>{
    res.send("Delete successfully")
})

app.use("/hello", (req,res)=>{
    res.send("Hello world!")
})

app.use("/", (req,res)=>{
    res.send("Hello from dashboard!")
})

app.listen(3000, ()=>{
    console.log("Server is successfully lisening on port 3000...")
})