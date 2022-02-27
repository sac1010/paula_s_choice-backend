document.querySelector("#Rmyform").addEventListener("submit",addresspart)
  var data=JSON.parse(localStorage.getItem("addressdata"))||[];

//    var button = document.querySelector("#btns").addEventListener("click",function(){
//        window.location.href="/Payment"
//    })
  
function addresspart(event){
    event.preventDefault();
     
     const firstname=document.querySelector("#fname").value
     const lastname=document.querySelector("#lname").value
     const country=document.querySelector("#country").value
     const StreetAdd=document.querySelector("#StreetAdd").value;
     const city=document.querySelector("#City").value
     const state=document.querySelector("#state").value
     const pin=document.querySelector("#pin").value
     const phone=document.querySelector("#phone").value

    //  console.log(email,firstname,lastname,country,address,city,state,pin,phone)
    // console.log("here");
    let obj={
         
         
        firstname, 
        lastname ,
        country ,
        StreetAdd ,
        city ,
        state ,
        pin ,
        phone ,
       
    };
    for (k in  obj) {
        if ( obj[k].length === 0) {
          alert("Please fill all feilds");
          return;
        }
      }
      window.location.href = '/Payment';
}


localStorage.setItem("addressdata",JSON.stringify(data))



//code for cart details
let userDetails = JSON.parse(localStorage.getItem("userInfo")) || null
let userId = userDetails.user._id
let cartObj


async function getCart(){
    try{
        let response= await fetch(`http://localhost:2345/cart/${userId}`)
         cartObj = await response.json();
       let cartData = cartObj.products
       console.log(cartData)
       document.getElementById("cartNum").innerText = `${cartData.length} items`
        displayCart(cartData)
    }
    catch(e){
        console.log("e:",e)
    }
}

getCart()




let subtotal = JSON.parse(localStorage.getItem("subTotal"))
let estTotal = JSON.parse(localStorage.getItem("estTotal"))
let shipping = estTotal-subtotal
document.getElementById("subtotal").innerText = `$${subtotal}`
document.getElementById("estTotal").innerText = `$${estTotal}`
document.getElementById("estTotal1").innerText = `$${estTotal}`
document.getElementById("shipping").innerText = `$${shipping}`

function displayCart(data){
data.forEach(elem => {
   let mainDiv =  document.createElement("div")
   let hr = document.createElement("hr")
   let img = document.createElement("img")
   let mix =document.createElement("div");
   let price = document.createElement("div");
   img.src = elem.productId.img
   price.innerText = elem.productId.price;
   let title = document.createElement("div");
   let size = document.createElement("div");
   let qty = document.createElement("div");


   title.innerText = elem.productId.about
    qty.innerText = `qty: ${elem.productId.qty || 1}`;
    size.innerText = "size: "+ Math.ceil(Math.random()*7)+" "+"oz"
   mix.append(title, size, qty)
   mainDiv.append(img, mix, price)
   document.getElementById("scontainer").append(hr, mainDiv)
});
}