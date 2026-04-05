const express = require("express");
const authRouter = express.Router();
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/*
Line	            Purpose
1. require("express")	Get Express
2. express.Router()	Create route handler
3. module.exports	    Share it with other files
*/


// To signup user
authRouter.post("/signup", async (req, res) => {
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


// To login user
authRouter.post("/login",  async (req, res) => {
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

// To logout user
authRouter.post("/logout", async (req,res)=>{
    res.cookie("token", null), {
        expires: new Date(Date.now())
    }
    res.send("Logout successfully!!!");
} )

// to
const crypto = require("crypto");

authRouter.post("/forgot-password", async (req, res) => {
  try {
    const { emailId } = req.body;

    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;

    await user.save();

    res.send({ message: "Token generated", token });

  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

authRouter.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    user.password = passwordHash;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res.send("Password reset successful");

  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

module.exports = authRouter

