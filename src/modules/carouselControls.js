let currentImageIndex = 0;
let currentDisplayedImagePosition = 0;

function carouselControls(imageArray, intervalTime = 5000) {
    const carouselImageFrame = document.querySelector('.carousel-image-frame');
    const nextCarouselBtn = document.querySelector('.next-button');
    const previousCarouselBtn = document.querySelector('.previous-button');
    const carouselDotsContainer = document.querySelector(
        '.carousel-dots-container'
    );
    const carouselDotsSelected = document.querySelectorAll('.carousel-dot');

    nextCarouselBtn.addEventListener('click', () => {
        currentDisplayedImagePosition += -295;

        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;
    });

    previousCarouselBtn.addEventListener('click', () => {
        currentDisplayedImagePosition += 295;

        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;
    });
}

export { carouselControls };
