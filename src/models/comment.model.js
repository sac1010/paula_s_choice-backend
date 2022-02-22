const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    userId:{Type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
        },
    productId:{Type:mongoose.Schema.Types.ObjectId,
          ref:"product"          
        },
    body:{Type:String, required:true}
},{

versionKey:false,
timestamps:true


})


module.exports = mongoose.model("review", reviewSchema)