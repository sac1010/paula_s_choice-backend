const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  return res.render("ejs/payment", {});
});

module.exports = router;

router.get("/process", async (req, res) => {
  return res.render("ejs/Complete");
});