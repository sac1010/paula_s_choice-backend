const express= require("express")
const connect = require("./configs/db")
const productsController = require("./controllers/products.controller")
const app = express()

app.use(express.json())
app.use("/products", productsController)


app.listen(2345, async()=>{
    try{
        await connect()
        console.log("listening on port 2345")
    }catch(e){
        console.log(e.message)
    }
    
}) 