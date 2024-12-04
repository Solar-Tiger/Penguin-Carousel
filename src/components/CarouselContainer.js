import nextArrow from '../assets/images/icons/arrow_forward.svg';
import previousArrow from '../assets/images/icons/arrow_back.svg';

function createCarousel(imageArray) {
    // Create carousel container
    const carouselContainer = createContainer(
        'carousel-container',
        'carousel-controller'
    );

    document.body.appendChild(carouselContainer);

    // Create and append carousel image container
    const carouselImageContainer = createContainer('carousel-image-container');

    carouselContainer.appendChild(carouselImageContainer);

    // Create and append carousel images container
    const carouselImagesContainer = createContainer(
        'carousel-images-container'
    );

    carouselImageContainer.appendChild(carouselImagesContainer);

    // Create and append all images
    imageArray.forEach((image) => {
        const initialImage = createImageElement(image);

        carouselImagesContainer.appendChild(initialImage);
    });

    // Create and append next and previous buttons
    const previousButton = createImageElement(previousArrow, 'previous-button');
    const nextButton = createImageElement(nextArrow, 'next-button');

    carouselContainer.append(previousButton, nextButton);

    // Create dots container that show which image is selected
    const carouselDotsContainer = createContainer('carousel-dots-container');

    carouselContainer.appendChild(carouselDotsContainer);

    // Create dots for dots container using array length
    for (let i = 0; i < imageArray.length; i++) {
        const carouselDot = createContainer('carousel-dot');

        if (i === 0) carouselDot.classList.add('carousel-dot-active');

        carouselDotsContainer.appendChild(carouselDot);
    }

    nextButton.addEventListener('click', () => {
        console.log('Test');
    });
}

// Create div containers
function createContainer(containerClassName, containerIDName = '') {
    const container = document.createElement('div');
    container.className = containerClassName;
    if (containerIDName) container.id = containerIDName;
    return container;
}

// Create images
function createImageElement(src, imageClassName = '') {
    const img = document.createElement('img');
    img.src = src;
    if (imageClassName) img.className = imageClassName;
    return img;
}

export { createCarousel };
