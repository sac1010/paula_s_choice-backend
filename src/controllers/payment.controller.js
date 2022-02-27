const express = require("express");
const Cart = require("../models/cart.model")
const router = express.Router();

router.post("/", async(req, res)=>{
  userId = req.body.userId
  try{
<<<<<<< HEAD
    const items =await Products.deleteMany(req.body._id)
    return res.render("ejs/Complete");
  }
  catch(err){
    return res.status(400).send(items)
=======
    let cart = await Cart.findOneAndDelete({userId}).lean().exec() 
    res.status(200).send("deleted cart")
  }catch(e){
    res.status(500).send(e.message)
>>>>>>> 6bc1153ced196f065eb6247ed7d6a9f04e914a18
  }
 
  
})

module.exports = router

