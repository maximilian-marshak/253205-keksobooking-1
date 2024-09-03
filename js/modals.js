import {addForm, mapFilters, sliderElement, MAX_PRICE_VALUE} from './form.js';
import {setDefaultSlider, isEscapeKey} from './util.js';

const successModal = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorModal = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorModal.querySelector('.error__button');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successModal.remove();
    errorModal.remove();
  }
};

const addListener = () => {
  document.addEventListener('keydown', onDocumentKeydown);
};

const removeListener = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
};


const showSuccessModal = () => {
  document.body.appendChild(successModal);

  addForm.reset();
  mapFilters.reset();
  setDefaultSlider(sliderElement, 0, MAX_PRICE_VALUE);

  addListener();
};

const closeSuccesModal = () => {
  successModal.remove();
  removeListener();
};

successModal.addEventListener('click', closeSuccesModal);

const showErrorModal = () => {
  document.body.appendChild(errorModal);

  document.addEventListener('keydown', onDocumentKeydown);
};

const closeErrorModal = () => {
  errorModal.remove();
  removeListener();
};

errorButton.addEventListener('click', closeErrorModal);
errorModal.addEventListener('click', closeErrorModal);

export {showSuccessModal, showErrorModal};
