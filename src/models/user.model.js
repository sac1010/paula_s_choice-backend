const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email : {type:String, required:false, unique:true},
    password : {type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true}
}, {
versionKey:false,
timestamps:true

})




module.exports = mongoose.model("user", UserSchema)
