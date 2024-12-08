let imgList = document.querySelectorAll(".imgSlide");
let counter = 0;

// Set initial positions for slides
imgList.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let imgSlide1 = () => {
    // Move all slides based on the counter value
    imgList.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

let goNext = () => {
    // Prevent counter from exceeding the number of slides
    if (counter < imgList.length - 1) {
        counter++;
        imgSlide1();
    }
};

let goPrev = () => {
    // Prevent counter from going below 0
    if (counter > 0) {
        counter--;
        imgSlide1();
    }
};
