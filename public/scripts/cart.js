



let cartData =JSON.parse(localStorage.getItem("cartData")) || []
var subtotal
var estTotal
displayCart(cartData)
function displayCart(cartData){
    if(cartData.length===0){
        document.getElementById("main").style.display = "none"
        document.getElementById("emptyAlert").style.display = "block"
    }
    else{
        document.getElementById("main").style.display = "flex"
        document.getElementById("emptyAlert").style.display = "none"
    }
    document.getElementById("container").innerText = ""
    document.getElementById("cartNum").innerText = `${cartData.length} items`;
    document.getElementById("dcount").innerText = cartData.length
     subtotal = 0;
    for(let i=0; i< cartData.length; i++){
        let num = cartData[i].price.split("")
        num.splice(0,1)
        num = +num.join("")
        subtotal = subtotal+num*(cartData[i].qty||1)
    }
     estTotal
    if(subtotal>=49){
       estTotal = subtotal 
       document.getElementById("shipping").innerText = `$0 (free shipping)`
    }
    else{
        document.getElementById("shipping").innerText = `$5`
     estTotal = subtotal+5
    }
    document.getElementById("price").innerText = `$${subtotal}`
    document.getElementById("total").innerText = `$${estTotal}`
cartData.map(function(elem, index){
    let hr = document.createElement("hr");
    let mainDiv = document.createElement("div");
    let title = document.createElement("div");
    let titleAndPrice = document.createElement("div");
    let img = document.createElement("img");
    let price = document.createElement("div");
    let size = document.createElement("div");
    let qty = document.createElement("select")
    let total = document.createElement("div");
    let remove = document.createElement("div")
    let save = document.createElement("div");
    let mixDiv = document.createElement("div");
    let top = document.createElement("div")
    let bottom = document.createElement("div")
    top.className = "flex"
    bottom.className = "bottom"
    
    save.innerText = "  save for later"
    remove.innerText = `remove | ` 
    qty.innerHTML = `      <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>`
    let num = elem.price.split("")
    num.splice(0,1)                                                   
    num = +num.join("")
    qty.value = elem.qty || 1;
    title.innerText  = elem.about
    size.innerText = Math.ceil(Math.random()*7)+" "+"oz";
    size.style.marginBottom="40px"
    total.innerText = `$${num*(elem.qty||1)}`
    img.src = elem.img;
    price.innerText = `$${num}`
    titleAndPrice.append(title, price)
    top.append(qty, total)
    bottom.append(remove, save)
    mixDiv.append(top, bottom)
    mainDiv.append(img, titleAndPrice, size, mixDiv)
    document.getElementById("container").append(hr,mainDiv)
    qty.addEventListener("change", function(){
        elem.qty = qty.value
        localStorage.setItem("cartData", JSON.stringify(cartData))
        total.innerText = `$${num*qty.value}`
        subtotal = 0
        for(let i=0; i< cartData.length; i++){
            let num = cartData[i].price.split("")
            num.splice(0,1)
            num = +num.join("")
            subtotal = subtotal+num*(cartData[i].qty||1)
        }
        if(subtotal>=49){
            estTotal = subtotal 
            document.getElementById("shipping").innerText = `$0 (free shipping)`
         }
         else{
             document.getElementById("shipping").innerText = `$5`
          estTotal = subtotal+5
         }
        
        document.getElementById("price").innerText = `$${subtotal}`
        document.getElementById("total").innerText = `$${estTotal}`
    })
    remove.addEventListener("click", function(index){
        cartData.splice(index, 1)
        localStorage.setItem("cartData", JSON.stringify(cartData))
        displayCart(cartData)
    })
    save.addEventListener("click", function(){
        let savedData =JSON.parse(localStorage.getItem("savedForLater")) || [];
        console.log(savedData)
        savedData.push(elem)
        localStorage.setItem("savedForLater", JSON.stringify(savedData))
        cartData.splice(index, 1)
        localStorage.setItem("cartData", JSON.stringify(cartData))
        displayCart(cartData)  
        alert("product saved") 
        displaySaved()     
    })
})
}
document.getElementById("coupon-apply").addEventListener("click", ()=>{
    let code = document.getElementById("coupon-code").value
    if(code=="masai30"){
        console.log("good")
        document.getElementById("coupon").innerText = `coupon code applied(30% off)`
        document.getElementById("total").style.textDecoration = "line-through"
        document.getElementById("discounted").innerText = `$${(0.70*subtotal).toFixed(2)}`
    }
    else{
        document.getElementById("coupon").innerText = `invalid code`
    }
})
displaySaved()
function displaySaved(){
    
    let savedData =JSON.parse(localStorage.getItem("savedForLater")) || []
    document.getElementById("savedItems").innerText = savedData.length
    if (savedData.length==0){
        document.getElementById("saved").innerText = "You have no saved products."
    }
    else{
        document.getElementById("saved").innerText = ""
        savedData.map(function(elem, index){
            let remove = document.createElement("div")
            let mainDiv = document.createElement("div")
            let title = document.createElement("div")
            let img = document.createElement("img")
            let add = document.createElement("button")
            let star = document.createElement("img")
            let price = document.createElement("div")
            price.innerText = elem.price
            star.src = elem.star
            star.style.width="100px"
            star.style.height="20px"
            remove.className = "removeBtn"
            img.src = elem.img;
            title.innerText = elem.about
            add.innerText = `ADD TO BAG`
            remove.innerText = `✕`
            mainDiv.append(remove,img, title, price, star, add)
            document.getElementById("saved").append(mainDiv)
            add.addEventListener("click", function(){
                cartData.push(elem)
                displayCart(cartData)
                savedData.splice(index, 1)
                localStorage.setItem("savedForLater", JSON.stringify(savedData))
                displaySaved()
            })

            remove.addEventListener("click", function(){
                savedData.splice(index, 1)
                localStorage.setItem("savedForLater", JSON.stringify(savedData))
                displaySaved();
            })
        })


        
    }
}

