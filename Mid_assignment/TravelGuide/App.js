//declaration
const express = require("express");
const bodyParser = require("body-parser");
const exSession = require("express-session");
const cookieParser = require("cookie-parser");
const login = require("./controller/login");
const signup = require("./controller/signup");
const logout = require("./controller/logout");
const generalUser = require("./controller/generalUser");
const admin = require("./controller/admin");
const scout = require("./controller/scout");

const expressValidator = require("express-validator");
const app = express();

//config
app.set("view engine", "ejs");

//middleware
app.use("/assets", express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  exSession({
    secret: "my secret value",
    saveUninitialized: true,
    resave: false,
  })
);
app.use(cookieParser());
app.use(expressValidator());

app.use("/login", login);
app.use("/signup", signup);
app.use("/logout", logout);
app.use("/generalUser", generalUser);
app.use("/scout", scout);
app.use("/admin", admin);


//route
app.get("/", (req, res) => {
  res.redirect("/login");
});

//server startup
app.listen(4000, (error) => {
  console.log("express server started at 4000...");
});
