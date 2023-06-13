require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.CONNECTION_URL;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connect to mongoose successfully");
  });
};
module.exports = connectToMongo;
