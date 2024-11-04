export default function createPenguinCarouselContainer(penguinsArray) {
    // Create Penguin Carousel container
    document.body.appendChild(createDivContainer('penguin-carousel-container'));

    // Create and append penguin image
    createDivContainer().appendChild(createImage(penguinsArray[0]));

    console.log(penguinsArray[0]);
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
