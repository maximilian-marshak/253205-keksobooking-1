import {toggleFormStatus} from './util.js';

const addForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const onOpenPage = () => {
  addForm.classList.add('ad-form--disabled');
  toggleFormStatus(mapFilters, 'select', 'disabled');
  toggleFormStatus(mapFilters, 'fieldset', 'disabled');
  toggleFormStatus(addForm, 'fieldset', 'disabled');
};

const getInactiveState = () =>{
  window.addEventListener('load', onOpenPage);
};

export {getInactiveState};
