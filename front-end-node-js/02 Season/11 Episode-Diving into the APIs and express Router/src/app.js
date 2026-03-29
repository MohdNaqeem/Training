const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userAuth} = require("./middlewares/auth")

// Express can’t read JSON by default, This line converts JSON → JavaScript object
app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);

    // Encrypt the password
    const { firstName, lastName, emailId, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    // creating a new instance of the user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

// To login existing database by email and password
app.post("/login",  async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid email");
    }
    const isPasswordValid = await user.validatePasswords(password)

    if (isPasswordValid) {
      // create JWT token
      const token = await user.getJWT()
      res.cookie("token", token);
      res.send("Login successfully!!!");
    } else {
      throw new Error("Wrong Password");
    }
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

// To get profile by cookies
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user
    res.send(user);

  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.post("/sendConnectionRequest", userAuth,  async (req, res) =>{
  const user = req.user;
  res.send(user.firstName + " sent connection request")
})


connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is successfully lisening on port 3000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
