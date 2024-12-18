import './reset.css';
import './style.css';
import { createCarousel } from './components/CarouselContainer';
import { carouselControls } from './modules/carouselControls';
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

createCarousel(penguinImages);
carouselControls(penguinImages);
