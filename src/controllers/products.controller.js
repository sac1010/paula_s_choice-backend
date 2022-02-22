const express = require("express")
const Product = require("../models/products.model")
const router = express.Router()

router.get("/", async(req, res)=>{
    try{
       const filter = {}
       if(req.query.type){
           filter.name = {$eq:req.query.type}
       }
       const page = req.query.page || 1
       const size = 12
       const products = await Product.find(filter).skip((page-1)*size).limit(size).lean().exec()
       res.status(200).send(products)
    }catch(e){
        res.status(500).send(e.message)
    }

})


module.exports = router 