document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".slider__track");
    const prevBtn = document.querySelector(".slider__btn--prev");
    const nextBtn = document.querySelector(".slider__btn--next");

    let index = 0;
    const totalItems = document.querySelectorAll(".slider__item").length;
    const itemWidth = document.querySelector(".slider__item").offsetWidth + 20;
    
    nextBtn.addEventListener("click", () => {
        if (index < totalItems - 1) {
            index++;
            track.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });
});