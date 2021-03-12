const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

/*
 * @route  GET api/users
 * @desc   Get all registered users
 * @access Private
 */
router.get("/", auth, async (req, res) => {
  try {
    let users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
