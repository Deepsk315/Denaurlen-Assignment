const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [5, "Name should have more than 4 characters"],
    },
    username: {
      type: String,
      required: [true, "Please Enter Your Username"],
      unique: true,
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [5, "Name should have more than 4 characters"],
    },
    netcoins: {
      type: Number,
      default: 0,
    },
    grosscoins: {
      type: Number,
      default: 2100,
    },
  },
  {
    timestamps: true,
  }
);

//JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);
