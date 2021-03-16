const mongoose = require("mongoose");
const config = require("config");
const dbConnect = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(`${dbConnect}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
