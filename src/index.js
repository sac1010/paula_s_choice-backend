const express= require("express")
const connect = require("./configs/db")
const cors = require("cors")
const cartController= require("./controllers/cart.controller")
const productsController = require("./controllers/products.controller")
const commentController = require("./controllers/comment.controller")
const {register,login} = require("../src/controllers/auth.controller")
const ShippingController = require("./controllers/Shipping.controller");
const paymentController = require("./controllers/payment.controller");
const saveForLaterController = require("./controllers/saveLater.controller")
const app = express()

// Create the views part of the application
//app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");






// Create the routes or router handlers
app.use(cors())
app.use(express.json())
app.use("/products", productsController)
app.use("/cart", cartController)
app.use("/comment", commentController)
app.post("/register",register)
app.post("/login",login)
app.use("/Shipping", ShippingController);
app.use("/payment", paymentController);
// app.use("/saveForLater", saveForLaterController)

app.listen(2345, async()=>{
    try{
        await connect()
        console.log("listening on port 2345")
    }catch(e){
        console.log(e.message)
    }
    
}) 