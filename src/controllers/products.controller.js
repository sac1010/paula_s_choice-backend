const express = require("express")
const Product = require("../models/products.model")
const router = express.Router()

router.get("/", async(req, res)=>{
    try{
       const products = await Product.find().lean().exec()
       res.status(200).send(products)
    }catch(e){
        res.status(500).send("wrong")
    }

})

router.patch("/", async(req, res)=>{
    try{
       const products = await Product.updateMany()
       res.status(200).send(products)
    }catch(e){
        res.status(500).send("wrong")
    }

})



module.exports = router 