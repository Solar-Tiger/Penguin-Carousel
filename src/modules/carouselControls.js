function carouselControls(imageArray, intervalTime = 5000) {
    let currentImageIndex = 0;
    let currentDisplayedImagePosition = 0;

    const carouselContainer = document.querySelector('#carousel-controller');
    const carouselImage = document.querySelector('.carousel-image-frame img');
    const carouselImageFrame = document.querySelector('.carousel-image-frame');
    const carouselDots = document.querySelectorAll('.carousel-dot');

    // Get padding of carousel image frame and convert it to a number
    let carouselImageFramePadding = parseInt(
        window.getComputedStyle(carouselImageFrame).getPropertyValue('padding')
    );

    carouselContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('next-button')) {
            moveToNextImage();
            resetAutoAdvanceSlide();
        } else if (e.target.classList.contains('previous-button')) {
            moveToPreviousImage();
            resetAutoAdvanceSlide();
        } else if (e.target.classList.contains('carousel-dot')) {
            updateCarouselDotOnClick(e.target);
            resetAutoAdvanceSlide();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            moveToNextImage();
            resetAutoAdvanceSlide();
        } else if (e.code === 'ArrowLeft') {
            moveToPreviousImage();
            resetAutoAdvanceSlide();
        }
    });

    function moveToNextImage() {
        currentImageIndex++;

        loopImageCarousel();
        updateDisplayedImagePoistion();
        updateActiveCarouselDot(currentImageIndex);
    }

    function moveToPreviousImage() {
        currentImageIndex--;

        loopImageCarousel();
        updateDisplayedImagePoistion();
        updateActiveCarouselDot(currentImageIndex);
    }

    function updateCarouselDotOnClick(clickedDot) {
        currentImageIndex = clickedDot.dataset.carouselDot;

        updateDisplayedImagePoistion();

        updateActiveCarouselDot(clickedDot.dataset.carouselDot);
    }

    function loopImageCarousel() {
        if (currentImageIndex % imageArray.length === 0) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = imageArray.length - 1;
        }
    }

    function updateActiveCarouselDot(currentIndex) {
        const activeCarouselDot = document.querySelector(
            '.carousel-dot-active'
        );

        if (activeCarouselDot) {
            activeCarouselDot.classList.remove('carousel-dot-active');
        }

        carouselDots[currentIndex].classList.add('carousel-dot-active');
    }

    function handleImageTransition() {
        carouselImageFrame.style.transform = `translateX(${currentDisplayedImagePosition}px)`;
    }

    function updateDisplayedImagePoistion() {
        currentDisplayedImagePosition =
            (-carouselImage.clientWidth + -carouselImageFramePadding) *
            currentImageIndex;

        handleImageTransition();
    }

    // Set and reset slides auto advancing
    let autoAdvanceSlide = setInterval(moveToNextImage, intervalTime);
    let clearTimeouts;

    function resetAutoAdvanceSlide() {
        clearInterval(autoAdvanceSlide);
        clearTimeout(clearTimeouts);

        clearTimeouts = setTimeout(() => {
            autoAdvanceSlide = setInterval(moveToNextImage, intervalTime);
        }, 10000);
    }

    // Resize the image if the window size changes
    window.addEventListener('resize', updateDisplayedImagePoistion);
}

export { carouselControls };
