//code for cart details
let userDetails = JSON.parse(localStorage.getItem("userInfo")) || null
let userId = userDetails.user._id
let cartObj



document.querySelector("#Rmyform").addEventListener("submit",addorder)
//var orderdata=JSON.parse(localStorage.getItem("paymentdata"))||[]
function addorder(event){
    
    event.preventDefault()
     
    const cardnumber=document.querySelector("#cardNo").value
    const date=document.querySelector("#expMonth").value
    const cvv=document.querySelector("#cvv").value

    let object = {
         
        cardnumber:cardnumber,
        date:date,
        cvv:cvv,
    };
    for (k in  object) {
        if ( object[k].length == 0) {
          alert("Please filled all feild");
          return;
        }
      }
    
     
    
    
      
    // if(cardnumber=="" || cardnumber.length!=16){
    //     alert("Error")
    // }
    // else if(cvv=="" || cvv.length!=3){
    //     alert("Error")
    // }
    // else{
        
    //     document.querySelector("#Rmyform").addEventListener("submit",function(){
    //         window.location.href="/Review";
    //     })
    // }
    // var object={
         
    //     cardnumber:cardnumber,
    //     date:date,
    //     cvv:cvv,
    // };
    // orderdata.push(object)
    // localStorage.setItem("paymentdata",JSON.stringify(orderdata))
    removeItems()
    window.location.href = '/Review';
    
}
async function removeItems() {
 try{
  const result = await fetch("http://localhost:2345/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId
    }),
  })
 }catch(e){
   console.log(e.message)
 }
}





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
 