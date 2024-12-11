function carouselControls(imageArray, intervalTime = 5000) {
    let currentImageIndex = 0;
    let currentDisplayedImagePosition = 0;

    const carouselContainer = document.querySelector('#carousel-controller');
    const carouselImage = document.querySelector('.carousel-image-frame img');
    const carouselImageFrame = document.querySelector('.carousel-image-frame');
    const carouselDotsSelected = document.querySelectorAll('.carousel-dot');

    // Get padding of carousel image frame and convert it to a number
    let carouselImageFramePadding = parseInt(
        window.getComputedStyle(carouselImageFrame).getPropertyValue('padding')
    );

    carouselContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('next-button')) {
            moveToNextImage();
        } else if (e.target.classList.contains('previous-button')) {
            moveToPreviousImage();
        }

        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;

        updateActiveCarouselDot(carouselDotsSelected);
    });

    function moveToNextImage() {
        currentDisplayedImagePosition +=
            -carouselImage.clientWidth - carouselImageFramePadding;
        currentImageIndex++;

        if (currentImageIndex % imageArray.length === 0) {
            currentImageIndex = 0;
            currentDisplayedImagePosition = 0;
        }
    }

    function moveToPreviousImage() {
        currentDisplayedImagePosition +=
            carouselImage.clientWidth + carouselImageFramePadding;
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imageArray.length - 1;
            currentDisplayedImagePosition = -(
                carouselImage.clientWidth * (imageArray.length - 1) +
                (imageArray.length - 1) * parseInt(carouselImageFramePadding)
            );
        }
    }

    function updateActiveCarouselDot(carouselDots) {
        const activeCarouselDot = document.querySelector(
            '.carousel-dot-active'
        );

        if (activeCarouselDot) {
            activeCarouselDot.classList.remove('carousel-dot-active');
        }

        carouselDots[currentImageIndex].classList.add('carousel-dot-active');
    }
}

export { carouselControls };
