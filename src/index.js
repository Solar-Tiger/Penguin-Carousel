import './style.css';
import './reset.css';
import appendPenguinCarousel from './components/PenguinCarouselContainer';
import boltPenguin from './assets/images/displayed-penguins/bolt-penguin.webp';
import fluffalPenguin from './assets/images/displayed-penguins/fluffal-penguin.webp';

const penguinImages = [boltPenguin, fluffalPenguin];

appendPenguinCarousel(penguinImages);
