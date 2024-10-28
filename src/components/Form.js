import { newElement } from '../utils/createElement';

export function newForm(method, action = '') {
  const form = newElement('form');

  form.method = method;
  form.action = action;

  return form;
}
