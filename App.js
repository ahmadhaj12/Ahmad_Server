const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Api/routes/routes");

const app = express();
app.use(express.json());
app.use("/", Router);

// app.use(cors());
// app.use('/' , Routes)

const mongooseURL = "mongodb+srv://ahmad:1821@cluster0.xfhxq.mongodb.net/";
mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.get("/app", (req, res) => {
  res.status(200).json({
    name: "batata",
    age: 15,
  });
}),
  app.post("/whatsmyname", (req, res) => {
    const { name, lastName } = req.body || { name: "", lastName: "" };
    if (name !== "a" && lastName !== "b") {
      res.status(403).json({
        message: "please enter your name and lastName",
      });
    }
    res.status(200).json({ auth: true });
  });

app.post("/agecheck", (req, res) => {
  const { name, age } = req.body || { name: "", age: "" };
  if (age >= 18) {
    res.status(200).json({ message: "welcome " + name });

    return;
  }
  res.status(500).json({
    message: name + " too young",
  });
});

app.post("/login", (req, res) => {
  const { name, password } = req.body || { name: "", password: "" };
  if (password == "a1a8a2a1" && name == "ahmad") {
    res.status(200).json({ message: "success" });
  } else {
    res.status(403).json({
      message: "the name or password not correct",
    });
  }
});


module.exports = app;
