const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
        },
    products:[
        {
            productId:{type:mongoose.Schema.ObjectId,
            ref:"product"},
            quantity:{type:Number, min:1, max:5, required:false, default: 1}
        },
       
    ]
    
},{

versionKey:false,
timestamps:true


})


module.exports = mongoose.model("cart", cartSchema)
