const express = require("express");
const Image = require("../models/Image");

const router = express.Router();

router.post("/upload", async (req, res, next) => {
  return res.json({ message: "User Registered" });
});

module.exports = router;
