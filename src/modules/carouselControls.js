let currentImageIndex = 0;

function carouselControls(imageArray, intervalTime = 5000) {
    const carouselController = document.querySelector('#carousel-controller');
    const displayedImage = document.querySelector('#carousel-controller img');
    const carouselDotsContainer = document.querySelector(
        '.carousel-dots-container'
    );
    const carouselDotsSelected = document.querySelectorAll('.carousel-dot');

    // Auto advance slides 1 image to show newly added penguins
    const intervalID = setInterval(
        () =>
            autoAdvanceSlide(imageArray, displayedImage, carouselDotsSelected),
        intervalTime
    );

    // Change displayed image based on which arrow is clicked
    carouselController.addEventListener('click', (e) => {
        updateDisplayedPenguin(
            e.target,
            imageArray,
            displayedImage,
            carouselDotsSelected
        );

        clearInterval(intervalID);
        startInterval(intervalID);
    });

    // Chages image when a dot is clicked and updates index, displayed image and carousel dot accordingly
    carouselDotsContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('carousel-dot')) return;

        const carouselDotIndex = Array.from(carouselDotsSelected).indexOf(
            e.target
        );

        updateDisplayedImage(displayedImage, imageArray[carouselDotIndex]);
        updateDisplayedCarouselDot(carouselDotsSelected, carouselDotIndex);
        clearInterval(intervalID);
        startInterval(intervalID);

        currentImageIndex = carouselDotIndex;
    });
}

function startInterval(myIntervalID) {
    setInterval(myIntervalID, 20000);
}

function updateDisplayedPenguin(
    target,
    imageArray,
    displayedImage,
    carouselDotArray
) {
    if (target.classList.contains('previous-button')) {
        currentImageIndex = previousSlide(currentImageIndex, imageArray.length);
        updateDisplayedCarouselDot(carouselDotArray, currentImageIndex);
    } else if (target.classList.contains('next-button')) {
        currentImageIndex = nextSlide(currentImageIndex, imageArray.length);
        updateDisplayedCarouselDot(carouselDotArray, currentImageIndex);
    }

    updateDisplayedImage(displayedImage, imageArray[currentImageIndex]);
}

function nextSlide(index, arrayLength) {
    index++;
    if (index >= arrayLength) {
        index = 0;
    }

    return index;
}

function previousSlide(index, arrayLength) {
    index--;
    if (index < 0) {
        index = arrayLength - 1;
    }

    return index;
}

function autoAdvanceSlide(imageArray, imageToUpdate, carouselDotArray) {
    currentImageIndex = nextSlide(currentImageIndex, imageArray.length);
    updateDisplayedImage(imageToUpdate, imageArray[currentImageIndex]);
    updateDisplayedCarouselDot(carouselDotArray, currentImageIndex);
}

function updateDisplayedImage(displayedImage, updatedSrc) {
    displayedImage.src = updatedSrc;
}

function updateDisplayedCarouselDot(carouselDotArray, index) {
    carouselDotArray.forEach((carouselDot) => {
        if (carouselDot.classList.contains('carousel-dot-active')) {
            carouselDot.classList.remove('carousel-dot-active');
        }
    });

    carouselDotArray[index].classList.add('carousel-dot-active');
}

export { carouselControls };
