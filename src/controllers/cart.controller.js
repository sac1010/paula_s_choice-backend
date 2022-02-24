const express = require("express");
const Cart = require("../models/cart.model")
const router = express.Router()

router.post("/", async(req, res)=>{
    let userId = req.body.userId
    try{
    let cart = await Cart.findOne({userId}).lean().exec() 
        //checks if cart already exists for the user
    if(cart){
        let products = cart.products
        //check if the product already exists in the cart if then increse the quantity
        for(let i=0; i<products.length; i++){
            if(products[i].productId==req.body.products[0].productId){
               products[i].quantity++
               cart = await Cart.findOneAndUpdate({userId}, {products}, {new:true}).lean().exec()
               console.log(cart)
               return res.send(cart)
            }
        }
        //product not present in cart, hence pushing the product and updating in database
        products.push(req.body.products[0])
        cart = await Cart.findOneAndUpdate({userId}, {products}, {new:true}).lean().exec()
        console.log(cart)
        return res.send(cart)

    }
    else{
        //cart doesnt exist for user, hence crating a new cart
        const newCart = await Cart.create(req.body)
        res.status(201).send(newCart)
    }
    }
     catch(e){
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

router.delete("/", async(req, res)=>{
    try{
        let userId = req.body.userId
        let productId = req.body.productId
       let cart = await Cart.findOne({userId:{$eq:userId}}).lean().exec()
       let products = cart.products
       for(let i=0; i<products.length; i++){
           if(products[i].productId==productId){
              products.splice(i, 1)
              cart = await Cart.findOneAndUpdate({userId}, {products}, {new:true}).lean().exec()
              console.log(cart)
              return res.send(cart)
           }
       }  
     
    }catch(e){
        res.status(500).send(e.message)
    }

})

module.exports = router 