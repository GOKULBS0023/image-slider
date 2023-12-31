const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slider = document.querySelector(".slider-container");

slides.forEach((slide, index)=>{
    slide.style.left = `${index*100}%`;
});
let counter = 0;
prevBtn.addEventListener("click",()=>{
    counter--;
    carousel();
});
nextBtn.addEventListener("click",()=>{
    counter++;
    carousel();
});

function carousel(){
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else{
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "none";
