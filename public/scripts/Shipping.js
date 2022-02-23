document.querySelector("#Rmyform").addEventListener("submit",addresspart)
  var data=JSON.parse(localStorage.getItem("addressdata"))||[];

   var button = document.querySelector("#btns").addEventListener("click",function(){
       window.location.href="Payment.html"
   })
  
function addresspart(event){
    event.preventDefault();
     
    var firstname=document.querySelector("#fname").value
    var lastname=document.querySelector("#lname").value
    var country=document.querySelector("#country").value
    var StreetAdd=document.querySelector("#StreetAdd").value;
    var city=document.querySelector("#City").value
    var state=document.querySelector("#state").value
    var pin=document.querySelector("#pin").value
    var phone=document.querySelector("#phone").value

    //  console.log(email,firstname,lastname,country,address,city,state,pin,phone)
    // console.log("here");
    var obj={
         
         
        firstname:firstname,
        lastname:lastname,
        country:country,
        StreetAdd:StreetAdd,
        city:city,
        state:state,
        pin:pin,
        phone:phone,
       
    };
      data.push(obj)
     console.log(obj)
     localStorage.setItem("addressdata",JSON.stringify(data))
    //   window.location.href="order.html";
}


//code for cart details
let cartData = JSON.parse(localStorage.getItem("cartData"))  || []
console.log(cartData)


displayCart(cartData)

let subtotal = JSON.parse(localStorage.getItem("subTotal"))
let estTotal = JSON.parse(localStorage.getItem("estTotal"))
let shipping = estTotal-subtotal
document.getElementById("subtotal").innerText = `$${subtotal}`
document.getElementById("estTotal").innerText = `$${estTotal}`
document.getElementById("estTotal1").innerText = `$${estTotal}`
document.getElementById("shipping").innerText = `$${shipping}`
document.getElementById("cartNum").innerText = `${cartData.length} items`
function displayCart(data){
data.forEach(elem => {
   let mainDiv =  document.createElement("div")
   let hr = document.createElement("hr")
   let img = document.createElement("img")
   let mix =document.createElement("div");
   let price = document.createElement("div");
   img.src = elem.img
   price.innerText = elem.price;
   let title = document.createElement("div");
   let size = document.createElement("div");
   let qty = document.createElement("div");


   title.innerText = elem.about
    qty.innerText = `qty: ${elem.qty || 1}`;
    size.innerText = "size: "+ Math.ceil(Math.random()*7)+" "+"oz"
   mix.append(title, size, qty)
   mainDiv.append(img, mix, price)
   document.getElementById("scontainer").append(hr, mainDiv)
});
}