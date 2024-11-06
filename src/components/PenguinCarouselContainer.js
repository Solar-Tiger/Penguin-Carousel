import nextArrow from '../assets/images/icons/arrow_forward.svg';
import previousArrow from '../assets/images/icons/arrow_back.svg';

export default function appendPenguinCarousel(penguinsArray) {
    let currentPenguinIndex = 0;

    // Create Penguin Carousel container
    document.body.appendChild(createDivContainer('penguin-carousel-container'));

    const penguinCarouselContainer = document.getElementById(
        'penguin-carousel-container'
    );

    // Create and append penguin image
    function createAndAppendPenguin() {
        penguinCarouselContainer.appendChild(
            createImage(penguinsArray[currentPenguinIndex])
        );
    }

    const previousButton = createImage(previousArrow);
    const nextButton = createImage(nextArrow);

    previousButton.id = 'previousButton';
    nextButton.id = 'nextButton';

    penguinCarouselContainer.append(previousButton, nextButton);

    // Add image update on next and previous buttons
    function updateDisplayedPenguin(direction, penguinArray) {
        if (
            direction.id === 'nextButton' &&
            currentPenguinIndex === penguinArray.length - 1
        ) {
            currentPenguinIndex = 0;
        } else if (
            direction.id === 'previousButton' &&
            currentPenguinIndex === 0
        ) {
            currentPenguinIndex = penguinArray.length - 1;
        } else if (direction.id === 'nextButton') {
            currentPenguinIndex++;
        } else if (direction.id === 'previousButton') {
            currentPenguinIndex--;
        }

        penguinCarouselContainer.removeChild(
            penguinCarouselContainer.lastChild
        );

        createAndAppendPenguin();
    }

    // Add event listener on container to prevent having them on separate elements
    penguinCarouselContainer.addEventListener('click', (e) => {
        if (e.target.id === 'nextButton') {
            updateDisplayedPenguin(nextButton, penguinsArray);
        } else if (e.target.id === 'previousButton') {
            updateDisplayedPenguin(previousButton, penguinsArray);
        }
    });

    // Automatically advance 1 image every 5 seconds
    function autoAdvanceCarousel() {
        updateDisplayedPenguin(nextButton, penguinsArray);
    }

    setInterval(autoAdvanceCarousel, 5000);

    createAndAppendPenguin();
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
