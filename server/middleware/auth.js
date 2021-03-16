const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No Token, authorization denied" });
  }

  try {
    jwt.verify(token, config.get("secretToken"), (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Token is not valid " });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
