const mongoose = require("mongoose");
const validator = require("validator")

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
      // This unique check only work when we will create an new object. If I am trying to update existing data this will not work for that.
      // will have to enable it to run for update also
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
        if(!validator.isEmail(value)){
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
userSchema.index({ emailId: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);
