import './style.css';
import './reset.css';
import boltPenguin from './assets/images/displayed-penguins/bolt-penguin.webp';
import fluffalPenguin from './assets/images/displayed-penguins/fluffal-penguin.webp';

const images = document.querySelectorAll('img');

console.log(images);

images[0].src = boltPenguin;
images[1].src = fluffalPenguin;
