const Save = require("../models/saveForLater.model")
const Cart = require("../models/cart.model")
const express = require("express")
const router = express.Router()


//post request doesn't work properly as of now (changes has to be made in the database)
router.post("/", async(req, res)=>{
    const productId = req.body.products[0].productId
    const userId = req.body.userId

    try{
    let cart = await Cart.findOne({userId}).lean().exec()
     products = cart.products
     
       const save = await Save.create(req.body)
       res.status(200).send(save)
    }catch(e){
        res.status(500).send(e.message)
    }

})

router.get("/:userId", async(req, res)=>{
    try{
        let userId = req.params.userId
       let savedProducts = await Save.find({userId:{$eq:userId}}).lean().exec()
       res.status(200).send(savedProducts)
    }catch(e){
        res.status(500).send(e.message)
    }

})

module.exports = router 