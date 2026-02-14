const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");

// Express can’t read JSON by default, This line converts JSON → JavaScript object
app.use(express.json());

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
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid email");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.send("Login successfully!!!");
    } else {
      throw new Error("Wrong Password");
    }
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

// To get one user from database
app.get("/user", async (req, res) => {
  const userEmail = req.query.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    res.send(user);
  } catch (err) {
    res.status(400).send("Error saving the user");
  }
});

// To get all the user from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// To delete the user by Id
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// To Update the use fields
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  console.log(data);
  try {
    const ALLOWED_UPDATES = [
      "userId",
      "photoUrl",
      "about",
      "gender",
      "skills",
      "age",
    ];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k),
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 3) {
      throw new Error("skills cannat be more than 3");
    }
    await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true, //
    });
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Update failed" + err.message);
  }
});

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
