// import cors from "cors";
// import * as dotenv from "dotenv";
require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.CONNECTION_URL;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connect to mongoose successfully");
  });
};
module.exports = connectToMongo;

// const CONNECTION_URL = process.env.CONNECTION_URL;

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(
//     "mongodb+srv://nikhilkumarsingh7174:gRpdGk4QbNc5e@cluster01.drckdar.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
//   )
//   .catch((error) => console.log("some error", error));
