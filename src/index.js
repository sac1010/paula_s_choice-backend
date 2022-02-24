const express= require("express")
const connect = require("./configs/db")
const cartController= require("./controllers/cart.controller")
const productsController = require("./controllers/products.controller")
const commentController = require("./controllers/comment.controller")
const {register,login} = require("../src/controllers/auth.controller")
const paymentController = require("./controllers/payment.controller");
const app = express()

app.use(express.json())
app.use("/products", productsController)
app.use("/cart", cartController)
app.use("/comment", commentController)
app.post("/register",register)
app.post("/login",login)
app.use("/payment", paymentController);

app.listen(2345, async()=>{
    try{
        await connect()
        console.log("listening on port 2345")
    }catch(e){
        console.log(e.message)
    }
    
}) 