const mongoose = require("mongoose");
const db = process.env.DATABASE;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("connect db success");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
