const Save = require("../models/saveForLater.model")
const Cart = require("../models/cart.model")
const express = require("express")
const router = express.Router()


//some requests doesn't work properly as of now (it has to be checked)
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

router.post("/moveToCart", async(req, res)=>{
    let userId = req.body.userId
    let productId = req.body.products[0].productId
    try{

//to remove the product from the saved items in the database
        let saved = await Save.findOne({userId:{$eq:userId}}).lean().exec()
        let products = saved.products
        for(let i=0; i<products.length; i++){
            if(products[i].productId==productId){
               products.splice(i, 1)
               saved = await Save.findOneAndUpdate({userId}, {products}, {new:true}).lean().exec()
            }
        } 


        
     //to add the product back to the cart
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

router.delete("", async(req, res)=>{
    try{
        let userId = req.body.userId
        let productId = req.body.productId
       let saved = await Save.findOne({userId:{$eq:userId}}).lean().exec()
       let products = saved.products
       for(let i=0; i<products.length; i++){
           if(products[i].productId==productId){
              products.splice(i, 1)
              saved = await Save.findOneAndUpdate({userId}, {products}, {new:true}).lean().exec()
              console.log(cart)
              return res.send(saved)
           }
       }  
     
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