document.querySelector("#Rmyform").addEventListener("submit",addorder)
//var orderdata=JSON.parse(localStorage.getItem("paymentdata"))||[]
function addorder(event){
    
    // event.preventDefault()
     
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
    
      removeItems()
    
    
      window.location.href = "/Review";
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
    
}
async function removeItems() {

    const userObj = JSON.parse(localStorage.getItem("token"));
    const userId = userObj.id;
  
    // console.log(userId);
    // console.log(prodId);
  
    const result = await fetch("/cart/removeitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId
      }),
    }).then((res) => res.json());
}

//code for cart details.............................................................................................................
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
 