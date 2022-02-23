const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
products:[{type:mongoose.Schema.Types.ObjectId,
        ref:"product"          
}],
userId:{type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
    }

},{

versionKey:false,
timestamps:true


})


module.exports = mongoose.model("order", orderSchema)
