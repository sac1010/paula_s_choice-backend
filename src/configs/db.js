const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb+srv://sac101:sac123@cluster0.g2o0e.mongodb.net/paula?retryWrites=true&w=majority")
}

module.exports = connect