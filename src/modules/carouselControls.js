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
            moveToNextImage(
                carouselImage,
                carouselImageFramePadding,
                imageArray
            );
        } else if (e.target.classList.contains('previous-button')) {
            moveToPreviousImage(
                carouselImage,
                carouselImageFramePadding,
                imageArray
            );
        }

        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;

        updateActiveCarouselDot(carouselDotsSelected);
    });

    function moveToNextImage(carouselImg, framePadding, imgArray) {
        currentDisplayedImagePosition +=
            -carouselImg.clientWidth - framePadding;
        currentImageIndex++;

        if (currentImageIndex % imgArray.length === 0) {
            currentImageIndex = 0;
            currentDisplayedImagePosition = 0;
        }
    }

    function moveToPreviousImage(carouselImg, framePadding, imgArray) {
        currentDisplayedImagePosition += carouselImg.clientWidth + framePadding;
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imgArray.length - 1;
            currentDisplayedImagePosition = -(
                carouselImg.clientWidth * (imgArray.length - 1) +
                (imgArray.length - 1) * parseInt(framePadding)
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
