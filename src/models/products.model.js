const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    img:{type:String, required:true},
    name:{type:String, required:true},
    about:{type:String, required:true},
    price:{type:Number, required:true},
    reviews:{type:String, required:true},
    star1:{type:Number, required:true},
    desc:{type:String, required:true},
    point1:{type:String, required:true},
    point2:{type:String, required:true},
    point3:{type:String, required:true},
    point4:{type:String, required:true},
    why:{type:String, required:true},
    what:{type:String, required:true},
    how:{type:String, required:true},
    sideimg1:{type:String, required:true},
    sideimg2:{type:String, required:true},
    img22:{type:String, required:true},
    youtube:{type:String, required:true},
    star:{type:String, required:true},
},{

versionKey:false,
timestamps:true



})


module.exports = mongoose.model("product", productSchema)

  