
/*==================================
SNIPER ZONE FX EAs
Main JavaScript
==================================*/

document.addEventListener("DOMContentLoaded",function(){

console.log("SNIPER ZONE FX EAs Loaded");

/* ==========================
Smooth Fade Animation
========================== */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach((section)=>{

observer.observe(section);

});

/* ==========================
Card Hover Effect
========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/* ==========================
Button Click Animation
========================== */

const buttons=document.querySelectorAll("button,.gold-btn,.btn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});

/* ==========================
Counter Animation
========================== */

function counter(id,end){

let obj=document.getElementById(id);

if(!obj) return;

let start=0;

let speed=25;

let timer=setInterval(()=>{

start++;

obj.innerHTML=start;

if(start>=end){

clearInterval(timer);

}

},speed);

}

counter("clients",250);

counter("downloads",1200);

counter("sales",950);

/* ==========================
Navbar Shadow
========================== */

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>60){

nav.style.boxShadow="0 0 25px rgba(0,0,0,.5)";

}else{

nav.style.boxShadow="none";

}

});

/* ==========================
Scroll To Top Button
========================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="25px";
topButton.style.bottom="25px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#FFD700";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});

function copyWallet(){

const wallet=document.getElementById("wallet");

wallet.select();

wallet.setSelectionRange(0,99999);

navigator.clipboard.writeText(wallet.value);

alert("Wallet Address Copied Successfully");

}

const ea=document.getElementById("eaSelect");

if(ea){

ea.addEventListener("change",()=>{

document.getElementById("price").value="$"+ea.value;

});

}

function submitOrder(){

const name=document.querySelector('input[placeholder="Your Name"]').value;

const email=document.querySelector('input[type="email"]').value;

const country=document.querySelector('input[placeholder="Country"]').value;

const product=document.getElementById("eaSelect").value;

const hash=document.getElementById("txhash").value;

if(name==""){

alert("Enter Your Name");

return;

}

if(email==""){

alert("Enter Email");

return;

}

if(country==""){

alert("Enter Country");

return;

}

if(product==""){

alert("Select EA");

return;

}

if(hash==""){

alert("Enter Transaction Hash");

return;

}

alert("Payment Submitted Successfully!\n\nOur system will verify your payment.");

}

function buyEA(product,price){

document.getElementById("eaSelect").value=price.replace("$","");

document.getElementById("price").value=price;

document.querySelector(".checkout").scrollIntoView({

behavior:"smooth"

});

}

/* ==========================
Animated Counters
========================== */

animateCounter("clients",250);
animateCounter("downloads",1200);
animateCounter("sales",950);

function animateCounter(id,target){

const element=document.getElementById(id);

if(!element) return;

let current=0;

const interval=setInterval(()=>{

current+=5;

if(current>=target){

current=target;

clearInterval(interval);

}

element.textContent=current;

},20);

}
