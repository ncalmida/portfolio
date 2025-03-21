document.addEventListener("DOMContentLoaded", () => {
    // **SLIDER**
    const track = document.querySelector(".slider__track");
    const prevBtn = document.querySelector(".slider__btn--prev");
    const nextBtn = document.querySelector(".slider__btn--next");
    const items = document.querySelectorAll(".slider__item");

    let index = 0;
    const totalItems = items.length;
    
    function updateSliderPosition() {
        const itemWidth = items[0].offsetWidth + 20;
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

    window.addEventListener("resize", updateSliderPosition);

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
    
})