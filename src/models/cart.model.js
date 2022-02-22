const {Schema, model} = require("mongoose")

const productSchema = new Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    rating:{type:String, required:true},
    product_type:{String, required:true},
    brand:{type:String, required:true},
    img1:{type:String, required:true},
    img2:{type:String, required:true},
    img3:{type:String, required:true},
    img4:{type:String, required:true},
    description:{type:String, required:true}
},{

versionKey:false,
timestamps:true


})


module.exports = model("cart", productSchema)
