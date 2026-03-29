const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

// To get profile by cookies
profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// To edit user
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if(!validateEditProfileData(req)){
      throw new Error("Invalid Edit Request")
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key)=> (loggedInUser[key] = req.body[key]))
    await loggedInUser.save()

    res.send(`${loggedInUser.firstName}, Your profile updated successfully!!!`)

  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

module.exports = profileRouter;
