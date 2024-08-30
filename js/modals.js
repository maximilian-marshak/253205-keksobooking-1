import {SHOW_TIME} from './constants.js';
import {addForm, mapFilters, sliderElement, MAX_PRICE_VALUE} from './form.js';
import {setDefaultSlider} from './util.js';

const successModal = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorModal = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorModal.querySelector('.error__button');

const showSuccessModal = () => {
  document.body.appendChild(successModal);

  addForm.reset();
  mapFilters.reset();
  setDefaultSlider(sliderElement, 0, MAX_PRICE_VALUE);

  setTimeout(() => {
    successModal.remove();
  }, SHOW_TIME);
};

const showErrorModal = () => {
  document.body.appendChild(errorModal);
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    errorModal.remove();
  }
});

errorButton.addEventListener('click', () => {
  errorModal.remove();
});

export {showSuccessModal, showErrorModal};
