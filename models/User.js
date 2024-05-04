const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Please enter your fullname"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minlength: [6, "password must be of 6 characters"],
      select: false,
    },
    phone: {
      type: String,
      required: [true, "please enter your phone number"],
    },
    imageUrl: {
      type: String,
    },
    token: {
        type: String,
      },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);
UserSchema.path("email").validate((value) => {
  if (!value.includes("@")) {
    return "Please enter a valid email! 🔴";
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;