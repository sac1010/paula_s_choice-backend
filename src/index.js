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

// Create the views part of the application
// app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.render("ejs/index.ejs")
})

app.get("/ejs", (req, res) => {
    res.render("ejs/products_data.ejs")
})

app.get("/ejs", (req, res) => {
    res.render("ejs/products_individual.ejs")
})

app.get("/ejs", (req, res) => {
    res.render("ejs/about.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/beautyBegins.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/cart.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/Complete.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/Covid-19.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/handling.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/moisturizer.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/navbarindex.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/Payment.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/philo.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/quiz.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/recycle.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/Review.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/Shipping.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/test.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/unit3Project.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/whats_new.ejs")
})
app.get("/ejs", (req, res) => {
    res.render("ejs/xyz.ejs")
})

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
app.use("/saveForLater", saveForLaterController)

app.listen(2345, async()=>{
    try{
        await connect()
        console.log("listening on port 2345")
    }catch(e){
        console.log(e.message)
    }
    
}) 