const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    email : {type:String, required:false, unique:true},
    password : {type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true}
}, {
versionKey:false,
timestamps:true

})

UserSchema.pre("save",function(next){
    if(! this.isModified("password")) return next()


    let hash = bcrypt.hashSync(this.password,8)
    this.password = hash
    return next()
})


UserSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}



module.exports = mongoose.model("user", UserSchema)
