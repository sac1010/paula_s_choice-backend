var Aindividual=JSON.parse(localStorage.getItem("paulasChoice"));
    
    Aindividual.map(function(elem){
        var picdiv=document.createElement("div");
        picdiv.style.width="100%";
        picdiv.style.height="500px";
        var img=document.createElement("img");
        img.setAttribute("id","Apicimg")
        img.setAttribute("class","Apicimgzoom");
        img.src=elem.img;
        var name=document.createElement("p");
        name=elem.name;
        var about=document.createElement("p");
        about=elem.about;
        var star=document.createElement("img");
        star.src=elem.star;
        star.style.width="100px"
        star.style.height="20px"
        var review=document.createElement("p");
        review=elem.reviews+" "+"Reviews";
        var price=document.createElement("p");
        price=elem.price;
        var description=document.createElement("p");
        description=elem.desc;
        var point1=document.createElement("p");
        point1=elem.point1;
        var point2=document.createElement("p");
        point2=elem.point2;
        var point3=document.createElement("p");
        point3=elem.point3;
        var point4=document.createElement("p");
        point4=elem.point4;
        var why=document.createElement("p");
        why.textContent=elem.why;
        var what=document.createElement("p");
        what.textContent=elem.what;
        var how=document.createElement("p");
        how.textContent=elem.how;
        var sideimg1=document.createElement("img");
        sideimg1.src=elem.sideimg1;
        sideimg1.style.width="100%";
        var sideimg2=document.createElement("img");
        sideimg2.src=elem.sideimg2;
        sideimg2.style.width="100%";


        var SMALL1=document.createElement("img");
        SMALL1.src=elem.img;
        SMALL1.style.width="100%";
        SMALL1.style.height="100%";

        var SMALL2=document.createElement("img");
        SMALL2.src=elem.img22;
        SMALL2.style.width="100%";
        SMALL2.style.height="100%";


        var smallimg1=document.createElement("img");
        smallimg1.src=elem.img;
        smallimg1.style.width="100%";
        smallimg1.style.height="100%";
        var smallimg2=document.createElement("img");
        smallimg2.src=elem.img22;
        smallimg2.style.width="100%";
        smallimg2.style.height="100%";
        var leftarr=document.querySelector("#leftarr")
        var rightarr=document.querySelector("#rightarr")
        document.querySelector("#smallimg2").append(smallimg2)
        document.querySelector("#smallimg1").append(smallimg1)
        console.log("hello")
        smallimg2.onclick=function(){
            document.querySelector("#Apicturemain").innerHTML="";
            document.querySelector("#Apicturemain").append(SMALL2)
        }
        smallimg1.onclick=function(){
            document.querySelector("#Apicturemain").innerHTML="";
            document.querySelector("#Apicturemain").append(SMALL1)
        }
        leftarr.onclick=function(){
            document.querySelector("#Apicturemain").innerHTML="";
            document.querySelector("#Apicturemain").append(SMALL1)
        }
        rightarr.onclick=function(){
            document.querySelector("#Apicturemain").innerHTML="";
            document.querySelector("#Apicturemain").append(SMALL2)
        }

        var smallimg3=document.createElement("a")
        smallimg3.setAttribute("href",elem.youtube);
        smallimg3.setAttribute("target","_blank");
        smallimg3.width="100%";
        smallimg3.height="100%";
        smallimg3.textContent="<>"
        smallimg3.style.color="transparent"
        smallimg3.style.fontSize="50px";
        smallimg3.style.height="100%";
        document.querySelector("#smallimg3").append(smallimg3);
        
        var travelsizeoz=document.createElement("p");
            travelsizeoz.textContent=Math.ceil(Math.random()*7)+" "+"oz";
        

        
        picdiv.append(img)
        document.querySelector("#Apicturemain").append(picdiv)
        document.querySelector("#Aname").append(name)
        document.querySelector("#Aabout").append(about)
        document.querySelector("#Astar").append(star)
        document.querySelector("#Areview").append(review)
        document.querySelector("#Aprice").append(price)
        document.querySelector("#Adescription").append(description)
        document.querySelector("#Aone").append(point1)
        document.querySelector("#Atwo").append(point2)
        document.querySelector("#Athree").append(point3)
        document.querySelector("#Afour").append(point4)
        document.querySelector("#onebrief").append(why)
        document.querySelector("#twobrief").append(what)
        document.querySelector("#threebrief").append(how)
        document.querySelector("#Aoneimg").append(sideimg1)
        document.querySelector("#Atwoimg").append(sideimg2)
        document.querySelector("#Ansizebox").append(travelsizeoz)

    })









    var data=[
        {
             img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwf0fd0988/images/products/skin-perfecting-2-percent-bha-liquid-2010-L.png?sw=360&sfrm=png",
             name:"SKIN PERFECTING",
             about:"2% BHA Liquid Exfoliant",
             price:"$32.00",
             reviews:"3908",
             star1:4,
             desc:"Our #1 product worldwide + cult favorite, this gentle leave-on exfoliant with salicylic acid quickly unclogs pores, smooths wrinkles, brightens and evens out skin tone.",
             point1:"Clears & minimizes enlarged pores",
             point2:"BHA (beta hydroxy acid) sheds built-up layers of skin",
             point3:"Fluid, lightweight texture absorbs quickly",
             point4:"Use up to twice daily after cleansing & toning skin",
             desc:"2% BHA clears pores allowing 10% niacinamide to quickly improve uneven tone, minimize pores and visibly reduce wrinkles and discolorations.",
             why:"A unique leave-on formula that’s gentle enough for daily use on all skin types. Exfoliates dead skin cells while clearing pores for a more even, radiant tone, plus visibly reduces fine lines and wrinkles to reveal remarkably smoother, younger-looking skin. This exfoliant has an optimal pH range of 3.2–3.8  2021 Glamour Beauty Award Readers' Choice, Best Acne Treatment , 2020 Teen Vogue Acne Award, Best Exfoliant 2019 Women & Home Beauty Award, Best Blemish Treatment 2019 GQ Grooming Award, Best Face Products for Men",
             what:"Skin becomes dull, dry and congested when dead skin cells build up on its surface. Beta hydroxy acid (BHA, also known as salicylic acid) mimics the natural exfoliation process of younger skin by helping it shed extra layers while unclogging and clearing pores.",
             how:"Gently apply using fingers or a cotton pad over entire face and neck, including the eye area (avoid lash line and eyelids) after cleansing and toning. Do not rinse.   Start Slowly: Apply every other day and note skin's response. Then use up to twice daily. For daytime, always finish with SPF 30+. For nighttime, follow with the rest of your routine. If you have a salicylate allergy, check with your physician before using any products that contain salicylic acid. ",
             sideimg1:"https://m.media-amazon.com/images/S/aplus-media/sc/c5bffd7d-93d0-49f4-8ff8-a338a0d44a1f.__CR0,0,970,300_PT0_SX970_V1___.jpg",
             sideimg2:"https://m.media-amazon.com/images/S/aplus-media/sc/cad25933-48a5-4d70-839e-979e0de7ad86.__CR0,0,970,300_PT0_SX970_V1___.jpg",
             img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwa8eb8c65/images/views/boost-c15-super-booster-7770-L-swatch.png?sw=360&sfrm=png",
             youtube:"https://www.youtube.com/embed/Eu3xQElhix8",
             star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjTzmXWUBWKS1oBgoWVDtzHXnfMGhbvjTzuVuMCBdvdmhHB9n4m8wv48KCAXG50tURw&usqp=CAU"
         },
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
             img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/en_US/dw015fa2f3/images/products/clinical-niacinamide-20-percent-treatment-8030-L.png?sw=360&sfrm=png",
             name:"CLINICAL",
             about:"Niacinamide 20% Treatment",
             price:"$50.00",
             reviews:"373",
             star1:4,
             desc:"A highly concentrated niacinamide (vitamin B3) serum that effectively tightens and minimizes the look of sagging pores and rough bumps caused by age or sun damage.",
             point1:"Dramatically reduces the look of stretched pores",
             point2:"Helps reduce hard, clogged bumps",
             point3:"Visibly improves blotchy tone & fades post-blemish marks",
             point4:"Also reduces orange-peel texture",
             why:"This innovative serum is the first ever to contain niacinamide at a safe, effective 20% concentration. This advanced level, complemented by purslane and acetyl glucosamine, steadily smooths out rough, orange-peel texture and tenacious bumps.",
             what:"Niacinamide (vitamin B3) is a smart, multifaceted ingredient that uniquely penetrates skin’s surface to help improve the look of sagging, stretched pores. It normalizes pore function and protects from further stretching when exposed to damaging UV light for a dramatically smoother, younger-looking complexion.",
             how:"Apply a few drops of Niacinamide 20% once or twice daily after cleansing, toning, and exfoliating. At night, layer with other treatment products as needed and follow with moisturizer; during the day, finish with a sunscreen rated SPF 30 or greater.",
             sideimg1:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/d0e8c623-789a-4eee-99b7-a1d726da0f7f.__CR0,0,970,300_PT0_SX970_V1___.jpg",
             sideimg2:'https://m.media-amazon.com/images/S/aplus-media-library-service-media/e07188e0-3032-4578-b08c-11d5539b543f.__CR0,0,970,300_PT0_SX970_V1___.jpg',
             img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dw3490ecb0/images/views/clinical-niacinamide-20-percent-treatment-8030-L_lifestyle1.png?sw=360&sfrm=jpg",
             youtube:"https://www.youtube.com/embed/4D-W98LOYPU",
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
             img:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/en_US/dw0e464cbb/images/products/defense-essential-glow-moisturizer-spf-30-2230-L.png?sw=360&sfrm=png",
             name:"DEFENSE",
             about:"Essential Glow Moisturizer SPF 30",
             price:"$31.00",
             reviews:"354",
             star1:5,
             desc:"This illuminating moisturizer shields skin with all-mineral sun protection plus antioxidants to help protect against the effects of environmental damage.",
             point1:"Creates an instant, healthy glow for makeup-optional skin",
             point2:"12 antioxidants visibly diminish the signs of environment-based aging",
             point3:"Lightweight, illuminating cream",
             point4:"Apply as the last step of your morning routine",
             why:"This daytime anti-aging moisturizer combines all-mineral, broad-spectrum sun protection with licorice, kiwi, argan, niacinamide, vitamin c and other plant and vitamin-derived antioxidants specifically chosen for their ability to defend skin against air pollution and the harmful effects of blue light exposure.",
             what:"Every morning, skin faces environmental threats that chip away at its appearance. This daytime hydrator protects from UV and blue light, plus helps neutralize airborne pollutants before they cause damage. Works all day to visibly repair and brighten skin so it looks younger and more vibrant",
             how:"Apply liberally to face, neck, and eye area as the last step in your morning skincare routine.",
             sideimg1:"https://m.media-amazon.com/images/S/aplus-media/sc/b1b8d770-608c-41d2-87db-5da4964cd430.__CR0,0,970,300_PT0_SX970_V1___.jpg",
             img22:"https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwc336bf58/images/views/defense-essential-glow-moisturizer-spf-40-2230-L-swatch.png?sw=360&sfrm=png",
             youtube:"https://www.youtube.com/embed/lbRFeEiIPTI",
             sideimg2:"https://www.paulaschoice.com/on/demandware.static/-/Library-Sites-paulachoice/default/dw7b01d9e5/images/pdp/us_201113_desktop_pdp-panel_defense-collection.jpg",
             star:"https://drncvpyikhjv3.cloudfront.net/sites/126/2019/05/28170418/five-stars.png"
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
            document.querySelector("#Are").append(div);


            // sending data to localStorage
            var arr=[]
            arr.push(elem)
            div.addEventListener("click",senddata);
            function senddata(){
                localStorage.setItem("paulasChoice",JSON.stringify(arr))
            }
        })
    }

    // for adding products to bag by sachin
 document.getElementById("Aaddtobagbox").addEventListener("click", ()=>{
     let cartDataObj = JSON.parse(localStorage.getItem("paulasChoice"))
     let currentProduct = cartDataObj[0]
     let cartData = JSON.parse(localStorage.getItem("cartData")) || [] 
     cartData.push(currentProduct)
     document.getElementById("dcount").innerHTML = cartData.length
     localStorage.setItem("cartData", JSON.stringify(cartData))
     alert("product added to cart")
 })

 //ends here

    