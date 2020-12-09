const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const user = new mongoose.Schema({
  username: String,
  password: String
});

user.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;
