const express = require("express")
const Cart = require("../models/cart.model")
const router = express.Router()

router.post("/", async(req, res)=>{
    try{
       const cart = await Cart.create(req.body)
       res.status(200).send(cart)
    }catch(e){
        res.status(500).send(e.message)
    }

})

router.get("/:userId", async(req, res)=>{
    try{
        let userId = req.params.userId
       const cart = await Cart.findOne({userId:{$eq:userId}}).lean().exec()
       res.status(200).send(cart)
    }catch(e){
        res.status(500).send(e.message)
    }

})

module.exports = router 