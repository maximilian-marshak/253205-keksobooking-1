import {toggleFormStatus} from './util.js';

const MAX_PRICE_VALUE = 100000;
const MIN_TITLE_VALUE = 30;
const MAX_TITLE_VALUE = 100;
const TITLE_ERROR_MESSAGE = 'От 30 до 100 символов';
const PRICE_ERROR_MESSAGE = 'Максимальное значение 100000';
const ROOMS_ERROR_MESSAGE = 'Неверное количество комнат и гостей';

const addForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const onMapNotLoad = () => {
  addForm.classList.add('ad-form--disabled');
  toggleFormStatus(mapFilters, 'select', 'disabled');
  toggleFormStatus(mapFilters, 'fieldset', 'disabled');
  toggleFormStatus(addForm, 'fieldset', 'disabled');
};

const onMapLoad = () => {
  addForm.classList.remove('ad-form--disabled');
  toggleFormStatus(mapFilters, 'select');
  toggleFormStatus(mapFilters, 'fieldset');
  toggleFormStatus(addForm, 'fieldset');
};

const getInactiveState = () =>{
  window.addEventListener('load', onMapNotLoad);
};

const pristine = new Pristine(addForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
}, true);

const price = addForm.querySelector('#price');

const validateAdTitle = (value) => value.length >= MIN_TITLE_VALUE && value.length <= MAX_TITLE_VALUE;
const validateAdPrice = (value) => value < MAX_PRICE_VALUE;

const roomNumber = document.querySelector('#room_number');
const capacityGuest = document.querySelector('#capacity');
const roomOption = {
  1 : [1],
  2 : [2, 1],
  3 : [3, 2, 1],
  100 : [0]
};

const onSelectCapacityChange = () => {
  pristine.validate(capacityGuest);
};

const onSelectRoomChange = () => {
  pristine.validate(roomNumber);
};

roomNumber.addEventListener('change', onSelectCapacityChange);

capacityGuest.addEventListener('change', onSelectRoomChange);

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

const onInputChange = () => {
  const typeOptionKeys = Object.keys(typeOption);
  for (let i = 0; i < typeOptionKeys.length; i++) {
    if (typeHousing.value === typeOptionKeys[i]) {
      price.min = typeOption[typeOptionKeys[i]];
      price.placeholder = typeOption[typeOptionKeys[i]];
    }
  }
};

typeHousing.addEventListener('change', onInputChange);

const timeIn = addForm.querySelector('#timein');
const timeOut = addForm.querySelector('#timeout');

const onInputTimeInChange = (evt) => {
  timeOut.value = evt.target.value;
};

const onInputTimeOutChange = (evt) => {
  timeIn.value = evt.target.value;
};

timeIn.addEventListener('change', onInputTimeInChange);
timeOut.addEventListener('change', onInputTimeOutChange);

pristine.addValidator(addForm.querySelector('#title'), validateAdTitle, TITLE_ERROR_MESSAGE);
pristine.addValidator(price, validateAdPrice, PRICE_ERROR_MESSAGE);
pristine.addValidator(roomNumber, validateAdRooms, ROOMS_ERROR_MESSAGE);
pristine.addValidator(capacityGuest, validateGuest, ROOMS_ERROR_MESSAGE);

const onSubmitSend = () => {
  pristine.validate();
};

addForm.addEventListener('submit', onSubmitSend);

export {getInactiveState, onMapLoad, MAX_PRICE_VALUE, price, typeHousing, typeOption};
