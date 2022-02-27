const express = require("express");
const { findByIdAndDelete, deleteMany } = require("../models/cart.model");

const router = express.Router();
const Products= require("../models/products.model")
router.get("/", async (req, res) => {
  return res.render("ejs/payment", {});
});

module.exports = router;

router.get("/process", async (req, res) => {
  return res.render("ejs/Complete");
});

router.delete("/process", async (req, res) => {
  try{
    const product =await Products.deleteMany(req.body._id)
    return res.render("ejs/Complete");
  }
  catch(err){
    return res.status(400).send(user)
  }
  
});

