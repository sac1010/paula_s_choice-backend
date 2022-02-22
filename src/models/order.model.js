const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
products:[{Type:mongoose.Schema.Types.ObjectId,
        ref:"product"          
}],
userId:{Type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
    }

},{

versionKey:false,
timestamps:true


})


module.exports = mongoose.model("order", orderSchema)
