const express = require("express");
const connectDB = require("./config/connectDB");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const config = require("config");
const auth = require("./middleware/auth");

// Schemas
const User = require("./models/User");

const app = express();

connectDB();

// Middleware
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello");
});

app.post(
  "/users",
  body("firstName").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ message: "User already exists" }] });
      }

      user = new User({
        firstName: firstName,
        email: email,
        password: password,
      });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("secretToken"),
        {
          expiresIn: 36000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );

      await user.save();
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

app.get("/users", auth, async (reg, res) => {
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
