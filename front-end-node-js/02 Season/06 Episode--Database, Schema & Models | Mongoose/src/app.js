const express = require("express")
const connectDB = require("./config/database")
const app = express()
const User = require("./models/user")

app.post("/signup", async (req,res)=>{

    // creating a new instance of the user model
    const user = new User({
        firstName : "Naqeem",
        lastName : "Momin",
        emailId : "momin@gmail.com",
        password : "xyz@123"
    })

    try {
        await user.save()
    res.send("User added successfully")
    } catch(err) {
        res.status(400).send("Error saving the user: " + err.message)
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

