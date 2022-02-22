const express = require("express")
const Comment = require("../models/comment.model")
const router = express.Router()

router.post("/", async(req, res)=>{
    try{
       const comment = await Comment.create(req.body)
       res.status(200).send(comment)
    }catch(e){
        res.status(500).send(e.message)
    }

})

router.get("/:productId", async(req, res)=>{
    try{
        let productId = req.params.productId
       const comments = await Comment.find({productId:{$eq:productId}}).lean().exec()
       res.status(200).send(comments)
    }catch(e){
        res.status(500).send(e.message)
    }

})

module.exports = router 