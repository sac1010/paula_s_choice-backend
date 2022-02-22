const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
        },
    productId:{type:mongoose.Schema.Types.ObjectId,
          ref:"product"          
        },
    body:{type:String, required:true}
},{

versionKey:false,
timestamps:true


})


module.exports = mongoose.model("review", reviewSchema)