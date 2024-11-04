import { newElement } from '../utils/createElement';

export function newInput(type) {
  const input = newElement('input');

  input.type = type;

  return input;
}
