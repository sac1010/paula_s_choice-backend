const express= require("express")
const connect = require("./configs/db")
const cors = require("cors")
const path = require("path")
const cartController= require("./controllers/cart.controller")
const productsController = require("./controllers/products.controller")
const commentController = require("./controllers/comment.controller")
const {register,login} = require("../src/controllers/auth.controller")
const ShippingController = require("./controllers/Shipping.controller");
const paymentController = require("./controllers/payment.controller");
const saveForLaterController = require("./controllers/saveLater.controller")
const res = require("express/lib/response")

// Create the express app using middleware
const app = express()
app.use(express.json())
// Create the routes or router handlers
app.use(cors())

app.use("/products", productsController)
app.use("/cart", cartController)
app.use("/comment", commentController)
app.post("/register",register)
app.post("/login",login)
app.use("/Shipping", ShippingController);
app.use("/payment", paymentController);
app.use("/saveForLater", saveForLaterController)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));




// Create the views part of the application
// app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.render("ejs/index.ejs")
})

app.get("/products_data", (req, res) => {
    res.render("ejs/products_data.ejs")
})

app.get("/product_individual", (req, res) => {
    res.render("ejs/product_individual.ejs")
})

app.get("/about", (req, res) => {
    res.render("ejs/about.ejs")
})
app.get("/beautyBegins", (req, res) => {
    res.render("ejs/beautyBegins.ejs")
})
app.get("/cart", (req, res) => {
    res.render("ejs/cart.ejs")
})
app.get("/Complete", (req, res) => {
    res.render("ejs/Complete.ejs")
})
app.get("/Covid-19", (req, res) => {
    res.render("ejs/Covid-19.ejs")
})
app.get("/handling", (req, res) => {
    res.render("ejs/handling.ejs")
})
app.get("/moisturizers", (req, res) => {
    res.render("ejs/moisturizers.ejs")
})
app.get("/navbarindex", (req, res) => {
    res.render("ejs/navbarindex.ejs")
})
app.get("/Payment", (req, res) => {
    res.render("ejs/Payment.ejs")
})
app.get("/philo", (req, res) => {
    res.render("ejs/philo.ejs")
})
app.get("/quiz", (req, res) => {
    res.render("ejs/quiz.ejs")
})
app.get("/recycle", (req, res) => {
    res.render("ejs/recycle.ejs")
})
app.get("/Review", (req, res) => {
    res.render("ejs/Review.ejs")
})
app.get("/Shipping", (req, res) => {
    res.render("ejs/Shipping.ejs")
})
app.get("/test", (req, res) => {
    res.render("ejs/test.ejs")
})
app.get("/unit3Project", (req, res) => {
    res.render("ejs/unit3Project.ejs")
})
app.get("/whats_new", (req, res) => {
    res.render("ejs/whats_new.ejs")
})
app.get("/xyz", (req, res) => {
    res.render("ejs/xyz.ejs")
})



app.listen(2345, async()=>{
    try{
        await connect()
        console.log("listening on port 2345")
    }catch(e){
        console.log(e.message)
    }
    
}) 