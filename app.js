const sliderContainer = document.querySelector(".slider-conatiner");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-buton");
const downButton = document.querySelector(".down-buton");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `${(slidesLength - 1) * 100} vh`;
