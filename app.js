const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) => {
            if (link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        
        });
    });
}


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size =  carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +  (-size * counter)  + 'px)';

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length -1  ) return; 
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' +  (-size * counter)  + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0 ) return;   
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' +  (-size * counter)  + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastclone' ){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' +  (-size * counter)  + 'px)';
    }
    if(carouselImages[counter].id === 'firstclone' ){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' +  (-size * counter)  + 'px)';
    }
});

document.getElementById('mac').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById('id-image').src = "images/macinfo.png";
});

document.getElementById('san').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById('id-image').src = "images/saninfo.png";
});

document.getElementById('tao').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById('id-image').src = "images/taoinfo.png";
});

document.getElementById('her').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
    document.getElementById('id-image').src = "images/herinfo.png";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

navSlide();
