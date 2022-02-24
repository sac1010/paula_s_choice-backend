const Save = require("../models/saveForLater.model")
const Cart = require("../models/cart.model")
const express = require("express")
const router = express.Router()


//post request doesn't work properly as of now (it has to be checked)
router.post("/", async(req, res)=>{
    const productId = req.body.products[0].productId
    const userId = req.body.userId

    try{
    let cart = await Cart.findOne({userId}).lean().exec()
     products = cart.products
     for(let i=0; i<products.length; i++){
         if(productId == products[i].productId){
             products.splice(i, 1)
             cart = await Cart.findOneAndUpdate({userId}, {products}, {new:true}).lean().exec()
         }
     }
       const save = await Save.create(req.body)
       res.status(200).send(save)
    }catch(e){
        res.status(500).send(e.message)
    }

})

router.post("/saveToCart", async(req, res)=>{

})

router.delete("", async(req, res)=>{
    
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