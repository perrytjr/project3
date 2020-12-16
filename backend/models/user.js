
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   age: Number,
//   activities: String,
//   picture: String
// });
// userSchema.plugin(passportLocalMongoose);
// const User = mongoose.model("User", userSchema);


// module.exports = User;


const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  activities: String,
  picture: String
});

module.exports = mongoose.model("User", user);

