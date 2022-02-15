// models/User.model.js

const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    content: {
      type: String,
    },
    creatorId: {
      type: {String},
      required: [true, "Email is required."],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
    },
    picPath: {
      type: String,
      default: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png"
    },
    picName: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Post", postSchema);
