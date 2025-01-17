const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    minLength: 6,
  },
  username: {
    required: true,
    type: String,
    trim: true,
  },
  avatar: {
    type: String
  },
  karma: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;