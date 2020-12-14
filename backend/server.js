const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const http = require('http');
const socketio = require('socket.io');
const router = require('./router');
const app = express();
const User = require("./models/user")
const server = http.Server(app);



const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const { nextTick } = require("process");


const io = socketio(server);

app.listen(process.env.PORT || 4000, () => console.log(`Server has started.`));


app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to Chat Room "${user.room}."` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/soulmate",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log("Mongoose is Connected");
  }
);




// mongoose.connect(
//   "mongodb+srv://user:user@cluster0.bp2cl.mongodb.net/solemate?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("Mongoose is Connected");
//   }
// );

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
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig'), (passport);
passport.use(new LocalStrategy(User.authenticate()));


//Routes:
app.post("/login", (req, res, next) => {
  console.log("checkingDB", req.body)
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn; (user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated")
        console.log(req.user);
      })
    } console.log (req,user)
  }) 
    (req, res, next)
});



app.post("/register", (req, res) => {
  console.log("add req",req.body)
  User.findOne({ username: req.body.username }, async (err, doc) => {
   
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) { 
      
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        age: req.body.age,
        // picture: userPicture,
        activities: req.body.activities,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.post("/login", (req, res) => {
    res.send(req.user);
});

app.post("/User", (req, res) => {
  res.send(req, user);
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
//
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
