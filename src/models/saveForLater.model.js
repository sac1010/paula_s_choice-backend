const mongoose = require("mongoose")

const saveSchema = mongoose.Schema({
    userId:{Type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
        },
    products:[{Type:mongoose.Schema.Types.ObjectId,
          ref:"product"          
}]
},{

versionKey:false,
timestamps:true


})


module.exports = mongoose.model("save", saveSchema)
