const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email : {type:String, required:false, unique:true},
    password : {type:String, required:false},
    profile : {type:String, required:true}
}, {
versionKey:false,
timestamps:true

})




module.exports = mongoose.model("User", UserSchema)
