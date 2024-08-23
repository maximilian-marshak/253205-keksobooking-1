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

const pristine = new Pristine(addForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'fieldset',
}, true);

const price = addForm.querySelector('#price');

const validateAdTitle = (value) => value.length >= 30 && value.length <= 100;
const validateAdPrice = (value) => value < 100000;

const roomNumber = document.querySelector('#room_number');
const capacityGuest = document.querySelector('#capacity');
const roomOption = {
  1 : [1],
  2 : [2, 1],
  3 : [3, 2, 1],
  100 : [0]
};

roomNumber.addEventListener('change', () => {
  pristine.validate(capacityGuest);
});

capacityGuest.addEventListener('change', () => {
  pristine.validate(roomNumber);
});

const validateGuest = () => roomOption[roomNumber.value].includes(Number(capacityGuest.value));

const validateAdRooms = () => roomOption[roomNumber.value].includes(Number(capacityGuest.value));

const typeHousing = addForm.querySelector('#type');
const typeOption = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};

const getMinPrice = () => {
  const typeOptionKeys = Object.keys(typeOption);
  for (let i = 0; i < typeOptionKeys.length; i++) {
    if (typeHousing.value === typeOptionKeys[i]) {
      price.min = typeOption[typeOptionKeys[i]];
      price.placeholder = typeOption[typeOptionKeys[i]];
    }
  }
};

typeHousing.addEventListener('change', getMinPrice);

const timeOption = {
  '12:00' : '12:00',
  '13:00' : '13:00',
  '14:00' : '14:00'
};

const timeIn = addForm.querySelector('#timein');
const timeOut = addForm.querySelector('#timeout');

const validateTimeIn = () => {
  const timeInKeys = Object.keys(timeOption);
  for (let i = 0; i < timeInKeys.length; i++){
    if (timeInKeys[i] === timeIn.value) {
      timeOut.value = timeIn.value;
    }
  }
};

const validateTimeOut = () => {
  const timeOutValues = Object.values(timeOption);
  for (let i = 0; i < timeOutValues.length; i++){
    if (timeOutValues[i] === timeOut.value) {
      timeIn.value = timeOut.value;
    }
  }
};

timeIn.addEventListener('change', validateTimeIn);
timeOut.addEventListener('change', validateTimeOut);

pristine.addValidator(addForm.querySelector('#title'), validateAdTitle, 'От 30 до 100 символов');
pristine.addValidator(price, validateAdPrice, 'Максимальное значение 100000');
pristine.addValidator(roomNumber, validateAdRooms, 'Неверное количестов комнта и гостей');
pristine.addValidator(capacityGuest, validateGuest, 'Неверное количестов комнта и гостей');

addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {getInactiveState};
