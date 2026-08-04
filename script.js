/* ==========================================
HOOD STORE
Version 1.0
========================================== */


/*==========================================
CHANGE MAIN IMAGE
==========================================*/

const thumbs=document.querySelectorAll(".thumbs img");

const mainImage=document.getElementById("mainImage");

thumbs.forEach(function(img){

img.addEventListener("click",function(){

mainImage.src=this.src;

});

});


/*==========================================
FAQ
==========================================*/

const questions=document.querySelectorAll(".faq-question");

questions.forEach(function(question){

question.addEventListener("click",function(){

const answer=this.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});


/*==========================================
SIZE
==========================================*/

const sizes=document.querySelectorAll(".sizes button");

sizes.forEach(function(btn){

btn.addEventListener("click",function(){

sizes.forEach(function(item){

item.classList.remove("active");

});

this.classList.add("active");

});

});


/*==========================================
COLOR
==========================================*/

const colors=document.querySelectorAll(".color");

colors.forEach(function(btn){

btn.addEventListener("click",function(){

colors.forEach(function(item){

item.classList.remove("active");

});

this.classList.add("active");

});

});




/*==========================================
COUNTDOWN TIMER
==========================================*/

let hours = 12;
let minutes = 0;
let seconds = 0;

const timer = document.getElementById("timer");

function updateTimer() {

    if (!timer) return;

    if (seconds === 0) {

        if (minutes === 0) {

            if (hours === 0) {

                hours = 12;
                minutes = 0;
                seconds = 0;

            } else {

                hours--;
                minutes = 59;
                seconds = 59;

            }

        } else {

            minutes--;
            seconds = 59;

        }

    } else {

        seconds--;

    }

    timer.innerHTML =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

}

setInterval(updateTimer,1000);


/*==========================================
WHATSAPP ORDER
==========================================*/

const orderBtn=document.getElementById("whatsappOrder");

if(orderBtn){

orderBtn.addEventListener("click",function(e){

e.preventDefault();

const size=document.querySelector(".sizes .active");

const color=document.querySelector(".color.active");

let selectedSize="غير محدد";
let selectedColor="غير محدد";

if(size){

selectedSize=size.innerText;

}

if(color){

selectedColor=color.dataset.color;

}

const message=

`السلام عليكم

أرغب بطلب المنتج

المنتج:
بنطال رياضي نسائي

السعر:
32 ريال

اللون:
${selectedColor}

المقاس:
${selectedSize}

شكراً لكم`;

const phone="966580923866";

window.open(

"https://wa.me/"+phone+

"?text="+encodeURIComponent(message),

"_blank"

);

});

}


/*==========================================
SCROLL TO TOP
==========================================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.right="25px";

topButton.style.bottom="25px";

topButton.style.width="55px";

topButton.style.height="55px";

topButton.style.border="none";

topButton.style.borderRadius="50%";

topButton.style.background="#111";

topButton.style.color="#fff";

topButton.style.fontSize="22px";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.zIndex="9999";

window.addEventListener("scroll",function(){

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*==========================================
FADE ANIMATION
==========================================*/

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(function(section){

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

const form = document.getElementById("orderForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const city = document.getElementById("city").value;
const size = document.getElementById("size").value;
const color = document.getElementById("color").value;
const qty = document.getElementById("qty").value;
const notes = document.getElementById("notes").value;
    const location = document.getElementById("locationLink").value;

const product = "بنطال رياضي نسائي";

const message =
`طلب جديد

المنتج: ${product}

الاسم: ${name}

رقم الجوال: ${phone}

المدينة: ${city}

اللون: ${color}

المقاس: ${size}

الكمية: ${qty}

ملاحظات:
${notes}
موقع العميل:
${location}
رابط المنتج:
${window.location.href}`;

window.open(
"https://wa.me/966580923866?text=" + encodeURIComponent(message),
"_blank"
);

});

}

/*==========================================
GET CUSTOMER LOCATION
==========================================*/

const locationBtn = document.getElementById("getLocation");

if (locationBtn) {

    locationBtn.addEventListener("click", function () {

        if (!navigator.geolocation) {
            alert("متصفحك لا يدعم تحديد الموقع");
            return;
        }

        navigator.geolocation.getCurrentPosition(

            function(position) {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                document.getElementById("locationLink").value =
                    "https://maps.google.com/?q=" + lat + "," + lng;

              document.getElementById("locationSuccess").style.display = "block";
            },

            function(error) {

                alert("❌ لم يتم السماح بالموقع");

                console.log(error);

            },

            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }

        );

    });

}
