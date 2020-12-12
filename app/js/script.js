function slidemenu(){
  var x = document.getElementById("first-navbar");
  if (x.className === "navigation-links") {
    x.className += " mobile";
  }else {
    x.className = "navigation-links";
  }
}

// Section for Image Slider
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");
let counter = 1;
let size = carouselImages[0].clientWidth;

// Start from the second image
carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)"; 
// Button event listeners
nextBtn.addEventListener("click", ()=>{
    if (counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform .4s ease-in-out";
    size = carouselImages[0].clientWidth;
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)"; 
});
prevBtn.addEventListener("click", ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform .4s ease-in-out";
    size = carouselImages[0].clientWidth;
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)"; 
});
// Add ending event listener
carouselSlide.addEventListener("transitionend", ()=>{
  if (carouselImages[counter].id === "lastclone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length-2;
    carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)"; 
  }
  if (carouselImages[counter].id === "firstclone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length-counter;
    carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)"; 
  }
});