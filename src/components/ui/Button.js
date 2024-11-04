import { newElement } from '../utils/createElement';

export function newBtn(nameOfButton = '') {
  const btn = newElement('button');

  btn.textContent = nameOfButton;

  return btn;
}
