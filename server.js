const express = require("express");
const connectDB = require("./config/connectDB");
const { body, validationResult } = require("express-validator");

// Schemas
const User = require("./models/User");

const app = express();

connectDB();

// Middleware
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello");
});

app.post("/users", async (req, res) => {
  // validation

  try {
    const user = new User({
      firstName: req.firstName,
      email: req.email,
      password: req.password,
    });

    await user.save();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users", async (reg, res) => {
  try {
    let users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
