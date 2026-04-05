const mongoose = require("mongoose");
const validator = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength : 3,
      maxLength : 20
    },
    lastName: {
      type: String,
      minLength : 3,
      maxLength : 20
    },
    emailId: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email address" + value)
        }
      }
    },
    password: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isStrongPassword(value)){
            throw new Error("Enter a strong password" + value)
        }
      }
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      // This validate function only work when we will create an new object. If I am trying to update existing data this will not work for that.
      // will have to enable it to run for update also
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    phoneNumber: {
      type: Number,
    },
    about: {
      type: String,
      default: "This is default description about user",
    },
    skills: {
      type: [String],
    },
    photoUrl: {
      type: String,
      default: "dummyPhotoUrl.com",
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid photo URL" + value)
        }
      }
    },
  },
  {
    timestamps: true,
  },


);

userSchema.methods.getJWT = async function () {
  const user = this

 const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$789", {expiresIn : "7d"});

 return token;
}

userSchema.methods.validatePasswords = async function (passwordInputByUser) {
  const user = this 
  const passwordHash = user.password

  const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash)

  return isPasswordValid
}

module.exports = mongoose.model("User", userSchema);
