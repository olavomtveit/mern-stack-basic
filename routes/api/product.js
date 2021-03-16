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
router.post(
  "/",
  auth,
  body("title").notEmpty().isLength({ min: 3 }),
  body("description").notEmpty().isLength({ min: 3 }),
  body("price").isNumeric(),
  body("imageUrl").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, price, imageUrl } = req.body;

    try {
      product = new Product({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
      });

      await product.save();
      res.json({ message: "Product added successfully." });
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = router;
