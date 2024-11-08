import './style.css';
import './reset.css';
import appendPenguinCarousel from './components/PenguinCarouselContainer';
import boltPenguin from './assets/images/displayed-penguins/bolt-penguin.webp';
import fluffalPenguin from './assets/images/displayed-penguins/fluffal-penguin.webp';
import flyingPenguin from './assets/images/displayed-penguins/flying-penguin.webp';
import glacialBeastPolarPenguin from './assets/images/displayed-penguins/glacial-beast-polar-penguin.webp';
import guardPenguin from './assets/images/displayed-penguins/guard-penguin.webp';

const penguinImages = [
    boltPenguin,
    fluffalPenguin,
    flyingPenguin,
    glacialBeastPolarPenguin,
    guardPenguin
];

appendPenguinCarousel(penguinImages);
