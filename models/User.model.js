// models/User.model.js

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."]
    },
    imgUrl: {
      type: String,
      default: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
