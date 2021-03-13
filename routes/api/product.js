const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Product = require("../../models/Product");

/*
 * @route  POST api/product
 * @desc   Add a product
 * @access Private
 */
router.post("/", async (req, res) => {
  console.log(">>>", req.body);

  const { title, description, price, imageUrl } = req.body;

  try {
    product = new Product({
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    });

    await product.save();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
