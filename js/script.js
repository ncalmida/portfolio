document.addEventListener("DOMContentLoaded", () => {
    // **SLIDER**
    const track = document.querySelector(".slider__track");
    const prevBtn = document.querySelector(".slider__btn--prev");
    const nextBtn = document.querySelector(".slider__btn--next");
    const items = document.querySelectorAll(".slider__item");

    let index = 0;
    const totalItems = items.length;
    
    function updateSliderPosition() {
        const itemWidth = items[0].getBoundingClientRect().width + 20;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }
    
    nextBtn.addEventListener("click", () => {
        if (index < totalItems - 1) {
            index++;
            updateSliderPosition();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSliderPosition();
        }
    });

    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    })

    track.addEventListener("touchend", (e) => {
        endX = e.changedtouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (startX - endX > 50) {
            if (index < totalItems - 1) {
                index++;
                updateSliderPosition();
            }
        } else if (endX - startX > 50) {
            if (index > 0) {
                index--;
                updateSliderPosition();
            }
        }
    }

    window.addEventListener("resize", () => {
        updateSliderPosition()
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") nextBtn.click();
        if (event.key === "ArrowLeft") prevBtn.click();
    })

});

// **MODAL**

document.addEventListener("DOMContentLoaded", () => {
    const servicio = document.querySelectorAll(".servicio");
    const modal = document.querySelector(".modal");
    const modalTexto = document.querySelector(".modal__text");
    const modalClose = document.querySelector(".modal__close");

    servicio.forEach(servicio => {
        servicio.addEventListener("click", function () {
            const descripcion = this.getAttribute("data-desc");
            modalTexto.textContent = descripcion;
            modal.style.display = "block";
        })
    })

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    })

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    })

// **MENU HAMBURGUESA**

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
    
})