var alCart = JSON.parse(localStorage.getItem("addressdata"));


var arr = alCart[alCart.length-1];

console.log(arr);

var arr1 = [] ;
arr1.push(arr)
console.log(arr1)
// for(var i=0; i<alCart.length; i++){

    arr1.map (function(elem){
        console.log(elem)
        var h3=document.createElement("p");
        h3.textContent=elem.firstname+" "+elem .lastname;
        h3.style.fontWeight="blod";
        
        //console.log(h2)
        var p1 =document.createElement("p");
        p1.textContent=elem.streetAdd;
        p1.style.lineHeight="2";

        var p2 =document.createElement("p");
        p2.textContent=elem.city+","+elem.state;

        var p3 =document.createElement("p");
        p3.textContent=elem.state+"-"+elem.pin;

        var p4 =document.createElement("p");
        p4.textContent="Phone number"+" "+"-"+" "+elem.phone;
    
    
        document.querySelector("#addres").append(h3,p1,p2,p3,p4)
         
    
    })

// }

 