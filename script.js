// =============================
// ANIMACIONES AL HACER SCROLL
// =============================

document.addEventListener("DOMContentLoaded", function(){

const elements = document.querySelectorAll("section, .valor-card, .bio-text, .bio-image");

const observerFade = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:0.15});

elements.forEach(el=>{
el.classList.add("hidden");
observerFade.observe(el);
});

});


// =============================
// FAQ ACORDEÓN
// =============================

document.addEventListener("DOMContentLoaded", function(){

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(el=>{
if(el!==item){
el.classList.remove("active");
}
});

item.classList.toggle("active");

});

});

});




// =============================
// TOOLTIP MAPA
// =============================

document.addEventListener("DOMContentLoaded", function(){

const puntos = document.querySelectorAll(".punto");

if(puntos.length>0){

const tooltip = document.getElementById("tooltip");
const tooltipImg = document.getElementById("tooltip-img");
const tooltipText = document.getElementById("tooltip-text");

puntos.forEach(punto=>{

punto.addEventListener("mouseenter",(e)=>{

tooltip.style.display="block";
tooltipImg.src=punto.getAttribute("data-img");
tooltipText.textContent=punto.getAttribute("data-text");

tooltip.style.top=(e.pageY-150)+"px";
tooltip.style.left=(e.pageX+20)+"px";

});

punto.addEventListener("mouseleave",()=>{
tooltip.style.display="none";
});

});

}

});


// =============================
// CONTADOR DE ESTADÍSTICAS
// =============================

document.addEventListener("DOMContentLoaded", function(){

const counters = document.querySelectorAll(".counter");

const startCounter = (counter)=>{

const target = +counter.getAttribute("data-target");

let count = 0;

const speed = target/120;

const update = ()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);
requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

};

const observerCounter = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;
startCounter(counter);
observerCounter.unobserve(counter);

}

});

},{threshold:0.6});

counters.forEach(counter=>{
observerCounter.observe(counter);
});

});


// =============================
// BOTÓN VOLVER ARRIBA
// =============================

document.addEventListener("DOMContentLoaded", function(){

const botonArriba = document.getElementById("btnArriba");

if(botonArriba){

window.addEventListener("scroll",function(){

if(window.scrollY>300){
botonArriba.style.display="block";
}else{
botonArriba.style.display="none";
}

});

botonArriba.addEventListener("click",function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

});
