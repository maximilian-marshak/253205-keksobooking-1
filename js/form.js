import {disableFormElements} from './util.js';

const getInactiveState = () =>{
  window.addEventListener('load', () => {
    document.querySelector('.ad-form').classList.add('ad-form--disabled');
    disableFormElements('.map__filters', 'select');
    disableFormElements('.map__filters', 'fieldset');
    disableFormElements('.ad-form', 'fieldset');
  });
};

export {getInactiveState};
