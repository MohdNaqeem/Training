const express = require("express")
const connectDB = require("./config/database")
const app = express()
const User = require("./models/user")

// Express can’t read JSON by default, This line converts JSON → JavaScript object
app.use(express.json())

app.post("/signup", async (req,res)=>{
    // creating a new instance of the user model
    const user = new User(req.body)
    try {
        await user.save()
    res.send("User added successfully")
    } catch(err) {
        res.status(400).send("Error saving the user: " + err.message)
    }
})

// To get one user from database
app.get("/user", async (req,res)=>{
    const userEmail = req.query.emailId
    try {
        const user = await User.findOne({emailId : userEmail})
        res.send(user)
    } catch(err) {
        res.status(400).send("Error saving the user")
    }
})

// To get all the user from the database
app.get("/feed", async (req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    } catch(err) {
        res.status(400).send("Something went wrong")
    }
})

// To delete the user by Id 
app.delete("/user", async (req,res)=>{
    const userId = req.body.userId
    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("user deleted successfully")
    }catch(err) {
        res.status(400).send("Something went wrong")
    }
})

// To Update the use fields
app.patch("/user", async (req,res)=>{
    const userId = req.body.userId;
    const data = req.body
    console.log(data)
    try{
        await User.findByIdAndUpdate({_id : userId}, data)
        res.send("User updated successfully")
    }catch(err) {
        res.status(400).send("Something went wrong")
    }
})

connectDB()
.then (()=>{
    console.log("Database connected successfully")
    app.listen(3000, ()=>{
    console.log("Server is successfully lisening on port 3000...")
})
}).catch((err)=>{   
    console.error("Database cannot be connected")
})

