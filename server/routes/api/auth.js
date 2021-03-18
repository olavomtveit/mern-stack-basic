const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const config = require("config");
const User = require("../../models/User");

/*
 * @route  POST api/auth
 * @desc   Register user by a token
 * @access Private
 */
router.post(
  "/",
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

      const salts = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salts);

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

module.exports = router;