document.getElementById("estimate").addEventListener("click", ()=>{
    document.getElementById("zip").value = ""
    document.getElementById("zip").placeholder = `invalid zip code!`
    document.getElementById("zip").classList.add("err") 
})






// adding recommended products in cart page

var data=[
    {
        img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dw9c06758f/images/products/resist-10-percent-niacinamide-booster-7980-L.png?sw=360&sfrm=png",
        name:"BOOSTER",
        about:"10% Niacinamide Booster",
        price:"$46.00",
        reviews:"373",
        star1:4,
        desc:"This concentrated 10% niacinamide serum booster dramatically improves uneven skin tone and refines the appearance of pore size, skin texture and fine lines.",
        point1:"Promotes a brighter, younger-looking appearance",
        point2:"Niacinamide (vitamin B3) visibly minimizes pore size",
        point3:"Sheer, ultra-light liquid formula",
        point4:"Use alone or add to your moisturizer or serum",
        why:"10% Niacinamide Booster is the first concentrated 10% niacinamide formula blended with natural calming and superior hydrating ingredients to address the frustrating combination of enlarged pores plus visible signs of aging, such as: uneven skin tone, lack of radiance, rough surface skin texture, redness, and dryness. The results after only a few days will impress you.",
        what:"Niacinamide is a form of vitamin B3, which research has proven can reduce the appearance of enlarged pores, uneven skin tone, wrinkles, and dry skin. The light-as-water texture is designed to dramatically enhance your skincare while also providing soothing agents to promote visibly calm skin. Antioxidants and skin-replenishing ingredients make this product a multi-tasking must-have solution for all skin types.",
        how:"Dispense 2-3 drops into the palm of your hand and then apply to your face. Add a couple more drops if you will also be applying to your neck and chest. During the day, finish with a moisturizer with SPF 30 or greater. Can be applied under the eye area, avoiding the eye itself.",
        sideimg1:"https://m.media-amazon.com/images/S/aplus-media/sc/ce316567-0bd2-47ef-9197-2304907fe31d.__CR0,0,970,300_PT0_SX970_V1___.jpg",
        sideimg2:"https://m.media-amazon.com/images/S/aplus-media/sc/e2307bec-9bda-4a78-bb52-d894ee1274fd.__CR0,0,970,300_PT0_SX970_V1___.jpg",
        img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwc68f7b77/images/views/resist-10-percent-niacinamide-booster-7980-L-lifestyle1.png?sw=360&sfrm=jpg",
        youtube:"https://www.youtube.com/embed/d6dqtQ3dQ-k",
        star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjTzmXWUBWKS1oBgoWVDtzHXnfMGhbvjTzuVuMCBdvdmhHB9n4m8wv48KCAXG50tURw&usqp=CAU"
    },
    
    {
        img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/en_US/dw20b24468/images/products/skin-perfecting-8-percent-aha-gel-1900-L.png?sw=360&sfrm=png",
        name:"SKIN PERFECTING",
        about:"8% AHA Gel Exfoliant",
        price:"$32.00",
        reviews:"392",
        star1:4,
        desc:"An essential skincare routine replenishes moisture to combat dryness while refining the appearance of wrinkles and skin tone for a younger, revitalized-looking appearance.",
        point1:"Targets multiple signs of aging",
        point2:"Boost skin’s environmental defenses",
        point3:"2-week kit",
        point4:"Hydrating formulas",
        why:"SKIN PERFECTING 8% AHA Gel is a completely non-abrasive, leave-on exfoliant that gently and naturally helps shed built-up layers of dead skin, just like your skin did when you were younger. This unique formula revitalizes skin’s surface, creates noticeable radiance, smooths the appearance of wrinkles, and makes your skin look and feel remarkably soft. With ongoing use, it can help promote firmer-looking skin.This exfoliant has an optimal pH range of 3.5–3.9.",
        what:"Combines the exfoliating benefits of glycolic acid with a sheer weightless gel formula that provides long-lasting hydration and dramatically improves the smoothness of skin. It also contains skin-soothing plant extracts and antioxidants. You’ll experience a more even, brighter skin tone and a feeling of firmness.",
        how:"Apply once or twice daily after cleansing and toning. Apply a dime-sized amount over the entire face, avoiding direct contact with eyes and lips. Do not rinse. For daytime, follow with a broad-spectrum sunscreen rated SPF 30 or greater.  Sun Protection Advice When Using Any AHA Exfoliant: This product contains 8% glycolic acid, an ingredient that may increase your skin's sensitivity to the sun and the possibility of sunburn. Always apply a broad-spectrum sunscreen rated SPF 30 or greater every day. When outdoors, wear protective clothing whenever possible, seek shade, and avoid prolonged sun exposure.",
        sideimg1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABoCAMAAAAXdXPcAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
        sideimg2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABoCAMAAAAXdXPcAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
        img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/en_US/dw7b0eee90/images/views/skin-perfecting-8-percent-aha-gel-1900-L_swatch.png?sw=360&sfrm=png",
        youtube:"https://www.youtube.com/embed/3VXSQVyuepU",
        star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjTzmXWUBWKS1oBgoWVDtzHXnfMGhbvjTzuVuMCBdvdmhHB9n4m8wv48KCAXG50tURw&usqp=CAU"
    },
    {
        img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwf86ad70d/images/products/resist-anti-aging-eye-gel-2140-L.png?sw=360&sfrm=png",
        name:"RESIST",
        about:"Anti-Aging Eye Gel",
        price:"$35.00",
        reviews:"110",
        star1:4,
        desc:"A light, refreshing gel that addresses multiple signs of aging, hydrates, minimizes fine lines and visibly brightens to eliminate signs of fatigue.",
        point1:"Refreshes & renews delicate skin around the eye", 
        point2:"Contains peptides, hyaluronic acid & licoric",    
        point3:"Cooling applicator soothes puffiness on contact",
        point4:"Use twice daily as needed",
        why:"A unique blend of multi-functional ingredients visibly brighten, hydrate, minimize the appearance of fine lines, and reduce signs of fatigue around the eye area.",
        what:"Antioxidant-rich plant extracts sooth skin and protect from environmental stress, including the visible effects of pollution.",
        how:"Using applicator or finger, gently massage a small amount (no larger than the size of a pea) around the eye area. For daytime, follow with a broad-spectrum sunscreen rated SPF 30 or greater.",
        sideimg1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABoCAMAAAAXdXPcAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
        sideimg2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABoCAMAAAAXdXPcAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
        img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dw7db27581/images/views/resist-anti-aging-eye-gel-2140-L_swatch.png?sw=360&sfrm=jpg",
        youtube:"https://www.youtube.com/embed/0nNG2PZTGu8",
        star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjTzmXWUBWKS1oBgoWVDtzHXnfMGhbvjTzuVuMCBdvdmhHB9n4m8wv48KCAXG50tURw&usqp=CAU"
    },
    {
        img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/en_US/dwb89f098f/images/products/resist-super-antioxidant-concentrate-serum-7640-L.png?sw=360&sfrm=png",
        name:"RESIST",
        about:"Super Antioxidant Serum",
        price:"$41.00",
        reviews:"489",
        star1:4,
        desc:"A hydrating, antioxidant-enriched serum that restores visible radiance for dull, dry skin while fighting against environmental attack.",
        point1:"Essential for improving visible signs of aging",
        point2:"Improves the appearance of dull, uneven skin tone",
        point3:"Restores hydration to dry, sun damaged skin",
        point4:"Use twice daily after cleansing, toning, and exfoliating",
        why:"RESIST Super Antioxidant Concentrate Serum contains an impressive range of plant- and vitamin-derived antioxidants that work synergistically to visibly improve the appearance of wrinkles, uneven skin tone, dryness, and vibrancy.",
        what:"Stabilized Vitamin C and peptides plus potent antioxidants combine to help preserve and rejuvenate skin’s surface and to visibly enhance firmness. This state-of-the-art serum helps minimize damage from environmental attack that cause skin to look older, while also helping to visibly improve a dull skin tone for smooth, radiant results.",
        how:"Smooth a few drops onto face, neck and eye area before moisturizing. For optimal results, use AM and PM. For daytime, follow with a broad-spectrum sunscreen rated SPF 30 or greater.",
        sideimg1:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7801f8a2-82e4-4378-b4f0-0b41a73d542b.__CR0,0,970,300_PT0_SX970_V1___.jpg",
        sideimg2:"https://m.media-amazon.com/images/S/aplus-media/sc/a0a28529-768f-446b-bf9c-e05b91e60ccd.__CR0,0,970,300_PT0_SX970_V1___.jpg",
        img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dw8d6680b6/images/views/resist-super-antioxidant-concentrate-serum-7640-L_swatch.png?sw=360&sfrm=jpg",
        youtube:"https://www.youtube.com/embed/M0VgrDtSwE4",
        star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjTzmXWUBWKS1oBgoWVDtzHXnfMGhbvjTzuVuMCBdvdmhHB9n4m8wv48KCAXG50tURw&usqp=CAU"
    },
    {
        img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/en_US/dw06cc02d5/images/products/resist-1-percent-retinol-booster-7870-L.png?sw=360&sfrm=png",
        name:"BOOSTER",
        about:"1% Retinol Booster",
        price:"$52.00",
        reviews:"102",
        star1:4,
        desc:"This lightweight, concentrated booster with 1% encapsulated retinol helps to even skin tone, renew radiance, brighten, improve the appearance of wrinkles and create a smooth complexion.",
        point1:"Pure form of retinol in a slow-release delivery system",
        point2:"Peptides restore skin’s youthful appearance",
        point3:"Fluid lotion texture visibly improves loss of firmness",
        point4:"Use alone or add to your moisturizer or serum",
        why:"1% Retinol Booster is a concentrated, pure form of retinol in a slow-release delivery system with a light fluid lotion texture. It also includes a superior assortment of potent antioxidants to help produce the most beautiful appearance for your skin imaginable.",
        what:"Improves the appearance of fine lines, wrinkles, uneven skin tone, bumps, pore size, and other visible signs of aging. Our encapsulated retinol can help to quickly bring about a more clarified, vibrant, younger-looking appearance, complete with visible refinement of the look of pores, uneven skin tone, and deep wrinkles.",
        how:"Carefully press the pump at the top of the container to dispense 2-3 drops for the face. During the day, finish with a moisturizer with SPF 30 or greater. Can be applied under the eye area, avoiding the eye itself.",
        sideimg1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAABoCAMAAAAXdXPcAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC",
        sideimg2:"https://www.paulaschoice.com/on/demandware.static/-/Library-Sites-paulachoice/default/dwf8608600/images/pdp/us_210331_mobile_pdp-panel_7870_review.jpg",
        img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwff9f4311/images/views/1-percent-retinol-booster-7870-L_spill.png?sw=360&sfrm=jpg",
        youtube:"https://www.youtube.com/embed/a8-ZX_I6seI",
        star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjTzmXWUBWKS1oBgoWVDtzHXnfMGhbvjTzuVuMCBdvdmhHB9n4m8wv48KCAXG50tURw&usqp=CAU"
    },
]


