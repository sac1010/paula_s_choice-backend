const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb+srv://anushka:anushka_123@cluster0.tjxi2.mongodb.net/paula_data?retryWrites=true&w=majority")
}

module.exports = connect