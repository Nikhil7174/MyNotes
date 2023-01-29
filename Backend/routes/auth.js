const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create a User using: POST "/api/auth/". Dosen,t require Auth

router.get("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