displayProd(data)
function displayProd(data){
    data.map(function(elem){
        var div=document.createElement("div");
        var div2=document.createElement("div");
        div2.style.height="220px";
        div2.style.backgroundColor="#f9f9fb"
        var div3=document.createElement("div");
        div3.style.display="flex";
        var img=document.createElement("img");
        img.src=elem.img;
        img.style.width="100%";
        img.style.height="100%";
        var name=document.createElement("p")
        name.textContent=elem.name;
        name.style.fontSize="13px";
        var about=document.createElement("p")
        about.textContent=elem.about;
        about.style.fontSize="13px"
        about.style.fontWeight="600";
        var price=document.createElement("p")
        price.textContent=elem.price;
        price.style.marginTop="24px"
        price.style.fontSize="13px"
        var star=document.createElement("img")
        star.src=elem.star;
        star.style.width="100px"
        star.style.height="20px"
        var reviews=document.createElement("p")
        reviews.textContent=elem.reviews+" "+"Reviews";
        reviews.style.fontSize="11px";
        reviews.style.fontWeight="600";
        reviews.style.marginTop="4px";
        reviews.style.marginLeft="5px";
        div2.append(img);
        div3.append(star,reviews)
        div.append(div2,name,about,price,div3)
        div.setAttribute("class","givehoverstyle")
        div.onclick=function(){
            window.location.href="product_individual.html"
        }
        document.querySelector("#Anre").append(div);


        // sending data to localStorage
        var arr=[]
        arr.push(elem)
        div.addEventListener("click",senddata);
        function senddata(){
            localStorage.setItem("paulasChoice",JSON.stringify(arr))
        }
    })
}

document.getElementById("checkout").addEventListener("click", ()=>{
    localStorage.setItem("subTotal", JSON.stringify(subtotal))
    localStorage.setItem("estTotal", JSON.stringify(estTotal))
    window.location.href = 'Shipping.html'

})


