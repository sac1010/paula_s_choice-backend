const mongoose = require("mongoose")

const UserSchema = new Schema({
    email : {type:String, required:false, unique:true},
    password : {type:String, required:false},
    img : {type:String, required:false}
}, {
versionKey:false,
timestamps:true

})




module.exports = mongoose.model("User", UserSchema)
