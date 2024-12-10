let currentImageIndex = 0;
let currentDisplayedImagePosition = 0;

function carouselControls(imageArray, intervalTime = 5000) {
    const carouselImage = document.querySelector('.carousel-image-frame img');
    const carouselImageFrame = document.querySelector('.carousel-image-frame');
    const nextCarouselBtn = document.querySelector('.next-button');
    const previousCarouselBtn = document.querySelector('.previous-button');

    // Get padding of carousel image frame
    let carouselImageFramePadding = window
        .getComputedStyle(carouselImageFrame)
        .getPropertyValue('padding');

    nextCarouselBtn.addEventListener('click', () => {
        currentDisplayedImagePosition +=
            -carouselImage.clientWidth - parseInt(carouselImageFramePadding);
        currentImageIndex++;

        if (currentImageIndex % imageArray.length === 0) {
            currentImageIndex = 0;
            currentDisplayedImagePosition = 0;
        }

        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;

        updateActiveCarouselDot();
    });

    previousCarouselBtn.addEventListener('click', () => {
        currentDisplayedImagePosition +=
            carouselImage.clientWidth + parseInt(carouselImageFramePadding);
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imageArray.length - 1;
            currentDisplayedImagePosition = -(
                carouselImage.clientWidth * (imageArray.length - 1) +
                (imageArray.length - 1) * parseInt(carouselImageFramePadding)
            );
        }

        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;

        updateActiveCarouselDot();
    });
}

function updateActiveCarouselDot() {
    const carouselDotsSelected = document.querySelectorAll('.carousel-dot');
    const activeCarouselDot = document.querySelector('.carousel-dot-active');

    if (activeCarouselDot) {
        activeCarouselDot.classList.remove('carousel-dot-active');
    }

    carouselDotsSelected[currentImageIndex].classList.add(
        'carousel-dot-active'
    );
}

export { carouselControls };
