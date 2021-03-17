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

/*
 * @route  GET api/users/:id
 * @desc   Get one user by ID
 * @access Private
 */
router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "user not found" });
  }
});

module.exports = router;
