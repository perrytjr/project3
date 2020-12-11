const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const User = require("./models/user")

mongoose.connect(
  "mongodb+srv://user:user@cluster0.bp2cl.mongodb.net/solemate?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is Connected");
  }
);

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize())
app.use(passport.session)
require('./passportConfig')(passport )


//Routes:
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if(!user) res.send("No User Exists");
      else{
          req.logIn(user, err) => {
              if (err) throw err;
              res.send("Successfully Authenticated")
              console.log(req.user);
          }
      }
  }) 
  (req, res, next)
});

app.post("/register", (req, res) => {
  user.findOne({username: req.body.username}, (err,doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc){
          const hashPassword = await bcrypt.hash(req.body.password, 10);
          const newUser = new User({
              username: req.body.username,
              password: hashPassword,
          });
          await newUser.save();
          res.send("User Created")
      }
  });
});

app.post("/user", (req, res) => {
  res.send(req,user)
});

//Start the Server
app.listen(4000, () => {
  console.log("Server Has Started");
});
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
// const passport = require('passport');
// const passportLocal = require('passport-local').Strategy;
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcryptjs');
// const session = require('express-session');
// const bodyParser = require('body-parser');

// const app = express();

// //Middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors({
//     origin: "https://localhost:3000",
//     credentials: true,
// }))

// app.use(session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: true
// }))

// app.use(cookieParser("secretcode"))

// //Routes:
// app.post("/login", (req, res) => {
//     console.log(req.body);
// })

// app.post("/register", (req, res) => {
//     console.log(req.body);
// })

// app.post("/user", (req, res) => {
//     console.log(req.body);
// })


// //Start the Server
// app.listen(4000, () => {
//     console.log('Server Has Started');
// })

// var express = require('express'),
//   mongoose = require('mongoose'),
//   db = require('./models'),
//   controllers = require('./controllers'),
//   bodyParser = require('body-parser'),
//   vegetable = require('./models/vegetable'),
//   cookieParser = require('cookie-parser'),
//   session = require('express-session'),
//   passport = require('passport'),
//   LocalStrategy = require('passport-local').Strategy;

//  const PORT = process.env.PORT || 3001;

//  var app = express(),
//   router = express.Router();

// var User = db.User;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // // Use apiRoutes
// // app.use("/api", apiRoutes);

// //to config API to use body body-parser and look for JSON in req.body
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

// app.use(cookieParser());
// app.use(session({
//   secret: 'spinachsecret007', // change this!
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// //passport config
// passport.use(new LocalStrategy(db.User.authenticate()));
// passport.serializeUser(db.User.serializeUser());
// passport.deserializeUser(db.User.deserializeUser());

// //Prevent CORS errors
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//   //Remove caching
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });

// //auth routes
// app.get('/api/users', controllers.user.index);
// app.delete('/api/users/:user_id',controllers.user.destroy);
// app.post('/signup', function signup(req, res) {
//   console.log(`${req.body.username} ${req.body.password}`);
//   User.register(new User({ username: req.body.username }), req.body.password,
//     function (err, newUser) {
//       passport.authenticate('local')(req, res, function() {
//         res.send(newUser);
//       });
//     }
//   )});
// app.post('/login', passport.authenticate('local'), function (req, res) {
//   console.log(JSON.stringify(req.user));
//   res.send(req.user);
// });
// app.get('/logout', function (req, res) {
//   console.log("BEFORE logout", req);
//   req.logout();
//   res.send(req);
//   console.log("AFTER logout", req);
// });

// app.listen(PORT, function() {
//   console.log(`api running on ${PORT}`);
// });

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// };

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/soulmate",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );
