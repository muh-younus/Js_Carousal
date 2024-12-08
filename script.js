let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let slider = document.querySelector(".slider");
let image = document.querySelectorAll(".image");
console.log(image.length);

let slideNumber = 1;
let length = image.length;

// Next-Slide
const nextArrow = () => {

    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}
// First-slide
const firstSlide = () => {

    slider.style.transform = `translateX(-${0}px)`;
    slideNumber = 1;


}

// Right-arrow-EventListener
rightArrow.addEventListener("click", () => {

    slideNumber < length ? nextArrow() : firstSlide();
    
});

// Left-Arrow-Function-Method

const prevArrow = () => {

    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber--;
}
//Last-slide
const lastSlide = () => {

    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;


}

leftArrow.addEventListener("click", () => {

    slideNumber  > 1 ? prevArrow() : lastSlide()
    
});
