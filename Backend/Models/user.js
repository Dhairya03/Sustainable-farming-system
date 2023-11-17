const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  region: String,
  landSize: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;