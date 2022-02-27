const express = require("express");
const Cart = require("../models/cart.model")
const router = express.Router();

router.post("/", async(req, res)=>{
  userId = req.body.userId
  try{
    let cart = await Cart.findOneAndDelete({userId}).lean().exec() 
    res.status(200).send("deleted cart")
  }catch(e){
    res.status(500).send(e.message)
  }
 
  
})

module.exports = router

