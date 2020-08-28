const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
//const User = require("../models/user")
const app = express();

const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// mongoose.connect("mongodb+srv://simdog:simeon@cluster0.ttvse.mongodb.net/simdog?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// },
// () => {
//     console.log("Mongoose is Connected");
// }
// )

// //Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors({
//     origin: "http://localhost:3000", // <-- this is the location of the react app were connecting to
//     credentials: true
// }))
// app.use(session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(cookieParser("secretcode"));
// app.use(passport.initialize());
// app.use(passport.session());
// require("../passportConfig")(passport);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
