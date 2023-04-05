const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/myNotes";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connect to mongoose successfully");
  });
};
module.exports = connectToMongo;
