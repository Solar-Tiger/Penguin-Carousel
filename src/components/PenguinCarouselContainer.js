import nextArrow from '../assets/images/icons/arrow_forward.svg';
import previousArrow from '../assets/images/icons/arrow_back.svg';

export default function appendPenguinCarousel(penguinsArray) {
    let currentPenguinImage = 0;

    // Create Penguin Carousel container
    document.body.appendChild(createDivContainer('penguin-carousel-container'));

    const penguinCarouselContainer = document.getElementById(
        'penguin-carousel-container'
    );

    // Create and append penguin image
    function createAndAppendPenguin() {
        penguinCarouselContainer.appendChild(
            createImage(penguinsArray[currentPenguinImage])
        );
    }

    const previous = document.createElement('img');
    const next = document.createElement('img');

    previous.src = previousArrow;
    previous.id = 'previous';

    next.src = nextArrow;
    next.id = 'next';

    createAndAppendPenguin();

    penguinCarouselContainer.append(previous, next);
}

function createDivContainer(divID) {
    const divContainer = document.createElement('div');

    divContainer.id = divID;

    return divContainer;
}

function createImage(imgSrc) {
    const image = document.createElement('img');

    image.src = imgSrc;

    return image;
}
